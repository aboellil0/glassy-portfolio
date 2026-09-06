const fs = require('fs');
const path = require('path');

const src = 'C:/Users/MOHAMED-ABOELLIL/Desktop/New folder/portfolios/portfolio/public/docs';
const dst = 'C:/Users/MOHAMED-ABOELLIL/Desktop/New folder/portfolios/new portfolio/public/docs';

fs.mkdirSync(dst, { recursive: true });
fs.readdirSync(src).forEach(f => {
    const sp = path.join(src, f);
    const dp = path.join(dst, f);
    fs.copyFileSync(sp, dp);
});

console.log('Docs copied successfully!');
