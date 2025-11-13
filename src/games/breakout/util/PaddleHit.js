export default function PaddleHit(ballObj, paddleProps) {
  if (
    ballObj.x < paddleProps.x + paddleProps.width &&
    ballObj.x > paddleProps.x &&
    paddleProps.y < paddleProps.y + paddleProps.height &&
    ballObj.y + ballObj.rad > paddleProps.y - paddleProps.height / 2
  ) {
    // 1️⃣ Calcula o ponto de colisão relativo ao centro do paddle
    let collidePoint = ballObj.x - (paddleProps.x + paddleProps.width / 2);

    // 2️⃣ Normaliza entre -1 e 1
    collidePoint = collidePoint / (paddleProps.width / 2);

    // 3️⃣ Calcula um ângulo mais dinâmico com base na posição e velocidade atual
    // máximo de inclinação = 75 graus (π/2.4 rad)
    let maxAngle = Math.PI / 2.4;
    let angle = collidePoint * maxAngle;

    // 4️⃣ Adiciona um pequeno efeito aleatório (para realismo)
    let randomFactor = (Math.random() - 0.5) * 0.15; // ±0.15 rad (~8.5°)
    angle += randomFactor;

    // 5️⃣ Mantém a velocidade mas muda direção conforme o ângulo
    let speed = ballObj.speed;

    ballObj.dx = speed * Math.sin(angle);
    ballObj.dy = -speed * Math.cos(angle);

    // 6️⃣ Opcional: dá um pequeno "boost" quando o impacto é nas pontas
    if (Math.abs(collidePoint) > 0.8) {
      ballObj.dx *= 1.1;
    }
  }
}
