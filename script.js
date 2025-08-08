// Flashcards de exemplo
let flashcards = [
    { pergunta: "Qual é a capital da França?", resposta: "Paris" },
    { pergunta: "Quem inventou a teoria da relatividade?", resposta: "Albert Einstein" },
    { pergunta: "O que é JavaScript?", resposta: "Uma linguagem de programação." }
];

let currentCardIndex = 0;

// Função para exibir o flashcard atual
function showFlashcard(index) {
    const questionText = document.getElementById("question-text");
    const answerText = document.getElementById("answer-text");
    const answerDiv = document.querySelector(".answer");

    questionText.textContent = flashcards[index].pergunta;
    answerText.textContent = flashcards[index].resposta;
    answerDiv.style.display = "none"; // Resposta escondida inicialmente
}

// Mostrar resposta
function showAnswer() {
    const answerDiv = document.querySelector(".answer");
    answerDiv.style.display = "block";
}

// Mudar para o próximo flashcard
function nextFlashcard() {
    currentCardIndex++;
    if (currentCardIndex >= flashcards.length) {
        currentCardIndex = 0; // Voltar ao primeiro card
    }
    showFlashcard(currentCardIndex);
}

// Adicionar novo flashcard
function addFlashcard() {
    const newQuestion = document.getElementById("new-question").value;
    const newAnswer = document.getElementById("new-answer").value;

    if (newQuestion && newAnswer) {
        flashcards.push({ pergunta: newQuestion, resposta: newAnswer });
        alert("Flashcard adicionado com sucesso!");
        document.getElementById("new-question").value = "";
        document.getElementById("new-answer").value = "";
    } else {
        alert("Por favor, preencha ambos os campos.");
    }
}

// Evento de clique para mostrar a resposta
document.getElementById("show-answer").addEventListener("click", showAnswer);

// Evento de clique para ir ao próximo flashcard
document.getElementById("next-card").addEventListener("click", nextFlashcard);

// Evento de clique para adicionar um novo flashcard
document.getElementById("add-flashcard-btn").addEventListener("click", addFlashcard);

// Exibir o primeiro flashcard
showFlashcard(currentCardIndex);
