

# Booking Consultation App

The **Booking Consultation App** is developed for Amrutam Pharmaceuticals to provide a seamless experience for booking consultations. The app utilizes **React Native** and **Expo** for its front end and a JSON server for mock backend data.

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Vysakh-mec/CureLink.git
cd CureLink
```
### 2. Install Dependencies
```bash
npm install
```
### 3. JSON Server Setup
```bash
npm install -g json-server
```
### 4. Start the json-server
```bash
json-server --watch db.json --port 5000
```

### 5. Configure Environment Variables
- Create a `.env` file in the root directory:
```bash
PUBLIC_EXPO_API_URL = https://<your-ip>:5000/
```
Replace `<your-ip>` with your system's IP address.

### 6. Start the App
``` bash
npm start
```

## Demo Video
[Video Link](https://youtube.com/shorts/MXtddvqzXcw)





