
var button=document.getElementById('bt');
var bt=0;
button.onclick = function ()
{
    bt=bt+1;
    var span=document.getElementById('st');
   span.innerHTML=bt;
};
