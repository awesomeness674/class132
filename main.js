img = "";
status = "";

function preload() {
    img = loadImage('dog_cat.jpg')
}

function setup() {
    canvas = createCanvas(640, 420)
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded())
    document.getElementById("status").innerHTML = "status: Detecting Objects"
}

function modelLoaded() {
    console.log('Model Loaded')
    status = true;
    objectDetector.detect(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    }
    console.log(results)

}

function draw() {
    image(img, 0, 0, 640, 420)
    fill("#ff0000")
    text("dog", 45, 75)
    noFill();
    stroke("#ffcccb")
    rect(30, 60, 450, 350)
    fill("#ff0000")
    text("cat", 285, 94);
    noFill();
    stroke('#ffcccb');
    rect(280, 80, 320, 220);
    text.fontsize()
}