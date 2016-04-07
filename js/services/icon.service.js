angular.module('app').service('iconService', function() {

   var faviconAPI = "http://www.google.com/s2/favicons?domain=";
   this.getFavicon = (url) => faviconAPI += url;

});