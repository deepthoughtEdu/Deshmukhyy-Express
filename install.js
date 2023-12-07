const path = require('path');
const { execSync } = require('child_process');

function executeCommandInDirectory(directory, command) {
    try {
        process.chdir(directory);
        console.log(`Executing command in ${directory}: ${command}`);
        execSync(`start cmd /k ${command}`, { stdio: 'inherit' });
        
    } catch (error) {
        console.error(`Error executing command in ${directory}: ${error.message}`);
        process.exit(1);
    }
}

(() => {
    const backendDir = path.join(__dirname, 'backend');
    const frontend = path.join(__dirname, 'frontend');

    executeCommandInDirectory(backendDir, 'npm install');
    executeCommandInDirectory(frontend, 'npm install');
})()