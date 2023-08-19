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
