var form = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('resumeContainer');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Capture form data
    var resume = {
        personalInfo: {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
        },
        education: {
            degree: document.getElementById('degree').value,
            school: document.getElementById('school').value,
            gradYear: parseInt(document.getElementById('gradYear').value),
        },
        workExperience: {
            jobTitle: document.getElementById('jobTitle').value,
            company: document.getElementById('company').value,
            yearsWorked: parseInt(document.getElementById('yearsWorked').value),
        },
        skills: document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); }),
    };
    // Generate the resume dynamically
    generateResume(resume);
});
// Function to dynamically generate and display the resume
function generateResume(resume) {
    resumeContainer.innerHTML = "\n      <h2>".concat(resume.personalInfo.name, "'s Resume</h2>\n      <p>Email: ").concat(resume.personalInfo.email, "</p>\n      <p>Phone: ").concat(resume.personalInfo.phone, "</p>\n  \n      <h3>Education</h3>\n      <p>").concat(resume.education.degree, ", ").concat(resume.education.school, " (Class of ").concat(resume.education.gradYear, ")</p>\n  \n      <h3>Work Experience</h3>\n      <p>").concat(resume.workExperience.jobTitle, " at ").concat(resume.workExperience.company, " (").concat(resume.workExperience.yearsWorked, " years)</p>\n  \n      <h3>Skills</h3>\n      <ul>\n        ").concat(resume.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n      </ul>\n    ");
}
