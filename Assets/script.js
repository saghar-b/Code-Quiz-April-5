let qizeSubbBut=document.querySelector(".start-btn");

let question1=document.querySelector("#q1");
let question2=document.querySelector("#q2");
let question3=document.querySelector("#q3");
let question4=document.querySelector("#q4");
let qArray=[];
let divQuestions=document.querySelector(".questionbtn");
let count=0;
let correctAns=0
// function nextQuestion(event){
//     event.target
// }

//Start quiz button 
qizeSubbBut.addEventListener("click",function(){
    generateQuestions();
    console.log("start quiz")
    showQuestions(count);

});
divQuestions.addEventListener("click",function(event){
let element = event.target;
if(element.matches(".optBtn")){
    let status = element.getAttribute("data-name");
    console.log("btn text: "+element.getAttribute("data-name"))
    
    
//   if(element.dataset.textContent) 
if(count < qArray.length-1){
    count++;
    showQuestions(count);
        
    }
}
});

function showQuestions(count){
    //clean the page
qizeSubbBut.setAttribute("style","visibility: hidden");
document.querySelector("h4").textContent="";
// let index=0;


// count++;
    document.querySelector("h3").textContent=`What is the Capital of ${qArray[count].country} ?`;
    
    loadOptions(count);


console.log(questions.name)
}
function loadOptions(index){
    console.log(index)
    question1.setAttribute("style", "visibility: visible")
    let opt1=qArray[index].opt1;
    question1.setAttribute("data-name",opt1)
    // console.log("hhhhh"+question1.getAttribute("data-name"))
    question1.textContent = qArray[index].opt1;
    // question1

    question2.setAttribute("style", "visibility: visible")
    question2.setAttribute("data-name",qArray[index].opt2)
    question2.textContent = qArray[index].opt2;

    question3.setAttribute("style", "visibility: visible")
    question3.setAttribute("data-name",qArray[index].opt3)
    question3.textContent = qArray[index].opt3;

    question4.setAttribute("style", "visibility: visible")
    question4.setAttribute("data-name",qArray[index].opt4)
    question4.textContent = qArray[index].opt4;

}





function questions(country, opt1,opt2,opt3,opt4,answer ){
    this.country=country,
    this.opt1=opt1,
    this.opt2=opt2,
    this.opt3=opt3,
    this.opt4=opt4,
    this.answer = answer
    }
function generateQuestions(){
    let q1 = new questions("NY","Seattle","Olampia","NY","Ranier","NY")
    let q2 = new questions("Iran","Seattle","tehran","Bellevuw","Tacoma","tehran")
    let q3 = new questions("Washington","Seattle","Olampia","Bellevuw","Tacoma","seattle")
    let q4 = new questions("Brezin","Seattle","nemidonam","Bellevuw","Tacoma","nemidonam")
     qArray.push(q1)
     qArray.push(q2)
     qArray.push(q3)
     qArray.push(q4)
}


