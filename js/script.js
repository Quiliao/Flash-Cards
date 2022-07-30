function revelarResposta() {
  let resposta = document.querySelector("#resposta");
  resposta.classList.toggle("blur");
}
function proximaPergunta(pergunta) {
  let proximaPergunta = document.querySelector("#cardContainer");
  proximaPergunta.innerHTML = "";

  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "animate__animated", "animate__backInRight");

  cardDiv.innerHTML = `
  <div class="card-cabeçalho centralizar">
            <h1 class="card-titulo">O que é ${pergunta.title}?</h1>
          </div>

          <div id='resposta'class="card-conteudo blur"
            <p>
              ${pergunta.description}
            </p>
          </div>
  `;
  proximaPergunta.appendChild(cardDiv);
}

function buscarInformaçao() {
  fetch("https://flash.quickstaart.com/random")
    .then(function (resultado) {
      return resultado.json();
    })
    .then(function (resultadoJson) {
      proximaPergunta(resultadoJson);
    });
}

window.addEventListener("load", buscarInformaçao);
