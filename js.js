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

var logData = function(event, data){
    console.log(event);
    console.log(data);
    alert("FRame  up before you go go");
};

for(var i = 0; i < FRAMES.length; i++ )
{
    var a = FRAMES[i];
    var copy = HTML.cloneNode(true);
    var x = (i % 13) + 1;
    var y = Math.floor(i/13) + 1;
    copy.style.backgroundPositionX = (100 * (13 - (x - 1))) + "%";
    copy.style.backgroundPositionY = (100 * ((11 % y) + 1)) + "%";
    a.suit = Math.floor(i/13);
    a.number = i % 13; 
    copy.addEventListener("click", (e)=>{ logData(e,d) } );
    document.body.append(copy);
}