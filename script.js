const quizData = {
    DBMS: [
      {
        question: "What does DBMS stand for?",
        answers: [
          "Database Management System",
          "Data Backup Management System",
          "Dynamic Binary Mapping System",
          "None of the above",
        ],
        correct: "Database Management System",
      },
      {
        question: " What is a database?",
        answers: [
          "Organized collection of information that cannot be accessed, updated, and managed",
          "Collection of data or information without organizing",
          "Organized collection of data or information that can be accessed, updated, and managed",
          "Organized collection of data that cannot be updated",
        ],
        correct:
          "Organized collection of data or information that can be accessed, updated, and managed",
      },
      {
        question:"In which of the following formats data is stored in the database management system?",
        answers: ["Image", "Text", "Table", "Graph"],
        correct: "Table",
      },
      {
        question: " Who created the first DBMS?",
        answers: [
          "Edgar Frank Codd",
          "Charles Bachman",
          " Charles Babbage",
          "Sharon B. Codd",
        ],
        correct: "Charles Bachman",
      },
      {
          question: " Which type of data can be stored in the database?",
          answers: [
            "Image oriented data",
            "Text, files containing data",
            "Data in the form of audio or video",
            "All of the above",
          ],
          correct: "All of the above",
        },
        {
          question: "Which of the following is not a type of database?",
          answers: [
            "Hierarchical",
            "Network",
            "Distributed",
            "Decentralized",
          ],
          correct: "Decentralized",
        },
        {
          question: "Which of the following is not a function of the database?",
          answers: [
            "Managing stored data",
            "Manipulating data",
            "Security for stored data",
            "Analysing code",
          ],
          correct: "Analysing code",
        },
        {
          question: "What is data about data called?",
          answers: [
            "Hyper data",
            "Tera data",
            "Meta data",
            "Relations",
          ],
          correct: "Meta data",
        },
        {
          question: "What does an RDBMS consist of?",
          answers: [
            "Collection of Records",
            "Collection of Keys",
            "Collection of Tables",
            "Collection of Fields",
          ],
          correct: "Collection of Tables",
        },
        {
          question: "The ability to query data, as well as insert, delete, and alter tuples, is offered by ____________",
          answers: [
            "TCL (Transaction Control Language)",
            "DCL (Data Control Language)",
            "DDL (Data Definition Langauge)",
            "DML (Data Manipulation Langauge)",
          ],
          correct: "DML (Data Manipulation Langauge)",
        },
    ],
    HTML: [
      {
          question: "Which of the following is not an HTML tag?",
          answers: ["<div>", "<span>", "<heading>", "<p>"],
          correct: "<heading>",
        },
        {
          question: "Which HTML tag is used to define an internal stylesheet?",
          answers: ["<script>", "<css>", "<style>", "<link>"],
          correct: "<style>",
        },
        {
          question: "Which tag is used to create a hyperlink in HTML?",
          answers: ["<a>", "<link>", "<href>", "<nav>"],
          correct: "<a>",
        },
        {
          question: "Which HTML tag is used for inserting a line break?",
          answers: ["<break>", "<lb>", "<br>", "<newline>"],
          correct: "<br>",
        },
        {
          question: "What is the correct way to comment in HTML?",
          answers: [
            "// This is a comment",
            "<!-- This is a comment -->",
            "/* This is a comment */",
            "' This is a comment",
          ],
          correct: "<!-- This is a comment -->",
        },
        {
          question: "Which HTML tag is used to define a table?",
          answers: ["<table>", "<tr>", "<td>", "<th>"],
          correct: "<table>",
        },
        {
          question: "Which tag is used to display an image in HTML?",
          answers: ["<image>", "<img>", "<pic>", "<src>"],
          correct: "<img>",
        },
        {
          question: "Which HTML element is used for the largest heading?",
          answers: ["<h1>", "<h6>", "<header>", "<head>"],
          correct: "<h1>",
        },
        {
          question: "Which of the following is a semantic HTML element?",
          answers: ["<div>", "<span>", "<section>", "<b>"],
          correct: "<section>",
        },
        {
          question: "What is the correct HTML tag for creating an ordered list?",
          answers: ["<ul>", "<list>", "<ol>", "<li>"],
          correct: "<ol>",
        },
    ],
    CSS:[
      {
          question: "Which CSS property is used to change text color?",
          answers: ["color", "text-color", "font-color", "foreground"],
          correct: "color",
        },
        {
          question: "Which CSS property controls the space between elements?",
          answers: ["padding", "spacing", "margin", "border"],
          correct: "margin",
        },
        {
          question: "What is the correct way to apply an external CSS file?",
          answers: [
            "<link rel='stylesheet' href='style.css'>",
            "<style src='style.css'>",
            "@import 'style.css';",
            "<css href='style.css'>",
          ],
          correct: "<link rel='stylesheet' href='style.css'>",
        },
        {
          question: "Which CSS property is used to make text bold?",
          answers: ["font-weight", "text-bold", "bold", "font-style"],
          correct: "font-weight",
        },
        {
          question: "Which CSS property makes an element's background transparent?",
          answers: ["opacity", "background-color", "visibility", "transparent"],
          correct: "opacity",
        },
        {
          question: "Which CSS property is used to set the background color of an element?",
          answers: ["color", "background-color", "bgcolor", "background"],
          correct: "background-color",
        },
        {
          question: "Which CSS property is used to create space inside an element, between the content and the border?",
          answers: ["margin", "spacing", "padding", "border-spacing"],
          correct: "padding",
        },
        {
          question: "Which CSS unit is relative to the size of the parent element's font size?",
          answers: ["px", "em", "rem", "%"],
          correct: "em",
        },
        {
          question: "Which CSS property is used to make a webpage responsive?",
          answers: ["flexbox", "grid", "media queries", "float"],
          correct: "media queries",
        },
        {
          question: "Which CSS property controls the order of elements in a flexbox or grid?",
          answers: ["z-index", "order", "flex-order", "position"],
          correct: "order",
        },
    ],
    JS:[
      
    ],
    Python:[],
    Fundamentals:[],
    IOT:[],
    Networks:[],
  };
  
  let scores = {};
  
  function selectCategory() {
    const category = document.getElementById("category").value;
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";
  
    quizData[category].forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
      questionDiv.textContent = `${index + 1}. ${q.question}`;
  
      const answersDiv = document.createElement("div");
      answersDiv.classList.add("answers");
  
      q.answers.forEach((answer) => {
        const label = document.createElement("label");
        label.classList.add("answer-label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = `question-${index}`;
        radio.value = answer;
        radio.required = true;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(answer));
        answersDiv.appendChild(label);
        answersDiv.appendChild(document.createElement("br"));
      });
  
      quizContainer.appendChild(questionDiv);
      quizContainer.appendChild(answersDiv);
    });
  }
  
  function submitQuiz() {
    const category = document.getElementById("category").value;
    let score = 0;
  
    quizData[category].forEach((q, index) => {
      const selectedAnswer = document.querySelector(
        `input[name='question-${index}']:checked`
      );
      console.log(selectedAnswer);
      const questionDiv = document.querySelectorAll(".question")[index];
      console.log(questionDiv);
  
      if (selectedAnswer) {
        if (selectedAnswer.value === q.correct) {
          score++;
          selectedAnswer.parentElement.classList.add("correct");
        } else {
          selectedAnswer.parentElement.classList.add("incorrect");
        }
      }
    });
  
    scores[category] = score;
    updateScores();
  }
  
  function updateScores() {
    const scoreList = document.getElementById("score-list");
    scoreList.innerHTML = "";
    let totalScore = 0;
    let count = 0;
  
    for (let category in scores) {
      totalScore += scores[category];
      count++;
      const li = document.createElement("li");
      li.textContent = `${category}: ${scores[category]}`;
      scoreList.appendChild(li);
    }
  
    const averageScore = count > 0 ? (totalScore / count).toFixed(2) : 0;
    document.getElementById("average-score").textContent = averageScore;
    // document.getElementById("score-container").style.display = "block";
  }
  