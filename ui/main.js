var b=0;
var button=document.getElementById('b');
button.onclick = function f()
{
    counter=counter+1;
    var span=document.getElementById('s');
   span.innerHTML=counter.toString();
};
