
    let canvas = document.getElementById("c1")
   let canvas2 = document.getElementById("c2") 
let painter = canvas.getContext("2d")
let painter2 = canvas2.getContext("2d")

let j =0

while(j<13){
    let i = 0
    while(i<13){
        painter.fillStyle="#FF0000"
         painter.fillRect(10+30*i,10+30*j,20,20)
         ++i 
}
++j
}

for(let c=0;c<13;++c){
painter2.fillStyle="#FF0000"
painter2.fillRect(10+30*c,10+30*c,20,20)


}

     


    
    





