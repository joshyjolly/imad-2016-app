
var button=document.getElementById('bt');
var b=0;
button.onclick = function ()
{
    b=b+1;
    var span=document.getElementById('st');
   span.innerHTML=b.toString();
};
