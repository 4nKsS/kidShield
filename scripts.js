const questaoEl = document.getElementById('question');
const proximoBtn = document.getElementById('proximo__btn');
const respostaBtn = document.getElementById('respostas');


let questaoIndex = 0;
let score = 0;

// Array de perguntas e respostas do quiz
const questions = [
    {
        question: "Por que a proteção de dados é importante para crianças?",
        answers: [
            { id: 1, text: "Para que elas possam comprar tudo o que querem online.", correct: false, feedback: "Isso não é verdade. A proteção de dados visa proteger as crianças de riscos online." },
            { id: 2, text: "Para protegê-las de ameaças online, como assédio e exploração.", correct: true, feedback: "Exatamente! Proteger as crianças de perigos online é fundamental para o seu bem-estar." },
            { id: 3, text: "Para que elas fiquem famosas nas redes sociais.", correct: false, feedback: "A fama nas redes sociais não deve ser a prioridade. A segurança e privacidade das crianças são mais importantes." }
        ]
    },
    {
        question: "Qual das seguintes ações NÃO é recomendada para proteger as crianças online?",
        answers: [
            { id: 1, text: "Definir limites de tempo de uso da internet.", correct: false, feedback: "Estabelecer limites de tempo é uma boa prática para garantir um uso saudável da internet." },
            { id: 2, text: "Monitorar o conteúdo que seu filho acessa.", correct: false, feedback: "Acompanhar o que seu filho faz online é importante para garantir sua segurança." },
            { id: 3, text: "Compartilhar a senha do Wi-Fi com todos os amigos.", correct: true, feedback: "Compartilhar senhas pode comprometer a segurança da rede e expor seus dados a pessoas desconhecidas." }
        ]
    },
    {
        question: "Por que é importante questionar o conteúdo visto em posts de influenciadores digitais?",
        answers: [
            { id: 1, text: "Porque todos os influenciadores são mentirosos.", correct: false, feedback: "Nem todos os influenciadores são desonestos, mas é sempre bom ser crítico e verificar as informações." },
            { id: 2, text: "Porque muitos conteúdos podem ser pagos, enganosos e perigosos.", correct: true, feedback: "Muitos posts são patrocinados ou contêm informações falsas. É importante ter senso crítico." },
            { id: 3, text: "Porque é divertido criticar tudo.", correct: false, feedback: "Crítica sem fundamento não ajuda ninguém. O objetivo é analisar e entender o conteúdo de forma responsável." }
        ]
    },
    {
        question: "O que você deve fazer antes de baixar um aplicativo ou jogo para seu filho?",
        answers: [
            { id: 1, text: "Verificar a idade mínima recomendada e ler as avaliações de outros usuários.", correct: true, feedback: "Essa é uma ótima prática! A idade recomendada indica se o conteúdo é adequado e as avaliações podem alertar sobre possíveis problemas." },
            { id: 2, text: "Baixar o primeiro que aparecer na lista.", correct: false, feedback: "Não faça isso! Verifique sempre a reputação do aplicativo antes de instalar." },
            { id: 3, text: "Não se preocupar, todos os aplicativos são seguros.", correct: false, feedback: "Infelizmente, nem todos os aplicativos são seguros. É importante tomar precauções para proteger seu filho." }
        ]
    },
    {
        question: "Por que é importante conversar abertamente com seu filho sobre suas experiências online?",
        answers: [
            { id: 1, text: "Para espionar o que ele está fazendo.", correct: false, feedback: "O objetivo não é espionar, mas sim construir um relacionamento de confiança." },
            { id: 2, text: "Para construir confiança e ajudá-lo a lidar com situações difíceis.", correct: true, feedback: "A comunicação aberta ajuda seu filho a se sentir seguro para compartilhar suas preocupações e buscar ajuda quando necessário." },
            { id: 3, text: "Para mostrar quem manda na casa.", correct: false, feedback: "O diálogo deve ser baseado no respeito mútuo e na confiança." }
        ]
    },
    {
        question: "Qual a importância de monitorar as compras online do seu filho?",
        answers: [
            { id: 1, text: "Para garantir que ele não caia em golpes e compre produtos seguros.", correct: false, feedback: "Monitorar as compras é importante para evitar fraudes e proteger o dinheiro da família." },
            { id: 2, text: "Para controlar cada centavo gasto.", correct: false, feedback: "O controle excessivo pode gerar conflitos. O objetivo é orientar e ensinar sobre responsabilidade financeira." },
            { id: 3, text: "Para saber o que ele está comprando para você também.", correct: true, feedback: "É importante estar ciente dos interesses do seu filho, mas o foco deve ser na segurança das compras online." }
        ]
    },
    {
        question: "O que significa 'configurações de privacidade' nas redes sociais?",
        answers: [
            { id: 1, text: "A forma como você decora seu perfil.", correct: false, feedback: "As configurações de privacidade não têm nada a ver com a aparência do seu perfil." },
            { id: 2, text: "As opções que permitem controlar quem pode ver suas informações e posts.", correct: true, feedback: "Essas configurações são essenciais para proteger sua privacidade online." },
            { id: 3, text: "Um tipo de jogo online.", correct: false, feedback: "Essa opção está completamente errada." }
        ]
    },
    {
        question: "Qual a importância de criar senhas fortes?",
        answers: [
            { id: 1, text: "Para impressionar seus amigos.", correct: false, feedback: "Senhas fortes não servem para impressionar ninguém." },
            { id: 2, text: "Para dificultar o acesso de pessoas não autorizadas às suas contas.", correct: false, feedback: "Senhas fortes são a melhor forma de proteger suas contas contra invasões." },
            { id: 3, text: "Senhas fortes são difíceis de lembrar.", correct: true, feedback: "É verdade que senhas complexas podem ser mais difíceis de memorizar, mas existem ferramentas para ajudar a gerenciá-las." }
        ]
    },
    {
        question: "Qual o principal risco ao compartilhar informações pessoais com estranhos online?",
        answers: [
            { id: 1, text: "Possibilidade de manipulação ou exploração.", correct: true, feedback: "Compartilhar informações com desconhecidos pode colocar você em situações de perigo." },
            { id: 2, text: "Não há riscos, pois a internet é segura.", correct: false, feedback: "A internet não é totalmente segura. É preciso ter cuidado com quem você compartilha seus dados." },
            { id: 3, text: "Apenas receber dicas e conselhos", correct: false, feedback: "Receber dicas de estranhos online pode ser perigoso." }
        ]
    },
    {
        question: "Qual das seguintes práticas é a mais importante para manter a segurança online?",
        answers: [
            { id: 1, text: "Usar senhas diferentes para cada conta.", correct: true, feedback: "Correto! Usar senhas únicas dificulta o acesso não autorizado às suas contas." },
            { id: 2, text: "Compartilhar informações pessoais em redes sociais abertamente.", correct: false, feedback: "Incorreto. Compartilhar informações pessoais pode comprometer sua privacidade e segurança." },
            { id: 3, text: "Clicar em links suspeitos recebidos por e-mail ou mensagem.", correct: false, feedback: "Incorreto. Clicar em links suspeitos pode levar a sites maliciosos e roubo de dados." }
        ]
    },
];

// Função para iniciar o quiz
function iniciarQuiz() {
    questaoIndex = 0;
    score = 0;
    proximoBtn.innerHTML = "Próxima";
    showQuestion();
};

// Função para resetar o estado dos botões e respostas
function resetState() {
    proximoBtn.style.display = "none";
    while (respostaBtn.firstChild) {
        respostaBtn.removeChild(respostaBtn.firstChild);
    }
};

// Função para exibir a questão atual e suas respostas
function showQuestion() {
    resetState();
    let questao = questions[questaoIndex];
    let questaoNo = questaoIndex + 1;
    questaoEl.innerHTML = questaoNo + ". " + questao.question;

    questao.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        respostaBtn.appendChild(button);
        feedback.innerHTML = " "
    })
};

// Função chamada ao selecionar uma resposta
function selectAnswer(e) {
    answers = questions[questaoIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];

    const selectecBtn = e.target;
    const isCorrect = selectecBtn.dataset.id == correctAnswer.id;

    Array.from(respostaBtn.children).forEach((button) => {
        button.disabled = true;
    });
    proximoBtn.style.display = "block"

    // Exibe o feedback da resposta selecionada
    const feedbackElement = document.createElement('p');
    feedbackElement.textContent = questions[questaoIndex].answers.find(answer => answer.id == e.target.dataset.id).feedback;
    document.getElementById('feedback').appendChild(feedbackElement);
    if (isCorrect) {
        selectecBtn.classList.add('correct');
        feedbackElement.classList.add('feedback__correct');

        score++
    } else {
        selectecBtn.classList.add('incorrect');
        feedbackElement.classList.add('feedback__incorrect');
    }
};

// Função para exibir a pontuação final
function showScore() {
    resetState();
    questaoEl.innerHTML = `Você acertou ${score} de ${questions.length} questões!p`;
    proximoBtn.innerHTML = "Reiniciar";
    proximoBtn.style.display = "block";
    document.getElementById('feedback').innerHTML = "";
};

// Função para avançar para a próxima questão ou mostrar o resultado final
function handleNextButton() {
    questaoIndex++;
    if (questaoIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};

// Evento de clique do botão "Próxima" ou "Reiniciar"
proximoBtn.addEventListener("click", () => {
    if (questaoIndex < questions.length) {
        handleNextButton();
    } else {
        iniciarQuiz();
    }
});

iniciarQuiz();