<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Portfolio Project Instructions

This is a dynamic portfolio website built with Next.js, MongoDB, and Cloudinary. Here are some specific guidelines for this project:

## Architecture

- This is a full-stack Next.js application with TypeScript
- Uses App Router (not Pages Router)
- MongoDB for database operations
- Cloudinary for image management
- Tailwind CSS for styling

## Code Style

- Use TypeScript for all new files
- Follow React functional component patterns with hooks
- Use Tailwind CSS classes for styling
- Implement proper error handling in API routes
- Use proper TypeScript interfaces for data structures

## Database Operations

- Use the existing MongoDB connection utility in `src/lib/mongodb.ts`
- All portfolio data should be stored in a single document with `active: true`
- Support for updating content without code changes

## Image Handling

- All images should be uploaded to Cloudinary
- Use the utility functions in `src/lib/cloudinary.ts`
- Implement proper error handling for image uploads
- Use Next.js Image component for optimization

## Component Structure

- Keep components modular and reusable
- Use proper TypeScript interfaces for props
- Implement loading states and error boundaries
- Follow accessibility best practices

## API Routes

- Use proper HTTP methods (GET, POST, PUT, DELETE)
- Implement proper error handling and status codes
- Validate input data
- Use proper TypeScript types for request/response

## Styling Guidelines

- Use Tailwind CSS utility classes
- Maintain consistent spacing and typography
- Implement responsive design patterns
- Use gradients and modern design elements consistently
