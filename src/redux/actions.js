import { INCREMENT, DECREMENT, THEME_TOGGLE } from "./actionTypes";

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
