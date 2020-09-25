import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // url starts with `/api`
  namespace = 'api'

  buildURL(...args){
    // URL: /api/rentals
    // becomes: /api/rentals.json

    return `${super.buildURL(...args)}.json`
  }
}
