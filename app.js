const userList = document.querySelector('#user-list');


// create html element, put data inside and render them to the dom

function renderUser(doc){
    
}

db.collection('users').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderUser(doc);
    })
})