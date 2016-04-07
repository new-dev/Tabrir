angular.module('app').service('iconService', function() {

   this.getFavicon = (url) => {
       var api = "http://www.google.com/s2/favicons?domain= ";
       api += url;
       return api;
   }

});