// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data}
  ## Table of Contents
  ${data}
  ## Installation
  ${data}
  ## Usage
  ${data}
  ## License
  ${data}
  ## Contributing
  ${data}
  ## Tests
  ${data}
  ## Questions
`;
}

module.exports = generateMarkdown;

