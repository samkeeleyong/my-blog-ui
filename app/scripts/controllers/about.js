'use strict';

/**
 * @ngdoc function
 * @name myBlogUiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myBlogUiApp
 */
angular.module('myBlogUiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
