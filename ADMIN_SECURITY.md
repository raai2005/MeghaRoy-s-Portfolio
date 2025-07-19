# Admin Panel Security

## Default Credentials

- **Username**: admin
- **Password**: MySecurePassword123!

## Important Security Notes

### 🔐 Change Default Credentials

Before deploying to production, **ALWAYS** change the default admin credentials in your `.env.local` file:

```env
ADMIN_USERNAME=your_secure_username
ADMIN_PASSWORD=your_very_secure_password
```

### 🛡️ Security Features

- **Password Protection**: Admin panel requires login
- **Session Timeout**: Authentication expires after 24 hours
- **Client-side Protection**: Credentials stored locally with expiration
- **Environment Variables**: Credentials stored securely in environment

### 🚀 Production Deployment

When deploying to production platforms (Vercel, Netlify, etc.):

1. **Set Environment Variables** in your deployment platform:

   - `ADMIN_USERNAME=your_username`
   - `ADMIN_PASSWORD=your_secure_password`

2. **Use Strong Passwords**: Include uppercase, lowercase, numbers, and symbols

3. **Regular Updates**: Change credentials periodically

### 📱 How to Access

1. Go to `/admin` on your website
2. Enter your credentials
3. Manage your portfolio content
4. Logout when done

### 🔄 Password Reset

If you forget your password:

1. Update `ADMIN_PASSWORD` in your `.env.local` file
2. Restart your development server
3. Or update environment variables in your deployment platform

### ⚠️ Security Best Practices

- Never commit credentials to version control
- Use `.env.local` for local development
- Set environment variables in production
- Use strong, unique passwords
- Enable two-factor authentication if available on your hosting platform
