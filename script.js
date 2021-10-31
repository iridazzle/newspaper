let THENEWSAPI = "itV4cbFUXsuNfzGubDIN2nGnaOPFxs6H0Pl0Cxc0";

var newspaper = angular.module("newspaper", []);

newspaper.controller("newsCtrl", function($scope, $http) {
   var url1 = "https://api.thenewsapi.com/v1/news/top?locale=us&language=en&domains=apnews.com&page=1&api_token=" + THENEWSAPI;
   $http.get(url1)
   .then(function(response) {
      newsData = response.data;
      $scope.news1 = newsData.data;
   });
   var url2 = "https://api.thenewsapi.com/v1/news/top?locale=us&language=en&domains=apnews.com&page=2&api_token=" + THENEWSAPI;
   $http.get(url2)
   .then(function(response) {
      newsData = response.data;
      $scope.news2 = newsData.data;
   });
   var url3 = "https://api.thenewsapi.com/v1/news/top?locale=us&language=en&domains=apnews.com&page=3&api_token=" + THENEWSAPI;
   $http.get(url3)
   .then(function(response) {
      newsData = response.data;
      $scope.news3 = newsData.data;
   });
   /*
   var url4 = "https://api.thenewsapi.com/v1/news/top?locale=us&language=en&domains=apnews.com&page=4&api_token=" + THENEWSAPI;
   $http.get(url4)
   .then(function(response) {
      newsData = response.data;
      $scope.news4 = newsData.data;
   });
   var url5 = "https://api.thenewsapi.com/v1/news/top?locale=us&language=en&domains=apnews.com&page=5&api_token=" + THENEWSAPI;
   $http.get(url5)
   .then(function(response) {
      newsData = response.data;
      $scope.news5 = newsData.data;
   });
   var url5 = "https://api.thenewsapi.com/v1/news/top?locale=us&language=en&domains=apnews.com&page=5&api_token=" + THENEWSAPI;
   $http.get(url5)
   .then(function(response) {
      newsData = response.data;
      $scope.news6 = newsData.data;
   });
   var url6 = "https://api.thenewsapi.com/v1/news/top?locale=us&language=en&domains=apnews.com&page=6&api_token=" + THENEWSAPI;
   $http.get(url6)
   .then(function(response) {
      newsData = response.data;
      $scope.news7 = newsData.data;
   });
   var url7 = "https://api.thenewsapi.com/v1/news/top?locale=us&language=en&domains=apnews.com&page=7&api_token=" + THENEWSAPI;
   $http.get(url7)
   .then(function(response) {
      newsData = response.data;
      $scope.news7 = newsData.data;
   });
   */
});

function switchFont() {
   document.getElementById("font-switch").classList.toggle("checked");
   document.documentElement.classList.toggle("open-dyslexic");
};

function switchColor() {
   document.getElementById("color-switch").classList.toggle("checked");
   document.documentElement.classList.toggle("dark");
}

setInterval(function() {
   var d = new Date();
   var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   var day = weekday[d.getUTCDay()];
   var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   var mon = month[d.getUTCMonth()];
   var date = d.getUTCDate();
   var year = d.getUTCFullYear();
   document.getElementById("date").innerHTML = day + ", " + mon + " " + date + ", " + year;
   var hour = String(d.getUTCHours()).padStart(2, "0");
   var min = String(d.getUTCMinutes()).padStart(2, "0");
   var sec = String(d.getUTCSeconds()).padStart(2, "0");
   document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec + " UTC";
}, 1000);