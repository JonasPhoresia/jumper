
var start;
let cH=0;
var inGround;
var cube = {
  x: 320 / 2,
  y: 20,
  x_velocity: 0,
  y_velocity: 0,
  w: 10,
  h: 20,
  jumping: true,
  color: "#ffffff"
};
var ground = {
  x: 40,
  y: 180,
  w: 200,
  h: 4
}
var ground2 = {
  x: 280,
  y: 120,
  w: 40,
  h: 4
}
btnObserver = function() {
  if (upBtn == true && cube.jumping == false){
    cube.y_velocity -= 10;
    cH+=1;
    if(cH>7){cube.jumping=true,cH=0}
  }//else{cH=0}
 
  if (downBtn && inGround==false) {
    cube.y_velocity += 10;
  }
  if (rightBtn) {
    cube.x_velocity += 0.5;
  }
  if (leftBtn) {
    cube.x_velocity -= 0.5;
  }
  requestAnimationFrame(btnObserver)
}
physic = function(){
  if(cube.y>=220){
    cH=0
    cube.y = 220;
    cube.y_velocity += 0;
    cube.jumping = false;
  }
  if( cube.x < ground2.x + ground2.w &&
       cube.x + cube.w > ground2.x &&
       cube.y < ground2.y + ground2.h &&
       cube.y + cube.h > ground2.y) {
          cH = 0
          cube.y = ground2.y - cube.h;
          cube.y_velocity += 0;
          cube.jumping = false;
       }
   if(inGround){
    cH=0
    cube.y= ground.y-cube.h;
    cube.y_velocity += 0;
    cube.jumping = false;
 
  }
  cube.y_velocity += 1.5;//gravity
  cube.x += cube.x_velocity;
  cube.y += cube.y_velocity;
  cube.x_velocity *= 0.9;//friction
  cube.y_velocity *= 0.1;//friction
  if(cube.x < -cube.w){
    cube.x= 320
  }else if(cube.x > 320){
    cube.x = 0 - cube.w;
  }
  requestAnimationFrame(physic)
}

var tela = criaTela("tela",320,240,"#000000");
render = function(){
desenha(0,0,320,240,"#000000")
desenha(cube.x,cube.y,cube.w,cube.h,cube.color);
desenha(ground.x,ground.y,ground.w,ground.h,"green")
desenha(ground2.x,ground2.y,ground2.w,ground2.h,"green")
requestAnimationFrame(render)
  
}
KeyPad(4);
run = function(){
  t1 = collisionTestBtT(cube,ground);
    if(t1){
    inGround = true;
    }else{
    }
    requestAnimationFrame(run)
  
}
start = function(){
  btnObserver();
  physic();
  run();
  render();
}

window.requestAnimationFrame(start);