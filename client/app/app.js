'use strict';

angular.module('cretaApp', [
  'cretaApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngMap',
  'LocalStorageModule'
])
  .config(function ($urlRouterProvider, $locationProvider, localStorageServiceProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    localStorageServiceProvider.setPrefix('creta');
  });
