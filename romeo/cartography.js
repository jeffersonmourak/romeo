import _ from 'lodash';

class Cartography {
  constructor(routes) {
    this.routes = routes;
  }

  getRoute(routeName) {
    return _.get(this.routes, routeName);
  }

  getRouteKey(url) {
    return _.findKey(this.routes, route => route.url === url);
  }

  getURLRoute(url) {
    let stateName = this.getRouteKey(url);

    return this.getRoute(stateName);
  }

  getURL(stateName) {
    return this.getRoute(stateName).url || null
  }
}

export default Cartography;
