function Base(){
  this.x = Math.floor(Math.random() * 600);
  this.y = 480;
  this.width = 100;
  this.height = 30;
  this.color = "blue";
  this.imagem = new Image();
  this.imagem.src = "Imagem/base.png";
}

Base.prototype.desenhar = function (ctx) {
  //ctx.fillStyle = this.color;
  ctx.drawImage(this.imagem,0,0,100,30,this.x,this.y,this.width,this.height);
  ctx.strokeStyle = "white";
};
