import { ACTION_TYPE } from "../constants/action-types"

const initialState = {
  components: []
}

export const componentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_COMPONENTS:
      return { ...state, components: action.payload }
    default:
      return state;
  }
}