// Function to update user information


function updateInformation() {
  // Get the existing content of all fields
  var existingSkills = document.getElementById('skills').innerText;
  var existingEducation = document.getElementById('education').innerText;
  var existingExperience = document.getElementById('experience').innerText;
  var existingPortfolio = document.getElementById('portfolio').innerHTML;
  var existingSocialMedia = document.getElementById('socialMedia').innerHTML;

  // Get values from form
  var skills = document.getElementById('skillsInput').value || existingSkills; // Use existing value if input is empty
  var education = document.getElementById('educationInput').value || existingEducation; // Use existing value if input is empty
  var experience = document.getElementById('experienceInput').value || existingExperience; // Use existing value if input is empty
  var portfolio = document.getElementById('portfolioInput').value || existingPortfolio; // Use existing value if input is empty
  var socialMedia = document.getElementById('socialMediaInput').value || existingSocialMedia; // Use existing value if input is empty

  // Update information on the page
  document.getElementById('skills').innerText = skills;
  document.getElementById('education').innerText = education;
  document.getElementById('experience').innerText = experience;
  document.getElementById('portfolio').innerHTML = portfolio;
  document.getElementById('socialMedia').innerHTML = socialMedia;

  var notificationMessage = document.getElementById('notificationMessage');
  notificationMessage.innerText = 'Information updated successfully!';

  // Scroll to display message section
  notificationMessage.scrollIntoView({ behavior: 'smooth' });
  }