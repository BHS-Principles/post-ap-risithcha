var FRAMES = [
    {}, 
    {},
    {},
    {}, 
    {},
    {},
    {}, 
    {},
    {},
    {}, 
    {},
    {},
    {}, 
    {},
    {},
    {}, 
    {},
    {},
    {}, 
    {},
    {},
    {}, 
    {},
    {},
    {}, 
    {},
    {},
    {}, 
    {},
    {},
    {}, 
    {},
    {},
    {}, 
    {},
    {},
    {}, 
    {},
    {},
    {}, 
    {},
    {},
    {}, 
    {},
    {},
    {}, 
    {},
    {},
    {}, 
    {},
    {},
    {}
];

var HTML = document.querySelector(".card");

var doSomething = function(event, data){
    console.log(event);
    console.log(data);
    alert("FRame  up before you go go");
};

for(var count = 0; count < FRAMES.length; count++ )
{
    var d = FRAMES[count];
    var copy = HTML.cloneNode(true);
    var x = (count % 13) + 1;
    var y = Math.floor(count/13) + 1;
    copy.style.backgroundPositionX = (100 * (13 - (x - 1))) + "%";
    copy.style.backgroundPositionY = (100 * ((11 % y) + 1)) + "%";
    d.suit = Math.floor(count/13);
    d.number = count % 13; 
    copy.addEventListener("click", (e)=>{ doSomething(e,d) } );
    document.body.append(copy);
}