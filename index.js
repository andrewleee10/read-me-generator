const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown')

let questions = []

const userInput = () => {
  inquirer.prompt([
    {
      type: 'input'
      name: 'title'
      message: 'Enter project title.'
    },
    {
      type: 'input'
      name: 'description'
      message: 'Enter description.'
    },
    {
      type: 'input'
      name: 'installation'
      message: 'Enter installation instructions.'
    },
    {
      type: 'input'
      name: 'usage'
      message: 'Enter usage information.'
    },
    {
      type: 'input'
      name: 'contribution'
      message: 'Enter contribution guidelines.'
    },
    {
      type: 'input'
      name: 'test'
      message: 'Enter test instructions.'
    },
  ])
    .then (res => {
      console.log(res)
      questions.push(description, installation, usage, contribution, test)
      generateMarkdown(res.title)
    })
    .catch (err => console.log(err))
}