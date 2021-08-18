function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier= ml5.imageClassifier("Mobilenet",Modlalloaded);
}
 
function Modlalloaded()
{
  console.log("m_is_l");
}

function draw()
{
   image(video,0,0,300,300);
  classifier.classify(video,gotResult);
}

function gotResult(error,results)
{
  if (error){
    console.error(error);
  }
  else {
    console.log(results);
    document.getElementById("r_o_n").innerHTML=results[0].label;
    document.getElementById("r_o_a").innerHTML=results[0].confidence.toFixed(3)*100;
  }
}
