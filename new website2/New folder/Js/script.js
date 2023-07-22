// JavaScript for handling dynamic functionalities in the form

// Function to add new education entry
function addEducation() {
  const educationContainer = document.getElementById("education-container");
  const newEducationEntry = document.createElement("div");
  newEducationEntry.className = "education-entry";
  newEducationEntry.innerHTML = `
    <textarea class="form-control" required></textarea>
    <button type="button" class="btn btn-sm btn-danger remove-education">-</button>
  `;
  educationContainer.appendChild(newEducationEntry);
}

// Function to remove education entry
function removeEducation(event) {
  const entry = event.target.parentElement;
  entry.remove();
}

// Function to add new experience entry
function addExperience() {
  const experienceContainer = document.getElementById("experience-container");
  const newExperienceEntry = document.createElement("div");
  newExperienceEntry.className = "experience-entry";
  newExperienceEntry.innerHTML = `
    <textarea class="form-control" required></textarea>
    <button type="button" class="btn btn-sm btn-danger remove-experience">-</button>
  `;
  experienceContainer.appendChild(newExperienceEntry);
}

// Function to remove experience entry
function removeExperience(event) {
  const entry = event.target.parentElement;
  entry.remove();
}

// Function to add new languages entry
function addLanguages() {
  const languagesContainer = document.getElementById("languages-container");
  const newLanguagesEntry = document.createElement("div");
  newLanguagesEntry.className = "languages-entry";
  newLanguagesEntry.innerHTML = `
    <textarea class="form-control" required></textarea>
    <button type="button" class="btn btn-sm btn-danger remove-languages">-</button>
  `;
  languagesContainer.appendChild(newLanguagesEntry);
}

// Function to remove languages entry
function removeLanguages(event) {
  const entry = event.target.parentElement;
  entry.remove();
}

// Function to add new skills entry
function addSkills() {
  const skillsContainer = document.getElementById("skills-container");
  const newSkillsEntry = document.createElement("div");
  newSkillsEntry.className = "skills-entry";
  newSkillsEntry.innerHTML = `
    <textarea class="form-control" required></textarea>
    <button type="button" class="btn btn-sm btn-danger remove-skills">-</button>
  `;
  skillsContainer.appendChild(newSkillsEntry);
}

// Function to remove skills entry
function removeSkills(event) {
  const entry = event.target.parentElement;
  entry.remove();
}

// Attach event listeners
document.querySelector(".add-education").addEventListener("click", addEducation);
document.querySelector(".add-experience").addEventListener("click", addExperience);
document.querySelector(".add-languages").addEventListener("click", addLanguages);
document.querySelector(".add-skills").addEventListener("click", addSkills);

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-education")) {
    removeEducation(event);
  } else if (event.target.classList.contains("remove-experience")) {
    removeExperience(event);
  } else if (event.target.classList.contains("remove-languages")) {
    removeLanguages(event);
  } else if (event.target.classList.contains("remove-skills")) {
    removeSkills(event);
  }
});

// Function to handle form submission
document.getElementById("bio-data-form").addEventListener("submit", function (event) {
  event.preventDefault();
  // Handle form submission here
  // You can access the form fields using their IDs (e.g., document.getElementById("first-name").value)
  // Perform any additional validation or processing as needed
});
