const questions = [
    "If economic globalisation is inevitable, it should primarily serve humanity rather than the interests of trans-national corporations.",
    "Our race has many superior qualities, compared with other races.",
    "The freer the market, the freer the people.",
    "The rich are too highly taxed.",
    "It’s a sad reflection on our society that something as basic as drinking water is now a bottled, branded consumer product.",
    "Abortion, when the woman’s life is not threatened, should always be illegal.",
    "Schools should not make classroom attendance compulsory.",
    "There are no savage and civilised peoples; there are only different cultures.",
    "The death penalty should be an option for the most serious crimes.",
    "In criminal justice, punishment should be more important than rehabilitation.",
    "You cannot be moral without being religious.",
    "A same sex couple in a stable, loving relationship should not be excluded from the possibility of child adoption."
];

const answers = [
    { value: "strongly_disagree", label: "Strongly Disagree" },
    { value: "somewhat_disagree", label: "Somewhat Disagree" },
    { value: "neutral", label: "Neutral" },
    { value: "somewhat_agree", label: "Somewhat Agree" },
    { value: "strongly_agree", label: "Strongly Agree" }
];

const surveyContainer = document.getElementById("survey-container");
let questionIndex = 0;

function updateLoadingBar() {
    const progress = ((questionIndex + 1) / questions.length) * 100;
    document.getElementById("loading-bar").style.width = progress + "%";
}

function showQuestion(index) {
    surveyContainer.innerHTML = ""; // Golește containerul înainte de a adăuga întrebare

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-container");

    const questionText = document.createElement("p");
    questionText.innerText = (index + 1) + ". " + questions[index];
    questionDiv.appendChild(questionText);

    const answerContainer = document.createElement("div");
    answerContainer.classList.add("answer-container");

    answers.forEach(answer => {
        const answerDiv = document.createElement("div");
        answerDiv.classList.add("answer-box");

        const input = document.createElement("input");
        input.type = "radio";
        input.name = `question${index}`;
        input.value = answer.value;

        const label = document.createElement("label");
        label.innerText = answer.label;

        answerDiv.appendChild(input);
        answerDiv.appendChild(label);
        answerContainer.appendChild(answerDiv);
    });

    questionDiv.appendChild(answerContainer);
    surveyContainer.appendChild(questionDiv);

    const nextButton = document.createElement("button");
    nextButton.id = "next-button";
    nextButton.innerText = "Next";
    nextButton.addEventListener("click", goToNextQuestion);
    nextButton.style.display = "block"; 
    surveyContainer.appendChild(nextButton);

    questionDiv.style.display = "block";
}

function goToNextQuestion() {
    if (questionIndex < questions.length - 1) {
        questionIndex++;
        showQuestion(questionIndex);
        updateLoadingBar();
    } else {
        window.location.href = 'mainpage.html';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    showQuestion(questionIndex);
    updateLoadingBar();
});
