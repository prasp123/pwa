self.addEventListener('push', function (event) {
    console.log('Push received with this data: "${event.data.text()}"');
    const title = 'Peggy says:';
    let options = {
        body: event.data.text(),
        icon: 'images/peggy_parrot.jpg',
        actions: [
            {
                action: "feed", title: "Feed Peggy"
            },
            {
                action: "wait", title: "Wait to Feed Peggy"
            }
        ]
    };
    event.waitUntil(self.registration.showNotification(title, options));
});
