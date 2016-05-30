'use strict';

angular.module('cretaApp', [
  'cretaApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngMap',
  'btford.socket-io',
  'LocalStorageModule'
])
  .config(function ($urlRouterProvider, $locationProvider, localStorageServiceProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    localStorageServiceProvider.setPrefix('creta');
  });
