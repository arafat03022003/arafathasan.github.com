// Add event listener to the print button
document.getElementById("print-button").addEventListener("click", function() {
  window.print();
});

// Add event listeners for dynamically adding and removing education entries
document.querySelector(".add-education").addEventListener("click", addEducation);
document.querySelector("#education-container").addEventListener("click", removeEducation);

function addEducation() {
  var educationContainer = document.querySelector("#education-container");
  var newEducationEntry = document.createElement("div");
  newEducationEntry.className = "education-entry";
  newEducationEntry.innerHTML = `
    <textarea class="form-control" required></textarea>
    <button type="button" class="btn btn-sm btn-danger remove-education">-</button>
  `;
  educationContainer.appendChild(newEducationEntry);
}

function removeEducation(event) {
  if (event.target.classList.contains("remove-education")) {
    event.target.parentElement.remove();
  }
}

// Add event listeners for dynamically adding and removing experience entries
document.querySelector(".add-experience").addEventListener("click", addExperience);
document.querySelector("#experience-container").addEventListener("click", removeExperience);

function addExperience() {
  var experienceContainer = document.querySelector("#experience-container");
  var newExperienceEntry = document.createElement("div");
  newExperienceEntry.className = "experience-entry";
  newExperienceEntry.innerHTML = `
    <textarea class="form-control" required></textarea>
    <button type="button" class="btn btn-sm btn-danger remove-experience">-</button>
  `;
  experienceContainer.appendChild(newExperienceEntry);
}

function removeExperience(event) {
  if (event.target.classList.contains("remove-experience")) {
    event.target.parentElement.remove();
  }
}

// Add event listeners for dynamically adding and removing languages entries
document.querySelector(".add-languages").addEventListener("click", addLanguages);
document.querySelector("#languages-container").addEventListener("click", removeLanguages);

function addLanguages() {
  var languagesContainer = document.querySelector("#languages-container");
  var newLanguagesEntry = document.createElement("div");
  newLanguagesEntry.className = "languages-entry";
  newLanguagesEntry.innerHTML = `
    <textarea class="form-control" required></textarea>
    <button type="button" class="btn btn-sm btn-danger remove-languages">-</button>
  `;
  languagesContainer.appendChild(newLanguagesEntry);
}

function removeLanguages(event) {
  if (event.target.classList.contains("remove-languages")) {
    event.target.parentElement.remove();
  }
}

// Add event listeners for dynamically adding and removing skills entries
document.querySelector(".add-skills").addEventListener("click", addSkills);
document.querySelector("#skills-container").addEventListener("click", removeSkills);

function addSkills() {
  var skillsContainer = document.querySelector("#skills-container");
  var newSkillsEntry = document.createElement("div");
  newSkillsEntry.className = "skills-entry";
  newSkillsEntry.innerHTML = `
    <textarea class="form-control" required></textarea>
    <button type="button" class="btn btn-sm btn-danger remove-skills">-</button>
  `;
  skillsContainer.appendChild(newSkillsEntry);
}

function removeSkills(event) {
  if (event.target.classList.contains("remove-skills")) {
    event.target.parentElement.remove();
  }
}



document.addEventListener('DOMContentLoaded', () => {
  // Function to handle bold, underline, and italic formatting
  function applyFormatting(textarea, style) {
    const currentValue = textarea.style[style] || 'normal';
    textarea.style[style] = currentValue === 'normal' ? style : 'normal';
  }

  // Function to add a new entry to the container
  function addEntry(container, entryClassName, addButtonClassName, removeButtonClassName) {
    const addEntryButton = document.querySelector(`.${addButtonClassName}`);
    addEntryButton.addEventListener('click', () => {
      const newEntry = document.createElement('div');
      newEntry.classList.add(entryClassName);

      const textarea = document.createElement('textarea');
      textarea.classList.add('form-control');
      textarea.setAttribute('required', true);

      const removeButton = document.createElement('button');
      removeButton.innerHTML = '-';
      removeButton.classList.add('btn', 'btn-sm', 'btn-danger', removeButtonClassName);
      removeButton.addEventListener('click', () => {
        container.removeChild(newEntry);
      });

      const boldButton = document.createElement('button');
      boldButton.innerHTML = 'B';
      boldButton.classList.add('btn', 'btn-sm', 'btn-format', 'bold-button');
      boldButton.addEventListener('click', () => {
        applyFormatting(textarea, 'fontWeight');
      });

      const underlineButton = document.createElement('button');
      underlineButton.innerHTML = 'U';
      underlineButton.classList.add('btn', 'btn-sm', 'btn-format', 'underline-button');
      underlineButton.addEventListener('click', () => {
        applyFormatting(textarea, 'textDecoration');
      });

      const italicButton = document.createElement('button');
      italicButton.innerHTML = 'I';
      italicButton.classList.add('btn', 'btn-sm', 'btn-format', 'italic-button');
      italicButton.addEventListener('click', () => {
        applyFormatting(textarea, 'fontStyle');
      });

      newEntry.appendChild(textarea);
      newEntry.appendChild(boldButton);
      newEntry.appendChild(underlineButton);
      newEntry.appendChild(italicButton);
      newEntry.appendChild(removeButton);

      container.appendChild(newEntry);
    });
  }

  // Add entries for each container
  addEntry(document.getElementById('education-container'), 'education-entry', 'add-education', 'remove-education');
  // Add entries for the rest of the containers (Experience, Languages, Skills) here
});






















