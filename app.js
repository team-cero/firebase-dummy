// for sync, then
db.collection('users').get().then((snapshot) => {
    console.log(snapshot.docs);
})