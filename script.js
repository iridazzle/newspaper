let THENEWSAPI = "AOTJAYPkYuDSHd9buWVDNjkqQWY8rkDe172ygpTv";
//let NEWSAPI = ;
//let NEWSDATA = ;

var newspaper = angular.module("newspaper", []);

newspaper.controller("newsCtrl", function($scope, $http) {
   var url = "https://api.thenewsapi.com/v1/news/all?api_token=" + THENEWSAPI + "&language=en";
   getNews(url);
   $scope.call = function() {
      newUrl = "https://api.thenewsapi.com/v1/news/all?api_token=" + THENEWSAPI + "&language=" + $scope.lang;
      $http.get(newUrl)
      .then(function(response) {
         newsData = response.data;
         $scope.news = newsData.data;
         $scope.error = "";
      }, function(err) {
         console.log(err);
         getNews("https://api.thenewsapi.com/v1/news/all?api_token=" + THENEWSAPI + "&language=en");
      });
   };

   function getNews(url) {
      $http.get(url)
      .then(function(response) {
         newsData = response.data;
         $scope.news = newsData.data;
      });
   };
});