let audio;
let colours = ['White', 'LightGrey', 'SlateBlue','LightBlue', 'DeepPink', 'Orange'];

let minStrokeWeight = 2
let maxStrokeWeight = 40

let fillColour = colours[1];
let strokeColour = colours[1];

function preload() { 
  audio = loadSound('audio.mp3');
}

function setup() {
  createCanvas(600, 600);

  let slowButton = createButton('Calm');
  slowButton.position(200, 50);
  slowButton.mousePressed(setSlowTempo);

  let normalButton = createButton('Excited');
  normalButton.position(300, 50);
  normalButton.mousePressed(setNormalTempo);

  let fastButton = createButton('Erratic');
  fastButton.position(400, 50);
  fastButton.mousePressed(setFastTempo);
}

//Using the different tempo buttons to change the colours and strokeweight of the visual so that it mirrors the playback speed 

function setSlowTempo() {
  audio.rate(0.5);
  if (audio.isPlaying() == false) {
    audio.play(); 
  }
  minStrokeWeight = 2
  maxStrokeWeight = 10

  fillColour = colours[0];
  strokeColour = colours [1];
}

function setNormalTempo() {
  audio.rate(1);
  if (audio.isPlaying() == false) {
    audio.play();  
  }
  minStrokeWeight = 2
  maxStrokeWeight = 20

  fillColour = colours[2];
  strokeColour = colours [3];
}

function setFastTempo() {
  audio.rate(2);
  if (audio.isPlaying() == false) {
    audio.play(); 
  }
  minStrokeWeight = 2
  maxStrokeWeight = 40

  fillColour = colours[4];
  strokeColour = colours [5];
}

function draw() {
  background('LightGrey');
  noStroke();

//Adding a question so that it gives an element of user interaction

 textSize(25);
 fill('DarkGrey');
  text('How energetic do you feel ? : ', 20,40);
 

  fill(fillColour);
  stroke(strokeColour);

  let oscillatingStrokeWeight = map(sin(frameCount * 0.1), -1, 1, minStrokeWeight, maxStrokeWeight);
  strokeWeight(oscillatingStrokeWeight);

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      square(70 + i * 70, 70 + j * 70, 70);  
  }
  }
}
