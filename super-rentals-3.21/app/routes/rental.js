import Route from '@ember/routing/route';

import {inject as service} from '@ember/service'

export default class IndexRoute extends Route {
  @service store

  async model(params){
    // find data in /api/rentals/:rental_id.json
    return this.store.find('rental', params.rental_id)
  }
}
