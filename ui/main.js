
var button=document.getElementById('bt');
var bt=0;
button.onclick = function ()
{
    var request = new XMLHttpRequest();
    request.onreadystatechange=function(){
    if(request.readystate===XMLHttpRequest.DONE){
        if (request.status===200){
            var counter=request.responseText;
    var span=document.getElementById('st');
   span.innerHTML= bt.toString();
        }
    }
    };
    request.open('GET','http://joshyjolly.imad.hasura-app.io/counter',true);
    request.send(null);
};
