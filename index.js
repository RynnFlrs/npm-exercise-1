const qrcode = require('qrcode-terminal');

const person = {
  name: 'Ryann Flores',
  contactNum: '(+63)-995-292-0869',
  workEmail: 'ryann.flores@siteminder.com',
  personalEmail: 'ryann.abillon.flores@gmail.com',
};

console.log(qrcode.generate('WIFI:S:SOCIALDESK - 9th Floor;T:WPA;P:SocialD3$K09F;', {
    small: true,
  })
);

console.log(qrcode.generate(
    'BEGIN:VCARD\nVERSION:3.0\n' +
      '\nFN:' +
      person.name +
      '\nTEL;TYPE=work,VOICE:' +
      person.contactNum +
      '\nEMAIL;WORK;INTERNET:' +
      person.workEmail +
      '\nEMAIL;HOME;INTERNET:' +
      person.personalEmail +
      '\nEND:VCARD;',
    { small: true }
  )
);
