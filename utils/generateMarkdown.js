// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  
# Description
${answers.description} 

## Table of Contents 
 

## Installation 
${answers.installation} 

## Usage 
${answers.usage} 

## License 
${answers.license} 

## Contributing 
${answers.contributing} 

## Tests 
${answers.tests} 

## Questions
If you have any questions regarding this repo, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.githubUsername}](https://github.com/${answers.githubUsername}/).
`;
}

module.exports = generateMarkdown;
