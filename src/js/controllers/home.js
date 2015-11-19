angular.module('app').controller('home', ['API', function(API) {
  API.getData('feedurllist.cms')
}])