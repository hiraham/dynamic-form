interface Resume {
    personalInfo: {
      name: string;
      email: string;
      phone: string;
    };
    education: {
      degree: string;
      school: string;
      gradYear: number;
    };
    workExperience: {
      jobTitle: string;
      company: string;
      yearsWorked: number;
    };
    skills: string[];
  }
  
  const form = document.getElementById('resumeForm') as HTMLFormElement;
  const resumeContainer = document.getElementById('resumeContainer') as HTMLDivElement;
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Capture form data
    const resume: Resume = {
      personalInfo: {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        phone: (document.getElementById('phone') as HTMLInputElement).value,
      },
      education: {
        degree: (document.getElementById('degree') as HTMLInputElement).value,
        school: (document.getElementById('school') as HTMLInputElement).value,
        gradYear: parseInt((document.getElementById('gradYear') as HTMLInputElement).value),
      },
      workExperience: {
        jobTitle: (document.getElementById('jobTitle') as HTMLInputElement).value,
        company: (document.getElementById('company') as HTMLInputElement).value,
        yearsWorked: parseInt((document.getElementById('yearsWorked') as HTMLInputElement).value),
      },
      skills: (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim()),
    };
  
    // Generate the resume dynamically
    generateResume(resume);
  });
  
  // Function to dynamically generate and display the resume
  function generateResume(resume: Resume) {
    resumeContainer.innerHTML = `
      <h2>${resume.personalInfo.name}'s Resume</h2>
      <p>Email: ${resume.personalInfo.email}</p>
      <p>Phone: ${resume.personalInfo.phone}</p>
  
      <h3>Education</h3>
      <p>${resume.education.degree}, ${resume.education.school} (Class of ${resume.education.gradYear})</p>
  
      <h3>Work Experience</h3>
      <p>${resume.workExperience.jobTitle} at ${resume.workExperience.company} (${resume.workExperience.yearsWorked} years)</p>
  
      <h3>Skills</h3>
      <ul>
        ${resume.skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    `;
  }
  