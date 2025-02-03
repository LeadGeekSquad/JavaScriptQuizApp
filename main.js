
// const original_answer = {
//     q1: "object",
//     q2: "int",
//     q3: "JSON.stringify()",
//     q4: "length",
//     q5: "array.push(item)"
// };

const javascriptQuiz = [
    {
      question: "What is the output of 'typeof NaN' in JavaScript?",
      choices: ["undefined", "number", "string", "NaN"],
      correctAnswer: "number",
    },
    {
      question: "Which of the following is a JavaScript data type?",
      choices: ["Boolean", "Integer", "Character", "None of the above"],
      correctAnswer: "Boolean",
    },
    {
      question: "What does the '===' operator do in JavaScript?",
      choices: [
        "Compares values and types",
        "Compares values only",
        "Assigns values",
        "None of the above",
      ],
      correctAnswer: "Compares values and types",
    },
    {
      question: "How do you write a comment in JavaScript?",
      choices: [
        "// This is a comment",
        "/* This is a comment */",
        "<!-- This is a comment -->",
        "Both // and /* */",
      ],
      correctAnswer: "Both // and /* */",
    },
    {
      question: "What is the correct way to declare a variable in JavaScript?",
      choices: ["let x", "var x", "const x", "All of the above"],
      correctAnswer: "All of the above",
    },
    {
      question: "What does 'isNaN()' function do?",
      choices: [
        "Checks if a value is a number",
        "Checks if a value is NaN",
        "Checks if a value is undefined",
        "Checks if a value is null",
      ],
      correctAnswer: "Checks if a value is NaN",
    },
    {
      question: "Which company developed JavaScript?",
      choices: ["Microsoft", "Netscape", "Google", "Apple"],
      correctAnswer: "Netscape",
    },
    {
      question: "What is the output of 'console.log(0.1 + 0.2 === 0.3)'?",
      choices: ["true", "false", "undefined", "Throws an error"],
      correctAnswer: "false",
    },
    {
      question: "Which method is used to add an item to the end of an array?",
      choices: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "push()",
    },
    {
      question: "Which method converts JSON to a JavaScript object?",
      choices: ["JSON.stringify()", "JSON.parse()", "Object.json()", "parseJSON()"],
      correctAnswer: "JSON.parse()",
    },
    {
      question: "What will the following code output?\nconsole.log(typeof [])",
      choices: ["array", "object", "undefined", "null"],
      correctAnswer: "object",
    },
    {
      question: "How do you declare a constant in JavaScript?",
      choices: ["const x", "let x", "var x", "constant x"],
      correctAnswer: "const x",
    },
    {
      question: "Which method is used to find the length of a string?",
      choices: ["length()", "size()", "length", "getLength()"],
      correctAnswer: "length",
    },
    {
      question: "What is the output of 'console.log(typeof undefined)'?",
      choices: ["undefined", "object", "null", "function"],
      correctAnswer: "undefined",
    },
    {
      question: "How do you define an arrow function in JavaScript?",
      choices: [
        "function() => {}",
        "() => {}",
        "() => function",
        "function => ()",
      ],
      correctAnswer: "() => {}",
    },
    {
      question: "Which array method returns the first index of a given element?",
      choices: ["indexOf()", "find()", "findIndex()", "slice()"],
      correctAnswer: "indexOf()",
    },
    {
      question: "What is the output of 'console.log(typeof null)'?",
      choices: ["null", "undefined", "object", "string"],
      correctAnswer: "object",
    },
    {
      question: "What is the result of '5 + '5''?",
      choices: ["10", "55", "undefined", "NaN"],
      correctAnswer: "55",
    },
    {
      question: "Which operator is used to check strict equality?",
      choices: ["==", "===", "!=", "!=="],
      correctAnswer: "===",
    },
    {
      question: "How do you create a new promise in JavaScript?",
      choices: [
        "new Promise()",
        "Promise.new()",
        "promise.create()",
        "new promise()",
      ],
      correctAnswer: "new Promise()",
    },
    {
      question: "Which method is used to remove the last item from an array?",
      choices: ["pop()", "push()", "shift()", "splice()"],
      correctAnswer: "pop()",
    },
    {
      question: "Which function is used to call a function after a delay?",
      choices: ["setTimeout()", "setInterval()", "clearTimeout()", "delay()"],
      correctAnswer: "setTimeout()",
    },
    {
      question: "Which keyword is used to handle exceptions in JavaScript?",
      choices: ["catch", "throw", "try", "All of the above"],
      correctAnswer: "All of the above",
    },
    {
      question: "Which method is used to iterate over an array?",
      choices: ["map()", "forEach()", "filter()", "All of the above"],
      correctAnswer: "All of the above",
    },
    {
      question: "How do you define a JavaScript object?",
      choices: [
        "{key: value}",
        "[key, value]",
        "<key, value>",
        "None of the above",
      ],
      correctAnswer: "{key: value}",
    },
    {
        question: "What is the output of '2 == '2'' in JavaScript?",
        choices: ["true", "false", "undefined", "null"],
        correctAnswer: "true",
      },
      {
        question: "What is the result of '2 + true' in JavaScript?",
        choices: ["2", "3", "true2", "NaN"],
        correctAnswer: "3",
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        choices: ["//", "#", "<!--", "/*"],
        correctAnswer: "//",
      },
      {
        question: "What is the purpose of the 'default' keyword in a switch statement?",
        choices: [
          "To terminate the switch",
          "To execute when no case matches",
          "To initialize variables",
          "None of the above",
        ],
        correctAnswer: "To execute when no case matches",
      },
      {
        question: "What does the 'break' keyword do in a loop?",
        choices: [
          "Exits the current loop",
          "Skips one iteration",
          "Starts a new loop",
          "Throws an error",
        ],
        correctAnswer: "Exits the current loop",
      },
      {
        question: "Which keyword is used to define a class in JavaScript?",
        choices: ["class", "constructor", "function", "className"],
        correctAnswer: "class",
      },
      {
        question: "What will 'typeof []' return?",
        choices: ["array", "object", "null", "undefined"],
        correctAnswer: "object",
      },
      {
        question: "How do you create a new instance of a class in JavaScript?",
        choices: ["className()", "new className()", "new className", "create className()"],
        correctAnswer: "new className()",
      },
      {
        question: "What is the value of 'undefined == null'?",
        choices: ["true", "false", "NaN", "Throws an error"],
        correctAnswer: "true",
      },
      {
        question: "Which of the following is not a falsy value in JavaScript?",
        choices: ["false", "0", "1", "''"],
        correctAnswer: "1",
      },
      {
        question: "What does 'JSON.stringify()' do?",
        choices: [
          "Parses JSON into an object",
          "Converts an object to a JSON string",
          "Executes JSON commands",
          "None of the above",
        ],
        correctAnswer: "Converts an object to a JSON string",
      },
      {
        question: "How do you stop a timer set with 'setTimeout()'?",
        choices: ["stopTimeout()", "clearTimeout()", "resetTimeout()", "stopTimer()"],
        correctAnswer: "clearTimeout()",
      },
      {
        question: "What is the output of 'parseInt('10px')'?",
        choices: ["10", "NaN", "0", "Throws an error"],
        correctAnswer: "10",
      },
      {
        question: "Which method is used to find a specific element in an array?",
        choices: ["find()", "search()", "map()", "filter()"],
        correctAnswer: "find()",
      },
      {
        question: "What does 'event.preventDefault()' do?",
        choices: [
          "Stops the default browser behavior",
          "Stops the event from propagating",
          "Prevents errors",
          "None of the above",
        ],
        correctAnswer: "Stops the default browser behavior",
      },
      {
        question: "Which of the following is a valid JSON string?",
        choices: [
          `"{key: 'value'}"`,
          `"{'key': 'value'}"`,
          `{"key": "value"}`,
          `"{\\"key\\": \\"value\\"}"`,
        ],
        correctAnswer: `"{\\"key\\": \\"value\\"}"`,
      },
      {
        question: "What is the result of 'Array.isArray([])'?",
        choices: ["true", "false", "undefined", "Throws an error"],
        correctAnswer: "true",
      },
      {
        question: "What does 'splice()' do to an array?",
        choices: [
          "Adds/removes elements in place",
          "Removes elements only",
          "Returns a new array",
          "None of the above",
        ],
        correctAnswer: "Adds/removes elements in place",
      },
      {
        question: "How do you access the second element in an array?",
        choices: ["array[0]", "array[1]", "array.1", "array.get(1)"],
        correctAnswer: "array[1]",
      },
      {
        question: "Which of the following methods creates a new array?",
        choices: ["map()", "forEach()", "splice()", "pop()"],
        correctAnswer: "map()",
      },
      {
        question: "What does 'Object.keys()' return?",
        choices: [
          "An array of values in an object",
          "An array of keys in an object",
          "The length of the object",
          "None of the above",
        ],
        correctAnswer: "An array of keys in an object",
      },
      {
        question: "How do you check if a variable 'x' is an array?",
        choices: [
          "typeof x === 'array'",
          "x.isArray()",
          "Array.isArray(x)",
          "x instanceof array",
        ],
        correctAnswer: "Array.isArray(x)",
      },
      {
        question: "Which method adds elements to the beginning of an array?",
        choices: ["unshift()", "push()", "shift()", "pop()"],
        correctAnswer: "unshift()",
      },
      {
        question: "What does 'this' refer to in a regular function?",
        choices: [
          "The function itself",
          "The global object",
          "The owner object",
          "Undefined",
        ],
        correctAnswer: "The global object",
      },
      {
        question: "Which operator is used for exponentiation in JavaScript?",
        choices: ["^", "**", "exp()", "power()"],
        correctAnswer: "**",
      }
];
  
function randomQuestion() {
  
    //using set to get all the unique element
  const data = new Set();

  while(data.size!=5) {
    const question =  Math.floor(Math.random()*javascriptQuiz.length);
    data.add(javascriptQuiz[question]);
  }

  return [...data]; //converting set into an array

  
  //More optimized approach to select 5 unique questions
  //we will use sorting
  // const new_arr = [];
  // let question_length = javascriptQuiz.length; 

  // for(let i=0; i < 5 ; i++) {
  //   const index = Math.floor(Math.random()*question_length); //this will give us the index in between 0 and question.length-1
  //   new_arr.push(javascriptQuiz[index]);

  //   //swap the index with the very last value of the javascript questions array by destructuring
  //   [javascriptQuiz[index],javascriptQuiz[length-1]] = [javascriptQuiz[length-1],javascriptQuiz[index]];
  //   question_length--;
  // }

  // return new_arr;

}

//get the form and start inserting questions
const form = document.querySelector('form');

let problem = randomQuestion();
// console.log("problem",problem);
// console.log('typeof',typeof problem);

const original_answer = {}; //add values in the key:value form like q1:correct_answer

function addQuestions() {

  problem.forEach((obj,index) => {

      //filling the original_answer array with correct key as q1 and value as correct answer
      original_answer[`q${index+1}`] = obj.correctAnswer;

      //creating the div question
      const div_ele = document.createElement('div');
      div_ele.className = "question";
      
      //creating the paragragh for inserting the question
      const para = document.createElement('p');
      para.textContent = `${[index+1]}. ${obj['question']}`;
      div_ele.appendChild(para);

      //creating the label for inserting the choices
      obj.choices.forEach((choice) => {
        const label_choice =  document.createElement('label');
        const inp = document.createElement('input');
        inp.type = "radio";
        inp.name = `q${index+1}`;
        inp.value = choice;
        label_choice.appendChild(inp);
        label_choice.appendChild(document.createTextNode(choice));
        div_ele.appendChild(label_choice);
        div_ele.appendChild(document.createElement("br"));
        
      })

      //appending the div_ele to the child after the question is inserted
      form.appendChild(div_ele);

      
  });

}

addQuestions();

console.log(typeof original_answer);
console.log("answer array: ", original_answer);
console.log("original answer array: " + original_answer); //just to print the  original_answer and notice how the object is
const corr_ans_arr = Object.values(original_answer);
console.log("arr values :::"+corr_ans_arr);
const corr_ans_keys = Object.keys(original_answer);
console.log("arr keys ::: " + corr_ans_keys);
console.log("typeof:"+typeof corr_ans_arr);
// for(let [value] in original_answer.value) {
//     console.log(value);
// }
// console.log(typeof arr_corr_ans);
//console.log(arr_corr_ans);

const button = document.createElement("button"); //create the button element
button.type = "submit";
button.className = "submit-btn";
button.textContent = "Submit";
form.appendChild(button); //append the button element to the form

const regenerate_button = document.createElement("button"); //create the regenerate button
regenerate_button.type = "button";
regenerate_button.id = "regenerate-btn";
regenerate_button.textContent = "Generate other questions";
form.appendChild(regenerate_button);


const regenbut = document.getElementById("regenerate-btn");

regenbut.addEventListener('click', () => {

  console.log("regen-but clicked", regenbut);

  problem = randomQuestion();

  // const getFormElement = document.getElementById("quizForm");

  //   if(!getFormElement) {
  //     console.error("Form element not found");
  //     return;
  //   }

    while(form.firstChild) {
      form.removeChild(form.firstChild);
    }

    // Clear the original_answer object
    for (let key in original_answer) {
      delete original_answer[key];
    }

    // Add new questions to the form
    addQuestions();

    // Re-add the submit and regenerate buttons
    form.appendChild(button);
    form.appendChild(regenerate_button);

    const removeOutput = document.getElementById('out');
    removeOutput.innerText = "";


    //TODO: Done - check after adding event listener on the regenerate button, why did the submit button stopped working

    //TODO think on clicking regenerate how to remove the answer/result/output div, because clicking on refresh generates new questions
    // const resultoutput = document.getElementById('out');
    // resultoutput.style.innerText="";
    // resultoutput.style.background="#fff";

});


//checking the answers of the submitted form;
form.addEventListener('submit',(event) => {
  console.log("submit-but clicked");
    event.preventDefault();

    const data = new FormData(form);

    console.log("data",data);

    //const answer = Array.from(data.values());

    let result = 0;

    document.querySelectorAll('.correct, .incorrect').forEach(el => {
      el.classList.remove('correct', 'incorrect');
    });

    // for(let i=0; i<answer.length;i++) {
    //     if(answer[i]==original_answer[i]) {
    //         result++;
    //     }
    // }

    for(let [key,value] of data.entries()) {

      const escapedValue =  CSS.escape(value);

      const questionDiv = document.querySelector(`input[name="${key}"][value="${escapedValue}"]`).closest('.question');
      const correctAnswer = original_answer[key];

        if(value === original_answer[key]) {
            result++;
            questionDiv.querySelector(`input[name="${key}"][value="${CSS.escape(correctAnswer)}"]`).closest('label').classList.add('correct');
        } else {
          questionDiv.querySelector(`input[name="${key}"][value="${escapedValue}"]`).closest('label').classList.add('incorrect');
          questionDiv.querySelector(`input[name="${key}"][value="${CSS.escape(correctAnswer)}"]`).closest('label').classList.add('correct');
      }
    }

    if(!(data.keys())) {
      console.log("No keys in form data");
    }

    if(!(data.values())) {
      console.log("No values in form data");
    }

    console.log("Form data entries: ",data.entries());

    for(const key of data.keys()) {
      console.log("form data keys: " + `key: ${key}`);
      console.log("key: ", key);
    }

    for(const value of data.values()) {
      console.log("form data values: " + `Value: ${CSS.escape(value)}`);
      console.log("value: ", CSS.escape(value));
    }

    document.getElementById('out').innerText = `Result: ${result} out of 5 is correct`;

    //console.log(answer);

    //change the text color of all the answers to green

    // const all_question_div = document.querySelectorAll("input");
    // console.log(all_question_div);
    // console.log(typeof all_question_div);

    // console.log(document.getEle);

    // all_question_div.forEach((div) => {
    //     if(div.value == )
    // })

    //javascriptQuiz.correctAnswer

    // problem.forEach((ans) => {
    //     const change_color_green = ans[correctAnswer];
    //     document.querySelectorAll(question)
        
    // })

    

    // corr_ans_arr.forEach((ans) => {
    //     const val = document.querySelector('input[value="${ans}"]');
    //     console.log("val:"+val);
        
    // })

    const valuesArray = Object.values(original_answer);
    console.log("valuesArray: "+valuesArray);

// Iterate over each value in the array
    // valuesArray.forEach((value) => {
    //     console.log("value: " + value);
    // // Find the element with the matching value attribute
    // const element = document.querySelector(`[value="${value}"]`);
    // const text_node = element.nextSibling;
    // console.log("element: " + element);
    // console.log(text_node);
    // const span = document.createElement("span");
    // span.textContent = text_node.nodeValue;
    // span.style.color = "rgb(8, 209, 102)";
    // text_node.parentNode.replaceChild(span,text_node);
    
    
        // Change the text color of the input element
        // console.log("inside element changing the color");
        // element.style.color = 'green';  // You can change 'red' to any color you want
        // console.log("color changed to green");
   
    // });



    
});