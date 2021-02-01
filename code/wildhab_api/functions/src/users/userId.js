const admin = require("firebase-admin")
const serviceAccount = require("../../wildhabitatexercise-firebase-adminsdk-z62ei-700410599c.json")
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}
const firestore = admin.firestore()
const personRef = firestore.collection("people")

exports.getSinglePerson = (req, res) => {
  if(!firestore) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    })
    firestore = admin.firestore()
  }
  const { userId } = req.params
  personRef.doc(userId).get()
    .then(doc => {
      let event = doc.data()
      person.id = doc.id
      res.status(200).json({
        status: 'success',
        data: person,
        message: 'userId loaded successfully',
        statusCode: 204
      })
    })
    .catch(err => {
      res.status(500).send({
        status: "error",
        data: err,
        message: 'Error getting userIds',
        statusCode: 500,
      })
    })
  }
