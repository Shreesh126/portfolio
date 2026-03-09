# Local Development Setup

This guide helps you set up the project locally in VS Code.

## Prerequisites

- Node.js 18+ installed
- VS Code installed
- npm or yarn package manager

## Quick Start

### 1. Clone and Install Dependencies

```bash
cd your-project-directory
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory by copying `.env.example`:

```bash
cp .env.example .env
```

The `.env` file should contain:

```
NODE_ENV=development
PORT=5000
```

### 3. Install VS Code Extensions

VS Code will recommend the following extensions:

- **Prettier** - Code formatter
- **ESLint** - Linting
- **Tailwind CSS IntelliSense** - CSS class completion
- **TypeScript Vue Plugin** - TypeScript support

You can install them from the Extensions view or accept the recommendations when opening the project.

### 4. Start Development

#### Option A: Using npm script
```bash
npm run dev
```

The application will start on `http://localhost:5000`

#### Option B: Using VS Code Debugger
1. Press `F5` or go to Run → Start Debugging
2. Select "Debug Server" from the debug configuration dropdown
3. The server will start with debugging enabled

### 5. File Structure

```
project/
├── client/              # Frontend React application
│   ├── src/
│   │   ├── pages/      # Page components
│   │   ├── components/ # Reusable components
│   │   ├── lib/        # Utilities and data
│   │   ├── assets/     # Images and static files
│   │   └── App.tsx     # Root component
│   └── public/         # Static files (resume.pdf)
├── server/             # Backend Express server
│   ├── index.ts        # Server entry point
│   ├── routes.ts       # API routes (currently empty)
│   └── vite.ts         # Vite dev server integration
├── shared/             # Shared types and schemas
│   └── schema.ts       # Zod validation schemas
└── .env                # Environment variables (git-ignored)
```

## Development Workflow

### Making Changes

1. **Frontend**: Edit files in `client/src/` - changes will hot-reload
2. **Server**: Edit files in `server/` - server will auto-restart
3. **Types**: Edit files in `shared/` - both frontend and backend can use them

### TypeScript

The project uses TypeScript for type safety. Run type checking:

```bash
npm run check
```

### Building for Production

```bash
npm run build
npm start
```

## Contact Form

The contact form sends messages to WhatsApp:

- **Phone Number**: +91 74833 64040
- **Method**: Opens WhatsApp Web with pre-filled message

When users fill the form and click "Send Message", it opens WhatsApp with their inquiry details.

## Features

✅ Dark glassmorphism design theme  
✅ Fully responsive layout  
✅ Project filtering by category  
✅ Smooth scroll animations  
✅ WhatsApp contact integration  
✅ Resume PDF download  
✅ Mobile-friendly navigation  

## Troubleshooting

### Port Already in Use
If port 5000 is in use, change it in `.env`:
```
PORT=3000
```

### Node Modules Issues
Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Ensure you're using the workspace TypeScript:
```bash
npm run check
```

### Hot Reload Not Working
- Try restarting the dev server: `Ctrl+C` then `npm run dev`
- Clear browser cache (Ctrl+Shift+Delete)

## Notes

- This is a **frontend-focused static portfolio** with no database
- Backend only serves the frontend and routes requests
- All contact inquiries go directly to WhatsApp
- Build process outputs to `dist/` directory

For more information, see the project README.
