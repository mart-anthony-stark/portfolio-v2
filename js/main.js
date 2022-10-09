window.onload = function () {
  console.log("f");
  const projectsContainer = document.querySelector("#projects .container");
  projectsContainer.innerHTML = projects
    .map(
      (project) => `<div class="card">
    <div class="desc">
        <a href=${
          project.sourcecode
        } target='_blank'><h3><img class='repo' src="./img/svg/repo.svg" alt="Repo">${
        project.name
      }</h3></a>
        ${
          project.link != null
            ? `<a class='link' href=${project.link} target='_blank'><img class="repo" src="./img/svg/link.svg" alt="link">${project.link}</a>`
            : ""
        }
        <p>${project.description}</p>
    </div>

    <div class="bottom">
        <div class="lang-color" style='background: ${
          langColors[project.lang]
        }'></div>
        <span class="lang">${project.lang}</span>
    </div>
</div>`
    )
    .join("");
};
console.log("hello");
