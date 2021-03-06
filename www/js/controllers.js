angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state, $ionicModal, $ionicHistory, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      if ($scope.loginData.username === 'test' && $scope.loginData.password === 'test') {
        console.log('Credentials correct!');
        $scope.loggedIn = true;
        $ionicHistory.nextViewOptions({
          historyRoot: true
        });
        $scope.closeLogin();
        $state.go('app.navigate')
      } else {
        console.log('Wrong uname/pwd');
      }
    }, 1000);
  };

  $scope.doLogout = function() {
    console.log('Doing logout');
    $scope.loggedIn = false;
    $ionicHistory.nextViewOptions({
      historyRoot: true
    });
    $state.go('login')
  }
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.wines = [
    { title: 'Brunello di Montalcino', id: 1 },
    { title: 'Cerasuolo di Vittoria', id: 2 },
    { title: 'Refosco dal Peduncolo Rosso', id: 3 },
    { title: 'Aglianico', id: 4 },
    { title: 'Sassicaia', id: 5 },
    { title: 'La Segreta Rosso', id: 6 }
  ];
})

.controller('WineCtrl', function($scope, $stateParams) {
});
