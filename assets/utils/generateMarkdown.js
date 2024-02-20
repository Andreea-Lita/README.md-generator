const fs = require('fs');
// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
var renderLicenseBadge = (licensee) => {
    return licensee ? `! ${licensee} license` : '';
}

// Returns the license link
function renderLicenseLink(licens) {
    switch (licens) {
        case 'MIT':
            return `https://lbesson.mit-license.org/`;
        case 'Apache-2.0':
            return `https://www.apache.org/licenses/LICENSE-2.0`;
        case 'BSD-2-Clause':
            return `https://opensource.org/licenses/BSD-2-Clause`;
        case 'GPL-3.0':
            return `https://www.gnu.org/licenses/gpl-3.0.html`;
        case 'MPL 2.0':
            return `https://www.mozilla.org/en-US/MPL/2.0/`;
        case 'BSL-1.0':
            return `https://opensource.org/licenses/BSL-1.0`;
        case 'LGPL-2.1':
            return `https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html`;
        default:
            return ``; // Return an empty string for unsupported licenses
    }
}

// Returns the license section of README
// If there is no license, return an empty string
var renderLicenseSection = (licen) => {
    return licen ? `## Licenses
  This project is covered under the ${licen} license, follow link for details: ${renderLicenseLink(licen)}.` : '';
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
 
    ${renderLicenseBadge(data.licenses)}
 
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

  ${renderLicenseSection(data.licenses)}
 
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