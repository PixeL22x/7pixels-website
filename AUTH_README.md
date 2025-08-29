# 🔐 Complete Authentication Setup - 7Pixels

This project now includes a comprehensive authentication system built with NextAuth.js, MongoDB, and modern security practices.

## ✨ Features

- ✅ **Multi-Provider Authentication**: Credentials + Google OAuth
- ✅ **User Registration & Login**: Secure signup/signin forms
- ✅ **Role-Based Access Control**: Visitor, Team, Admin roles
- ✅ **Protected Routes**: Middleware-based route protection
- ✅ **Session Management**: JWT-based sessions with secure cookies
- ✅ **Password Security**: BCrypt hashing with salt rounds
- ✅ **Form Validation**: Zod schema validation
- ✅ **Beautiful UI**: Modern, responsive design with animations
- ✅ **MongoDB Integration**: Custom adapter with role support
- ✅ **TypeScript Support**: Full type safety throughout

## 🚀 Quick Start

### 1. Environment Setup

Copy `env.example` to `.env.local` and configure:

```bash
# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-here

# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Email (Resend)
AUTH_RESEND_KEY=re_xxxxxxxxxx
EMAIL_FROM=noreply@7pixels.es
```

### 2. Generate Secret Key

```bash
openssl rand -base64 32
```

### 3. MongoDB Setup

Create collections in your database:
- `users` - User accounts and profiles
- `accounts` - OAuth provider connections
- `sessions` - User sessions

### 4. Run the Application

```bash
npm run dev
```

## 🏗️ Architecture

### File Structure

```
src/
├── app/
│   ├── api/auth/
│   │   ├── [...nextauth]/route.ts    # NextAuth API handler
│   │   └── signup/route.ts           # User registration API
│   ├── auth/
│   │   ├── signin/page.tsx           # Login page
│   │   └── signup/page.tsx           # Registration page
│   ├── dashboard/page.tsx             # User dashboard
│   └── admin/page.tsx                # Admin panel
├── components/
│   └── providers/
│       └── session-provider.tsx      # NextAuth provider wrapper
├── contexts/
├── hooks/
│   └── useAuth.ts                    # Custom auth hook
├── lib/
│   ├── mongodb.ts                    # Database connection
│   ├── custom-mongo-adapter.ts      # Custom NextAuth adapter
│   └── zod.ts                        # Validation schemas
├── auth.ts                           # NextAuth configuration
├── auth.config.ts                    # Auth providers & callbacks
└── middleware.ts                     # Route protection
```

### Authentication Flow

1. **User Registration** → `/auth/signup`
2. **User Login** → `/auth/signin`
3. **Session Creation** → JWT token generation
4. **Route Protection** → Middleware validation
5. **Role-Based Access** → Admin/User permissions

## 🔧 Configuration

### NextAuth Setup

```typescript
// auth.ts
export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: CustomMongoDBAdapter(clientPromise),
  ...authConfig,
  session: { strategy: "jwt" },
  useSecureCookies: process.env.NODE_ENV === "production",
});
```

### Providers

- **Credentials**: Email/password authentication
- **Google**: OAuth 2.0 with Google
- **Resend**: Email verification (optional)

### Callbacks

- **signIn**: User validation and role assignment
- **session**: Session data enrichment
- **jwt**: Token customization

## 🛡️ Security Features

### Password Security
- BCrypt hashing with 12 salt rounds
- Minimum 8 character requirement
- Password confirmation validation

### Session Security
- JWT-based sessions
- Secure cookies in production
- Automatic session expiration

### Route Protection
- Middleware-based authentication
- Role-based access control
- Automatic redirects for unauthorized access

## 📱 User Interface

### Authentication Pages
- **Sign In**: Email/password + Google OAuth
- **Sign Up**: User registration with validation
- **Dashboard**: User profile and actions
- **Admin Panel**: Administrative functions

### Design Features
- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- Glassmorphism UI elements
- Lucide React icons throughout

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `GET/POST /api/auth/[...nextauth]` - NextAuth endpoints

### Protected Routes
- `/dashboard` - User dashboard (requires auth)
- `/admin` - Admin panel (requires admin role)

## 🎯 Usage Examples

### Using the Auth Hook

```typescript
import { useAuth } from "@/hooks/useAuth";

function MyComponent() {
  const { user, isAuthenticated, requireRole, logout } = useAuth();
  
  // Check authentication
  if (!isAuthenticated) return <div>Please login</div>;
  
  // Require specific role
  requireRole("admin", "/dashboard");
  
  return (
    <div>
      <h1>Welcome {user?.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### Protected Component

```typescript
"use client";
import { useAuth } from "@/hooks/useAuth";

export default function ProtectedComponent() {
  const { requireAuth } = useAuth();
  
  useEffect(() => {
    requireAuth();
  }, [requireAuth]);
  
  return <div>Protected content</div>;
}
```

### Middleware Protection

```typescript
// middleware.ts
export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname.startsWith("/admin")) {
          return token?.role === "admin";
        }
        return !!token;
      },
    },
  }
);
```

## 🗄️ Database Schema

### Users Collection
```typescript
interface User {
  _id: ObjectId;
  name: string;
  email: string;
  password: string; // Hashed
  company?: string;
  role: "visitor" | "team" | "admin";
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}
```

### Accounts Collection
```typescript
interface Account {
  _id: ObjectId;
  userId: ObjectId;
  provider: string;
  providerAccountId: string;
  email: string;
}
```

## 🚨 Error Handling

### Common Errors
- **Invalid Credentials**: Wrong email/password
- **User Not Found**: Email doesn't exist
- **Account Inactive**: Team account not activated
- **Validation Errors**: Form field validation
- **Database Errors**: Connection issues

### Error Responses
```typescript
{
  error: "Error message",
  status: 400 | 401 | 500
}
```

## 🔄 State Management

### Session State
- **Loading**: Authentication in progress
- **Authenticated**: User logged in
- **Unauthenticated**: No active session

### User Roles
- **Visitor**: Basic access, can register/login
- **Team**: Extended access, requires activation
- **Admin**: Full access, can manage users

## 🧪 Testing

### Test Users
```typescript
// Create test admin user
const adminUser = {
  email: "admin@7pixels.es",
  password: "admin123",
  role: "admin",
  name: "Admin User"
};

// Create test team user
const teamUser = {
  email: "team@7pixels.es",
  password: "team123",
  role: "team",
  status: "active"
};
```

## 🚀 Deployment

### Vercel
1. Add environment variables in Vercel dashboard
2. Ensure MongoDB connection string is accessible
3. Set `NEXTAUTH_URL` to production domain
4. Enable secure cookies

### Environment Variables
```bash
# Production
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=your-production-secret
MONGODB_URI=your-production-mongodb-uri
```

## 📚 Additional Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [MongoDB Atlas Setup](https://docs.atlas.mongodb.com/)
- [Google OAuth Setup](https://developers.google.com/identity/protocols/oauth2)
- [BCrypt Security](https://en.wikipedia.org/wiki/Bcrypt)

## 🆘 Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**
   - Check connection string
   - Verify network access
   - Check authentication credentials

2. **NextAuth Secret Missing**
   - Generate new secret with `openssl rand -base64 32`
   - Add to `.env.local`

3. **Google OAuth Not Working**
   - Verify client ID/secret
   - Check redirect URIs
   - Ensure domain is authorized

4. **Session Not Persisting**
   - Check cookie settings
   - Verify NEXTAUTH_URL
   - Check browser console for errors

### Debug Mode
```typescript
// Enable debug logging
export const { auth, handlers } = NextAuth({
  debug: true,
  // ... other config
});
```

---

## 🎉 Congratulations!

Your authentication system is now complete and ready for production use! The system provides:

- **Secure user authentication** with multiple providers
- **Role-based access control** for different user types
- **Beautiful, responsive UI** that matches your brand
- **Comprehensive error handling** and validation
- **Production-ready security** with best practices

Feel free to customize the UI, add more providers, or extend the functionality as needed! 🚀
