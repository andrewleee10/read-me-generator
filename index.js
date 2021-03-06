const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown')


const userInput = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter project title.'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter description.'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions.'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select license:',
      choices: ['MIT', 'GNU GPLv3', 'Apache', 'OpenBSD', 'None']
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution guidelines.'
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter test instructions.'
    }
  ])
    .then(res => {
      console.log(res)
      let generate = generateMarkdown(res)
      fs.writeFile('READMEtest.md', generate, err => {
        if (err) { console.log(err) }
      })
    })
    .catch(err => console.log(err))
}

userInput()