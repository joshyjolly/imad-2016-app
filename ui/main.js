
var button=document.getElementById('counter');
button.onclick = function ()
{
    var request = new XMLHttpRequest();
    request.onreadystatechange=function(){
    if(request.readystate===XMLHttpRequest.DONE){
        if (request.status===200){
            var counter=request.responseText;
    var span=document.getElementById('count');
   innerHTML.span= counter.toString();
        }
    }
    };
    request.open('GET','http://joshyjolly.imad.hasura-app.io/conter',true);
    request.send(null);
};
