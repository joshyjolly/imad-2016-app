
var button=document.getElementById('b');
var b=0;
button.onclick = function ()
{
    b=b+1;
    var span=document.getElementById('s');
   span.innerHTML=b.toString();
};
