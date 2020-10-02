import { combineReducers } from "redux"

import {  INCREMENT,
          DECREMENT,
          THEME_TOGGLE,
          THEME_TOGGLE_DIMED_BUTTONS,
          THEME_TOGGLE_UNDIM_BUTTONS } from "./actionTypes"

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

const iniThemeState = { value: 'light',
                        buttonsDimField: false }

function themeReducer(state = iniThemeState, action) {
  switch (action.type) {
    case THEME_TOGGLE: return {...state, value: action.payload}

    case THEME_TOGGLE_DIMED_BUTTONS: return {...state, buttonsDimField: true }
    case THEME_TOGGLE_UNDIM_BUTTONS: return {...state, buttonsDimField: false}

    default: return state
  }
}

export const rootReducer = combineReducers({
  countr: countrReducer,
  theme:  themeReducer
})

