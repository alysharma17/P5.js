function preload() {

}

function setup() {
    canvas = createCanvas(1000, 1000);
    video = createCapture(VIDEO);
video.size(325, 325);
video.center();
}

function draw() {
fill('#00BFFF');
stroke('#BF00FF');
rect(520, 286, 400, 20); 
circle(930, 280, 40);  
rect(520, 607, 400, 20);
circle(925, 620, 40);
rect(921, 300, 20, 300);
circle(510, 620, 40);
rect(500, 300, 20, 300);
circle(510, 280, 40);  
}

function take_snapshot() {
    save('my_snap.png');
}