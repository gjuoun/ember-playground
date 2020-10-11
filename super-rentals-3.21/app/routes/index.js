import Route from '@ember/routing/route';

import {inject as service} from '@ember/service'

export default class IndexRoute extends Route {
  @service store

  async model(){
    // find data in /api/rentals.json
    return this.store.findAll('rental')
  }
}
