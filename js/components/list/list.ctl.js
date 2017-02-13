(function(){

'use strict';
angular.module(appObj.id).controller('listCtl',listCtl)


listCtl.$inject = ['$scope','listSrv','$filter'];

function listCtl($scope,listSrv,$filter){





    
    


	listSrv.getList().success(function (data){
		$scope.data = data.DealerEmployeeList;
		console.log("userlist",data.DealerEmployeeList)


//sto method one
            
//     $scope.viewby = 10;
//   $scope.totalItems = $scope.data.length;
//   $scope.currentPage = 4;
//   $scope.itemsPerPage = $scope.viewby;
//   $scope.maxSize = 10; //Number of pager buttons to show

//   $scope.setPage = function (pageNo) {
//     $scope.currentPage = pageNo;
//   };

//   $scope.pageChanged = function() {
//     console.log('Page changed to: ' + $scope.currentPage);
//   };

// $scope.setItemsPerPage = function(num) {
//   $scope.itemsPerPage = num;
//   $scope.currentPage = 15; //reset to first paghe
// }


// eno of method 1

  $scope.viewby = 5;
  $scope.totalItems = $scope.data.length;
  $scope.currentPage = 1;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 50; //Number of pager buttons to show

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    console.log('Page changed to: ' + $scope.currentPage);
  };

$scope.setItemsPerPage = function(num) {
  $scope.itemsPerPage = num;
  $scope.currentPage = 15; //reset to first paghe
}



	})


}



})();







