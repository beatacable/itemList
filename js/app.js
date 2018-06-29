// statistic calcululation here, using $scope(angular)

var app = angular.module("myList", []);
app.controller("myCtrl", function($scope) {
    $scope.products = [];

    $scope.addItem = function () {
        $scope.products.push($scope.addMe);

    }
    $scope.removeItem = function (x) {
        $scope.products.splice(x, 1);
    }
    function linkDownload(a, filename, content) {
      contentType =  'data:application/octet-stream,';
      uriContent = contentType + encodeURIComponent(content);
      a.setAttribute('href', uriContent);
      a.setAttribute('download', filename);
    }
    $scope.download = function(filename) {
      var a = document.createElement('a');
      linkDownload(a, filename, $scope.products);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    $scope.variance = function() {
      $scope.mean_result = undefined;
      var sum = 0;
      var m_array = $scope.inputVal.split(",");
      m_array.forEach(function(item){sum = sum+ parseInt(item)})
      $scope.mean_result = sum/m_array.length
      Math.pow(sum - mean,2);
    }
    $scope.sum = function(){
      $scope.mean_result = undefined;
      var sum = 0;
      var m_array = $scope.inputVal.split(",");
      m_array.forEach(function(item){sum= sum+ parseInt(item)})
      $scope.mean_result = sum
    }

    $scope.diff = function(){
      $scope.mean_result = undefined;
      var sum = 0;
      var m_array = $scope.inputVal.split(",");
      m_array.forEach(function(item){sum= sum- parseInt(item)})
      $scope.mean_result = sum
    }
    $scope.mean = function() {
      $scope.mean_result = undefined;
      var sum = 0;
      var m_array = $scope.inputVal.split(",");
      m_array.forEach(function(item){sum = sum+ parseInt(item)})
      $scope.mean_result = sum/m_array.length
    }
    $scope.variance = function() {
      $scope.mean_result = undefined;
      var sum = 0;
      var m_array = $scope.inputVal.split(",");
      m_array.forEach(function(item){sum = sum+ parseInt(item)})
      var mean = sum/m_array.length
      var div = Math.pow(mean ,2);
      $scope.mean_result = div/mean-1
    }
    $scope.sd = function() {
      $scope.mean_result = undefined;
      var sum = 0;
      var m_array = $scope.inputVal.split(",");
      m_array.forEach(function(item){sum = sum+ parseInt(item)})
      var mean = sum/m_array.length
      var div = Math.pow(mean ,2);
      var sd = div/mean-1
      $scope.mean_result = Math.sqrt(sd)
    }
});
