import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',
  // filter: `filterByCity` action in `rentals.js` controller

  init() {
    this._super(...arguments);
    this.filter('').then((data) =>
      this.set('results', data.results))
  },

  actions: {
    handleFilterEntry() {
      let input = this.value;
      let filterAction = this.filter;

      // if user is typing... trigger filterAction
      filterAction(input)
        .then((data) => {
          // returns, when results
          if (data.query === this.value) {
            this.set('results', data.results)
          }
        })

    }
  }
});
