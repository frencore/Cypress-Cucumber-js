const { execSync } = require('child_process');
const fs = require('fs');

// Create project directory
fs.mkdirSync('cypress-cucumber-project', { recursive: true });
process.chdir('cypress-cucumber-project');

// Initialize npm project
execSync('npm init -y', { stdio: 'inherit' });

// Install dependencies
execSync('npm install --save-dev cypress @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor esbuild', { stdio: 'inherit' });

// Create directory structure
fs.mkdirSync('cypress/e2e/features', { recursive: true });
fs.mkdirSync('cypress/e2e/step_definitions', { recursive: true });
fs.mkdirSync('cypress/support', { recursive: true });
fs.mkdirSync('.vscode', { recursive: true });

console.log('Project structure created successfully!');

// Display the created structure
console.log('\nProject structure:');
execSync('tree -L 3', { stdio: 'inherit' });