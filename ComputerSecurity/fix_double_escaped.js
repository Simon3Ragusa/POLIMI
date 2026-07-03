const fs = require('fs');

let content = fs.readFileSync('F:/Wiki/POLIMI/ComputerSecurity/CS_Exercises.tex', 'utf8');

// Replace \\% with \%
content = content.replace(/\\\\%/g, '\\%');

fs.writeFileSync('F:/Wiki/POLIMI/ComputerSecurity/CS_Exercises.tex', content, 'utf8');
console.log('Fixed double escaped %');
