import { computed } from 'mobx';

import filtersStore from './filters';
import sort from './sort';
import ticketsStore from './tickets';
import { Ticket } from '../types';

const compareByPrice = (a: Ticket, b: Ticket) => a.price - b.price;

const compareByDuration = (a: Ticket, b: Ticket) => {
  const aDuration = a.segments[0].duration + a.segments[1].duration;
  const bDuration = b.segments[0].duration + b.segments[1].duration;

  return aDuration - bDuration;
};

class Store {
  filtersStore = filtersStore;
  sort = sort;
  ticketsStore = ticketsStore;

  @computed get showedTickets() {
    const tickets: Ticket[] = [];

    filtersStore.filters.forEach(filter => {
      const filtered = this.filterTickets(filter, this.ticketsStore.tickets);

      tickets.push(...filtered);
    });

    const result = Array.from(new Set(tickets));
    const comparator = this.sort.sortType === 'price' ? compareByPrice : compareByDuration;
    result.sort(comparator);

    return result;
  }

  get loading() {
    return this.showedTickets.length < 5 && ticketsStore.loading;
  }

  filterTickets(filter: string, tickets: Ticket[]): Ticket[] {
    switch (filter) {
      case 'all':
        return tickets;

      case 'zero':
        return this.filterByStops(0, tickets);

      case 'one':
        return this.filterByStops(1, tickets);

      case 'two':
        return this.filterByStops(2, tickets);

      case 'three':
        return this.filterByStops(3, tickets);

      default:
        return [];
    }
  }

  filterByStops(stops: number, tickets: Ticket[]): Ticket[] {
    return tickets
      .filter(({ segments }) => segments[0].stops.length === stops ||
        segments[1].stops.length === stops);
  }


}

export default new Store();