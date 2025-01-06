// Portfolio items
const projects = [
  {
      title: "US Congress Data",
      description: "Exploratory Data Analysis and Visualization of US Congress Data",
      githubLink: "https://github.com/b-ai-ley/CongressInfo"
  },
  {
      title: "Agent Based Large Language Models",
      description: "Short description of Project 2",
      githubLink: "https://github.com/b-ai-ley/Agent-Based-Large-Language-Models"
  },
  {
      title: "US Housing Market Analysis",
      description: "Short description of Project 2",
      githubLink: "https://github.com/b-ai-ley/US-Housing-Market-Analysis"
  },
  // Add more projects as needed
];

// Function to create project items
function createProjectItem(project) {
  const projectItem = document.createElement('div');
  projectItem.className = 'project-item';
  projectItem.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.githubLink}" target="_blank">View on GitHub</a>
  `;
  return projectItem;
}

// Function to populate projects
function populateProjects() {
  const projectList = document.getElementById('project-list');
  projects.forEach(project => {
      projectList.appendChild(createProjectItem(project));
  });
}

// Call the function when the page loads
window.onload = populateProjects;