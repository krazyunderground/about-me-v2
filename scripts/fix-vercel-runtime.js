import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const functionsDir = '.vercel/output/functions';

if (!existsSync(functionsDir)) {
  console.log('No functions directory found, skipping runtime fix');
  process.exit(0);
}

const funcDirs = readdirSync(functionsDir);

for (const funcDir of funcDirs) {
  const configPath = join(functionsDir, funcDir, '.vc-config.json');
  
  if (existsSync(configPath)) {
    const config = JSON.parse(readFileSync(configPath, 'utf-8'));
    
    if (config.runtime === 'nodejs18.x') {
      config.runtime = 'nodejs20.x';
      writeFileSync(configPath, JSON.stringify(config, null, 2));
      console.log(`Updated ${configPath}: nodejs18.x -> nodejs20.x`);
    }
  }
}

console.log('Vercel runtime fix complete');
