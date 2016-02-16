/**
 * attach services to this module
 * if you get 'unknown {x}Provider' errors from angular, be sure they are
 * properly referenced in one of the module dependencies in the array.
 * below, you can see we bring in our services and constants modules 
 * which avails each service of, for example, the `config` constants object.
 **/
define([
    './loginService'
    ,'./basicDetService'
    ,'./dashboardService'
    ,'./signupService'
    ,'./SchemaGeneratorService'
    ,'./keyBoardService'
], function (loginService,basicDetService,dashboardService,signupService,SchemaGeneratorService,keyBoardService) {
    'use strict';

    console.log(angular);

    var services= angular.module('services', ['ngRoute','ngResource']);
        services.factory("loginService",loginService);
        services.factory("dashboardService",dashboardService);
        services.factory("basicDetService",basicDetService);
        services.factory("signupService",signupService);
        services.factory("SchemaGeneratorService",SchemaGeneratorService);
        services.factory("keyBoardService",keyBoardService);
  

    return services;
});
