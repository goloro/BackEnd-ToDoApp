# ToDoApp Backend

## 🚀 Deployment Instructions for Render

### Environment Variables Required:

When deploying to Render, add these environment variables in the Render dashboard:

```
MONGODB_URI = mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/YOUR_DATABASE?retryWrites=true&w=majority&appName=YOUR_APP
PORT = 10000
NODE_ENV = production
FRONTEND_URL = https://goloro.github.io/FrontEnd-ToDoApp
```

### Important Notes:

- **Do NOT** upload the `.env` file to GitHub
- The `.env` file is already protected by `.gitignore`
- Configure environment variables directly in Render dashboard
- Port 10000 is recommended for Render web services

### Development Setup:

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env`
4. Configure your local environment variables
5. Run: `npm run dev`

### Available Scripts:

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Security Features:

- Environment variables for sensitive data
- CORS automatically configured based on NODE_ENV
- MongoDB credentials protected
- .gitignore configured for security