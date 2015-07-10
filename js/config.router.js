'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/app/kajian-terbaru');
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'tpl/app.html'
              })
              .state('app.kajian-terbaru', {
                  url: '/kajian-terbaru',
                  templateUrl: 'tpl/kajian-terbaru.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }]
                  }
              })
              .state('app.habib-umar-bin-muhammad-bin-salim-bin-hafidh', {
                  url: '/habib-umar-bin-muhammad-bin-salim-bin-hafidh',
                  templateUrl: 'tpl/habib-umar-bin-muhammad-bin-salim-bin-hafidh.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }]
                  }
              })
			  .state('app.habib-ali-zainal-abidin-bin-abdurrahman-al-jufri', {
                  url: '/habib-ali-zainal-abidin-bin-abdurrahman-al-jufri',
                  templateUrl: 'tpl/habib-ali-zainal-abidin-bin-abdurrahman-al-jufri.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }]
                  }
              })
			  .state('app.habib-muhammad-bin-abdurrahman-assegaf', {
                  url: '/habib-muhammad-bin-abdurrahman-assegaf',
                  templateUrl: 'tpl/habib-muhammad-bin-abdurrahman-assegaf.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }]
                  }
              })
			  .state('app.habib-jindan-bin-novel-bin-jindan', {
                  url: '/habib-jindan-bin-novel-bin-jindan',
                  templateUrl: 'tpl/habib-jindan-bin-novel-bin-jindan.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }]
                  }
              })
			  .state('app.habib-ahmad-bin-novel-bin-jindan', {
                  url: '/habib-ahmad-bin-novel-bin-jindan',
                  templateUrl: 'tpl/habib-ahmad-bin-novel-bin-jindan.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }]
                  }
              })
			  .state('app.habib-taufiq-bin-abdul-qodir-assegaf', {
                  url: '/habib-taufiq-bin-abdul-qodir-assegaf',
                  templateUrl: 'tpl/habib-taufiq-bin-abdul-qodir-assegaf.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }]
                  }
              })
			  .state('app.habib-novel-bin-muhammad-alaydrus', {
                  url: '/habib-novel-bin-muhammad-alaydrus',
                  templateUrl: 'tpl/habib-novel-bin-muhammad-alaydrus.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }]
                  }
              })
			  .state('app.habib-munzir-bin-fuad-al-musawa', {
                  url: '/habib-munzir-bin-fuad-al-musawa',
                  templateUrl: 'tpl/habib-munzir-bin-fuad-al-musawa.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }]
                  }
              })
			  .state('app.habib-segaf-bin-hasan-baharun', {
                  url: '/habib-segaf-bin-hasan-baharun',
                  templateUrl: 'tpl/habib-segaf-bin-hasan-baharun.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }]
                  }
              })
			  .state('app.buya-yahya', {
                  url: '/buya-yahya',
                  templateUrl: 'tpl/buya-yahya.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }]
                  }
              })
      }
    ]
  );
