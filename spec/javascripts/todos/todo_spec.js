
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

});
