'use strict';

(function () {
  var content=document.querySelector("#content");
  var apiUrl = appUrl + '/api/polls';

   function printPolls(data){

    var Obj=JSON.parse(data);
    var poll="";
    for(var i=0;i<Obj.length;++i){
      var id=Obj[i]._id;
      poll+="<button id='"+id+"'>"+Obj[i].question+"</button>"+"<hr>";
    }
    content.innerHTML=poll;

   };

   ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET',apiUrl,printPolls));

})();
