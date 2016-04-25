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
var Counter=({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

var {createStore} = Redux; //shortcut to createStore.
var store = createStore(counter);

var render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() =>
        store.dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() =>
        store.dispatch({
          type: 'DECREMENT'
        })
      }

    />,
    document.getElementById('root')
  )
}
store.subscribe(render);
render();


console.log(store.getState());
