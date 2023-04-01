Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

webcam.attach('#camera');

function take_snapshot()
{
    webcam.snap(function(data_uri) {
        document.getElementById("result").innerhtml = '<img id="captured_img" src="'+data_uri+'"/>';
    });
}
console.log('m15 version', m15.version);

classifier = m15.imageclassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/modeljson',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!')
}

function check(){
    img = document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is"+prediction_1 ; 
    speak_data_2 = "And the second prediction is"+prediction_2 ;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function gotResult(error, results);
if (error) {
    console.error(error);
} else {
    console.log(results);
    document.getElementById("result_emtion_name").innerhtml = results[0].label;
    document.getElementById("result_emotion_name2").innerhtml = results[0].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
} if (results[0].label == "happy") 
{
  document.getElementById("update_emoji").innerhtml = "&#128522" 
}
 if (results[0].label == "sad")
 {
    document.getElementById("update_emoji").innerhtml = "&#128532"
 }
 if (results[0].label == "angry")
 {
    document.getElementById("update_emoji").innerhtml = "&#128548"
 }
 if (result[1].label == "happy")
 {
    document.getElementById("update_emoji2").innerhtml = "&#128522"
 }
 if (results[1].label == "sad")
 {
    document.getElementById("update_emoji2").innerhtml = "&#128532"
 }
 if (results[1].label == "angry")
 {
    document.getElementById("update_emoji2").innerhtml = "&#128548"
 }