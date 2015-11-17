var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){

    it('should have all the necessary methods', function(){
    });
  });
});

describe('the todo.util object', function() {


  it('should have all the necessary methods', function() {
    expect(todo.util).to.have.property('trimTodoName');
    expect(todo.util).to.have.property('isValidTodoName');
    expect(todo.util).to.have.property('getUniqueId');
  });

  describe('the todo.util.trimTodoName method', function(){
    it('should return a trimmed string', function(){
      expect(todo.util.trimTodoName('  white space begone  ')).to.equal('white space begone');
    });
  });

  describe('the todo.util.isValidTodoName method', function(){
    it('should return a boolean', function(){
      assert.typeOf(todo.util.isValidTodoName('Get groceries'), 'boolean');
    });

    it('should pass valid strings', function(){
      expect(todo.util.isValidTodoName('Pick up laundry')).to.equal(true);
    });
    it('should fail invalid strings', function(){
      expect(todo.util.isValidTodoName('g')).to.not.equal(true);
    });
  });

  describe('the todo.util.getUniqueId method', function(){
    it('should return a number', function(){
      todo.util.getUniqueId().should.be.a('number');
    });

    it('should start at 1 and increment each time', function(){
      todo.util.getUniqueId().should.equal(2);
      todo.util.getUniqueId().should.equal(3);
      todo.util.getUniqueId().should.equal(4);
    });
  });

});
