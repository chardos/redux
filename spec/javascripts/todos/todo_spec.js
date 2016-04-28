
describe("Todos", function() {

  it("should be able to add a todo", function() {
    var stateBefore = []
    var action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux'
    }
    var stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      }
    ];

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter)
  });

  it('should be able to toggle a todo',
  function(){
    var stateBefore = [
      {id: 0, text: 'Learn redux', completed: false},
      {id: 1, text: 'Go shopping', completed: false}
    ]
    var action = {
      type: 'TOGGLE_TODO',
      id: 1
    }
    var stateAfter = [
      {id: 0, text: 'Learn redux', completed: false},
      {id: 1, text: 'Go shopping', completed: true}
    ]
    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter)
  })

});
