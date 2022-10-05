const qrcode = require('qrcode-terminal');

console.log(qrcode.generate('WIFI:S:SOCIALDESK - 9th Floor;T:WPA;P:SocialD3$K09F;', {small:true}));

console.log(qrcode.generate('BEGIN:VCARD\nVERSION:3.0\nFN:Ryann Flores\nTEL;TYPE=work,VOICE:+63-995-292-0869\nEMAIL:ryann.flores@siteminder.com\nEND:VCARD;', {small:true}));
