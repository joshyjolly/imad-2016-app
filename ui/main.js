var b=0;
alert();
var button=document.getElementById('b');
button.onclick=function()
{
    counter=counter+1;
    var span=document.getElementById('s');
   span.innerHTML=b.toString();
};
