//GLOBAL VARIABLES
const sheetDiv = document.getElementById('sheet');
const questionEl = document.getElementById('question');
const option1El = document.getElementById('option1');
const option2El =document.getElementById('option2');
const option3El =document.getElementById('option3');
const option4El =document.getElementById('option4');
const nextBtn =document.getElementById('nextBtn');
const scoreEl = document.getElementById('curentscore');
const questionCount = document.getElementById('questionCount');
const okDiv = document.getElementById('okDiv');
const buttonDiv = document.getElementById('buttonDiv');
const checkResultDiv = document.getElementById('checkResultDiv');
const numberOfQuestions = document.getElementById('numberOfQuestions');
const correctlyAnsweredQuesstions = document.getElementById('correctlyAnsweredQuesstions');
const grade = document.getElementById('grade');
const isPass = document.getElementById('isPass?');
const displayResult = document.getElementById('displayResult');
const returnHomeBtn = document.getElementById('returnHomeBtn');







//QUESTIONS
let question1 ={
    questions: "What does HTML stand for?",
    option1: "a. Hyper Transfer Text Language",
    option2: "b. High Tech Modern Language,",
    option3: "c. Hypertext Markup Language",
    option4: "d) Hyperlink and Text Markup Language",
    answer: "c"
};

let question2 ={
    questions: "Which HTML tag is used to create a hyperlink?",
    option1: "a) &ltlink&gt",
    option2: "b) &lta&gt",
    option3: "c) &lthref&gt",
    option4: "d) &lthyperlink&gt",
    answer: "a"
};
let question3 ={
    questions: "Which HTML tag is used to define the structure of an HTML document, including the title and character encoding?",
    option1: "a) &lthead&gt",
    option2: "b) &ltbody&gt",
    option3: "c) &lthtml&gt",
    option4: "d) &lttitle&gt",
    answer: "a"
};
let question4 ={
    questions: "Which HTML element is used to add a line break within a paragraph?",
    option1: "a) &ltbr&gt",
    option2: "b) &ltlb&gt",
    option3: "c) &ltnewline&gt",
    option4: "d) &ltbreak&gt",
    answer: "a"
};

    
let question5 ={
    questions: "What does the &ltimg&gt tag do in HTML?",
    option1: "a) Embed audio files",
    option2: "b) Embed videos",
    option3: "c) Display images",
    option4: "d) Create a hyperlink",
    answer: "c"
};

let question6 ={
    questions: 'What does the acronym "HTML" represent when it comes to coding forms on the web?',
    option1: "a) Hyper Transfer Markup Language",
    option2: "b) Hyper Text Manipulation Language",
    option3: "c) Hyperlinks and Text Markup Language",
    option4: "d) Hyper Text Markup Language",
    answer: "d"
};


let question7 ={
    questions: "Which HTML tag is used to create an ordered list?",
    option1: "a) &ltol&gt",
    option2: "b) &ltul&gt",
    option3: "c) &ltli&gt",
    option4: "d) &ltdl&gt",
    answer: "a"
};


let question8 ={
    questions: "What is the purpose of the HTML &ltmeta&gt tag?",
    option1: "a) To insert metadata about the web page",
    option2: "b) To define a paragraph",
    option3: "c) To create a table",
    option4: "d) To add a hyperlink",
    answer: "a"
};


let question9 ={
    questions: "Which HTML tag is used for creating an external link in a new browser window?",
    option1: "a) &ltnewlink&gt",
    option2: "b) &lta target='_blank'&gt",
    option3: "c) &lta href='_blank'&gt",
    option4: "d) &ltexternal&gt",
    answer: "b"
};


let question10 ={
    questions: "What is the correct way to create a comment in HTML?",
    option1: "a) &lt!--This is a comment--&gt",
    option2: "#This is a comment#",
    option3: "c) {This is a comment}",
    option4: "d) //This is a comment//",
    answer: "a"
};


let question11 ={
    questions: "Which HTML tag is used to define a table row?",
    option1: "a) &lttr&gt",
    option2: "b) &lttd&gt",
    option3: "c) &lttable&gt",
    option4: "d) &ltrow&gt",
    answer: "a"
};


let question12 ={
    questions: "What is the purpose of the HTML &ltem&gt tag?",
    option1: "a) Emphasize text",
    option2: "b) Create a heading",
    option3: "c) Insert an image",
    option4: "d) Define a list",
    answer: "a"
};


let question13 ={
    questions: "Which HTML tag is used to create a hyperlink to an email address?",
    option1: "a) &ltmail&gt",
    option2: "b) &ltemail&gt",
    option3: "c) &lta href='mailto:...'&gt",
    option4: "d) &ltlink href='email:...'&gt",
    answer: "c14"
};


let question14 ={
    questions: "Which HTML tag is used to embed a video on a web page?",
    option1: "a) &ltvid&gt",
    option2: "b) &ltmovie&gt",
    option3: "c) &ltvideo&gt",
    option4: "d) &ltmedia&gt",
    answer: "c"
};


let question15 ={
    questions: "Which HTML tag is used to define a line or thematic break in a document?",
    option1: "a) &ltline&gt",
    option2: "b) &lthr&gt",
    option3: "c) &ltbr&gt",
    option4: "d) &ltrule&gt",
    answer: "b"
};


let question16 ={
    questions: "What does HTML5 introduce for better structuring of web documents?",
    option1: "a) XML",
    option2: "b) CSS",
    option3: "c) Semantic elements",
    option4: "d) Java applets",
    answer: "c"
};


let question17 ={
    questions: "Which HTML tag is used to create an unordered list?",
    option1: "a) &ltol&gt",
    option2: "b) &ltul&gt",
    option3: "c) &ltli&gt",
    option4: "d) &ltdl&gt",
    answer: "b"
};


let question18 ={
    questions: "What is the correct way to create a hyperlink to another website in HTML?",
    option1: "a) &lta src='http://example.com'&gtLink Text&lt/a&gt",
    option2: "b) &lta href='http://example.com'&gtLink Text&lt/a&gt",
    option3: "c) &ltlink href='http://example.com'&gtLink Text&lt/link&gt",
    option4: "d) &lturl='http://example.com'&gtLink Text&lt/url&gt",
    answer: "b"
};


let question19 ={
    questions: "What is the HTML tag used to define the base URL for relative URLs within a document?",
    option1: "a) &ltlink&gt",
    option2: "b) &ltbase&gt",
    option3: "c) &lturl&gt",
    option4: "d) &ltroot&gt",
    answer: "b"
};


let question20 ={
    questions: "What is the purpose of the HTML &ltblockquote&gt tag?",
    option1: "a) Create a highlighted text block",
    option2: "b) Insert code snippets",
    option3: "c) Define a list of quotations",
    option4: "d) Indent text as a block quote",
    answer: "d"
};




//ARAYS
let questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20];
let newArray = [];
let SCORE = 0;
let actualGrade = localStorage.getItem('score')/questions.length*100;

numberOfQuestions.innerHTML = questions.length;
correctlyAnsweredQuesstions.innerHTML = localStorage.getItem('score');
grade.innerHTML = `${actualGrade}%`;



//LOGIC FUNCTION
function main (){    
        //DISPLAYS QUESTION AND OPTIONS
    let questionElValue = questionEl.innerHTML = questions[newArray.length].questions;
    let option1ElValue = option1El.innerHTML = questions[newArray.length].option1;
    let option2ElValue = option2El.innerHTML = questions[newArray.length].option2;  
    let option3ElValue = option3El.innerHTML = questions[newArray.length].option3;
    let option4ElValue = option4El.innerHTML = questions[newArray.length].option4;
    
    newArray.push(1);
    questionCount.innerHTML = `Number of questions answered: ${newArray.length}/${questions.length} `;

        //MAKES THE NEXT QUESTION BUTTON DYNAMIC
    
    if(newArray.length===questions.length){
        buttonDiv.innerHTML =`<button id="checkResult"><a href="result.html">Check Result</a></button>`;  
    }

    okDiv.innerHTML = `<button class="okBtn" onclick="getSelectedValue()">OK</button>`;
    console.log('ok')

};



//FUNCTION TO DETERMINE THE CHECKED RADIO
function getSelectedValue() {

    // Get the selected radio button
    const selectedRadio = document.querySelector('input[name="choice"]:checked');
    const selectedValue = selectedRadio.value;
    const correctAswer = questions[newArray.length-1].answer;
    // Check if a radio button is selected
    if (selectedRadio) {
        // Get the value of the selected radio button
      
        console.log("Selected Value: " + selectedValue);
        console.log(correctAswer);
        console.log(questions[newArray.length-1]);
        
        if(selectedValue === correctAswer){
            SCORE = SCORE + 1;
            localStorage.setItem('score', SCORE);
            console.log(localStorage.getItem('score'));
            console.log(SCORE)
            scoreEl.innerHTML =`SCORE: ${parseFloat(SCORE)}/${questions.length}`;
            console.log(scoreEl.innerHTML);
        };
    } else {
        console.log("No radio button is selected.");
    };

    okDiv.innerHTML = '';
}


//FUNCTION TO DISPLAY OVERALL RESULT

if(actualGrade>=50){
    isPass.innerHTML =`Congratulations you passed. GOOD JOB!`;
}else{
    isPass.innerHTML =`Sorry but you failed to meet the pass mark, try taking the test again`
};


returnHomeBtn.addEventListener('click', ()=>{
    localStorage.clear();
});

