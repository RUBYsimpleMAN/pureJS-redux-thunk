import {  INCREMENT,
          DECREMENT,
          THEME_TOGGLE,
          THEME_TOGGLE_DIMED_BUTTONS,
          THEME_TOGGLE_UNDIM_BUTTONS } from "./actionTypes";

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function dimedButtons() {
  return {
    type: THEME_TOGGLE_DIMED_BUTTONS

  }
}

export function undimButtons() {
  return {
    type: THEME_TOGGLE_UNDIM_BUTTONS
  }
}

export function asyncDecrement() {
  return function(dispatch) {
    setTimeout( () => {
      dispatch(decrement())
    }, 1300)
  }
}

export function themeToggle(newTheme) {
  return {
    type: THEME_TOGGLE,
    payload: newTheme
  }
}
