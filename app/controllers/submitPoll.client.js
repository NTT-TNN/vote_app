'use strict';

(function(){
  var submit=querySelector("#commit");
  var apiUrl = appUrl + '/api/user/poll';
  function donothing(){

  };


  submit.addEventListener('click',function(){
    ajaxFunctions.ajaxRequest('GET',apiUrl,donothing);
  })
})();
