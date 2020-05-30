import { observable } from 'mobx';
import { Ticket } from '../types';

const searchUrl = 'https://front-test.beta.aviasales.ru/tickets?searchId=';
const getIdUrl = 'https://front-test.beta.aviasales.ru/search';

class TicketsStore {
  @observable tickets: Ticket[] = [];
  @observable loading = false;

  constructor() {
    this.load();
  }

  async load() {
    this.loading = true;
    const searchId = await this.getSearchId();

    if (!searchId) {
      this.loading = false;
      return;
    }

    await this.loadChunc(searchId);
    this.loading = false;
  }

  async getSearchId(): Promise<string | undefined> {
    try {
      const response = await fetch(getIdUrl);
      const { searchId } = await response.json();
      return searchId;
    } catch (error) {
      return;
    }
  }

  async loadChunc(searchId: string) {
    try {
      const response = await fetch(`${searchUrl}${searchId}`);
      const { tickets, stop } = await response.json();
      this.tickets.push(...tickets);

      if (!stop) this.loadChunc(searchId);
    } catch (error) {
      this.loadChunc(searchId);
    }
  }
}

export default new TicketsStore();
