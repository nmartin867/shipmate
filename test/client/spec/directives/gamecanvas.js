'use strict';

describe('Directive: gameCanvas', function () {

  // load the directive's module
  beforeEach(module('shipMateApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<game-canvas></game-canvas>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the gameCanvas directive');
  }));
});
