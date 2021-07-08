const functions = require("firebase-functions");
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const cors = require('cors');
const admin = require('firebase-admin');

admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.CheckoutSession = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        let myProducts = request.query.products;
        myProducts = Object.entries(JSON.parse(myProducts))

        const productsArray = [];
        myProducts.forEach(item => {
            const p = admin.firestore().doc(`products/${item[0]}`).get();
            productsArray.push(p);
        });

        const all = await Promise.all(productsArray);

        const all = [];
    })
})