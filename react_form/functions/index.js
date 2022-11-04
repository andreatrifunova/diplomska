
const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.writeMessage = functions.https.onCall( (data, context) => {
  // Grab the text parameter.
  const original = data.text;
  return `Successfully received: ${original}`;
});

// eslint-disable-next-line max-len
// exports.scheduledFunction = functions.pubsub.schedule("every 5 seconds").onRun((context) => {
//   console.log("This will be run every 5 minutes!");
//   return null;
// });
// eslint-disable-next-line max-len
// exports.scheduledFunction = functions.pubsub.schedule("every 5 seconds").onRun((context) => {
//   console.log("This will be run every 5 seconds");
//   return null;
// });

// exports.doSomething = functions.https.onRequest((req, res) => {
//   const duration = req.query.duration;
//   sleep(duration);
//   res.redirect(200, "/");
// });

// function sleep(milliseconds) {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e30; i++) {
//     if ((new Date().getTime() - start) > milliseconds){
//       break;
//     }
//   }
// }

// let myCostlyVariable=0;

// exports.function = functions.https.onRequest((req, res) => {
//     myCostlyVariable= myCostlyVariable+100;
//     res.status(200).send('OK');
// });
