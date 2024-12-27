// Sample project data
const projects = [
  {
      title: "Project 1",
      description: "Short description of Project 1",
      githubLink: "https://github.com/yourusername/project1"
  },
  {
      title: "Project 2",
      description: "Short description of Project 2",
      githubLink: "https://github.com/yourusername/project2"
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