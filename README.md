# 🚀 Firebase Cloud Messaging (FCM) Project  

This repository provides a complete implementation of **Firebase Cloud Messaging (FCM)** using a **frontend web application** and a **Node.js backend**. The project enables sending and receiving push notifications efficiently.

---

## 📌 Features  

✅ Retrieve **FCM tokens** in the browser  
✅ Request **notification permissions**  
✅ Handle **foreground and background notifications**  
✅ Send **push notifications** from a Node.js server  
✅ Secure **Firebase Admin SDK integration**  

---

## 📂 File Structure  

```
📂 firebase-fcm-project
 ├── 📄 index.html                # Web page to request FCM token
 ├── 📄 firebase-messaging-sw.js  # Service Worker for background notifications
 ├── 📄 send-message.js           # Node.js script to send push notifications
 ├── 📄 serviceAccountKey.json    # Firebase Admin SDK credentials (DO NOT SHARE)
 ├── 📄 package.json              # Project dependencies
 ├── 📄 README.md                 # Documentation
```

---

## 🏗️ Setup Instructions  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/sazzadulalambd/firebase-fcm-project.git
cd firebase-fcm-project
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Configure Firebase  

1. **Create a Firebase project** in the [Firebase Console](https://console.firebase.google.com/)  
2. **Enable Cloud Messaging** under **Project Settings > Cloud Messaging**  
3. **Obtain Firebase Config** from **Project Settings > General**  
4. **Download** the `serviceAccountKey.json` file from **Project Settings > Service Accounts** and place it in the root directory  

---

## 🚀 Running the Project  

### **1️⃣ Start Local Server**  
Use `http-server` to serve the frontend locally:  
```sh
npx http-server -o
```

### **2️⃣ Get Firebase Token**  
- Open `index.html` in your browser  
- Click **"Get Token"**  
- Copy the displayed token  

### **3️⃣ Send a Push Notification**  
Replace `YOUR_DEVICE_FCM_TOKEN` in `send-message.js` and run:  
```sh
node send-message.js
```

✅ The notification should appear on your device!

---


## 🔥 How It Works  

1️⃣ **User Requests Token**  
   - The user clicks "Get Token" in `index.html`, and the app retrieves the **FCM token**  

2️⃣ **Token is Registered**  
   - The client registers the token with **Firebase**  

3️⃣ **Server Sends Notification**  
   - The **Node.js backend** uses **Firebase Admin SDK** to send a push notification to the device  

4️⃣ **Notification is Displayed**  
   - The browser displays the **notification**, even if the app is in the background  

---

## 📡 Example Notification Payload  

```json
{
  "notification": {
    "title": "New Alert!",
    "body": "You have a new message."
  },
  "token": "DEVICE_FCM_TOKEN_HERE"
}
```

---

## 🛠️ Technologies Used  

- **Frontend**: HTML, JavaScript, Firebase SDK  
- **Backend**: Node.js, Firebase Admin SDK  
- **Cloud Services**: Firebase Cloud Messaging  

---

## ⚠️ Security Considerations  

❗ **Never expose your Firebase Admin SDK credentials in a public repository.**  
❗ **Use environment variables or a secure backend API to manage FCM tokens.**  

---

## 📢 Contributing  

Pull requests are welcome! Follow the standard Git workflow:  

```sh
git checkout -b feature-branch
git commit -m "Add new feature"
git push origin feature-branch
```

---

## 📄 License  

This project is **open-source** and licensed under the **MIT License**.  

🔗 **GitHub Repository:** [firebase-fcm-project](https://github.com/sazzadulalambd/firebase-fcm-project)  

---
