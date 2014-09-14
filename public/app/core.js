angular.module('wrtc101', [])

  .controller('moduleListCtrl', function($scope){
    $scope.contentItems = [
      {
        name:"getUserMedia()",
        description:"Getting stuff from the user's hardware",
        url:"views/getusermedia.html"
      },
      {
        name:"Stream",
        description:"Starting a data stream"
      }
    ];
  })
