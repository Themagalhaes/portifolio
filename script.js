function ampliarImagem(src) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("img-ampliada");

  img.src = src;
  lightbox.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function fecharImagem() {
  document.getElementById("lightbox").style.display = "none";
  document.body.style.overflow = "auto";
}

const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const letras =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
const alfabeto = letras.split("");

const tamanhoFonte = 16;

let colunas = canvas.width / tamanhoFonte;

let posicoesY = [];
function inicializarColunas() {
  colunas = canvas.width / tamanhoFonte;
  posicoesY = [];
  for (let x = 0; x < colunas; x++) {
    posicoesY[x] = Math.random() * -100;
  }
}
inicializarColunas();

window.addEventListener("resize", inicializarColunas);

function efeitomatrix() {
  ctx.fillStyle = "rgba(10, 15, 28, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.shadowBlur = 12;
  ctx.shadowColor = "#ffffff";

  ctx.fillStyle = "#7c3aed";
  ctx.font = tamanhoFonte + "px monospace";

  for (let i = 0; i < posicoesY.length; i++) {
    const caractere = alfabeto[Math.floor(Math.random() * alfabeto.length)];

    const x = i * tamanhoFonte;

    const y = posicoesY[i] * tamanhoFonte;

    ctx.fillText(caractere, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      posicoesY[i] = 0;
    }

    posicoesY[i]++;
  }

  ctx.shadowBlur = 0;
}

setInterval(efeitomatrix, 33);
