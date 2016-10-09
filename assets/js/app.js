var phoneBook = angular.module('phoneBook', []);

phoneBook.controller('peopleController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
  $scope.loading = true;
  $scope.people = [];
  $scope.editView = false;
  $scope.personToEdit = {};
  $scope.personForm = {
    name: null,
    company: null
  };
  $scope.numberForm = {
    number: null,
    label: null
  };

  $scope.formReset = function() {
    $scope.personToEdit = {};
    $scope.personForm.name = null;
    $scope.personForm.company = null;
    $scope.numberForm.number = null;
    $scope.numberForm.label = null;
  };

  $scope.getAllPeople = function() {
    $scope.editView = false;
    $scope.loading = true;

    $scope.formReset();

    $http({
      method: 'GET',
      url: '/person'
    }).then(function success(response) {
      $scope.people = response.data;
      $scope.loading = false;
    });
  };

  $scope.addPerson = function() {
    $scope.loading = true;

    $http({
      method: 'POST',
      url: '/person',
      data: {
        name: $scope.personForm.name,
        company: $scope.personForm.company
      }
    }).then(function() {
      $scope.getAllPeople();
      toastr.success('Your contact was added successfully!');
    }, function(error) {
      console.error(error);
      toastr.error('There was a problem adding your contact.');
    });
  };

  $scope.deletePerson = function(id) {
    $scope.loading = true;

    $http({
      method: 'DELETE',
      url: '/person/' + id
    }).then(function() {
      $scope.getAllPeople();
      toastr.success('Your contact was deleted successfully!');
    }, function(error) {
      console.error(error);
      toastr.error('There was a problem deleting your contact.');
    });
  };

  $scope.showEdit = function(id) {
    $scope.loading = true;
    $scope.editView = true;

    $scope.formReset();

    $http({
      method: 'GET',
      url: '/person/' + id
    }).then(function success(response) {
      $scope.personToEdit = response.data;
      $scope.loading = false;
    });
  };

  $scope.addNumber = function(personId) {
    $scope.loading = true;
    var id = personId;

    var data = {
      person: personId,
      phoneNumber: $scope.numberForm.number
    };

    if ($scope.numberForm.label) {
      data.label = $scope.numberForm.label;
    }

    $http({
      method: 'POST',
      url: '/phoneNumber',
      data: data
    }).then(function(createdNumber) {
      toastr.success('Your number was added successfully!');
      $scope.showEdit(id);
    }, function(error) {
      console.error(error);
      toastr.error('There was a problem adding your number.');
    });
  };

  $scope.deleteNumber = function(personId, numberId) {
    $scope.loading = true;
    var id = personId;

    $http({
      method: 'DELETE',
      url: '/phoneNumber/' + numberId
    }).then(function(createdNumber) {
      toastr.success('Your number was deleted successfully!');
      $scope.showEdit(id);
    }, function(error) {
      console.error(error);
      toastr.error('There was a problem deleting your number.');
    });
  };
}]);
