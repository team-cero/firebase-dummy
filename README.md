# [Firebase main page](https://firebase.google.com/https://firebase.google.com/)


## [Cloud firestore](https://firebase.google.com/docs/functions)

**delete**: [firebase document](https://firebase.google.com/docs/firestore/query-data/queries)
**order**
- Capital words comes first
- `db.collection('users').where('carBrand', '==', 'VW').orderBy('distance').get().then((snapshot) => {`.. , click the console and make some index
**real-time db**
- making listener, firebase active to snapshot 

    db.collection('users').orderBy('distance').onSnapshot( snapshot => {
        let changes = snapshot.docChanges();
        //  console.log(changes)
        changes.forEach( change => {
            // get the data inside the document
            // console.log(change.doc.data())

            // check the type of change
            if(change.type == 'added'){
                renderUser(change.doc);
            } else if  (change.type == 'removed'){
                let li = userList.querySelector('[data-id=' + change.doc.id + ']');
                userList.removeChild(li);
            }
        });
    });

**update**: 1. grab collection 2. individual document id, 3. update method
    
    db.collection('users').doc('kLSlKz8jIWe9NKP71LYP').update({ name: 'Jiwon Kim'})

**set** totally override the *whole* document.

    db.collection('users').doc('kLSlKz8jIWe9NKP71LYP').set({ name: 'Jiwon Kim'})


### Framework - Visual Studio Code
- [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - library

## ML kit

- [Tensorflow-Lite img clssification](https://www.tensorflow.org/lite/models/image_classification/overview)

<!-- ## Cloud Functions

## Authentification

## Hosting

## Cloud Storage

## Realtime Database -->
