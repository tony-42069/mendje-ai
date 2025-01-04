# System Patterns

## Architecture
- Frontend: React.js with Vite
Inner Backend: Express.js (to be implemented)
Inner Deployment: Vercel (frontend) + Railway (backend)

## Key Technical Decisions
1. Moved from local Llama model to OpenAI API due to:
   - Performance issues with local model
   - Hardware limitations (16GB RAM, no GPU)
   - Better Albanian language support

2. Added backend layer for:
   - Security (protecting API keys)
   - Rate limiting
   - Message history management

3. Chose Vercel for frontend deployment because:
   - Excellent React support
   - Easy CI/CD integration
   - Free tier available

4. Selected Railway for backend because:
   - Node.js/Express support
   - Easy environment variable management
   - Scalable infrastructure

## Data Flow
1. User sends message through React frontend
2. Frontend sends message to Express backend
3. Backend makes API call to OpenAI
4. OpenAI processes message and returns response
5. Backend sends response to frontend
6. Frontend displays message to user
