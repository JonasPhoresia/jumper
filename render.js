
  criaTela = function(n,w,h,color){
    c = document.createElement("canvas");
    ctx = c.getContext("2d");
    document.body.appendChild(c);
    n = c.setAttribute("Id", n);
    w = c.setAttribute("width",w);
    h = c.setAttribute("height",h);
    ctx.fillStyle=color;
    ctx.fillRect(0,0,c.width,c.height);
  }
  function desenha(x,y,w,h,color){
     ctx.fillStyle = color
    ctx.fillRect(x, y, w, h);
  }
  function desenhaImagem(x,y,source){
    img = new Image();
    img.src = source;
    img.onload = function(){
    ctx.drawImage(img, x, y,c.width,c.height)
    }
  }