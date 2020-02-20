const userList = document.querySelector('#user-list');


db.collection('users').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
    })
})