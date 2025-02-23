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
      question:
        "In which of the following formats data is stored in the database management system?",
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
      answers: ["Hierarchical", "Network", "Distributed", "Decentralized"],
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
      answers: ["Hyper data", "Tera data", "Meta data", "Relations"],
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
      question:
        "The ability to query data, as well as insert, delete, and alter tuples, is offered by ____________",
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
  CSS: [
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
      question:
        "Which CSS property is used to set the background color of an element?",
      answers: ["color", "background-color", "bgcolor", "background"],
      correct: "background-color",
    },
    {
      question:
        "Which CSS property is used to create space inside an element, between the content and the border?",
      answers: ["margin", "spacing", "padding", "border-spacing"],
      correct: "padding",
    },
    {
      question:
        "Which CSS unit is relative to the size of the parent element's font size?",
      answers: ["px", "em", "rem", "%"],
      correct: "em",
    },
    {
      question: "Which CSS property is used to make a webpage responsive?",
      answers: ["flexbox", "grid", "media queries", "float"],
      correct: "media queries",
    },
    {
      question:
        "Which CSS property controls the order of elements in a flexbox or grid?",
      answers: ["z-index", "order", "flex-order", "position"],
      correct: "order",
    },
  ],
  JS: [
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      answers: ["var", "let", "const", "All of the above"],
      correct: "All of the above",
    },
    {
      question: "Which method is used to print something to the console?",
      answers: ["print()", "console.log()", "log()", "write()"],
      correct: "console.log()",
    },
    {
      question: "Which symbol is used for single-line comments in JavaScript?",
      answers: ["//", "/* */", "#", "--"],
      correct: "//",
    },
    {
      question: "What will `typeof null` return?",
      answers: ["null", "undefined", "object", "string"],
      correct: "object",
    },
    {
      question: "Which function is used to parse a string into a number?",
      answers: ["parseInt()", "Number()", "parseFloat()", "All of the above"],
      correct: "All of the above",
    },
    {
      question: "Which operator is used for strict equality comparison?",
      answers: ["==", "===", "!=", "!=="],
      correct: "===",
    },
    {
      question:
        "Which JavaScript feature allows function execution at a later time?",
      answers: ["Callback", "Promise", "Async/Await", "All of the above"],
      correct: "All of the above",
    },
    {
      question: "How do you declare an arrow function?",
      answers: [
        "function() => {}",
        "() => {}",
        "=> function() {}",
        "function => {}",
      ],
      correct: "() => {}",
    },
    {
      question: "Which method converts an array to a string?",
      answers: ["toString()", "join()", "stringify()", "Both A and B"],
      correct: "Both A and B",
    },
    {
      question: "What is the output of `Boolean('false')`?",
      answers: ["false", "true", "null", "undefined"],
      correct: "true",
    },
  ],
  Python: [
    {
      question: "Which keyword is used to define a function in Python?",
      answers: ["function", "def", "define", "func"],
      correct: "def",
    },
    {
      question: "What will `type(10)` return in Python?",
      answers: ["int", "float", "str", "number"],
      correct: "int",
    },
    {
      question: "Which symbol is used for single-line comments in Python?",
      answers: ["//", "#", "/* */", "--"],
      correct: "#",
    },
    {
      question: "What does `len([1, 2, 3])` return?",
      answers: ["2", "3", "4", "None"],
      correct: "3",
    },
    {
      question: "Which method is used to convert a string to lowercase?",
      answers: ["toLowerCase()", "lower()", "casefold()", "Both B and C"],
      correct: "Both B and C",
    },
    {
      question: "Which data type is **immutable** in Python?",
      answers: ["List", "Dictionary", "Set", "Tuple"],
      correct: "Tuple",
    },
    {
      question: "What will `print(2 ** 3)` output?",
      answers: ["5", "6", "8", "9"],
      correct: "8",
    },
    {
      question: "Which statement is used for exception handling?",
      answers: ["catch", "try-except", "throw", "handle"],
      correct: "try-except",
    },
    {
      question: "What is the output of `bool([])`?",
      answers: ["True", "False", "None", "Error"],
      correct: "False",
    },
    {
      question: "Which of the following is used to create a loop in Python?",
      answers: ["for", "while", "repeat", "Both A and B"],
      correct: "Both A and B",
    },
  ],
  Fundamentals: [
    {
      question: "What is the brain of the computer?",
      answers: ["RAM", "CPU", "Hard Disk", "Motherboard"],
      correct: "CPU",
    },
    {
      question: "Which type of memory is **volatile**?",
      answers: ["ROM", "Hard Disk", "RAM", "Flash Drive"],
      correct: "RAM",
    },
    {
      question: "What does **GUI** stand for?",
      answers: [
        "Graphical User Internet",
        "Graphical User Interface",
        "General User Interface",
        "Graphical Unified Interaction",
      ],
      correct: "Graphical User Interface",
    },
    {
      question: "Which of the following is an **input device**?",
      answers: ["Printer", "Monitor", "Keyboard", "Speaker"],
      correct: "Keyboard",
    },
    {
      question: "What is the full form of **HTTP**?",
      answers: [
        "HyperText Transfer Protocol",
        "HyperText Transmission Process",
        "High Transfer Text Protocol",
        "Hyper Transfer Text Processing",
      ],
      correct: "HyperText Transfer Protocol",
    },
    {
      question: "Which unit is used to measure the speed of a processor?",
      answers: ["Hertz", "Bytes", "Pixels", "Ohms"],
      correct: "Hertz",
    },
    {
      question: "What is the smallest unit of data in a computer?",
      answers: ["Bit", "Byte", "Nibble", "Word"],
      correct: "Bit",
    },
    {
      question: "Which of the following is **system software**?",
      answers: [
        "Microsoft Word",
        "Windows OS",
        "Google Chrome",
        "Adobe Photoshop",
      ],
      correct: "Windows OS",
    },
    {
      question: "What is the purpose of an **operating system**?",
      answers: [
        "Manage computer hardware and software",
        "Perform calculations",
        "Store and retrieve data",
        "Connect to the internet",
      ],
      correct: "Manage computer hardware and software",
    },
    {
      question: "Which of these is **not** a programming language?",
      answers: ["Python", "JavaScript", "HTML", "C++"],
      correct: "HTML",
    },
  ],
  IOT: [
    {
      question: "What does IoT stand for?",
      answers: [
        "Internet of Technology",
        "Internet of Things",
        "Internet of Tools",
        "Integrated of Things",
      ],
      correct: "Internet of Things",
    },
    {
      question: "Which of the following is an example of an IoT device?",
      answers: [
        "Smartwatch",
        "Microwave Oven",
        "Washing Machine",
        "Calculator",
      ],
      correct: "Smartwatch",
    },
    {
      question: "What type of communication is commonly used in IoT devices?",
      answers: [
        "Wired Communication",
        "Satellite Communication",
        "Wireless Communication",
        "Morse Code",
      ],
      correct: "Wireless Communication",
    },
    {
      question:
        "Which of the following protocols is commonly used in IoT for low-power communication?",
      answers: ["HTTP", "MQTT", "FTP", "POP3"],
      correct: "MQTT",
    },
    {
      question: "What is the main purpose of IoT?",
      answers: [
        "To connect devices and allow them to exchange data",
        "To improve internet speed",
        "To create new programming languages",
        "To develop mobile applications",
      ],
      correct: "To connect devices and allow them to exchange data",
    },
    {
      question: "Which of the following is a major challenge in IoT?",
      answers: [
        "High power consumption",
        "Limited internet connectivity",
        "Security and privacy",
        "All of the above",
      ],
      correct: "All of the above",
    },
    {
      question:
        "Which communication technology is commonly used in smart home IoT systems?",
      answers: ["Bluetooth", "Zigbee", "Wi-Fi", "All of the above"],
      correct: "All of the above",
    },
    {
      question:
        "What kind of sensors are used in IoT devices to detect movement?",
      answers: [
        "Temperature sensors",
        "Motion sensors",
        "Light sensors",
        "Pressure sensors",
      ],
      correct: "Motion sensors",
    },
    {
      question:
        "Which cloud computing model is widely used in IoT applications?",
      answers: ["IaaS", "PaaS", "SaaS", "All of the above"],
      correct: "All of the above",
    },
    {
      question: "Which of the following is **not** a benefit of IoT?",
      answers: [
        "Automation",
        "Real-time monitoring",
        "Reduced cybersecurity risks",
        "Smart decision-making",
      ],
      correct: "Reduced cybersecurity risks",
    },
  ],
  Networks: [
    {
      question: "What is a computer network?",
      answers: [
        "A collection of software programs",
        "A system of interconnected computers and devices",
        "A type of computer hardware",
        "A network of satellites",
      ],
      correct: "A system of interconnected computers and devices",
    },
    {
      question:
        "Which network topology has a central hub that connects all devices?",
      answers: ["Star", "Bus", "Ring", "Mesh"],
      correct: "Star",
    },
    {
      question: "What does IP stand for in networking?",
      answers: [
        "Internet Protocol",
        "Interconnect Program",
        "Internal Process",
        "Internet Processing",
      ],
      correct: "Internet Protocol",
    },
    {
      question:
        "Which device is used to forward data packets between computer networks?",
      answers: ["Switch", "Router", "Hub", "Modem"],
      correct: "Router",
    },
    {
      question:
        "Which protocol is used for secure communication over the internet?",
      answers: ["HTTP", "FTP", "HTTPS", "Telnet"],
      correct: "HTTPS",
    },
    {
      question:
        "Which layer of the OSI model is responsible for end-to-end communication?",
      answers: [
        "Transport Layer",
        "Network Layer",
        "Session Layer",
        "Data Link Layer",
      ],
      correct: "Transport Layer",
    },
    {
      question: "What is the main function of a firewall in a network?",
      answers: [
        "To provide power to network devices",
        "To prevent unauthorized access",
        "To connect different networks",
        "To store network data",
      ],
      correct: "To prevent unauthorized access",
    },
    {
      question: "What is the full form of LAN?",
      answers: [
        "Local Access Network",
        "Large Area Network",
        "Local Area Network",
        "Linked Area Network",
      ],
      correct: "Local Area Network",
    },
    {
      question: "Which of the following is a wireless networking technology?",
      answers: ["Ethernet", "Wi-Fi", "Fiber Optics", "Coaxial Cable"],
      correct: "Wi-Fi",
    },
    {
      question: "Which network type is used to connect devices within a city?",
      answers: ["LAN", "MAN", "WAN", "PAN"],
      correct: "MAN",
    },
  ],
};
let data = document.createElement("div");
let scores = {};

function selectCategory() {
  const category = document.getElementById("category").value;
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  let userInputDiv = document.querySelector(".user-input-div");
  userInputDiv.innerHTML = "";

  let userNameInput = document.createElement("input");
  userNameInput.classList.add("user-name-input");
  userNameInput.type = "text";
  userNameInput.placeholder = "Enter full name";
  userNameInput.name="StudentName"
  userNameInput.required = true;

  let roleNoInput = document.createElement("input");
  roleNoInput.classList.add("rollNo-input");
  roleNoInput.type = "number";
  roleNoInput.placeholder = "Enter roll Number";
  roleNoInput.name="StudentRollNo."
  roleNoInput.required = true;

  userInputDiv.appendChild(userNameInput);
  userInputDiv.appendChild(roleNoInput);

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
      radio.classList.add("answer-radio");
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

  let button = document.createElement("button");
  button.id = "user-submit-btn";
  button.textContent = "Submit";
  button.setAttribute("onclick", "submitQuiz()");

  quizContainer.appendChild(button);
}

function submitQuiz() {
  const category = document.getElementById("category").value;
  const userName = document.querySelector(".user-name-input").value;
  const rollNumber = document.querySelector(".rollNo-input").value;

  if (userName == "") {
    alert("Enter user Name first");
    return;
  }

  if (rollNumber == "") {
    alert("enter roll number first");
    return;
  }

  let score = 0;

  quizData[category].forEach((q, index) => {
    const selectedAnswer = document.querySelector(
      `input[name='question-${index}']:checked`
    );
    // const questionDiv = document.querySelectorAll(".question")[index];

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

  const quizContainer = document.getElementById("quiz-container");

  const scoreContainer = document.createElement("div");
  scoreContainer.classList.add("score-container");

  const scoreDiv = document.createElement("div");
  scoreDiv.classList.add("score-div");

  const heading = document.createElement("h3");
  heading.textContent = "Score :";

  const scoreSpan = document.createElement("span");
  scoreSpan.textContent = score;
  scoreSpan.style.font="bold"
  scoreSpan.style.fontSize="30px"

  const msg = document.createElement("h3");
  msg.classList.add("msg");
  msg.textContent = "Your response has been submited !";

  quizContainer.appendChild(scoreContainer);
  scoreContainer.appendChild(scoreDiv);
  scoreContainer.appendChild(msg);
  scoreDiv.appendChild(heading);
  scoreDiv.appendChild(scoreSpan);

  const btn = document.getElementById("user-submit-btn");
  // Check if the button is selected
  btn.disabled = true;
  btn.classList.add("btn-disable");
}
