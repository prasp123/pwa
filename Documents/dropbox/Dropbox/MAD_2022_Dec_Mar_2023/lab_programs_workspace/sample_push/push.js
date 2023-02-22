
var push = require('web-push');
let vapidkeys = {
    publicKey: 'BEGBElrne0vddRaZhCEuADM_Zpesay5bBVDxBdVDs4M1ZPjnFAnmJ7xBYElLVmceV4ITGWQOn-_eekO3lpAmcX0',
    privateKey: 'BfiG-CwxhVm4R7TvAPEv7ZSc_pt-KPxweXQ3d5RwAdA'
  }

  push.setVapidDetails("mailto:test@vtu.ac.in",
  vapidkeys.publicKey,
  vapidkeys.privateKey);

  let sub = {};
  push.sendNotification(sub,"test message");

