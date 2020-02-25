const userList = document.querySelector('#user-list');
const form = document.querySelector("#add-car-form");

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

    userList.appendChild(li )

}
//getting data
db.collection('users').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderUser(doc);
    })
})

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('users').add({
        name: form.name.value,
        distance: form.distance.value,
        carBrand: form.carBrand.value,
        carModel: form.carModel.value
    });

})