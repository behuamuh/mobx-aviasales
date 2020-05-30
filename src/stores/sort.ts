import { observable } from 'mobx';

const sortStore = observable({
  sortType: 'price',
})

export default sortStore;
