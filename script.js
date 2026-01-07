/*const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const transactionList = document.getElementById("transaction-list");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const balanceEl = document.getElementById("balance");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function updateUI() {
  transactionList.innerHTML = "";
  let income = 0, expense = 0;

  transactions.forEach((t, index) => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;

    let li = document.createElement("li");
    li.classList.add(t.type);
    li.innerHTML = `
      ${t.desc} - ₹${t.amount} 
      <span onclick="deleteTransaction(${index})">❌</span>
    `;
    transactionList.appendChild(li);
  });

  incomeEl.textContent = income;
  expenseEl.textContent = expense;
  balanceEl.textContent = income - expense;

  localStorage.setItem("transactions", JSON.stringify(transactions));
}

addBtn.addEventListener("click", () => {
  const desc = descInput.value.trim();
  const amount = parseInt(amountInput.value);
  const type = typeInput.value;

  if (desc && amount > 0) {
    transactions.push({ desc, amount, type });
    descInput.value = "";
    amountInput.value = "";
    updateUI();
  } else {
    alert("⚠ Please enter valid details!");
  }
});

function deleteTransaction(index) {
  transactions.splice(index, 1);
  updateUI();
}

clearBtn.addEventListener("click", () => {
  if (confirm("Clear all transactions?")) {
    transactions = [];
    updateUI();
  }
});

updateUI(); */







/*const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const transactionList = document.getElementById("transaction-list");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const balanceEl = document.getElementById("balance");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// ---------------------------
// NEW FUNCTION (YOU MISSED THIS)
// ---------------------------
function addTransaction(desc, amount, type) {
    transactions.push({ desc, amount, type });
    updateUI();
}

// ---------------------------
// NEW FUNCTION (YOU MISSED THIS)
// ---------------------------
function clearAll() {
    transactions = [];
    updateUI();
}

function updateUI() {
  transactionList.innerHTML = "";
  let income = 0, expense = 0;

  transactions.forEach((t, index) => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;

    let li = document.createElement("li");
    li.classList.add(t.type);
    li.innerHTML = `
      ${t.desc} - ₹${t.amount} 
      <span onclick="deleteTransaction(${index})">❌</span>
    `;
    transactionList.appendChild(li);
  });

  incomeEl.textContent = income;
  expenseEl.textContent = expense;
  balanceEl.textContent = income - expense;

  localStorage.setItem("transactions", JSON.stringify(transactions));
}

addBtn.addEventListener("click", () => {
  const desc = descInput.value.trim();
  const amount = parseInt(amountInput.value);
  const type = typeInput.value;

  if (desc && amount > 0) {
    addTransaction(desc, amount, type); // FIXED
    descInput.value = "";
    amountInput.value = "";
  } else {
    alert("⚠ Please enter valid details!");
  }
});

function deleteTransaction(index) {
  transactions.splice(index, 1);
  updateUI();
}

clearBtn.addEventListener("click", () => {
  if (confirm("Clear all transactions?")) {
    clearAll(); // FIXED
  }
});

updateUI();


// ---------------------------
// Voice Recognition
// ---------------------------
const SpeechRecognition = window.SpeechRecognition || 
window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.lang = "en-US";

function startListening() {
    recognition.start();
}

recognition.onresult = function(event) {
    let voiceText = event.results[0][0].transcript.toLowerCase();
    processCommand(voiceText);
};

function processCommand(text) {
    if (text.includes("add income")) {
        let amount = extractNumber(text);
        let desc = extractDescription(text, "add income");
        addTransaction(desc, amount, "income");
    }

    else if (text.includes("add expense")) {
        let amount = extractNumber(text);
        let desc = extractDescription(text, "add expense");
        addTransaction(desc, amount, "expense");
    }

    else if (text.includes("clear all")) {
        clearAll();
    }

    else if (text.includes("show balance")) {
        alert("Your balance is: " + balanceEl.innerText);
    }
}

function extractNumber(text) {
    let num = text.match(/\d+/);
    return num ? Number(num[0]) : 0;
}

function extractDescription(text, command) {
    return text.replace(command, "").replace(/\d+/g, "").trim();
} */






  /*  const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const transactionList = document.getElementById("transaction-list");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const balanceEl = document.getElementById("balance");

// Load previous transactions
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// ---------------------------
// ADD TRANSACTION
// ---------------------------
function addTransaction(desc, amount, type) {
    transactions.push({ desc, amount, type });
    updateUI();
}

// ---------------------------
// CLEAR ALL
// ---------------------------
function clearAll() {
    transactions = [];
    updateUI();
}

// ---------------------------
// UPDATE UI
// ---------------------------
function updateUI() {
    transactionList.innerHTML = "";
    let income = 0, expense = 0;

    transactions.forEach((t, index) => {
        if (t.type === "income") income += t.amount;
        else expense += t.amount;

        let li = document.createElement("li");
        li.classList.add(t.type);
        li.innerHTML = `
            ${t.desc} - ₹${t.amount}
            <span onclick="deleteTransaction(${index})">❌</span>
        `;
        transactionList.appendChild(li);
    });

    incomeEl.textContent = income;
    expenseEl.textContent = expense;
    balanceEl.textContent = income - expense;

    localStorage.setItem("transactions", JSON.stringify(transactions));
}

// ---------------------------
// DELETE TRANSACTION
// ---------------------------
function deleteTransaction(index) {
    transactions.splice(index, 1);
    updateUI();
}

// ---------------------------
// BUTTON LISTENERS
// ---------------------------
addBtn.addEventListener("click", () => {
    const desc = descInput.value.trim();
    const amount = parseInt(amountInput.value);
    const type = typeInput.value;

    if (desc && amount > 0) {
        addTransaction(desc, amount, type);
        descInput.value = "";
        amountInput.value = "";
    } else {
        alert("⚠ Please enter valid details!");
    }
});

clearBtn.addEventListener("click", () => {
    if (confirm("Clear all transactions?")) {
        clearAll();
    }
});

// Initialize UI
updateUI();

// ---------------------------
// VOICE RECOGNITION (COMPLETE WORKING)
// ---------------------------
const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert("Your browser does NOT support Speech Recognition.");
} else {
    let recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";

    // Start listening function (called from button)
    window.startListening = function () {
        recognition.start();
        console.log("🎤 Listening...");
    };

    recognition.onresult = function (event) {
        let voiceText = event.results[0][0].transcript.toLowerCase();
        console.log("Voice Input:", voiceText);
        processCommand(voiceText);
    };

    recognition.onerror = function (event) {
        console.log("Voice Error:", event.error);
        alert("Microphone Error: " + event.error);
    };
}

// ---------------------------
// PROCESS VOICE COMMANDS
// ---------------------------
function processCommand(text) {
    if (text.includes("add income")) {
        let amount = extractNumber(text);
        let desc = extractDescription(text, "add income");
        addTransaction(desc, amount, "income");
    }

    else if (text.includes("add expense")) {
        let amount = extractNumber(text);
        let desc = extractDescription(text, "add expense");
        addTransaction(desc, amount, "expense");
    }

    else if (text.includes("clear all")) {
        clearAll();
    }

    else if (text.includes("show balance")) {
        alert("Your balance is: ₹" + balanceEl.innerText);
    }
}

// ---------------------------
// HELPERS
// ---------------------------
function extractNumber(text) {
    let num = text.match(/\d+/);
    return num ? Number(num[0]) : 0;
}

function extractDescription(text, command) {
    return text.replace(command, "").replace(/\d+/g, "").trim();
}
*/



// DOM Elements
const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const transactionList = document.getElementById("transaction-list");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const balanceEl = document.getElementById("balance");

// Filters UI
const searchText = document.getElementById("searchText");
const chipButtons = document.querySelectorAll(".chip");
const minAmount = document.getElementById("minAmount");
const maxAmount = document.getElementById("maxAmount");
const sortBy = document.getElementById("sortBy");
const resetFilters = document.getElementById("resetFilters");

// Load saved data
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// ---------------------------
// ADD TRANSACTION
// ---------------------------
function addTransaction(desc, amount, type) {
    transactions.push({
        desc,
        amount,
        type,
        date: Date.now()   // Auto date store
    });
    updateUI();
}

// ---------------------------
// CLEAR ALL
// ---------------------------
function clearAll() {
    transactions = [];
    updateUI();
}

// ---------------------------
// FILTER + SORT + DISPLAY
// ---------------------------
function updateUI() {
    transactionList.innerHTML = "";

    let income = 0, expense = 0;
    let filtered = [...transactions];

    // TEXT SEARCH
    if (searchText.value.trim() !== "") {
        filtered = filtered.filter(t =>
            t.desc.toLowerCase().includes(searchText.value.toLowerCase())
        );
    }

    // CATEGORY FILTER (chips)
    let activeChip = document.querySelector(".chip.active").dataset.filter;
    if (activeChip !== "all") {
        filtered = filtered.filter(t => t.type === activeChip);
    }

    // AMOUNT RANGE
    if (minAmount.value)
        filtered = filtered.filter(t => t.amount >= Number(minAmount.value));

    if (maxAmount.value)
        filtered = filtered.filter(t => t.amount <= Number(maxAmount.value));

    // SORTING
    if (sortBy.value === "amountHigh")
        filtered.sort((a, b) => b.amount - a.amount);

    else if (sortBy.value === "amountLow")
        filtered.sort((a, b) => a.amount - b.amount);

    else if (sortBy.value === "newFirst")
        filtered.sort((a, b) => b.date - a.date);

    else if (sortBy.value === "oldFirst")
        filtered.sort((a, b) => a.date - b.date);

    filtered.forEach((t, index) => {
        if (t.type === "income") income += t.amount;
        else expense += t.amount;

        let li = document.createElement("li");
        li.classList.add(t.type);
        li.innerHTML = `
            ${t.desc} - ₹${t.amount}
            <span>${new Date(t.date).toLocaleString()}</span>
            <span onclick="deleteTransaction(${index})">❌</span>
        `;
        transactionList.appendChild(li);
    });

    incomeEl.textContent = income;
    expenseEl.textContent = expense;
    balanceEl.textContent = income - expense;

    localStorage.setItem("transactions", JSON.stringify(transactions));
}

// ---------------------------
// DELETE
// ---------------------------
function deleteTransaction(i) {
    transactions.splice(i, 1);
    updateUI();
}

// ---------------------------
// ADD BUTTON
// ---------------------------
addBtn.addEventListener("click", () => {
    const desc = descInput.value.trim();
    const amount = parseInt(amountInput.value);

    if (!desc || amount <= 0) return alert("Enter valid details!");

    addTransaction(desc, amount, typeInput.value);
    descInput.value = "";
    amountInput.value = "";
});

// ---------------------------
// CHIP FILTER CLICKS
// ---------------------------
chipButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        chipButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        updateUI();
    });
});

// LIVE FILTER LISTENERS
searchText.addEventListener("input", updateUI);
minAmount.addEventListener("input", updateUI);
maxAmount.addEventListener("input", updateUI);
sortBy.addEventListener("change", updateUI);

resetFilters.addEventListener("click", () => {
    searchText.value = "";
    minAmount.value = "";
    maxAmount.value = "";
    sortBy.value = "none";
    chipButtons.forEach(b => b.classList.remove("active"));
    chipButtons[0].classList.add("active");
    updateUI();
});

// ---------------------------
// CLEAR ALL BUTTON
// ---------------------------
clearBtn.addEventListener("click", () => {
    if (confirm("Clear all transactions?"))
        clearAll();
});

// ---------------------------
// VOICE RECOGNITION
// ---------------------------
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    let recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    window.startListening = () => recognition.start();

    recognition.onresult = event => {
        let text = event.results[0][0].transcript.toLowerCase();
        processCommand(text);
    };
}

function processCommand(text) {
    if (text.includes("add income")) {
        let amount = extractNumber(text);
        let desc = extractDescription(text, "add income");
        addTransaction(desc, amount, "income");
    }
    if (text.includes("add expense")) {
        let amount = extractNumber(text);
        let desc = extractDescription(text, "add expense");
        addTransaction(desc, amount, "expense");
    }
}

function extractNumber(text) {
    let n = text.match(/\d+/);
    return n ? Number(n[0]) : 0;
}

function extractDescription(t, c) {
    return t.replace(c, "").replace(/\d+/g, "").trim();
}

updateUI();






