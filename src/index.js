import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from './redux/rootReducer'
import { increment, decrement, asyncDecrement, themeToggle } from './redux/actions'
import './styles.css'

const varCounterOutputField = document.getElementById('idcounteroutputfield')
const varButtonPlus         = document.getElementById('idbuttonplus')
const varButtonMinus        = document.getElementById('idbuttonminus')
const varButtonAsync        = document.getElementById('idbuttonasync')
const varButtonTheme        = document.getElementById('idbuttontheme')

const store = createStore(
  rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

varButtonPlus.addEventListener('click', () => {
  store.dispatch(increment())
})

varButtonMinus.addEventListener('click', () => {
  store.dispatch(decrement())
})

varButtonAsync.addEventListener('click', () => {
  store.dispatch(asyncDecrement())
})


varButtonTheme.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
  store.dispatch(themeToggle(newTheme))
})

store.subscribe( () => {
  const state = store.getState()
  varCounterOutputField.textContent = state.countr
  document.body.className = state.theme.value
})

store.dispatch({type: 'UNEXIST_ACTIONTYPE'})





// let state = 12

// function render() {
//   varCounterOutputField.textContent = state.toString()
// }

// varButtonPlus.addEventListener('click', () => {
//   state++
//   render()
// })

// varButtonMinus.addEventListener('click', () => {
//   state--
//   render()
// })

// varButtonAsync.addEventListener('click', () => {
//   setTimeout( () => {
//     state--
//     render()
//   }, 2000)
// })

// varButtonTheme.addEventListener('click', () => {
// document.body.classList.toggle('dark')
// })

// render()
