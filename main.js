function setup(){
    video=createCapture(VIDEO);
    video.size(500, 500);
    
    canvas=createCanvas(500, 500);
    canvas.position(600, 90);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#d49292')
}

function modelLoaded(){
    console.log("model is loaded yay!! ");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
    }
}