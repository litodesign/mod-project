'use strict';

describe('Controller: ForgotpassCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ForgotpassCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForgotpassCtrl = $controller('ForgotpassCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
