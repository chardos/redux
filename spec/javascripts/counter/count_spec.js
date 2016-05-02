describe("Counter", function() {

  it("should be able to add a new counter", function() {
    var listBefore=[];
    var listAfter=[0];

    Object.freeze(listBefore)

    expect( addCounter(listBefore) ).toEqual(listAfter);
  });

  it("should be able to remove a new counter", function() {
    var listBefore=[0,10,20,30];
    var listAfter=[0,10,30];

    Object.freeze(listBefore)

    expect( removeCounter(listBefore, 2) ).toEqual(listAfter);
  });

  it("should be able to increment a counter", function() {
    var listBefore=[4,7,8,12];
    var listAfter=[4,7,9,12];

    Object.freeze(listBefore)

    expect( incrementCounter(listBefore, 2) ).toEqual(listAfter);
  });

  it("should be able to toggle a todo", function() {
    var todoBefore={
      id: 0,
      text: 'Learn redux',
      completed: false
    }
    var todoAfter={
      id: 0,
      text: 'Learn redux',
      completed: true
    }

    Object.freeze(todoBefore)

    expect( toggleTodo(todoBefore) ).toEqual(todoAfter);
  });
});
