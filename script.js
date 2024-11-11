document.addEventListener('DOMContentLoaded', () => {
    fetch('./projects.json')
      .then(response => response.json())
      .then(data => displayProjects(data))
      .catch(error => console.error('Error loading projects:', error));
  });
  
  function displayProjects(projects) {
    const container = document.getElementById('project-container');
    projects.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('project-card');
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;
      container.appendChild(card);
    });
  }
  