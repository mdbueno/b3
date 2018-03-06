'use strict';
/**
 * @ngdoc function
 * @name b3.controller:menuCtrl
 * @description
 * # menuCtrl
 * Controller of the b3
 */
angular.module('b3')
  .controller('menuCtrl', function (webDevSW) {
    var vm = this;
    let filmesData = webDevSW.getFilmes();
    vm.filmes=[];
    vm.filmes = webDevSW.getFilmes();
    // [
    //   {
    //     'title':'HTML5 Boilerplate'
    //   },
    //   {'title':'AngularJS'},
    //   {'title':'Karma'}
    // ]; 
    
  });
  
  