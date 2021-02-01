const admin = require("firebase-admin");
const serviceAccount = require("../../wildhabitatexercise-firebase-adminsdk-z62ei-700410599c.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
  const firestore = admin.firestore();


  const personRef = firestore.collection("people");

  exports.getPerson = (req, res) => {
    if (!firestore) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      firestore = admin.firestore();
    }
    const { personId } = req.params;
    personRef
      .doc(personId)
      .get()
      .then((doc) => {
        let person = doc.data();
        person.id = doc.id;
        res.status(200).json({
          status: "successPers",
          data: person,
          message: "Persons loaded successfully",
          statusCode: 200,
        });
      })
      .catch((err) => {
        res.status(508).send({});
      });
  };

  exports.delete = (req, res) => {
    if (!firestore) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      firestore = admin.firestore();
    }
  
    eventsRef
      .doc(req.params.eventId)
      .delete()
      .then(() => {
        res.status(200).json({
          status: "success",
          data: event,
          message: "Event deleted successfully",
          statusCode: 200,
        });
      })
      .catch((err) => {
        res.status(500).json({
          status: "error",
          data: err,
          message: "Error deleting events",
          statusCode: 500,
        });
      });
  };
