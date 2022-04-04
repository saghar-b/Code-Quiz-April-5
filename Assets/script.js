let qizeSubbBut = document.querySelector(".start-btn");
let divStart = document.querySelector("#start")
let question1 = document.querySelector("#q1");
let question2 = document.querySelector("#q2");
let question3 = document.querySelector("#q3");
let question4 = document.querySelector("#q4");
let initial = document.querySelector("#initial");
let initialBtn = document.querySelector("#initialBtn");
let cancleBtn=document.querySelector("#cancel");
let playAgainBtn=document.querySelector("#playAgainBtn");
let qArray = [];
let divQuestions = document.querySelector(".questionbtn");
let count = 0;
let index = 0;
let timerInterval;
// const myInterval = setInterval(myTimer, 1000);
let correctAns = 0
let qTime = 0;
var highScoreArray=[];
// localStorage.setItem("HighestScore",JSON.stringify(highScoreArray));
highScoreArray= JSON.parse( localStorage.getItem("HighestScore"));
//Start quiz button 

qizeSubbBut.addEventListener("click", function () {
    generateQuestions();
    // console.log("start quiz")
    showQuestions(count);
    divQuestions.setAttribute("style", "visibility: visible");
    divStart.setAttribute("style", "visibility: hidden");
    setTime();

});

//Question Buttons
divQuestions.addEventListener("click", function (event) {
    let element = event.target;
    if (element.matches(".optBtn")) {
        let dataName = element.getAttribute("data-name");
        // console.log()
        if (dataName == qArray[count].answer) {
            correctAns++;
            document.querySelector("#score").textContent = correctAns;
            divQuestions.querySelector("p").textContent = "Correct Answer";
        }
        else {
            divQuestions.querySelector("p").textContent = "Wrong Answer";
        }
        if (count < qArray.length - 1) {
            count++;
            showQuestions(count);


        }
        else {
            console.log(correctAns)

            hideDivQuestionbtn();
            stopTimer();
            document.body.querySelector(".allDone").setAttribute("style","visibility:visible")
        }
    }
});

initialBtn.addEventListener("click",function(){
    console.log("initial btn" + highScoreArray)
    var score={
        initial: initial.value,
        score : correctAns,
    }
    highScoreArray.push(score);
    localStorage.setItem("HighestScore",JSON.stringify(highScoreArray));
    document.body.querySelector(".allDone").setAttribute("style","visibility:hiddle")
    document.body.querySelector(".result").setAttribute("style","visibility:visible")

});

// cancleBtn.addEventListener("click", function(){

// });
playAgainBtn.addEventListener("click",function(){
    document.querySelector(".result").setAttribute("style","visibility:hiddlen");
    document.querySelector("#start").setAttribute("style", "visibility: visible");

});

function hideDivQuestionbtn() {
    divQuestions.setAttribute("style", "visibility : hidden")
    divQuestions.querySelector("#q1").setAttribute("style", "visibility: hiddle")
    divQuestions.querySelector("#q2").setAttribute("style", "visibility: hiddle")
    divQuestions.querySelector("#q3").setAttribute("style", "visibility: hiddle")
    divQuestions.querySelector("#q4").setAttribute("style", "visibility: hiddle")
}

function showQuestions(index) {

    divQuestions.querySelector("h4").textContent = `What is the Capital of ${qArray[count].country} ?`;
    // loadOptions(count);
    // console.log(index)
    question1.setAttribute("style", "visibility: visible")
    let opt1 = qArray[index].opt1;
    question1.setAttribute("data-name", opt1)
    // console.log("hhhhh"+question1.getAttribute("data-name"))
    question1.textContent = qArray[index].opt1;
    // question1

    question2.setAttribute("style", "visibility: visible")
    question2.setAttribute("data-name", qArray[index].opt2)
    question2.textContent = qArray[index].opt2;

    question3.setAttribute("style", "visibility: visible")
    question3.setAttribute("data-name", qArray[index].opt3)
    question3.textContent = qArray[index].opt3;

    question4.setAttribute("style", "visibility: visible")
    question4.setAttribute("data-name", qArray[index].opt4)
    question4.textContent = qArray[index].opt4;


}

function questions(country, opt1, opt2, opt3, opt4, answer) {
    this.country = country,
        this.opt1 = opt1,
        this.opt2 = opt2,
        this.opt3 = opt3,
        this.opt4 = opt4,
        this.answer = answer
}


function generateQuestions() {
    let q1 = new questions("NY", "Seattle", "Olampia", "NY", "Ranier", "NY")
    let q2 = new questions("Iran", "Seattle", "tehran", "Bellevuw", "Tacoma", "tehran")
    let q3 = new questions("Washington", "Seattle", "Olampia", "Bellevuw", "Tacoma", "Seattle")
    let q4 = new questions("Brezin", "Seattle", "nemidonam", "Bellevuw", "Tacoma", "nemidonam")
    qArray.push(q1)
    qArray.push(q2)
    qArray.push(q3)
    qArray.push(q4)
}

function stopTimer() {
    clearInterval(timerInterval);
}
function setTime() {

    timerInterval = setInterval(function () {
        qTime++;
        document.querySelector("#time").textContent = qTime;
    }, 1000);
}

