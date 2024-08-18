// console.log("this is to generate quiz");

const quizData = [
    {
        question: 'What does HTML stand for?',
        options: ['HyperText Markup Language', 'HomeTool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyperlinking Text Module Language'],
        answer: 'HyperText Markup Language',
    },
    {
        question: 'Which HTML tag is used to create a hyperlink?',
        options: ['<a>', '<link>', '<href>', '<nav>'],
        answer: '<a>',
    },
    {
        question: 'Which attribute is used to define the source of an image in HTML?',
        options: ['src', 'href', 'link', 'img'],
        answer: 'src',
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        options: ['<br>', '<break>', '<lb>', '<line>'],
        answer: '<br>',
    },
    {
        question: 'How can you make a numbered list in HTML?',
        options: ['<ul>', '<ol>', '<list>', '<nl>'],
        answer: '<ol>',
    },
    {
        question: 'Which tag is used to define a table row in HTML?',
        options: ['<th>', '<td>', '<tr>', '<table>'],
        answer: '<tr>',
    },
    {
        question: 'What does CSS stand for?',
        options: ['Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
        answer: 'Cascading Style Sheets',
    },
    {
        question: 'Which CSS property is used to change the background color?',
        options: ['background-color', 'color', 'bg-color', 'background'],
        answer: 'background-color',
    },
    {
        question: 'How do you make text bold in CSS?',
        options: ['font-style: bold', 'font-weight: bold', 'text-decoration: bold', 'font-bold: true'],
        answer: 'font-weight: bold',
    },
    {
        question: 'Which CSS property is used to control the spacing between lines of text?',
        options: ['spacing', 'line-height', 'text-height', 'text-spacing'],
        answer: 'line-height',
    },
    {
        question: 'Which property is used to change the font of an element?',
        options: ['font-family', 'text-font', 'font-style', 'font-weight'],
        answer: 'font-family',
    },
    {
        question: 'How do you select an element with the class name "header" in CSS?',
        options: ['.header', '#header', 'header', '*header'],
        answer: '.header',
    },
    {
        question: 'Which utility class in Tailwind CSS is used to apply margin?',
        options: ['m-', 'padding-', 'margin-', 'gap-'],
        answer: 'm-',
    },
    {
        question: 'In Tailwind CSS, how do you apply a text color of red?',
        options: ['text-red', 'color-red', 'text-red-500', 'font-red'],
        answer: 'text-red-500',
    },
    {
        question: 'Which utility class sets an element to be flex in Tailwind CSS?',
        options: ['block', 'inline-block', 'flex', 'grid'],
        answer: 'flex',
    },
    {
        question: 'How can you center an element horizontally using Tailwind CSS?',
        options: ['mx-auto', 'center', 'align-center', 'ml-center'],
        answer: 'mx-auto',
    },
    {
        question: 'Which utility class sets the width to full in Tailwind CSS?',
        options: ['w-full', 'width-full', 'block-full', 'full-width'],
        answer: 'w-full',
    },
    {
        question: 'How do you apply a hover effect to change the background color to blue in Tailwind CSS?',
        options: ['hover:bg-blue-500', 'hover:background-blue', 'bg-hover-blue', 'hover-color-blue'],
        answer: 'hover:bg-blue-500',
    },
    {
        question: 'Which keyword is used to declare a variable in JavaScript?',
        options: ['let', 'var', 'const', 'All of the above'],
        answer: 'All of the above',
    },
    {
        question: 'What is the correct syntax for referring to an external JavaScript file?',
        options: ['<script href="filename.js">', '<script src="filename.js">', '<script link="filename.js">', '<script file="filename.js">'],
        answer: '<script src="filename.js">',
    },
    {
        question: 'How do you write "Hello World" in an alert box in JavaScript?',
        options: ['msg("Hello World");', 'alertBox("Hello World");', 'alert("Hello World");', 'msgBox("Hello World");'],
        answer: 'alert("Hello World");',
    },
    {
        question: 'Which operator is used to assign a value to a variable in JavaScript?',
        options: ['x', '=', '==', '==='],
        answer: '=',
    },
    {
        question: 'Which method is used to round a number to the nearest integer in JavaScript?',
        options: ['Math.round()', 'Math.floor()', 'Math.ceil()', 'Math.random()'],
        answer: 'Math.round()',
    },
    {
        question: 'What will the following code return: Boolean(0)?',
        options: ['false', 'true', 'null', 'undefined'],
        answer: 'false',
    },
    {
        question: 'Which event occurs when a user clicks on an HTML element in JavaScript?',
        options: ['onmouseclick', 'onchange', 'onclick', 'onhover'],
        answer: 'onclick',
    }
];


const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById("showAnswer");

let currentQuestion = 0;
let score = 0;
let incorrectAnswer = [];

function shuffleArray(array){
    for (let i = array.length-1 ; i> 0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i],array[j]] = [array[j],array[i]]
    }
}

function displayQuestion(){
    const questionData = quizData[currentQuestion];
    const questionElement = document.createElement('div');

    questionElement.className = 'question text-lg font-semibold mb-4 text-left ';
    questionElement.innerHTML = questionData.question;

    const optionsElement = document.createElement('div');
    optionsElement.className = "options mb-4 text-left";

    const shuffledOptions = [...questionData.options]
    shuffleArray(shuffleArray)

    for(let i =0; i < shuffledOptions.length ; i++){
        const option = document.createElement('label');
        option.className = "option block mb-2";

        const radio = document.createElement('input');
        radio.type = "radio";
        radio.name = "quiz";
        radio.value= shuffledOptions[i];
        radio.className = "mr-2";

        const optionText = document.createTextNode(shuffledOptions[i])
        option.appendChild(radio);
        option.appendChild(optionText);
        optionsElement.appendChild(option)
    

    }
    quizContainer.innerHTML = "";
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
    


    
}

function checkAnswer (){
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if(selectedOption){
        const answer = selectedOption.value;
        if(answer === quizData[currentQuestion].answer){
            score ++;
    } else{
        incorrectAnswer.push ({
            question: quizData[currentQuestion].question,
            incorrectAnswer: answer,
            correctAnswer : quizData[currentQuestion].answer,
        });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if(currentQuestion < quizData.length){
        displayQuestion();
    }else{
        displayResult();
    }
}
}

function displayResult(){
    quizContainer.classList.add('hidden');
    submitButton.classList.add('hidden');
    retryButton.classList.add('hidden');
    showAnswerButton.classList.remove('hidden');
    resultContainer.innerHTML = `Your score ${score} out of ${quizData.length}!`;
}
function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswer = [];
    quizContainer.classList.remove('hidden');
    submitButton.classList.remove('hidden');
    retryButton.classList.add('hidden');
    showAnswerButton.classList.add('hidden');
    resultContainer.innerHTML = '';
    displayQuestion();
  }


  function showAnswer() {
    quizContainer.classList.add('hidden');
    submitButton.classList.add('hidden');
    retryButton.classList.remove('hidden');
    showAnswerButton.classList.add('hidden');
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p class="mb-4">
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();
