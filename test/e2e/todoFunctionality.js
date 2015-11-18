/* globals casper, document */
casper.test.begin('App is setup correctly', 11, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    test.assertExists('.todo-list', 'List should exist');
    test.assertExists('.todo-form', 'Form should exist');
  });

  casper.then(function() {
    this.fill('.todo-form', {
      'todo': 'Wash the dog'
    }, true);
  });

  casper.then(function(){
    test.assertExists('li.todo-item');
    this.click('.todo-remove');
  });

  casper.then(function(){
    test.assertDoesntExist('li.todo-item');
    this.fill('.todo-form', {
      'todo': 'Eat an Apple'
    }, true);
  });

  casper.then(function() {
    this.fill('.todo-form', {
      'todo': 'Fly to Nevada'
    }, true);
  });

  casper.then(function() {
    this.fill('.todo-form', {
      'todo': 'Cheat at cards twice'
    }, true);
  });

  casper.then(function() {
    test.assertElementCount('li', 3);
    this.click('.todo-remove[data-todo-id="2"]');
  });

  casper.then(function() {
    test.assertElementCount('li', 2);
    this.click('.todo-remove[data-todo-id="4"]');
  });

  casper.then(function() {
    test.assertElementCount('li', 1);
    test.assertDoesntExist('li.todo-item--done');
    this.click('.todo-done');
  });

  casper.then(function(){
    test.assertExists('li.todo-item--done');
    test.assertElementCount('li', 1);
    this.fill('.todo-form', {
      'todo': 'r'
    }, true);
  });

  casper.then(function(){
    test.assertElementCount('li', 1);
  })

  casper.run(function() {
    test.done();
  });
});
