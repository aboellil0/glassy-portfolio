const fs = require('fs');
const path = require('path');

const src = 'C:/Users/MOHAMED-ABOELLIL/Desktop/New folder/portfolios/portfolio/public/images';
const dst = 'C:/Users/MOHAMED-ABOELLIL/Desktop/New folder/portfolios/new portfolio/public/images';

function copyDir(s, d) {
    fs.mkdirSync(d, { recursive: true });
    fs.readdirSync(s).forEach(f => {
        const sp = path.join(s, f);
        const dp = path.join(d, f);
        if (fs.statSync(sp).isDirectory()) {
            copyDir(sp, dp);
        } else {
            fs.copyFileSync(sp, dp);
        }
    });
}

copyDir(src, dst);
console.log('Images copied successfully!');
