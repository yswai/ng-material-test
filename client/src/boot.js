import 'angular-material/angular-material.css!'

import _ from 'lodash'
import $ from 'jquery'
import myFunc from './my-func.js'
import angular from 'angular'
import ngMaterial from 'angular-material'
import mainModule from './main.js'

console.log( ('Booting angular ... ' + angular ? 'OK' : 'FAILED') );
console.log( ('Booting lodash ... ' + _ ? 'OK' : 'FAILED') );
console.log( ('Booting jquery ... ' + $ ? 'OK' : 'FAILED') );
console.log( ('Booting myFunc ... ' + myFunc ? 'OK' : 'FAILED') );

angular.element(document).ready(function () {
    let app = angular.module('app', [ngMaterial, mainModule.name]);
    angular.bootstrap(document, [app.name]);
});