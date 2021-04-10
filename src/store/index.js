import { createStore as _createStore } from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export function createStore() {
  return _createStore({
    state: () => state,
    mutations,
    actions,
    getters,
  });
}
