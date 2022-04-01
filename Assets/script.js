let qizeSubbBut=document.querySelector(".btn");
qizeSubbBut.addEventListener("click",showQuestions);
let question1=document.querySelector(".q1");
let question2=document.querySelector(".q2");
let question3=document.querySelector(".q3");
let question4=document.querySelector(".q4");
let qArray;




function showQuestions(){
    //clean the page
qizeSubbBut.setAttribute("style","visibility: hidden");
document.querySelector("h4").textContent="";

generateQuestions();

    document.querySelector("h3").textContent=`What is the Capital of ${qArray[0].name} ?`;


    question1.setAttribute("style", "visibility: visible")
    question1.textContent = qArray[0].opt1;

    question2.setAttribute("style", "visibility: visible")
    question2.textContent = qArray[0].opt2;

    question3.setAttribute("style", "visibility: visible")
    question3.textContent = qArray[0].opt3;

    question4.setAttribute("style", "visibility: visible")
    question4.textContent = qArray[0].opt4;



console.log(questions.name)
}
function questions(name, opt1,opt2,opt3,opt4 ){
    this.name=name,
    this.opt1=opt1,
    this.opt2=opt2,
    this.opt3=opt3,
    this.opt4=opt4
    }
function generateQuestions(){
    let q1 = new questions("Washington","Seattle","Olampia","Bellevuw","Tacoma")
     qArray = [q1]
}


