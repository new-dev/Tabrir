'use strict';

angular.module('app').service('iconService', function() {

   var faviconAPI = "http://www.google.com/s2/favicons?domain=";
   this.favicon = (url) => faviconAPI += url;

});