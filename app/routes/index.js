import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = [
  "Condo",
  "Townhouse",
  "Apartment"
]

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('http://localhost:4200/api/rentals.json')
    let {data} = await response.json()

    let result = data.map((model) => {
      let {attributes} = model
      let type

      if(COMMUNITY_CATEGORIES.includes(attributes.category)){
        type = "Community"
      }else{
        type = "Standalone"
      }

      return {type, ...attributes}
    })
    console.log(result)
    return result
  }
}
