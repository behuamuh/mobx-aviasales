import { observable, computed } from 'mobx';

class FiltersStore {
  @observable fields: Record<string, boolean> = {
    all: true,
    zero: false,
    one: false,
    two: false,
    three: false,
  }

  @computed get filters(): string[] {
    return Object.keys(this.fields)
      .filter(field => this.fields[field]);
  }
}

export default new FiltersStore();
