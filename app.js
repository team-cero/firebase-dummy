const userList = document.querySelector('#user-list');


// create html element, put data inside and render them to the dom

function renderUser(doc){
    let li= document.createElement('li');
    let name = document.createElement('span');
    let distance = document.createElement('span');
    let carBrand = document.createElement('span');
    let carModel = document.createElement('span');
    
    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    distance.textContent = doc.data().distance;
    carBrand.textContent = doc.data().carBrand;
    carModel.textContent = doc.data().carModel;

    li.appendChild(name);
    li.appendChild(distance);
    li.appendChild(carBrand);
    li.appendChild(carModel);

    userList.appendChild(li)

}

db.collection('users').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderUser(doc);
    })
})