import { SET_NAVBAR_HEIGHT, UPDATE_TABBAR_CACHE } from '../constants/types';

const INIT_STATE = {
  tabPath: '/pages/home/index'
}

export default function reducer (state = INIT_STATE, {type, payload}) {
  switch (type) {
    case UPDATE_TABBAR_CACHE:
      return payload !== '/pages/add-bill/index'
        ? {
          ...state,
          tabPath: payload
        }
        : state
      break;

    default:
      return state
  }
}


