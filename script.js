let THENEWSAPI = "AOTJAYPkYuDSHd9buWVDNjkqQWY8rkDe172ygpTv";
//let NEWSAPI = ;
//let NEWSDATA = ;

var newspaper = angular.module("newspaper", []);

newspaper.controller("newsCtrl", function($scope, $http) {
   var url = "https://api.thenewsapi.com/v1/news/top?locale=us&language=en&domains=apnews.com&api_token=" + THENEWSAPI;
   $http.get(url)
   .then(function(response) {
      newsData = response.data;
      $scope.news1 = newsData.data;
   });
   var url = "https://api.thenewsapi.com/v1/news/top?locale=us&language=en&domains=reuters.com&api_token=" + THENEWSAPI;
   $http.get(url)
   .then(function(response) {
      newsData = response.data;
      $scope.news2 = newsData.data;
   });
   var url = "https://api.thenewsapi.com/v1/news/top?locale=us&language=en&domains=wsj.com&api_token=" + THENEWSAPI;
   $http.get(url)
   .then(function(response) {
      newsData = response.data;
      $scope.news3 = newsData.data;
   });
});

function switchFont() {
   document.getElementById("font-switch").classList.toggle("checked");
   var serifEls = document.querySelectorAll(".serif-main, .serif-h, .title")
   for (var i = 0; i < serifEls.length; i++) {
      var el = serifEls.item(i);
      console.log(el);
      el.classList.toggle("open-dyslexic");
   }
   var monoEls = document.getElementsByClassName("serif-mono");
   for (var i = 0; i < monoEls.length; i++) {
      var el = monoEls.item(i);
      console.log(el);
      el.classList.toggle("dyslexic-mono");
   }
};
