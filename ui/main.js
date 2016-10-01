
 function f()
{
    var request = new XMLHttpRequest();
    request.onreadystatechange=function(){
    if(request.readystate===XMLHttpRequest.DONE){
        if (request.status===200){
            var counter=request.responseText;
    return(counter.toString());
        }
    }
    };
    request.open('GET','http://joshyjolly.imad.hasura-app.io/conter',true);
    request.send(null);
}
