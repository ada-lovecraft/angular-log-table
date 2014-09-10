'use strict';

angular.module('angular-log-table', [])
  .config(function ($provide) {
      $provide.decorator('$log', function($delegate){
        $delegate.table = function() {
          var args = [].slice.call(arguments);
          if(window.console && window.console.table){
            console.table(args[0], args[1]);
          }
          else{
            $delegate.log(null, args);
          }
        };
        return $delegate;
      });
  });
