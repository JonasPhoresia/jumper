//definindo os botões
let upBtn;
let downBtn;
let leftBtn;
let rightBtn;
let btn = [];
let touches = [];
move_handler = function(){}

end_handler = function(e){
  b = e.target.getAttribute("id");
  l = document.getElementById(b);
  
  if (b == "btn0"){
    upBtn = false;
    //console.log(upBtn)
    l.style.transform="translate(0px,0px)"
  }
  
  if (b == "btn1") {
    rightBtn = false;
    //console.log(rightBtn)
    l.style.transform="translate(0px,0px)"
  }
  if (b == "btn2") {
    leftBtn = false;
    //console.log(leftBtn)
    l.style.transform="translate(0px,0px)"
  }
  if (b == "btn3") {
    downBtn = false;
    //console.log(downBtn)
    l.style.transform="translate(0px,0px)"
  }
}
start_handler = function(e) {
  b = e.target.getAttribute("id");
  l = document.getElementById(b);
  e.preventDefault()
  if (b=="btn0"){
    upBtn = true;
    //console.log(upBtn)
    l.style.transform="translate(2px,2px)";
  }
  
  if (b == "btn1") {
    rightBtn = true;
    //console.log(rightBtn)
    l.style.transform="translate(2px,2px)"
  }
  if (b == "btn2") {
    leftBtn = true;
    //console.log(leftBtn)
    l.style.transform="translate(2px,2px)"
  }
  if (b == "btn3") {
    downBtn = true;
    //console.log(downBtn)
    l.style.transform="translate(2px,2px)"
  }
}
function setHandlers(name){
  var el = document.getElementById(name);
  el.ontouchstart = start_handler;
  el.ontouchmove = move_handler;
  el.ontouchcancel = end_handler;
  el.ontouchend = end_handler;
}

//função de criar botões
function KeyPad(n) {
  //cria uma div para todos os botões
  let btndiv = document.getElementById("buttonDiv");
  btndiv.setAttribute("id", "allbuttons");
  document.body.appendChild(btndiv);

  for (i=0; i < 4; ++i){
    btn = document.createElement("div");
    btn.setAttribute("id", "btn"+[i]);
    btn.setAttribute("class", "btns");
    btndiv.appendChild(btn);
    setHandlers("btn"+[i]);
  }
}
/*
  //define uma ação para cada botão pressionado
  if (start_handler) {
    upBtn = true
   l = document.getElementById("btn0");
   l.setAttribute("style","background-color:#000000");
  } else {
    upBtn = false;
   l = document.getElementById("btn0");
   l.removeAttribute("style")
  }
  
  
  if (buttonPressed == "btn1" ) {
    rightBtn = true;
   l = document.getElementById("btn1");
   l.setAttribute("style", "background-color:#000000");
  } else {
    rightBtn = false;
    l = document.getElementById("btn1");
    l.removeAttribute("style")
  }
  
  
  if (buttonPressed == "btn2") {
    leftBtn = true;
    l = document.getElementById("btn2");
    l.setAttribute("style", "background-color:#000000");
  } else {
    leftBtn = false;
    l = document.getElementById("btn2");
    l.removeAttribute("style");
  }
  
  
  if (buttonPressed == "btn3") {
    downBtn = true;
    l = document.getElementById("btn3");
    l.setAttribute("style", "background-color:#000000");
  } else {
    downBtn = false;
    l = document.getElementById("btn3");
    l.removeAttribute("style");
  }*/
collisionTest = function(obj1,obj2){
  if(obj1.x < obj2.x + obj2.w &&
      obj1.x + obj1.w >= obj2.x &&
      obj1.y <= obj2.y + obj2.h &&
      obj1.y + obj1.h >= obj2.y){
       return true;
      }else{
        return false,inGround=false;
      }
}
 collisionTestBtT = function(obj1, obj2) {
     if (
       obj1.x < obj2.x + obj2.w &&
       obj1.x + obj1.w > obj2.x &&
       obj1.y < obj2.y + obj2.h &&
       obj1.y + obj1.h > obj2.y) {
       return true;
     } else {
       return false, inGround=false;
     }
}

