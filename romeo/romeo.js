import { createStore } from 'redux';
import _ from 'lodash';

import HistoryManager from './history-manager';
import Cartography from './cartography';
import DefaultComponent from './default-component.jsx';
import LinkComponent from './link-component.jsx';

class Romeo {
  constructor(cartography) {
    this.historyManager = new HistoryManager();
    this.cartography = cartography

    this.store = createStore(this::this.reducer);

    this.historyManager.subscribeHistoryChange(this::this.stateRecovery)
  }

  stateRecovery() {
    let to = this.historyManager.getCurrent();

    return this.store.dispatch({ type: 'ROMEO_NAV_URL', to });
  }

  reducer(state, action) {
    let current;

    switch (action.type) {
      case 'ROMEO_NAV':
        current = this.cartography.getRoute(action.to); break;
      case 'ROMEO_NAV_URL':
        current = this.cartography.getURLRoute(action.to); break;
      default:
        current = this.cartography.getURLRoute(this.historyManager.getCurrent()); break;
    }

    document.title = current.title;

    return Object.assign({}, state, { current });
  }

  subscribe(cb) {
    return this.store.subscribe(cb);
  }

  navigate(to) {
    this.historyManager.setState(this.cartography.getRoute(to));

    return this.store.dispatch({ type: 'ROMEO_NAV', to });
  }

  getCurrent() {
    return this.store.getState().current;
  }
}

export {
  Cartography,
  DefaultComponent as RomeoWrapper,
  LinkComponent as Link,
  Romeo as default
};
