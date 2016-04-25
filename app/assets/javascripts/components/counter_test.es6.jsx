
var addCounter = (list) => {
  return [...list, 0];
}

var removeCounter = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index+1)
  ]
}

var incrementCounter = (list, index) => {
  return [
    ...list.slice(0,index),
    list[index] + 1,
    ...list.slice(index+1)
  ]

}
