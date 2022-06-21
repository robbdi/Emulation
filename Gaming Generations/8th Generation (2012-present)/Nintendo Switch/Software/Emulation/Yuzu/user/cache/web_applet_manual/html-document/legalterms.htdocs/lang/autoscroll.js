var currentpos,timer;
function initialize()
{
    timer=setInterval("scrollwindow()",10);
}
function sc()
{
    clearInterval(timer);
}
function scrollwindow()
{
    currentpos=document.body.scrollTop;  
    currentpos+=3;
    window.scroll(0,currentpos,'smooth');
    if (currentpos != document.body.scrollTop)
        window.scroll(0,0);
}
// invalidate Touch
document.addEventListener('touchstart', function (event) {
    event.preventDefault();
});
initialize();