const fs = require('fs');
const path = require('path');
const glob = require('glob');

// We don't have glob installed guaranteed, so let's do recursive readdir
function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = dir + '/' + file;
    if (fs.statSync(name).isDirectory()) {
      if (!name.includes('node_modules') && !name.includes('.next')) {
        getFiles(name, files);
      }
    } else if (name.endsWith('.ts') || name.endsWith('.tsx') || name.endsWith('.css')) {
      files.push(name);
    }
  }
  return files;
}

const files = getFiles('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content
    .replace(/font-inter-tight/g, 'font-manrope')
    .replace(/interTight/g, 'manrope')
    .replace(/Inter_Tight/g, 'Manrope')
    .replace(/'Inter Tight'/g, "'Manrope'")
    .replace(/--font-interTight/g, '--font-manrope');
    
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log(`Updated ${file}`);
  }
});
