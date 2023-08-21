// script.js
const showTableBtn = document.getElementById('showTableBtn');
const myTable = document.getElementById('myTable');

showTableBtn.addEventListener('click', () => {
  myTable.classList.toggle('hidden');
});



const showSkillsBtn = document.getElementById('showTableBtnSkill');
const mySkillsDiv = document.getElementById('mySkills');

showSkillsBtn.addEventListener('click', () => {
  mySkillsDiv.classList.toggle('hidden');
});

const showProjectsBtn = document.getElementById('showTableBtnProjects');
const myProjectsDiv = document.getElementById('myProjects');

showProjectsBtn.addEventListener('click', () => {
  myProjectsDiv.classList.toggle('hidden');
});


const showExperienceBtn = document.getElementById('showTableBtnExperience');
const myExperienceDiv = document.getElementById('myExperience');

showExperienceBtn.addEventListener('click', () => {
  myExperienceDiv.classList.toggle('hidden');
});


const showContactBtn = document.getElementById('showTableBtnContact');
const myContactDiv = document.getElementById('myContact');

showContactBtn.addEventListener('click', () => {
  myContactDiv.classList.toggle('hidden');
});


const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    if (nameInput.validity.valid && emailInput.validity.valid && messageInput.validity.valid) {
        showToast("Form submitted successfully!");
        form.reset();
    } else {
        if (!nameInput.validity.valid) {
            document.getElementById("nameError").textContent = "Please enter a valid name.";
        }
        if (!emailInput.validity.valid) {
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
        }
        if (!messageInput.validity.valid) {
            document.getElementById("messageError").textContent = "Please enter a message.";
        }
    }
});

nameInput.addEventListener("input", function () {
    document.getElementById("nameError").textContent = "";
});
emailInput.addEventListener("input", function () {
    document.getElementById("emailError").textContent = "";
});
messageInput.addEventListener("input", function () {
    document.getElementById("messageError").textContent = "";
});

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("data-delay", "4000"); 
  toast.textContent = message;

  document.body.appendChild(toast);

  $(toast).toast("show");
  $(toast).on("hidden.bs.toast", function () {
      document.body.removeChild(toast);
  });
}

