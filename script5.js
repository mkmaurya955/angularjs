var myApp=angular.module("myModule",[]);
myApp.controller("myController", function($scope){
	var employees=[
	{name:"mohan",dob:new Date('01/10/1998'),gender:'Male',salary:'38743'},
	{name:"prakash",dob:new Date('02/09/2801'),gender:'Male',salary:'37728'},
	{name:"surya",dob:new Date('2/3/4112'),gender:'female',salary:'324133'},
	{name:'mohan',dob:new Date('2/4/5322'),gender:'female',salary:'324955'}
	];

	$scope.employees=employees;
	$scope.sortColumn='name';

	$scope.sortReverse=false;

	$scope.sortData=function(column){
		$scope.sortReverse=($scope.sortColumn==Column) ? !$scope.sortReverse:false;
		$scope.sortColumn=column;
	}

	$scope.getSortClass=function(column){
		if ($scope.sortColumn==column) {
			return $sortReverse ? 'columnup':'columndown'
		}
		return '';
	}

});