/*
background changes background color background('id','color')
square draws a square on the canvas square('id',x,y,w,h)
addDiv('id')
addH1-H6('id','text')
addP('id','text')
circle('id',x,y,r)
arc('id',x,y,r,start,stop,direction)
triangle('id',x1,y1,x2,y2,x3,y3)
color('id','color')
stroke('id','color')
invisible('id')
noStroke('id')
pop('id') uses pops matrix
push('id') pushes the matrix 
place('id',x,y) places the shape by on offset
turn("id",deg) rotates the shape clockwise
styleFont("id","font-family") changes the font style of html tags 
strokeSize("id",size)
shape("id",params,x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,x9,y9,x10,y10)
text("id","text",x,y,w,h)
htmlTextColor("id","color")
htmlBackground("id","color")
line("id",x1,y1,x2,y2)
mouseX
mouseY
frames
*/ 
console.info("Thank you for choosing CG.js!!")
var mouseX=0
var mouseY=0
var frames=0
var dragEvent=false
var downTime=0
var keyNumValue=-1
function e(){
    try{
  frames=frames+1
   window.requestAnimationFrame(e)
   loop()
}catch(e){
    
}
}
e()
   
window.addEventListener("mousemove",function(e){
    mouseX=e.offsetX
    mouseY=e.offsetY 
    
})
window.addEventListener("keydown",function(e){
keyNumValue=e.keyCode
})
function square(canvasId,x,y,w,h){
    if(typeof(canvasId)!=="string"){
        console.error("CG detected an error\n square was expecting a string but you entered "+canvasId)
    }
    if(typeof(x)!=="number"){
        console.error("CG detected an error\n square was expecting a number but you entered "+x)
    }
    if(typeof(y)!=="number"){
        console.error("CG detected an error\n square was expecting a number but you entered "+y)
    }
    if(typeof(w)!=="number"){
        console.error("CG detected an error\n square was expecting a number but you entered "+w)
    }
    if(typeof(h)!=="number"){
        console.error("CG detected an error\n square was expecting a number but you entered "+h)
    }
    try{var ctx=document.getElementById(canvasId).getContext("2d")}catch(e){console.error("CG detected an error\nError "+canvasId+" was not found at square")}
    ctx.strokeRect(x,y,w,h)
    ctx.fillRect(x,y,w,h)

        
    
}
function addDiv(id,w,h){
    if(typeof(id)!=="string"){
        console.error("CG detected an error\n div was expecting a string but you entered "+id)
    }
    var div=document.createElement("div")
    div.id=id
    document.body.appendChild(div)
    document.getElementById(id).style.width=w
    document.getElementById(id).style.height=h
}
function addH1(id,text){
    if(typeof(id)!=="string"){
        console.error("CG detected an error\n addH1 was expecting a string but you entered "+id)
    }
    if(typeof(text)!=="string"){
        console.error("CG detected an error\n addH1 was expecting a string but you entered "+text)
    }
    var h1=document.createElement("h1")
    h1.id=id 
    h1.innerHTML=text 
    document.body.appendChild(h1)
}
function addH2(id,text){
    var h2=document.createElement("h2")
    h2.id=id 
    h2.innerHTML=text 
    document.body.appendChild(h2)
}
function addH3(id,text){
    var h3=document.createElement("h3")
    h3.id=id 
    h3.innerHTML=text 
    document.body.appendChild(h3)
}
function addH4(id,text){
    var h4=document.createElement("h4")
    h4.id=id 
    h4.innerHTML=text 
    document.body.appendChild(h4)
}
function addH5(id,text){
    var h5=document.createElement("h5")
    h5.id=id 
    h5.innerHTML=text 
    document.body.appendChild(h5)
}
function addH6(id,text){
    var h6=document.createElement("h6")
    h6.id=id 
    h6.innerHTML=text 
    document.body.appendChild(h6)
}
function addP(id,text){
    var p=document.createElement("p")
    p.id=id 
    p.innerHTML=text 
    document.body.appendChild(p)
}
function triangle(id,x1,y1,x2,y2,x3,y3){
    if(typeof(x1)!=="number"){
        console.error("CG detected an error\n triangle was expecting a number but you entered "+x1)
    }
    if(typeof(x2)!=="number"){
        console.error("CG detected an error\n triangle was expecting a number but you entered "+x2)
    }
    if(typeof(x3)!=="number"){
        console.error("CG detected an error\n triangle was expecting a number but you entered "+x3)
    }
    if(typeof(y1)!=="number"){
        console.error("CG detected an error\n triangle was expecting a number but you entered "+y1)
    }
    if(typeof(y2)!=="number"){
        console.error("CG detected an error\n triangle was expecting a number but you entered "+y2)
    }
    if(typeof(y3)!=="number"){
        console.error("CG detected an error\n triangle was expecting a number but you entered "+y3)
    }
    if(typeof(id)!=="string"){
        console.error("CG detected an error\n triangle was expecting a string but you entered "+id)
    }
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG detected an error\n"+id+"was not found please check your canvas id and try again incase you didn't know you use triangle like this:\ntriangle('canvasId',x1,y1,x2,y2,x3,y3); CG.js")}
ctx.beginPath()
ctx.moveTo(x1,y1)
ctx.lineTo(x2,y2)
ctx.lineTo(x3,y3)
ctx.lineTo(x1,y1)
ctx.closePath()
ctx.stroke()
ctx.fill()
}
function line(id,x1,y1,x2,y2){
    if(typeof(x1)!=="number"){
        console.error("CG detected an error\n line was expecting a number but you entered "+x1)
    }
    if(typeof(x2)!=="number"){
        console.error("CG detected an error\n line was expecting a number but you entered "+x2)
    }
    if(typeof(y1)!=="number"){
        console.error("CG detected an error\n line was expecting a number but you entered "+y1)
    }
    if(typeof(y2)!=="number"){
        console.error("CG detected an error\n line was expecting a number but you entered "+y2)
    }
    if(typeof(id)!=="string"){
        console.error("CG detected an error\n line was expecting a string but you entered "+id)
    }
    
    var ctx=document.getElementById(id).getContext("2d")
    
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.stroke()
}
function shape(id,params,x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,x9,y9,x10,y10){
    if(typeof(x1)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+x1)
    }
    if(typeof(x2)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+x2)
    }
    if(typeof(x3)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+x3)
    }
    if(typeof(x4)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+x4)
    }
    if(typeof(x5)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+x5)
    }
    if(typeof(x6)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+x6)
    }
    if(typeof(x7)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+x7)
    }
    if(typeof(x8)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+x8)
    }
    if(typeof(x9)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+x9)
    }
    if(typeof(x10)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+x10)
    }
    if(typeof(y1)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+y1)
    }
    if(typeof(y2)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+y2)
    }
    if(typeof(y3)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+y3)
    }
    if(typeof(y4)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+y4)
    }
    if(typeof(y5)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+y5)
    }
    if(typeof(y6)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+y6)
    }
    if(typeof(y7)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+y7)
    }
    if(typeof(y8)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+y8)
    }
    if(typeof(y9)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+y9)
    }
    if(typeof(y10)!=="number"){
        console.error("CG detected an error\n shape was expecting a number but you entered "+y10)
    }
    if(typeof(id)!=="string"){
        console.error("CG detected an error\n shape was expecting a string but you entered "+id)
    }
    var ctx=document.getElementById(id).getContext("2d")
    
    ctx.beginPath()
    
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    if(params>=3){
        ctx.lineTo(x3,y3)
    }
    if(params>=4){
        ctx.lineTo(x4,y4)
    }
    if(params>=5){
        ctx.lineTo(x5,y5)
    }
    if(params>=6){
        ctx.lineTo(x6,y6)
    }
    if(params>=7){
        ctx.lineTo(x7,y7)
    }
    
    if(params>=8){
    ctx.lineTo(x8,y8)
    }
    if(params>=9){
    ctx.lineTo(x9,y9)
    }
    if(params===10){
    ctx.lineTo(x10,y10)
    }
    ctx.lineTo(x1,y1)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
}
function text(id,text,x,y,w,h){
try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG detected an error\n"+id+"Was not found check your code and make sure you placed it in the right place or that you used the right id")}if(typeof(id)!=="string"){
    console.error("CG detected an error\n shape was expecting a string but you entered "+id)
}
if(typeof(text)!=="string"){
    console.error("CG detected an error\n text was expecting a string but you entered "+text)
}
if(typeof(x)!=="number"){
    console.error("CG detected an error\n text was expecting a number but you entered "+x)
}
if(typeof(y)!=="number"){
    console.error("CG detected an error\n text was expecting a number but you entered "+y)
}
if(typeof(w)!=="number"){
    console.error("CG detected an error\n text was expecting a number but you entered "+w)
}
if(typeof(h)!=="number"){
    console.error("CG detected an error\n text was expecting a number but you entered "+h)
}


ctx.fillText(text,x,y,w,h) 

ctx.strokeText(text,x,y,w,h)
}
function invisible(id){
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG detected an error\ninvisible could not find "+id+":( please make sure you entered the right id")}
    if(typeof(id)!=="string"){
        console.error("CG detected an error\n invisible was expecting a string but you entered "+id)
    }
ctx.fillStyle="rgba(0,0,0,0)"
}
function color(id,clr){
try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG detected an error\n color could not find "+id+"please make sure you spelled it correctly or that you entered the parameters correctly: color('id','color'); cg.js")}
if(typeof(id)!=="string"){
    console.error("CG detected an error\n color was expecting a string but you entered "+id)
}
if(typeof(clr)!=="string"){
    console.error("CG detected an error\n color was expecting a string but you entered "+clr)
}
if(typeof(clr)==="string"){
    checkColor(clr)
}
if(checkColor(clr)===true){
    ctx.fillStyle=clr
}else{
    console.error("CG does not recognize this color or format in this function if you are attempting rgb please use the rgb or rgba function instead")
}

}
function stroke(id,clr){
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG detected an error\n stroke could not find "+id+"please make sure you spelled it correctly or that you entered the parameters correctly: stroke('id','color'); cg.js")}
if(typeof(id)!=="string"){
    console.error("CG detected an error\n stroke was expecting a string but you entered "+id)
}
if(typeof(clr)==="string"){
checkColor(clr)
if(checkColor(clr)===false){
    console.error("CG's stroke function does not recognize this color or format if you are attempting to use rgb or rgba please use the rgb or rgba function instead")
}    
}
    ctx.strokeStyle=clr
}
function noStroke(id){
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG detected an error\n noStroke could not find "+id+"please make sure you spelled it correctly or that you called the function correctly: noStroke('id'); cg.js")}
if(typeof(id)!=="string"){
    console.error("CG detected an error\n noStroke was expecting a string but you entered "+id)
}

    ctx.strokeStyle="rgba(0,0,0,0)"
}
function htmlTextColor(id,clr){
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG detected an error\n htmlTextColor could not find "+id+"please make sure you spelled it correctly or that you entered the paramiters correctly: htmlTextColor('id','color'); cg.js")}
if(typeof(id)!=="string"){
    console.error("CG detected an error\n htmlTextColor was expecting a string but you entered "+id)
}
if(typeof(clr)!=="string"){
    console.error("CG detected an error\nhtmlTextColor was expecting a string but you entered "+clr)
}
    document.getElementById(id).style.color=clr
}
function htmlBackground(id,clr){
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG detected an error\n htmlBackground could not find "+id+"please make sure you spelled it correctly or that you entered the paramiters correctly: htmlBackground('id','color'); cg.js")}
if(typeof(id)!=="string"){
    console.error("CG detected an error\n htmlBackground was expecting a string but you entered "+id)
}
if(typeof(clr)!=="string"){
    console.error("CG detected an error\n htmlBackground was expecting a string but you entered "+clr)
}
}
function styleFont(id,fnt){
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG detected an error\n styleFont could not find "+id+"please make sure you spelled it correctly or that you entered the paramiters correctly: styleFont('id','font'); cg.js")}
if(typeof(id)!=="string"){
    console.error("CG detected an error\n styleFont was expecting a string but you entered "+id)
}
if(typeof(fnt)!=="string"){
    console.error("CG detected an error\n styleFont was expecting a string but you entered "+fnt)
}
    document.getElementById(id).style.fontFamily=fnt
}
function strokeSize(id,size){
    var ctx=document.getElementById(id).getContext("2d")
    ctx.lineWidth=size
}
var rand
function* genRandomNumber(min,max){
    if(true){
         yield Math.random(min,max)
    
    }
   yield Math.random(min,max)
}
rand=genRandomNumber()
rand=rand.next()
genRandomNumber(0,400)
function arc(id,x,y,r,start,end,direction){
var ctx=document.getElementById(id).getContext("2d")
ctx.beginPath()
ctx.arc(x,y,r,start,end,direction)
ctx.closePath()
ctx.fill()
ctx.stroke()
}
function background(id,color){
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG detected an error\n background could not find "+id+"please make sure you spelled it correctly or that you entered the parameters correctly: background('id','color'); cg.js")}
if(typeof(id)!=="string"){
    console.error("CG detected an error\n background was expecting a string but you entered "+id)
}
if(typeof(color)!=="string"){
    console.error("CG detected an error\n background was expecting a string but you entered "+color)
}
    ctx.fillStyle=color 
    ctx.clearRect(0,0,400,400)
    ctx.fillRect(0,0,400,400)
}
function circle(id,x,y,r){
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG detected an error\n circle could not find "+id+"please make sure you spelled it correctly or that you entered the parameters correctly: circle('id',x,y,r); cg.js")}
    if(typeof(id)!=="string"){
        console.error("CG detected an error\n circle was expecting a string but you entered "+id)
    }
    if(typeof(x)!=="number"){
        console.error("CG detected an error\ncircle was expecting a number but you entered "+x)
    }
    if(typeof(y)!=="number"){
        console.error("CG detected an error\ncircle was expecting a number but you entered "+y)
    }
    if(typeof(r)!=="number"){
        console.error("CG detected an error\ncircle was expecting a number but you entered "+r)
    }
ctx.beginPath()
ctx.arc(x,y,r,0,Math.PI*2,true)
ctx.closePath()
ctx.fill()
ctx.stroke()
}
function turn(id,deg){
    if(typeof(id)!=="string"){
        console.error("CG detected an error\n turn was expecting a string but you entered "+id)
    }
    if(typeof(deg)!=="number"){
        console.error("CG detected an error\n turn was expecting a number but you entered "+deg)
    }
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG detected an error\nturn could not find "+id+" please make sure that you entered the right id or that you entered the right parameters. turn('id',deg)")}
    ctx.rotate(deg)
}
function push(id){
    if(typeof(id)!=="string"){
        console.error("CG detected an error\n push was expecting a string but you entered "+id)
    }
    var ctx=document.getElementById(id).getContext("2d")
    ctx.save()
}
function pop(id){
    if(typeof(id)!=="string"){
        console.error("CG detected an error\n pop was expecting a string but you entered "+id)
    }
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG detected an error\npop could not find "+id+" please make sure that you entered the right id or that you entered the right parameters. pop('id')")}

    ctx.restore()
}
function place(id,x,y){
   if(typeof(id)!=="string"){
console.error("CG detected an error\n place was expecting a string but you entered "+id)
    } 
    if(typeof(x)!=="number"){
        console.error("CG detected an error\n place was expecting a number but you entered "+x)
    }
    if(typeof(y)!=="number"){
        console.error("CG detected an error\n place was expecting a number but you entered "+y)
    }
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG detected an error\nplace could not find "+id+" please make sure that you entered the right id or that you entered the right parameters. place('id',x,y)")}

    ctx.translate(x,y)
    
}
function log(data){
    if(typeof(data)==="undefined"||typeof(data)===null){
       console.error("CG detected an error\nlog was expecting a number or string instead you put "+data)
        
    }
    console.log(data)
}
function multiply(num1,num2){
 console.log(num1*num2)
}
function pentagon(id,x,y,r){
   
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG says"+id+" Not Found at pentagon")}
if(typeof(id)!=="string"){
    console.error("CG detected an error\nCG could not find "+id+" please make sure you entered the right id or enter the right parameters.")
}
if(typeof(x)!=="number"){
    console.error("CG detected an error\npentagon was expecting a number but instead you entered "+x)
} 
/*
* made by @DaCodeMon @10/24/2022 
*/
if(typeof(y)!=="number"){
    console.error("CG detected an error\npentagon was expecting a number but instead you entered "+y)
}
if(typeof(r)!=="number"){
    console.error("CG detected an error\npentagon was expecting a number but instead you entered "+r)
} 
ctx.beginPath()
ctx.moveTo(x,y)
ctx.lineTo(x+r,y+r)
ctx.lineTo(x+r,y+r+r)
ctx.lineTo(x-r,y+r+r)
ctx.lineTo(x-r,y+r)
ctx.lineTo(x,y)
ctx.closePath()
ctx.fill()
ctx.stroke()
ctx.restore()
}
function star(id,x,y,r){
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG says"+id+" Not Found at pentagon")}
    if(typeof(id)!=="string"){
        console.error("CG detected an error\nCG could not find "+id+" please make sure you entered the right id or enter the right parameters.")
    }
    if(typeof(x)!=="number"){
        console.error("CG detected an error\nstar was expecting a number but instead you entered "+x)
    } 
    if(typeof(y)!=="number"){
        console.error("CG detected an error\nstar was expecting a number but instead you entered "+y)
    }
    if(typeof(r)!=="number"){
        console.error("CG detected an error\nstar was expecting a number but instead you entered "+r)
    } 
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x+r/4,y+r)
    ctx.lineTo(x+r/4,y+r)
    ctx.lineTo(x+r+r,y+r)
    ctx.lineTo(x+r/2,y+r+r/2)
    ctx.lineTo(x+r+r/6,y+r+r+r/2)
    ctx.lineTo(x,y+r+r/1.5)
    ctx.lineTo(x-r,y+r+r+r/2)
    ctx.lineTo(x-r/2.5,y+r+r/2)
    ctx.lineTo(x-r-r,y+r)
    ctx.lineTo(x-r/4,y+r)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
}
function quad(id,x,y,r){
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG says"+id+" Not Found at pentagon")}
    if(typeof(id)!=="string"){
        console.error("CG detected an error\nCG could not find "+id+" please make sure you entered the right id or enter the right parameters.")
    }
    if(typeof(x)!=="number"){
        console.error("CG detected an error\nquad was expecting a number but instead you entered "+x)
    } 
    if(typeof(y)!=="number"){
        console.error("CG detected an error\nquad was expecting a number but instead you entered "+y)
    }
    if(typeof(r)!=="number"){
        console.error("CG detected an error\nquad was expecting a number but instead you entered "+r)
    } 
    ctx.beginPath()
   
    ctx.moveTo(x,y)
   ctx.lineTo(x+r/2,y)
    ctx.lineTo(x+r,y+r)
    ctx.lineTo(x,y+r)
    ctx.lineTo(x,y)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
}
function rgba(id,r,g,b,a){
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG says"+id+" Not Found at pentagon")}
    if(typeof(id)!=="string"){
        console.error("CG detected an error\nCG could not find "+id+" please make sure you entered the right id or enter the right parameters.")
    }
    if(typeof(r)!=="number"){
        console.error("CG detected an error\nrgb was expecting a number but instead you entered "+r)
    } 
    if(typeof(g)!=="number"){
        console.error("CG detected an error\nrgb was expecting a number but instead you entered "+g)
    }
    if(typeof(b)!=="number"){
        console.error("CG detected an error\nrgb was expecting a number but instead you entered "+b)
    }
    if(typeof(a)!=="number"){
        console.error("CG detected an error\nrgb was expecting a number but instead you entered "+a)
    }
    ctx.fillStyle="rgba("+r+","+g+","+b+","+a+")"   
}
function rgb(id,r,g,b){
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG says"+id+" Not Found at pentagon")}
    if(typeof(id)!=="string"){
        console.error("CG detected an error\nCG could not find "+id+" please make sure you entered the right id or enter the right parameters.")
    }
    if(typeof(r)!=="number"){
        console.error("CG detected an error\nrgb was expecting a number but instead you entered "+r)
    } 
    if(typeof(g)!=="number"){
        console.error("CG detected an error\nrgb was expecting a number but instead you entered "+g)
    }
    if(typeof(b)!=="number"){
        console.error("CG detected an error\nrgb was expecting a number but instead you entered "+b)
    }
    ctx.fillStyle="rgb("+r+","+g+","+b+")" 
}
function addFilePicker(id){
   var filePicker= document.createElement("file")
   filePicker.id=id 
   document.body.appendChild(filePicker)
}
//function addFileReader(id)
function saveCanvas(id,name){
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG says"+id+" Not Found at pentagon")}
    if(typeof(id)!=="string"){
        console.error("CG detected an error\nCG could not find "+id+" please make sure you entered the right id or enter the right parameters.")
    }
    if(typeof(name)!=="string"){
        console.error("CG detected an error\nsaveCanvas was expecting a string but instead you entered "+name)
    } 
    var pic=document.getElementById(id)
   try{ var a=document.createElement("a")
a.href=document.getElementById(id).toDataURL() 
a.download=name+".jpg"
a.click()
   }catch(e){
    alert(e)
   }
}
function downloadText(id,name,extension){
    if(typeof(extension)==="undefined"){
        extension=".txt"
    }
    var content=document.getElementById(id).value
    var blob=new Blob([content])
    var link=window.URL.createObjectURL(blob)
    var a=document.createElement("a")
    a.href=link
    a.download=name+extension 
    a.click()
}
function strokeRGB(id,r,g,b){
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG says"+id+" Not Found at pentagon")}
    if(typeof(id)!=="string"){
        console.error("CG detected an error\nCG could not find "+id+" please make sure you entered the right id or enter the right parameters.")
    }
    if(typeof(r)!=="number"){
        console.error("CG detected an error\nstrokeRGB was expecting a number but instead you entered "+r)
    } 
    if(typeof(g)!=="number"){
        console.error("CG detected an error\nstrokeRGB was expecting a number instead you entered "+g)
    }
    if(typeof(b)!=="number"){
        console.error("CG detected an error\nstrokeRGB was expecting a number instead you entered "+b)
    }
    ctx.strokeStyle="rgb("+r+","+g+","+b+")"
}
function strokeRGBA(id,r,g,b,a){
    try{var ctx=document.getElementById(id).getContext("2d")}catch(e){console.error("CG says"+id+" Not Found at pentagon")}
    if(typeof(id)!=="string"){
        console.error("CG detected an error\nCG could not find "+id+" please make sure you entered the right id or enter the right parameters.")
    }
    if(typeof(r)!=="number"){
        console.error("CG detected an error\nstrokeRGBA was expecting a number but instead you entered "+r)
    } 
    if(typeof(g)!=="number"){
        console.error("CG detected an error\nstrokeRGBA was expecting a number but instead you entered "+g)
    }
    if(typeof(b)!=="number"){
        console.error("CG detected an error\nstrokeRGBA was expecting a number but instead you entered "+b)
    }
    if(typeof(a)!=="number"){
        console.error("CG detected an error\nstrokeRGBA was expecting a number but instead you entered "+b)
    }
    ctx.strokeStyle="rgba("+r+","+g+","+b+","+a+")"
}
window.addEventListener("click",function(){
   try{ mouseClick();}catch(e){}
})
window.addEventListener("mouseout",function(){
    try{mouseOut()}catch(e){}
})
window.addEventListener("mouseenter",function(){
    try{mouseEnter()}catch(e){}
})
window.addEventListener("mouseover",function(){
    try{mouseOver()}catch(e){}
})
window.addEventListener("mouseup",function(){
    try{mouseUp()}catch(e){}
    downTime=0
})
window.addEventListener("mousedown",function(){
    try{mouseDown()}catch(e){}
    downTime=downTime+1

})
window.addEventListener("mousemove",function(){
    try{mouseMove()}catch(e){}
    if(downTime===1){
        try{mouseDrag()}catch(v){}
}})
window.addEventListener("keydown",function(){
    try{keyDown()}catch(e){}
})
window.addEventListener("keyup",function(){
    try{keyUp()}catch(e){}
})
window.addEventListener("keypress",function(e){
    e.preventDefault();
    try{keyPress()}catch(e){}
}) 
var photoCall=0
function addPhotoFileUploader(id,width,height){
    if(typeof(id)!=="string"){
        console.error("CG detected an error\naddPhotoFileUploader was expecting a string but you entered "+id)
    }
    if(typeof(width)==="undefined"){
        console.error("CG detected an error\naddPhotoFileUploader was expecting at least 3 parameters. addPhotoUploader('id',photo-width,photo-height) cg.js")
    }
    if(typeof(height)==="undefined"){
        console.error("CG detected an error\naddPhotoFileUploader was expecting at least 3 parameters. addPhotoUploader('id',photo-width,photo-height) cg.js")
    }
var c=document.createElement("input")
c.type="file"
c.innerText="Photo"
c.id=id
var photoReader=new FileReader()
c.onchange=function(){
    photoReader.readAsDataURL(document.getElementById(id).files[photoCall])
photoReader.onload=function(){
    var outcome=document.createElement("img")
outcome.id="photo"+photoCall
outcome.src=photoReader.result
outcome.width=width
outcome.height=height
document.body.appendChild(outcome)

}

photoCall=photoCall+1
}
document.body.appendChild(c)
}
var videoCounter=0
function addVideoFileUploader(id,width,height){
    if(typeof(width)==="undefined"){
        console.error("CG detected an error\naddVideoFileUploader was expecting at least 3 parameters. addPhotoUploader('id',photo-width,photo-height) cg.js")
    }
    if(typeof(height)==="undefined"){
        console.error("CG detected an error\naddVideoFileUploader was expecting at least 3 parameters. addPhotoUploader('id',photo-width,photo-height) cg.js")
    }
    if(typeof(id)!=="string"){
        console.error("CG detected an error\naddVideoFileUploader was expecting a string but you entered "+id)
    }
var v=document.createElement("input")
v.id=id
v.type="file"
var vr=new FileReader()
v.onchange=function(){
vr.readAsDataURL(document.getElementById(id).files[videoCounter])
vr.onload=function(){
var outcome=document.createElement("video")
outcome.id="video"+videoCounter 
outcome.src=vr.result 
outcome.controls=true
outcome.width=width 
outcome.height=height
document.body.appendChild(outcome)
}
}
document.body.appendChild(v)
}
var audCount=0
function addAudioFileUploader(id){
    if(typeof(id)!=="string"){
        console.error("CG detected an error\naddAudioFileUploader was expecting a string but you entered "+id)
    }
var aud=document.createElement("input")
aud.type="file"
aud.id=id
var a=new FileReader()
aud.onchange=function(){
  a.readAsDataURL(document.getElementById(id).files[0])  
a.onload=function(){
    var outcome=document.createElement("audio")
    outcome.src=a.result 
    outcome.controls=true 
    outcome.id="audio"+audCount
    document.body.appendChild(outcome)
    audCount=audCount+1
}
}
document.body.appendChild(aud)
}
function createLiveStream(id,audio,facing){
    var constraints={
        audio:audio,
        video:{
            facingMode:facing
        }
    }
    var video=document.createElement("video")
    video.width="200"
    video.height="200"
    document.body.appendChild(video)
    navigator.mediaDevices.getUserMedia(constraints).then( function success(stream){video.src=stream})
}
function addCanvas(id,width,height,backgroundColor){
    if(typeof(id)!=="string"){
        console.error("CG detected an error\naddCanvas was expecting a string but you entered "+id)
    }
    if(typeof(backgroundColor)!=="undefined"){
 checkColor(backgroundColor)
    }
    
var canvas=document.createElement("canvas")
canvas.id=id 
canvas.width=width 
canvas.height=height
document.body.appendChild(canvas)
if(checkColor(backgroundColor)===true){
document.getElementById(id).style.color=backgroundColor
    }else if(checkColor(backgroundColor)===false && typeof(backgroundColor)!=="undefined"){
        console.warn("CG noticed that your color was invalid maybe try to type the name of your color such as 'blue' or 'green'")
        console.error("CG detected an error\n Your color is invalid at addCanvas")
    }
}
function checkColor(checking){
var check=new Option().style 
check.color=checking 
return check.color==checking
}
function add(params,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10){
if(typeof(params)!=="number"){
    console.error("CG detected an error\nadd was expecting a number but you entered "+params)
}
if(typeof(n1)!=="number"){
    console.error("CG detected an error\nadd was expecting a number but you entered "+n1)
}
if(typeof(n2)!=="number"){
    console.error("CG detected an error\nadd was expecting a number but you entered "+n2)
}
if(params>=3){
if(typeof(n3)!=="number"){
    console.error("CG detected an error\nadd was expecting a number but you entered "+n3)
}
}
if(params>=4){
if(typeof(n4)!=="number"){
    console.error("CG detected an error\nadd was expecting a number but you entered "+n4)
}
}
if(params>=5){
if(typeof(n5)!=="number"){
    console.error("CG detected an error\nadd was expecting a number but you entered "+n5)
}
}
if(params>=6){
if(typeof(n6)!=="number"){
    console.error("CG detected an error\nadd was expecting a number but you entered "+n6)
}
}
if(params>=7){
if(typeof(n7)!=="number"){
    console.error("CG detected an error\nadd was expecting a number but you entered "+n7)
}
}
if(params>=8){
if(typeof(n8)!=="number"){
    console.error("CG detected an error\nadd was expecting a number but you entered "+n8)
}
}
if(params>=9){
if(typeof(n9)!=="number"){
    console.error("CG detected an error\nadd was expecting a number but you entered "+n9)
}
}
if(params===10){
if(typeof(n10)!=="number"){
    console.error("CG detected an error\nadd was expecting a number but you entered "+n10)
}
}
if(params===2){    
    return n1+n2
}
if(params===3){
    return n1+n2+n3
}
if(params===4){
    return n1+n2+n3+n4
}
if(params===5){
    return n1+n2+n3+n4+n5
}
if(params===6){
    return n1+n2+n3+n4+n5+n6
}
if(params===7){
    return n1+n2+n3+n4+n5+n6+n7
}
if(params===8){
    return n1+n2+n3+n4+n5+n6+n7+n8
}
if(params===9){
    return n1+n2+n3+n4+n5+n6+n7+n8+n9
}
if(params===10){
    return n1+n2+n3+n4+n5+n6+n7+n8+n9+n10
}
}
function subtract(params,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10){
    if(typeof(params)!=="number"){
        console.error("CG detected an error\nsubtract was expecting a number but you entered "+params)
    }
    if(typeof(n1)!=="number"){
        console.error("CG detected an error\nsubtract was expecting a number but you entered "+n1)
    }
    if(typeof(n2)!=="number"){
        console.error("CG detected an error\nsubtract was expecting a number but you entered "+n2)
    }
    if(params>=3){
    if(typeof(n3)!=="number"){
        console.error("CG detected an error\nsubtract was expecting a number but you entered "+n3)
    }
    }
    if(params>=4){
    if(typeof(n4)!=="number"){
        console.error("CG detected an error\nsubtract was expecting a number but you entered "+n4)
    }
    }
    if(params>=5){
    if(typeof(n5)!=="number"){
        console.error("CG detected an error\nsubtract was expecting a number but you entered "+n5)
    }
    }
    if(params>=6){
    if(typeof(n6)!=="number"){
        console.error("CG detected an error\nsubtract was expecting a number but you entered "+n6)
    }
    }
    if(params>=7){
    if(typeof(n7)!=="number"){
        console.error("CG detected an error\nsubtract was expecting a number but you entered "+n7)
    }
    }
    if(params>=8){
    if(typeof(n8)!=="number"){
        console.error("CG detected an error\nsubtract was expecting a number but you entered "+n8)
    }
    }
    if(params>=9){
    if(typeof(n9)!=="number"){
        console.error("CG detected an error\nsubtract was expecting a number but you entered "+n9)
    }
    }
    if(params===10){
    if(typeof(n10)!=="number"){
        console.error("CG detected an error\nsubtract was expecting a number but you entered "+n10)
    }
    }
    if(params===2){    
        return n1-n2
    }
    if(params===3){
        return n1-n2-n3
    }
    if(params===4){
        return n1-n2-n3-n4
    }
    if(params===5){
        return n1-n2-n3-n4-n5
    }
    if(params===6){
        return n1-n2-n3-n4-n5-n6
    }
    if(params===7){
        return n1-n2-n3-n4-n5-n6-n7
    }
    if(params===8){
        return n1-n2-n3-n4-n5-n6-n7-n8
    }
    if(params===9){
        return n1-n2-n3-n4-n5-n6-n7-n8-n9
    }
    if(params===10){
        return n1-n2-n3-n4-n5-n6-n7-n8-n9-n10
    }
    }
    
    function multiply(params,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10){
        if(typeof(params)!=="number"){
            console.error("CG detected an error\nmultiply was expecting a number but you entered "+params)
        }
        if(typeof(n1)!=="number"){
            console.error("CG detected an error\nmultiply was expecting a number but you entered "+n1)
        }
        if(typeof(n2)!=="number"){
            console.error("CG detected an error\nmultiply was expecting a number but you entered "+n2)
        }
        if(params>=3){
        if(typeof(n3)!=="number"){
            console.error("CG detected an error\nmultiply was expecting a number but you entered "+n3)
        }
        }
        if(params>=4){
        if(typeof(n4)!=="number"){
            console.error("CG detected an error\nmultiply was expecting a number but you entered "+n4)
        }
        }
        if(params>=5){
        if(typeof(n5)!=="number"){
            console.error("CG detected an error\nmultiply was expecting a number but you entered "+n5)
        }
        }
        if(params>=6){
        if(typeof(n6)!=="number"){
            console.error("CG detected an error\nmultiply was expecting a number but you entered "+n6)
        }
        }
        if(params>=7){
        if(typeof(n7)!=="number"){
            console.error("CG detected an error\nmultiply was expecting a number but you entered "+n7)
        }
        }
        if(params>=8){
        if(typeof(n8)!=="number"){
            console.error("CG detected an error\nmultiply was expecting a number but you entered "+n8)
        }
        }
        if(params>=9){
        if(typeof(n9)!=="number"){
            console.error("CG detected an error\nmultiply was expecting a number but you entered "+n9)
        }
        }
        if(params===10){
        if(typeof(n10)!=="number"){
            console.error("CG detected an error\nmultiply was expecting a number but you entered "+n10)
        }
        }
        if(params===2){    
            return n1*n2
        }
        if(params===3){
            return n1*n2*n3
        }
        if(params===4){
            return n1*n2*n3*n4
        }
        if(params===5){
            return n1*n2*n3*n4*n5
        }
        if(params===6){
            return n1*n2*n3*n4*n5*n6
        }
        if(params===7){
            return n1*n2*n3*n4*n5*n6*n7
        }
        if(params===8){
            return n1*n2*n3*n4*n5*n6*n7*n8
        }
        if(params===9){
            return n1*n2*n3*n4*n5*n6*n7*n8*n9
        }
        if(params===10){
            return n1*n2*n3*n4*n5*n6*n7*n8*n9*n10
        }
        }
        function divide(params,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10){
            if(typeof(params)!=="number"){
                console.error("CG detected an error\ndivide was expecting a number but you entered "+params)
            }
            if(typeof(n1)!=="number"){
                console.error("CG detected an error\ndivide was expecting a number but you entered "+n1)
            }
            if(typeof(n2)!=="number"){
                console.error("CG detected an error\ndivide was expecting a number but you entered "+n2)
            }
            if(params>=3){
            if(typeof(n3)!=="number"){
                console.error("CG detected an error\ndivide was expecting a number but you entered "+n3)
            }
            }
            if(params>=4){
            if(typeof(n4)!=="number"){
                console.error("CG detected an error\ndivide was expecting a number but you entered "+n4)
            }
            }
            if(params>=5){
            if(typeof(n5)!=="number"){
                console.error("CG detected an error\ndivide was expecting a number but you entered "+n5)
            }
            }
            if(params>=6){
            if(typeof(n6)!=="number"){
                console.error("CG detected an error\ndivide was expecting a number but you entered "+n6)
            }
            }
            if(params>=7){
            if(typeof(n7)!=="number"){
                console.error("CG detected an error\ndivide was expecting a number but you entered "+n7)
            }
            }
            if(params>=8){
            if(typeof(n8)!=="number"){
                console.error("CG detected an error\ndivide was expecting a number but you entered "+n8)
            }
            }
            if(params>=9){
            if(typeof(n9)!=="number"){
                console.error("CG detected an error\ndivide was expecting a number but you entered "+n9)
            }
            }
            if(params===10){
            if(typeof(n10)!=="number"){
                console.error("CG detected an error\ndivide was expecting a number but you entered "+n10)
            }
            }
            if(params===2){    
                return n1/n2
            }
            if(params===3){
                return n1/n2/n3
            }
            if(params===4){
                return n1/n2/n3/n4
            }
            if(params===5){
                return n1/n2/n3/n4/n5
            }
            if(params===6){
                return n1/n2/n3/n4/n5/n6
            }
            if(params===7){
                return n1/n2/n3/n4/n5/n6/n7
            }
            if(params===8){
                return n1/n2/n3/n4/n5/n6/n7/n8
            }
            if(params===9){
                return n1/n2/n3/n4/n5/n6/n7/n8/n9
            }
            if(params===10){
                return n1/n2/n3/n4/n5/n6/n7/n8/n9/n10
            }
            }
            function getLog(n1){
                return Math.log(n1)
            }
            function randomNumber(n1,n2){
                return Math.floor(Math.random()*(n2-n1))+n2
            }
            function squareRoot(n1){
                return Math.sqrt(n1)
            }
            function restrictNum(val,min,max){
                return val<min?min:(val>max?max:val)
            }
            function raiseToExponent(num,exp){
                return Math.pow(num,exp)
            }
            
            function adjustCanvasTextSize(id,size,font){
                var ctx=document.getElementById(id).getContext("2d") 
                ctx.font=size+" "+font
            }
            window.addEventListener("load",function(){
                try{starter();}catch(e){}
            })