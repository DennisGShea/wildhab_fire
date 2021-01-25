const admin = require("firebase-admin")
const serviceAccount = require("../../wildhabitatexercise-firebase-adminsdk-z62ei-700410599c.json")
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)})

const firestore = admin.firestore()

exports.getEvents =(req, res) => {
      
      firestore.collection('events').get()
          .then (collection => {
            const eventsResults = collection.docs.map(doc => {
                let event = doc.data()
                event.id = doc.id
                return event
            })
            res.status(200).json({
                status: 'success',
                data: eventsResults,
                message: 'Events loaded successfully',
                statusCode: 200
        })
    })
          .catch (err => {
              res.status(500).send({
                status: 'error',
                data: err,
                message: 'Error getting events',
                statusCode: 500
              })
         })
        }






