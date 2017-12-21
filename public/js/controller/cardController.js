phonecatApp.controller('cardController', ['$scope', function($scope) {
  {
  $scope.cards = [
    {
      name: '1',
      img:"https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg"
    }, {
      name: '2',
      img:"https://static.pexels.com/photos/53957/striped-core-butterflies-butterfly-brown-53957.jpeg"
    }, {
      name: '3',
      img:"https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg"
    }, {
      name: '4',
      img:"https://static.pexels.com/photos/53957/striped-core-butterflies-butterfly-brown-53957.jpeg"
    },{
      name: '5',
      img:"https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg"
    }, {
      name: '6',
        img:"https://static.pexels.com/photos/53957/striped-core-butterflies-butterfly-brown-53957.jpeg"
    }, {
      name: '7',
      img:"https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg"
    }, {
      name: '8',
        img:"https://static.pexels.com/photos/53957/striped-core-butterflies-butterfly-brown-53957.jpeg"
    }, {
      name: '9',
      img:"https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg"
    }, {
      name: '10',
      img:"https://static.pexels.com/photos/53957/striped-core-butterflies-butterfly-brown-53957.jpeg"
    }
  ];
}

}]).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});;
