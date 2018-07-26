function BarraStatus (){
  this.x = 0;
  this.y = 0;
  this.width = 700;
  this.height = 30;
  this.color = "gray";
}

BarraStatus.prototype.desenhar = function (ctx, vida,pontoAtual, combustivel, vy) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y,this.width,this.height);
  ctx.strokeStyle = "white";
  ctx.strokeRect(this.x,this.y,this.width,this.height);
  ctx.strokeStyle = "white";


  //Texto no Menu
  ctx.textAlign="start";
  ctx.fillStyle = 'white';
  ctx.font = '14pt Arial';
  ctx.fillText("Vida: ", 20, 21);
  ctx.fillText(vida, 70, 21);
  ctx.fillText("Pontos: ", 250, 21);
  ctx.fillText(pontoAtual, 380, 21);
  ctx.fillText("Combustivel: ", 450, 21);
  ctx.fillText(Math.trunc(combustivel), 610, 21);
  ctx.fillText("Vel. Pouso: ", 500, 71);
  if(vy<120){
    ctx.fillText("Bom", 620, 71);
  } else if (vy<150){
    ctx.fillText("Cuidado", 620, 70);
  } else {
    ctx.fillText("Ruim", 620, 71);
  }
};
