self.addEventListener('push',()=>{
    self.registration.sendNotification('hello world',{});
})
