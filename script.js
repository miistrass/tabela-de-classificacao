var jogadores = [];

function adicionarJogador() {
  var nome = document.getElementById("novoJogador");
  jogadores.push({
    nome: nome.value,
    vitoria: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
  nome.value = "";
  exibeJogadoresNaTela(jogadores);
}

function calculaPontos(jogador) {
  var pontos = jogador.vitoria * 3 + jogador.empates;
  return pontos;
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitoria + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento +=
      "<td><button onClick='zerarPontos(" + i + ")'>Zerar Tudo</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitoria++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  for (e = 0; e < jogadores.length; e++) {
    jogadores[e].empates++;
    jogadores[e].pontos = calculaPontos(jogadores[e]);
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function zerarPontos(i) {
  var jogador = jogadores[i];
  jogadore.vitoria = 0;
  jogadore.empates = 0;
  jogadore.derrotas = 0;
  jogadore.pontos = 0;

  exibeJogadoresNaTela(jogadores);
}