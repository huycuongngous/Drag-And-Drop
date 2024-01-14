import { ACTION_TYPE } from "../constants/action-types"

export const setComponents = (components) => {
  return {
    type: ACTION_TYPE.SET_COMPONENTS,
    payload: components
  }
} 
