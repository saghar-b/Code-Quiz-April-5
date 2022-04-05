let qizeSubbBut = document.querySelector(".start-btn");
let divStart = document.querySelector("#start")
let question1 = document.querySelector("#q1");
let question2 = document.querySelector("#q2");
let question3 = document.querySelector("#q3");
let question4 = document.querySelector("#q4");
let initial = document.querySelector("#initial");
let initialBtn = document.querySelector("#initialBtn");
let cancleBtn = document.querySelector("#cancel");
let playAgainBtn = document.querySelector("#playAgainBtn");
let divAllDone = document.body.querySelector(".allDone")
let divResult = document.body.querySelector(".result")
let qArray = [];
let divQuestions = document.querySelector(".questionbtn");
let count = 0;
let timerInterval;
let correctAns = 0
let qTime = 30; //set the timer to 30second
var highScoreArray = [];
let HeighesScore = 0;
//get the HighestScore from the local storage
highScoreArray = JSON.parse(localStorage.getItem("HighestScore"));

//Start quiz button click
qizeSubbBut.addEventListener("click", function () {
    generateQuestions();
    showQuestions(count);
    divQuestions.setAttribute("style", "visibility: visible");
    divStart.setAttribute("style", "visibility: hidden");
    heighestScore();
    qTime = 30;
    setTime();

});

//Question Buttons clicl
divQuestions.addEventListener("click", function (event) {
    let element = event.target;
    if (element.matches(".optBtn")) {
        let dataName = element.getAttribute("data-name");

        if (dataName == qArray[count].answer) {
            correctAns++;
            qTime += 5;
            divQuestions.querySelector("p").textContent = "Correct Answer";
        }
        else {
            qTime -= 5;
            divQuestions.querySelector("p").textContent = "Wrong Answer";

        }
        if (count < qArray.length - 1) {
            count++;
            showQuestions(count);
        }
        else {
            hideDivQuestionbtn();
        }
    }
});

// Initial button click
initialBtn.addEventListener("click", function () {
    var score = {
        initial: initial.value,
        score: correctAns,
    }
    highScoreArray.push(score);
    localStorage.setItem("HighestScore", JSON.stringify(highScoreArray));
    divAllDone.setAttribute("style", "visibility:hiddle")
    divResult.setAttribute("style", "visibility:visible")
    if (!initial.value) {
        initial.value = "NA"
    }
    showResult(initial.value)
});

// Clear Highscore button on click
cancleBtn.addEventListener("click", function () {

    divResult.querySelector("#scoresLable").remove();

});

// play again button click
playAgainBtn.addEventListener("click", function () {
    divResult.setAttribute("style", "visibility:hiddlen");
    divStart.setAttribute("style", "visibility: visible");

});

// make the question button hidden
function hideDivQuestionbtn() {
    divQuestions.setAttribute("style", "visibility : hidden")
    divQuestions.querySelector("#q1").setAttribute("style", "visibility: hiddle")
    divQuestions.querySelector("#q2").setAttribute("style", "visibility: hiddle")
    divQuestions.querySelector("#q3").setAttribute("style", "visibility: hiddle")
    divQuestions.querySelector("#q4").setAttribute("style", "visibility: hiddle")
    showAllDone();
}

// show allDone Section
function showAllDone() {
    divAllDone.setAttribute("style", "visibility: visible");
    divAllDone.querySelector('h3').textContent = `Your final score is: ${correctAns}`
}

//Show result section
function showResult(init) {
    for (let i = 0; i < highScoreArray.length; i++) {
        if (highScoreArray[i].initial == init) {
            let liTag = document.createElement("li");
            liTag.textContent = highScoreArray[i].initial + ":    " + highScoreArray[i].score;
            divResult.querySelector("#scoresLable").appendChild(liTag)
        }
    }
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

//find the heighest score from the highScoreArray array
function heighestScore() {

    for (let i = 0; i < highScoreArray.length; i++) {
        if (highScoreArray[i].score > HeighesScore) {
            HeighesScore = highScoreArray[i].score;
        }
    }
    document.querySelector("#score").textContent = "Highest Score is: " + HeighesScore;
}

// question object
function questions(country, opt1, opt2, opt3, opt4, answer) {
    this.country = country,
        this.opt1 = opt1,
        this.opt2 = opt2,
        this.opt3 = opt3,
        this.opt4 = opt4,
        this.answer = answer
}

//generate the questions and add them to qArray
function generateQuestions() {
    let q1 = new questions("Mexico", "Santiago", "Tijuana", "León", "Mexico City", "Mexico City")
    let q2 = new questions("Iran", "Esfahan", "Tehran", "Yazd", "IStambol", "Tehran")
    let q3 = new questions("South Korea", "Seoul", "Changwon", "Pyongyang", "Suwon", "Seoul")
    let q4 = new questions("Brazil", "São Paulo", "Brasília", "Manaus", "Salvador", "Brasília")
    let q5 = new questions("Japan", "São Paulo", "Tokyo", "Koyoto", "Nara", "Tokyo")
    let q6 = new questions("Canada", "Ottawa", "Vancouver", "Calgary", "Non of the Above", "Ottawa")
    let q7 = new questions("United State of America", "Washington State", "Washington, D.C.", "New york", "Texas", "Washington, D.C.")
    let q8 = new questions("United Kingdom", "Birmingham", "Manchester", "London", "Non of the Above", "London")
    qArray.push(q1)
    qArray.push(q2)
    qArray.push(q3)
    qArray.push(q4)
    qArray.push(q5)
    qArray.push(q6)
    qArray.push(q7)
    qArray.push(q8)

}

// timer function
function setTime() {

    timerInterval = setInterval(function () {
        qTime--;
        document.querySelector("#time").textContent = "Time: " + qTime;
        if (qTime <= 0) {
            clearInterval(timerInterval);
            document.querySelector("#time").textContent = "Time: 0";
            hideDivQuestionbtn();

        }
    }, 1000);
}

