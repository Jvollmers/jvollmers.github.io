let brush = document.getElementById("c").getContext("2d")
let w =400
let h =400
let size = 20 //size of square
let x =w/2-size/2 //x of square
let y=0 //y of square
let dy=5 //increase along y
let dx=5 //increase along x
let jumpImpact = 22
let timer=null //timer id
let gravity=1
let isLeft=false
let isRight=false
let isOnGround=false


document.addEventListener("keydown",onkeydown)
document.addEventListener("keyup",onkeyup)
drawBackground()
drawSquare()

function drawSquare(){
    brush.fillStyle ="#FF0000"
        if(x<0){
            brush.fillRect(x,y,size,size)
            brush.fillRect(w+x,y,size,size)
        }else if (x>w-size){
            brush.fillRect(x,y,size,size)
            brush.fillRect(x-w,y,size,size)
        }
        else{
            brush.fillRect(x,y,size,size)
        }
}
function drawFrame(){
    //update all the data that needs to be updated
    dy+=gravity
    y += dy
    if(isLeft){
        x-=dx
    }
    if(isRight){
        x+=dx 
    }
    if(y>h-size){
    y=h-size;
    dy=0
    isOnGround=true
    }else{
        isOnGround=false
    }
    
    if(x<-size){
        x=w-size
    }
    if(x>w){
        x=0
    }
drawBackground()
drawSquare()
}

function drawBackground(){
brush.fillStyle ="#AAAAAA"
brush.fillRect(0,0,w,h)
}

function onkeydown(e){
    if(e.key==="Enter"){ //"ArrowLeft"
    clearInterval(timer)
    y=0    
    timer=setInterval(drawFrame,20)
        }else if(e.key==="ArrowLeft"){
            isLeft=true
        }else if(e.key==="ArrowRight"){
    isRight=true
        } else if (e.key===" "){
            if(isOnGround){
            dy-=jumpImpact
        }
    }
}
    function onkeyup(e){
        if (e.key==="ArrowLeft"){
            isLeft=false
        }else if (e.key === "ArrowRight"){  
            isRight=false
        } else if (e.key===" "){
        }
    }
   