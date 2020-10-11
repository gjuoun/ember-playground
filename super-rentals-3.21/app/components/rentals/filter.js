import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let {rentals, query} = this.args;

    if (query) {
      rentals = rentals.filter(rental => {
          console.log(rental)
          let res = rental.title.includes(query)
          return res
        }
      );
    }

    return rentals;
  }
}
