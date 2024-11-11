document.addEventListener('DOMContentLoaded', () => {
    const frontContainer = document.getElementById('front-container');
    const backContainer = document.getElementById('back-container');
  
    fetch('./projects.json')
      .then(response => response.json())
      .then(data => {
        if (frontContainer) displayProjects(data, frontContainer, 'front');
        if (backContainer) displayProjects(data, backContainer, 'back');
      })
      .catch(error => console.error('Error loading projects:', error));
  });
  
  function displayProjects(projects, container, category) {
    projects
      .filter(project => project.category === category)
      .forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');
  
        const imageTag = project.category === 'front' 
          ? `<img src="${project.image}" alt="${project.title}">` 
          : '';
  
        card.innerHTML = `
          ${imageTag}
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        `;
        container.appendChild(card);
      });
  }
  