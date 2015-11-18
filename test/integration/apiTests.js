describe('API integration', function(){
  var server, setupStub, JSONresponse;


  before(function(){
    setupStub = sinon.stub(todo, 'setup');
    server = sinon.fakeServer.create();
  });

  after(function(){
    server.restore();
    setupStub.restore();
  });

  it('todo.setup receives an array of todos when todo.init is called', function () {
    JSONresponse = JSON.stringify({todos: [{name: 'Walk the dog', done: false}, {name:'Cook Dinner', done: false}, {name:'Begin Testify', done:true}]});
    // server.respondWith("GET", "/todos",
    //         [200, { "Content-Type": "application/json" },
    //          JSONresponse]);

    server.respondWith(JSONresponse);
    todo.init();
    server.respond();

    expect(setupStub.called).to.equal(true);
    expect(setupStub.args[0][0]).to.deep.equal(JSON.parse(JSONresponse).todos);

  });
});
