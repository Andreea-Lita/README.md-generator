// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
 
  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.licenses} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Have questions related to this project? Here are the contact details for it:
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}

  ## Credits
This project was created by ${data.name}
`;
}

module.exports = generateMarkdown;