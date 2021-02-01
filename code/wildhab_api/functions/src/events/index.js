const admin = require("firebase-admin");
const serviceAccount = require("../../wildhabitatexercise-firebase-adminsdk-z62ei-700410599c.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
const firestore = admin.firestore();
const eventsRef = firestore.collection("events");

exports.postEvent = (req, res) => {
  if (!firestore) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    firestore = admin.firestore();
  }
  console.log('req body', (req.body).length)
  if (Object.keys(req.body).length || req.body === undefined) {
      res.send({
            message: "No event defined"
      })
      return
  }

  if (Object.keys(req.body).length === 0 || req.bod == undefined) {
        res.send({
            message: "no event defined"
        })
        return
    }

  if (req.body.name === null)  { 
        res.send({
            messaage: "Event name required"
        })
        return
  }

  if (typeof req.body.name !== 'string') {
        res.send({
            message: "Invalid event name"
  })
        return
  }
//-----*******------*******------******-----  added Wed morning -- validating data prior to posting 
  
    const ObjKeys = ["desc", "name", "hosted_by"]

    const incAllProps = ObjKeys.some(key => !validProps.includes(key)) 
                  ObjKeys(req)
        console.log("checking if all needed properties r included...")
        console.log(incAllProps)  //true if all properties necessary are there 
        
    //if(incAllProps)     
    // if(incAllProps) console.log("all_code")
    


  
  //------

//   ValidEventEntries = [     hosted_by: "checkHostId",
//                             name: "state":
//                             desc: "string"
//                     ]
//     ValidEventProperties =  [ 'hosted_by' 
//                             name: "state":
//                             desc: "string"
//                     ]

//                     ObjKeys.some( key => !validProps.includes(key))

    // let user.name = req.body.name
    // (req.body.name).toLower() = 

    // ObjKeys = ['prop1', 'prop2', 'prop3']

    // let includesAllProperties = ObjKeys.(key => .validProps.includes(()).lastName.includes("li",0))
    // console.log("Challenge #6: Last Names w li ", includesLi)




  let newEvent = req.body;
  let now = admin.firestore.FieldValue.serverTimestamp();
  newEvent.updated = now;
  newEvent.created = now;

  eventsRef
    .add(newEvent)
    .then((docRef) => {
      console.log("docid", docRef.id);
      eventsRef
        .doc(docRef.id)
        .get()
        .then((snapshot) => {
          let event = snapshot.data();
          event.id = snapshot.id;
          res.status(200).json({
            status: "success",
            data: event,
            message: "Events loaded successfully",
            statusCode: 200,
          });
          return;
        });
    })
    .catch((err) => {
      res.status(500).send({
        status: "error",
        data: err,
        message: "Error creating event",
        statusCode: 500,
      });
    });
};

exports.getEvents = (req, res) => {
  if (!firestore) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    firestore = admin.firestore();
  }
  eventsRef
    .get()
    .then((collection) => {
      const eventsResults = collection.docs.map((doc) => {
        let event = doc.data();
        event.id = doc.id;
        return event;
      });
      res.status(200).json({
        status: "success",
        data: eventsResults,
        message: "Events loaded successfully",
        statusCode: 200,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: "error",
        data: err,
        message: "Error getting events",
        statusCode: 500,
      });
    });
};
