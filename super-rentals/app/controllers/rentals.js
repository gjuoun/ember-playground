import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async filterByCity(query) {
      if (query !== '') {
        // query all rentals with city name startWith `param`
        return this.store.query('rental', { city: query })
          .then((results) => {
            return { query, results }
          });
      } else {
        return this.store.findAll('rental')
          .then((results) => {
            return { query, results }
          });
      }
    }
  }
});
