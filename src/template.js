const teamCards = softWareTeam => {

    const buildManager = manager => {
        return `
         <div class="card" style="width: 18rem;">
      <div class="card-header">
      ${manager.getName()}
      </div>
      <div class="card-header">
          ${manager.getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${manager.getId()}</li>
        <li class="list-group-item"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>  
        <li class="list-group-item">${manager.getOfficeNumber()}</li>
      </ul>
    </div> `;
    };

    const buildIntern = intern => {
      return `
      <div class="card" style="width: 18rem;">
    <div class="card-header">
    ${intern.getName()}
    </div>
    <div class="card-header">
        ${intern.getRole()}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${intern.getId()}</li>
      <li class="list-group-item">${intern.getEmail()}</li>
      <li class="list-group-item">${intern.school()}</li>
    </ul>
  </div> `;
  };

  const buildEngineer = engineer => {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-header">
  ${engineer.getName()}
  </div>
  <div class="card-header">
      ${engineer.getRole()}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${engineer.getId()}</li>
    <li class="list-group-item">${engineer.getEmail()}</li>
    <li class="list-group-item"><a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
  </ul>
</div> `;
};


  const html = [];

  html.push(...softWareTeam
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => buildManager(manager))
  );
  html.push(...softWareTeam
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => buildEngineer(engineer))
  );
  html.push(...softWareTeam
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => buildIntern(intern))
  );

  return html.join("");

};
    


module.exports = team => {

  return `
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
  <div class="container-fluid">
      <div class="row">
          <div class="col-12 jumbotron mb-3 team-heading">
              <h1 class="text-center">My Team</h1>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="row">
          <div class="team-area col-12 d-flex justify-content-center">
              ${teamCards(team)}
          </div>
      </div>
  </div>
</body>
</html>
  `;
};