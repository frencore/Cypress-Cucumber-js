const fs = require('fs');

// Create commands.js file
fs.writeFileSync('cypress/support/commands.js', '// Custom commands go here');

console.log('Updated project structure:');
require('child_process').execSync('tree -L 3', { stdio: 'inherit' });