// Função responsável por desenhar e movimentar a bolinha
export function BallMovement(ctx, ballObj) {
  // Cria uma nova bola com base nas propriedades do objeto
  let data = new Ball(ballObj.x, ballObj.y, ballObj.rad);

  // Desenha a bolinha no canvas
  data.draw(ctx);

  // Atualiza a posição da bolinha (movimento)
  ballObj.x += ballObj.dx;
  ballObj.y += ballObj.dy;
}

// Classe que define como a bolinha é desenhada
class Ball {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI); // usei 2π (círculo perfeito)
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();
  }
}
