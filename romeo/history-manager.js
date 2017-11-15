class HistoryManager {
  constructor() {
    this.origin = location.origin;
    this.current = this.getCurrent();

    this.popStateCallbacks = [];
    window.onpopstate = this::this.onpopstate;
  }

  getCurrent() {
    return location.href.replace(this.origin, '');
  }

  setState(state) {
    history.pushState(_.omit(state, ['title', 'url', 'content']), state.title, state.url);
  }

  onpopstate() {
    _.forEach(this.popStateCallbacks, cb => cb());
  }

  subscribeHistoryChange(cb) {
    this.popStateCallbacks.push(cb);
  }
}

export default HistoryManager;
