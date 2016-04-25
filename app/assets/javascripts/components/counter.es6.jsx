var counter = (state = 0, action) => {
  switch (action.type){
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state;
  }
}

var {createStore} = Redux; //shortcut to createStore.
var store = createStore(counter);

var render = () => {
  document.body.innerText = store.getState();
}
store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'})
})

console.log(store.getState());
