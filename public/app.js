var phonecatApp = angular.module('phonecatApp', ['ngRoute','ngMaterial']);
angular.module('phonecatApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
    //  $locationProvider.hashPrefix('!');

      $routeProvider.
      when('/buttons', {
           template: '<button-list></button-list>'
         }).

        when('/cards',{
          template:'<phone-list></phone-list>'
        }).
        otherwise('/buttons');
    //     when('/phones', {
    //       template: '<phone-list></phone-list>'
    //     }).
    //   when('/phones/:phoneId', {
    //       template: '<phone-detail></phone-detail>'
    //     }).
    //     when('/phones/:datepicker', {
    //       template: '<date-picker></date-picker>'
    //     }).
    //     otherwise('/phones');
    // }


  }
]);
