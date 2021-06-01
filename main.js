function preload(){

}
function setup(){
canvas=createCanvas(640,480);
canvas.position(120.250);
video=createCapture(VIDEO);
video.hide();
tint_color="";

}
function draw(){
image(video,0,0,640,480);
//tint(tint_color);
filter(INVERT);

}
function take_snapshot(){
save('picture.png');
}
