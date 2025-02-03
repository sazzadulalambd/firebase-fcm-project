const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Your Firebase Admin SDK Key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const sendNotification = async (fcmToken, title, body) => {
  const message = {
    notification: {
      title: title,
      body: body,
    },
    token: fcmToken,
  };

  try {
    const response = await admin.messaging().send(message);
    console.log('Successfully sent message:', response);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

// Replace this with the actual token from the frontend
const fcmToken = 'YOUR_DEVICE_FCM_TOKEN';
sendNotification(fcmToken, 'Test Notification', 'This is a test message!');
