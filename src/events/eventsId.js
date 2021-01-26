const admin = require("firebase-admin")
const serviceAccount = require("../../wildhabitatexercise-firebase-adminsdk-z62ei-700410599c.json")

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}
const firestore = admin.firestore()
const eventsRef = firestore.collection('events')

exports.getSingleEvent = (req, res) => {
  if(!firestore) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    })
    firestore = admin.firestore()
  }
  const { eventId } = req.params
  eventsRef.doc(eventId).get()
    .then(doc => {
      let event = doc.data()
      event.id = doc.id
      res.status(200).json({
        status: 'success',
        data: event,
        message: 'Events loaded successfully',
        statusCode: 200
      })
    })
    .catch(err => {
      res.status(500).send({
        
      })
    })
}

exports.deleteEvent = (req, res) => {
    if(!firestore) {
        admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
        })
        firestore = admin.firestore()
    }

    eventsRef.doc(req.params.eventId).delete()
        .then(() => {
            res.status(200).json
            ({
            status: 'success',
            data: event,
            message: 'Event deleted successfully',
            statusCode: 200
            })
        })
        .catch  (err => {
            res.status(500).json({
                status: 'error',
                data: err,
                message: 'Error deleting events',
                statusCode: 500
        })
    })

}
/*  version I was working on
exports.updateEvent = (req, res) => {
        if(!firestore) {
            admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
            })
            firestore = admin.firestore()
        }
        const data = {
            location: 'Boca Code',
            state: 'FL'
        }

        eventsRef.doc(req.params.eventId).set()
            .doc(req.params.eventId)
            .update(data)
            .then(() => { 
                res.status(200).json({
                    status: 'Item updated',
                    message: 'Event was updated',
                    statusCode: 200,
                })
                })
                .catch(err => {
                        res.status(500).json({
                        status: 'nasty error',
                        data: err,
                        message: 'Error ',
                        statusCode: 500,
                })
                })

            
            
            
            }
*/

exports.updateEvent = (req, res) => {
                console.log('here is the req', req)
                  if (!firestore) {
                      admin.initializeApp({
                          credential: admin.credential.cert(serviceAccount),
                      })
                      firestore = admin.firestore()
                  }
                  const data = {
                      location: 'Boca Code',
                      state: 'FL',
                  }
                  eventsRef
                      .doc(req.params.eventId)
                      .update(data)
                      .then(() => {
                          res.status(200).json({
                              status: 'Item updated',
                              message: 'Event was updated',
                              statusCode: 200,
                          })
                      })
                      .catch(err => {
                          res.status(500).json({
                              status: 'nasty error',
                              data: err,
                              message: 'Error updating Event',
                              statusCode: 500,
                          })
                      })
    }