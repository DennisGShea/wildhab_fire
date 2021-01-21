const admin = require("firebase-admin");
const serviceAccount = require("./wildhabitatexercise-firebase-adminsdk-z62ei-700410599c.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore()

firestore.collection('people').where('first_name','==','Scar')
    .get()
    .then (collection => {
        collection.forEach(doc => {
            console.log(doc.id, '-->', doc.data())
        })
    })
    .catch (err => console.log({err}))

