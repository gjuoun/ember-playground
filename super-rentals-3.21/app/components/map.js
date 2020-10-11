import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment'

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default class MapComponent extends Component {

  get token() {
    return encodeURIComponent(ENV.mapbox.accessToken);
  }

  // generate src attribute depending on the arguments of <Image> component `this.args`
  get src() {
    let { lng, lat, width, height, zoom } = this.args;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions  = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }


}
