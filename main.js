function preload(){
    }
function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
tint_Color="";
    }
function draw(){
    image(video,250,150,250,250);
    tint(tint_Color);
    fill(0,0,255);
    stroke(255,0,0);
    rect(100,100,500,20);
rect(100,430,500,20);
rect(100,100,20,350);
rect(600,100,20,350);

}
function take_snapshot(){
save("photo.png");
}
function filter_color(){
tint_Color=document.getElementById("color_name").value;
    }