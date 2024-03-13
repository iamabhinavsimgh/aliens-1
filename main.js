
function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/x24z15UyD/model.json",modelLoaded)
}

function modelLoaded(){
    console.log("modelLoaded")
    classifier.classify(gotResults)
}

function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
    }
}