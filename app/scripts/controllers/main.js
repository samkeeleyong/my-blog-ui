'use strict';

/**
 * @ngdoc function
 * @name myBlogUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myBlogUiApp
 */
angular.module('myBlogUiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
