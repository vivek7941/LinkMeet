# Link Meet

A real-time video conferencing web application with screen sharing and live chat.

## Live Demo
https://linkmeet-1.onrender.com

## Features
- Video/audio calls with multiple users
- Screen sharing
- Real-time chat
- Room-based meetings

## Tech Stack
- React.js, Node.js, Express.js
- WebRTC, Socket.io
- MongoDB, JWT
- Deployed on Render

## Setup

Install dependencies:
```bash
npm install
```

Create `.env` file:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=5000
```

Run:
```bash
npm start
```

## How It Works
Uses WebRTC for peer-to-peer video/audio streaming and Socket.io as signaling server for establishing connections between peers.
