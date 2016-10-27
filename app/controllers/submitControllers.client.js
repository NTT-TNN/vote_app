'use strict';

(function (){
  var poll=querySelector("#createpoll");
  var apiUrl = appUrl + '/api/polls';
  var buttonSubmit=querySelector("#commit");

buttonSubmit.addEventListener('click',function(){
  ajaxFunctions.ajaxRequest('POST',apiUrl,function(){
    ajaxFunctions.ajaxRequest('GET',apiUrl,updatepolls);
  })

},false);

})();
