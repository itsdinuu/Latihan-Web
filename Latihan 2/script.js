const questions = [
    { question: "Siapa Kaisar Romawi pertama?", "options": ["Julius Caesar", "Augustus", "Nero", "Caligula"], "correct": 1 },
    { question: "Siapa tokoh sejarah yang terkenal dengan kalimat 'Veni, Vidi, Vici'?", "options": ["Alexander Agung", "Julius Caesar", "Napoleon Bonaparte", "Genghis Khan"], "correct": 1 },
    { question: "Negara mana yang memiliki populasi terbanyak di dunia?", "options": ["India", "Amerika Serikat", "China", "Brasil"], "correct": 2 },
    { question: "Apa nama wilayah terdalam di Palung Mariana?", "options": ["Horizon Deep", "Challenger Deep", "Tonga Trench", "Mariana Hollow"], "correct": 1 },
    { question: "Di mana letak titik terjauh dari pusat bumi?", "options": ["Gunung Everest", "Chimborazo, Ekuador", "Mauna Kea", "Titik Nemo"], "correct": 1 },
    { question: "Negara mana yang memiliki perbatasan darat dengan jumlah negara terbanyak?", "options": ["Tiongkok", "Rusia", "Brasil", "India"], "correct": 0 },
    { question: "Danau terdalam di dunia adalah?", "options": ["Danau Superior", "Danau Tanganyika", "Danau Baikal", "Laut Kaspia"], "correct": 2 },
    { question: "Apa nama formasi batuan tertinggi di dunia?", "options": ["El Capitan", "K2", "Trango Towers", "Aconcagua"], "correct": 2 },
    { question: "Laut yang memiliki suhu paling dingin?", "options": ["Laut Bering", "Laut Weddell", "Laut Norwegia", "Laut Kara"], "correct": 1 },
    { "question": "Pulau mana yang memiliki spesies paling endemik di dunia?", "options": ["Borneo", "Galapagos", "Madagaskar", "Sumatra"], "correct": 2 },

];

let currentQuestionIndex = 0;
let answered = false;

function loadQuestion() {
    answered = false;
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "btn btn-outline-primary d-block w-100 mt-2";
        button.textContent = option;
        button.onclick = () => checkAnswer(index, button);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex, button) {
    if (answered) return;
    answered = true;

    const feedback = document.getElementById("feedback");
    if (selectedIndex === questions[currentQuestionIndex].correct) {
        feedback.textContent = "Jawaban Benar!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Jawaban Salah!";
        feedback.style.color = "red";
    }

    // Disable all buttons after answering
    document.querySelectorAll("#options button").forEach(btn => {
        btn.disabled = true;
    });
}

function nextQuestion() {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    document.getElementById("feedback").textContent = "";
    loadQuestion();
}

loadQuestion();
