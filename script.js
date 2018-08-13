var pokedexApp = angular.module('pokedexApp',[]);

pokedexApp.controller('pokedexCtrl', ['$scope', '$http',
    function ($scope, $http){
        $http.get('https://pokeapi.co/api/v1/pokemon/?limit=12').success(function(data){
            $scope.pokemons = data;
        });

    $scope.getInfo = function(id){
      $http.get('https://pokeapi.co/api/v1/pokemon/' + id).success(function(data){
          $scope.pokemonInfo = data;
      });
      $('#pokemon-details').css('display', 'inline-block')
      $('#pokemonPic').attr('src', 'https://pokeapi.co/media/img/'+ id +'.png')
    };

    $scope.loadMore = function(url){
      $http.get('https://pokeapi.co/' + url).success(function(data){
          $scope.pokemons.meta = data.meta
          $scope.pokemons.objects = $scope.pokemons.objects.concat(data.objects)
          
      });
    }
   }]);