#angular-log-table
Add the ability to use $log.table to display object arrays in the Chrome developer tools console

### Install
Either copy ngLogTable.js to your project, or if you're doing front-end right, use bower:
    
    $ bower install --save angular-log-table

###Usage

First, add *ngLogTable* to your module's dependencies

    angular.module('myApp', ['ngLogTable'])

Next, call $log.table from your controller with an array of objects:

    angular.module('myApp')
    .controller('MyCtrl', function($scope, $log) {
      $scope.statistics = [
        {firstName: 'John', lastName: 'Smith', age: 'Unknown' },
        {firstName: 'Amelia', lastName: 'Pond', age: 22 },
        {firstName: 'Rory', lastName: 'Williams', age: 21 }
      ];

      $log.table($scope.statistics)
    });

This will produce the following in the chrome developer console
![demo image 1](http://i.imgur.com/UDl3twL.png)

#### Plucking fields
If you'd don't want all of the fields displayed, you can pluck the required fields by passing in an array of field names as the second argument:

    $log.table($scope.statistics, ['firstName', 'lastName']);

