angular.module('app').directive('pagination', function() {
  function link($scope, $elem, $attr) {
    $scope.count = 0;
    $scope.current = 1;

    function buildPagination() {
     $scope.count = new Array(parseInt($scope.totalPage));
    }

    $scope.updatePage = function(page) {
      debugger
      $scope.current = page;
    }

    $scope.$watch('totalPage', function(newVal, oldVal) {
      buildPagination();
    });
  }


  return {
    restrict: "AE",
    link: link,
    scope: {
      totalPage: "@",
      current: "="
    },
    templateUrl : 'src/js/templates/pagination.html',
  };
});