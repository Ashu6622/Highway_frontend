# Highway Delite Task - Frontend

A modern React application for task management with OTP-based authentication, built with Vite and featuring a responsive design.

## 🚀 Features

- **OTP Authentication**: Secure login/registration with email OTP verification
- **Task Management**: Create, view, and delete personal tasks
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Toast Notifications**: Real-time feedback for user actions
- **Context API**: Centralized state management
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Session Management**: Automatic logout on token expiry

## 📁 Project Structure

```
frontend/
├── public/
│   └── vite.svg              # Vite logo asset
├── src/
│   ├── api/
│   │   └── api.js           # API service layer with axios configuration
│   ├── AuthComponent/
│   │   ├── AuthComponent.jsx # Authentication UI component
│   │   └── AuthComponent.css # Authentication styles
│   ├── context/
│   │   └── ContextApi.jsx   # Global state management with Context API
│   ├── Dashboard/
│   │   ├── Dashboard.jsx    # Main dashboard component
│   │   └── Dashboard.css    # Dashboard styles
│   ├── App.jsx              # Main app component with routing
│   ├── index.css            # Global styles and scrollbar hiding
│   └── main.jsx             # Application entry point
├── .env                     # Environment variables
├── package.json             # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── index.html              # HTML template
```

## 🛠️ Installation & Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the frontend root:
   ```env
   VITE_LOCAL_URL=http://localhost:4001/api
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🗂️ File Descriptions

### Core Application Files

**`src/main.jsx`**
- Application entry point
- React DOM rendering
- Router setup initialization

**`src/App.jsx`**
- Main application component
- Route configuration (/, /login, /dashboard)
- Toast notification container setup
- Context provider wrapper

**`src/index.css`**
- Global CSS styles
- Scrollbar hiding for all elements
- Base styling reset

### Components

**`src/AuthComponent/AuthComponent.jsx`**
- Authentication interface component
- Handles both login and registration flows
- OTP input and verification
- Form validation and state management
- Responsive design implementation

**`src/AuthComponent/AuthComponent.css`**
- Complete authentication UI styling
- Mobile-first responsive design
- Form animations and transitions
- Background gradient effects
- Accessibility-focused styling

**`src/Dashboard/Dashboard.jsx`**
- Main dashboard interface
- Task creation and management
- User profile display
- Loading states and error handling
- Task list rendering with delete functionality

**`src/Dashboard/Dashboard.css`**
- Dashboard component styling
- Task card layouts
- Responsive grid system
- Loading spinner animations
- Mobile and desktop optimizations

### State Management

**`src/context/ContextApi.jsx`**
- Centralized application state management
- User authentication state
- Task management operations
- API integration layer
- Toast notification handling
- Form state management
- Navigation logic

### API Layer

**`src/api/api.js`**
- Axios configuration with base URL
- Cookie credentials handling
- API endpoint definitions:
  - User authentication (OTP, register, login)
  - Task operations (CRUD)
  - Session management

## 🎨 UI/UX Features

### Authentication Flow
- **Dual Mode**: Toggle between login and registration
- **OTP Verification**: Email-based two-factor authentication
- **Form Validation**: Real-time input validation
- **Loading States**: Visual feedback during API calls
- **Error Handling**: User-friendly error messages

### Dashboard Features
- **Welcome Section**: Personalized user greeting
- **Task Creation**: Inline task creation form
- **Task Management**: View and delete tasks
- **Responsive Layout**: Adapts to all screen sizes
- **Session Monitoring**: Automatic logout on token expiry

### Design System
- **Color Palette**: Blue gradient theme with accessibility compliance
- **Typography**: Clean, readable font hierarchy
- **Spacing**: Consistent margin and padding system
- **Animations**: Smooth transitions and hover effects
- **Mobile-First**: Progressive enhancement for larger screens

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 480px (Primary focus)
- **Tablet**: 481px - 1024px
- **Desktop**: > 1025px

### Mobile Optimizations
- Touch-friendly button sizes (44px minimum)
- Optimized form inputs (16px font size to prevent zoom)
- Simplified navigation
- Stacked layouts for better readability

### Desktop Enhancements
- Larger containers with shadows
- Enhanced animations and hover effects
- Multi-column layouts where appropriate
- Improved spacing and typography

## 🔧 Dependencies

### Production Dependencies
- **`react`** (^19.1.1) - Core React library
- **`react-dom`** (^19.1.1) - React DOM rendering
- **`react-router-dom`** (^7.8.2) - Client-side routing
- **`axios`** (^1.11.0) - HTTP client for API calls
- **`react-toastify`** (^11.0.5) - Toast notification system

### Development Dependencies
- **`vite`** (^7.1.2) - Build tool and dev server
- **`@vitejs/plugin-react`** (^5.0.0) - React plugin for Vite
- **`eslint`** (^9.33.0) - Code linting and quality
- **`@types/react`** - TypeScript definitions for React

## 🔐 Security Features

- **HTTP-only Cookies**: Secure token storage
- **CORS Configuration**: Controlled cross-origin requests
- **Input Sanitization**: XSS prevention
- **Session Management**: Automatic token expiry handling
- **Secure Headers**: CSP and security headers via Vite

## 🌐 Environment Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_LOCAL_URL` | Backend API base URL | `http://localhost:4001/api` |

## 📊 State Management Architecture

### Context Structure
```javascript
{
  // Authentication State
  isSignUp: boolean,
  formData: object,
  otpSent: boolean,
  isLoading: boolean,
  userData: object,
  isDashboard: boolean,
  
  // Task State
  notes: array,
  showCreateForm: boolean,
  newNote: object,
  
  // Methods
  handleInputChange,
  handleGetOTP,
  handleSignIn,
  handleSignUp,
  handleCreateNote,
  handleDeleteNote,
  // ... other methods
}
```

## 🎯 Key Features Implementation

### Toast Notifications
- **Position**: Top-right corner
- **Duration**: 1.5 seconds auto-close
- **Types**: Success (green) and Error (red)
- **Triggers**: All user actions and API responses

### Form Handling
- **Real-time Validation**: Immediate feedback on input
- **State Persistence**: Form data maintained during flow
- **Loading States**: Disabled inputs during API calls
- **Error Recovery**: Clear error states on retry

### Routing Strategy
- **Protected Routes**: Dashboard requires authentication
- **Automatic Redirects**: Login redirect on session expiry
- **Navigation Guards**: Context-based route protection

## 🚀 Performance Optimizations

- **Code Splitting**: Route-based lazy loading ready
- **Asset Optimization**: Vite's built-in optimizations
- **Bundle Analysis**: Production build optimization
- **CSS Optimization**: Minimal and efficient stylesheets
- **Image Optimization**: SVG icons for scalability

## 🔄 Development Workflow

1. **Local Development**: `npm run dev` with hot reload
2. **Code Quality**: ESLint integration for consistent code
3. **Build Process**: Vite for fast builds and optimization
4. **Preview**: Local production preview before deployment

## 📝 Usage Flow

### Authentication Process
1. **Landing**: Redirect to login page
2. **Mode Selection**: Choose login or registration
3. **Email Entry**: Provide email for OTP
4. **OTP Verification**: Enter received OTP
5. **Dashboard Access**: Successful authentication

### Task Management
1. **Dashboard Load**: Fetch existing tasks
2. **Task Creation**: Use inline form
3. **Task Display**: View all personal tasks
4. **Task Deletion**: Remove unwanted tasks
5. **Session Monitoring**: Auto-logout on expiry

## 🎨 Styling Architecture

- **Component-Scoped CSS**: Each component has dedicated styles
- **Global Styles**: Shared utilities and resets
- **Responsive Design**: Mobile-first media queries
- **CSS Variables**: Consistent color and spacing system
- **Animation Library**: Custom keyframe animations