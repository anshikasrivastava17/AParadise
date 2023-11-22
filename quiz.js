//Question bank
var questionBank= [
    {
        question : 'Before drifting off to sleep, who is the person you bid goodnight to every day?',
        option : ['Mom','Dad','Kichi','Mai apni fav hun'],
        answer : 'Kichi'
    },
    {
        question : 'What was the day of the week when you were born? (Dont look up the calendar)',
        option : ['Saturday','Wednesday','Friday','Sunday'],
        answer : 'Sunday'
    },
    {
        question : 'What is your "role" in groups according to you ',
        option : ['The Mom','Party Animal','Joker','Lil Kiddo'],
        answer : 'Lil Kiddo'
    },
    {
        question : 'What is the one thing people instantly adore the most in you',
        option : ['Beauty','Chirpiness','Laughter','Personality'],
        answer : 'Chirpiness'
    },
    {
        question : 'Apara Agarwal once said -  ',
        option : ['Burger is love','Bhai I love you','This is limit','Aj mera bday hai'],
        answer : 'This is limit'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var celebrateButton = document.getElementById('celebrateButton');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q'+(i+1)+'. '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block';
        if(score === 5)
        celebrate();
}}

//click events to next button
next.addEventListener('click',nextQuestion);
// celebrateButton.addEventListener('click', celebrate);
//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

function celebrate() {
    celebrateButton.style.display = 'block';
    alert("Congratulations! You scored 5 points. Time to celebrate!");
    window.location.href = 'celebrate.html';
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();