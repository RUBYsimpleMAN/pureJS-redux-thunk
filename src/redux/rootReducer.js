import { INCREMENT, DECREMENT, THEME_TOGGLE } from "./actionTypes"
import { combineReducers } from "redux"

function countrReducer(state = 42, action) {
  if (action.type === INCREMENT ) {
    return state + 1
  } else
  if (action.type === DECREMENT) {
    return state - 1
  }

  // default
  return state
}

const iniThemeState = { value: 'light' }

function themeReducer(state = iniThemeState, action) {
  switch (action.type) {
    case THEME_TOGGLE: return {...state, value: action.payload}
    default: return state
  }
}

export const rootReducer = combineReducers({
  countr: countrReducer,
  theme:  themeReducer
})

