import _ from 'lodash';

class Cartography {
  constructor(routes) {
    this.routes = routes;
  }

  getRoute(routeName) {
    return _.get(this.routes, routeName);
  }

  getURLRoute(url) {
    let stateName = _.findKey(this.routes, route => route.url === url);

    return this.getRoute(stateName);
  }

  getURL(stateName) {
    return this.getRoute(stateName).url || null
  }
}

export default Cartography;
