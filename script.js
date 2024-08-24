const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em um belo dia de chuva, Reginaldo acordara às 7:30h atrasado para ir trabalhar. Reginaldo saiu para pegar o ônibus, mas infelizmente, acabou perdendo o “busão”; A única solução era de pegar o guarda-chuva que estáva na sua casa. O que Reginaldo deve fazer agora?",

        alternativas: [
            {
                texto: " Pegar o guarda-chuva",
                afirmacao: " Ele retorna para sua casa e pega o guarda-chuva para estar prevenido. "
            },
            {
                texto: " Espera o próximo ônibus ",
                afirmacao: " Prefere ficar no ponto mesmo e esperar que o próximo ônibus passe. "
            }
        ]
    },
    {
        enunciado: "Ele espera o próximo ônibus. O próximo ônibus chegou 15 minutos depois, ele estava bastante atrasado já. Chegando lá, o chefe vira pra ele e da uma bronca nele pelo atraso. O que você vai fazer? ",
        alternativas: [
            {
                texto: " Insultar o chefe e descontar a raiva nele.",
                afirmacao: " Ele xinga o patrão correndo o risco de perder o emprego. "
            },
            {
                texto: " Aceita a bronca, pois ele está realmente errado. ",
                afirmacao: " Sabe que está errado, por isso apenas aceita e fica em silêncio."
            }
        ]
    },
    {
        enunciado: "Após receber a bronca do chefe e aceitar pois você realmente estava errado, ele vai trabalhar normalmente, porém, aparece uma urgência e precisa sair do trabalho, mas está com muita demanda que seu chefe te passou. O que ele faz agora?",
        alternativas: [
            {
                texto: "Você decide sair por causa que a urgência era mais importante que o trabalho",
                afirmacao: " A urgência é extrema por isso decide atendê-la, logo que retornar, explicará ao chefe o porquê de ter saido."
            },
            {
                texto: " Decide não sair, pois as ordens foram dadas pelo chefe. ",
                afirmacao: " Mesmo que seja muito urgente, decide ficar pois havia acabado de receber uma bronca e se saisse seria mais um ponto negativo com o patrão. "
            }
        ]
    },
    {
        enunciado: " Reginaldo decidiu sair do trabalho para ir até a urgência que você tinha fora do serviço. Chegando lá ele descobre que não era nada, e se tratava de um trote... voltando para o serviço seu chefe fica muito bravo, pois ele avacalhou muitas vezes hoje. Ele decide demitir Reginaldo do serviço. ",
        alternativas: [
            {
                texto: " Reginaldo tenta se explicar de todas as formas para poder ficar no emprego.",
                afirmacao: " Ele tenta de todas as formas explicar a situação porém seu chefe não quer ouvir e o manda embora. "
            },
            {
                texto: " Entende a situação e simplesmente aceita. ",
                afirmacao: " Entende os motivos do patrão e recolhe seus pertences sem questionar pois sabia que independente do que fizesse não conseguiria seu emprego de volta. "
            }
        ]
    },
    {
        enunciado: " Enquanto saia triste do escritório onde trabalhava Reginaldo recebe uma ligação de um amigo muito chegado dizendo que tinha uma proposta de emprego para ele.  ",
        alternativas: [
            {
                texto: " Aceita a proposta ",
                afirmacao: " Reginaldo aceita a proposta contente pois foi algo inesperado que veio em boa hora."
            },
            {
                texto: " Não aceita por achar se tratar de outro trote.",
                afirmacao: " Reginaldo não aceita por achar que poderia ser um outro trote e acaba perdendo uma grande oportunidade de emprego."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
