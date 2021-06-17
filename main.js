function preload(){
}

function setup(){
    canvas = createCanvas(550, 450)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    filter_tintt = ""
}

function draw(){
    image(video, 0, 0, 550, 450)
    tint(filter_tintt)
}
function take_snapshot(){
    save("test.png")
}

function filter_tint(){
    filter_tintt = document.getElementById("input").value
    
    
}

