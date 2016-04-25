
var addCount = (list) => {
  list.push(0);
  return list;
}

var testAddCounter = () => {
  var listBefore=[];
  var listAfter=[0];

  expect(
    addCounter(listBefore).toEqual(listAfter)
  )
}


testAddCounter();
console.log('All tests passed');
