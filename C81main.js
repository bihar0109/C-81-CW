canvas=document.getElementById("myCanvas");
color="red";
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);


function my_mousedown(e){
   
   color=document.getElementById("color").value;
   
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    
    console.log("x="+mouse_x+",y="+mouse_y);
    circle(mouse_x, mouse_y);
}


function circle(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x, mouse_y, 20, 0, 2*Math.PI);
    ctx.stroke();
}