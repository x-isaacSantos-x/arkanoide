export default function PlayerStats(ctx, player, canvas) {
  // 🎯 Lógica para ganhar uma vida a cada 100 pontos
  if (player.score > 0 && player.score % 100 === 0 && !player._lifeGiven) {
    player.lives += 1;
    player._lifeGiven = true; // evita ganhar várias vidas no mesmo ponto
    console.log("Ganhou uma vida! ❤️");
  } else if (player.score % 100 !== 0) {
    // quando sai do múltiplo de 100, libera novamente
    player._lifeGiven = false;
  }

  // 🧍‍♂️ Nome do jogador
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(`Name: ${player.name}`, 20, 30);

  // ❤️ Vidas
  ctx.font = "20px Arial";
  ctx.fillStyle = "red";
  let gap = 0;
  for (let i = 0; i < player.lives; i++) {
    ctx.fillText("❤️", canvas.width / 2 + gap, 30);
    gap += 30;
  }

  // 💯 Pontuação
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(`Score: ${player.score}`, canvas.width - 140, 30);
}
