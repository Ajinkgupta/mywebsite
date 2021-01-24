function myFunction() {
  document.getElementById("rules").style.display = "block";
}
function myFunction12() {
  document.getElementById("rules").style.display = "none";
}
function myFunction13() {
  document.getElementById("test").style.display = "block";
}
function myFunction14() {
  document.getElementById("score").style.display = "block";
}

document.getElementById("btn12").addEventListener("click", function(){
    var timeleft = 600;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft + 
    "&nbsp"+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});



(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect=numCorrect+4;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
     
      // if answer is wrong or blank
      else{
 
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${20}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "<img src='https://www.theajinkgupta.tk/projects/quiz/question1.jpg'>:JEE MAIN 2019 ",
      answers: {
        a: "2<sup>20</sup>",
        b: "2<sup>20</sup>-1",
        c: "2<sup>20</sup>+1",
        d: "2<sup>21</sup>"
      },
      correctAnswer: "a"
    },
    {
      question: "<img src='https://www.theajinkgupta.tk/projects/quiz/question2.jpg'>",
      answers: {
        a: "21",
        b: "25",
        c: "27",
        d: "28"
      },
      correctAnswer: "b"
    },
    {
      question: "<img src='https://www.theajinkgupta.tk/projects/quiz/question3.jpg'>",
      answers: {
        a: "m=n=78",
        b: "n=m-8",
        c: "m+n=68",
        d: "m=n=68"
      },
      correctAnswer: "a"
    },
    {
      question: "<img src='https://www.theajinkgupta.tk/projects/quiz/question4.jpg'>",
      answers: {
        a: "306",
        b: "360",
        c: "310",
        d: "288"
      },
      correctAnswer: "c"
    },
    {
      question: "<img src='https://www.theajinkgupta.tk/projects/quiz/question5.jpg'>",
      answers: {
        a: "80",
        b: "60",
        c: "100",
        d: "40"
      },
      correctAnswer: "d"
    }
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
