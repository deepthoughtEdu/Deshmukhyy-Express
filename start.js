/**
 * 
 * @date 07-12-2023
 * @author imshawan <hello@imshawan.dev>
 * 
 * @description This script initiates the concurrent execution of backend and frontend applications of Deshmukhyy Express, 
 * adapting to the specified environment variable (NODE_ENV). 
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const env = String(process.env.NODE_ENV || 'development').trim();

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

function checkConfigFile() {
    const backendDir = path.join(__dirname, 'backend');
    const configFile = path.join(backendDir, 'config.json');

    if (!fs.existsSync(configFile)) {
      console.error('Error: "config.json" file not found in the "backend" directory.\n\n');
      process.exit(1);
    }
}

(() => {
      const backendDir = path.join(__dirname, 'backend');
      const frontend = path.join(__dirname, 'frontend');

      checkConfigFile();

      if (env === 'development') {
          executeCommandInDirectory(backendDir, 'npm run dev');
          executeCommandInDirectory(frontend, 'npm start');

      } else if (env === 'production') {
          executeCommandInDirectory(backendDir, 'npm start');
          executeCommandInDirectory(frontend, 'npm start');

      } else {
          console.error(`Error: Unsupported environment "${env}".`);
          process.exit(1);
      }
})();