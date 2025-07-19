# Megha Portfolio

A dynamic portfolio website built with Next.js, MongoDB, and Cloudinary for image management. This portfolio allows easy content management through a database without needing to modify code.

## Features

- 🚀 **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- 📱 **Responsive Design**: Mobile-first approach with beautiful responsive layouts
- 🖼️ **Image Management**: Integrated with Cloudinary for optimized image storage and delivery
- 🗄️ **Database Integration**: MongoDB for dynamic content management
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- 📧 **Contact Form**: Functional contact form with validation
- 🔧 **Easy Updates**: Content can be updated through the database without code changes

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Image Storage**: Cloudinary
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MongoDB database (local or MongoDB Atlas)
- Cloudinary account for image management

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/megha-portfolio.git
cd megha-portfolio
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
   Create a `.env.local` file in the root directory:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/portfolio
# or use MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/portfolio

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Next.js
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Database Schema

### Portfolio Collection

The portfolio data is stored in a MongoDB collection with the following structure:

```json
{
  "_id": "ObjectId",
  "active": true,
  "hero": {
    "name": "Megha",
    "title": "Full Stack Developer",
    "description": "Passionate about creating beautiful and functional web applications",
    "image": "cloudinary_image_url"
  },
  "about": {
    "description": "About me description...",
    "image": "cloudinary_image_url"
  },
  "skills": [
    {
      "name": "React",
      "level": 90
    }
  ],
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description...",
      "image": "cloudinary_image_url",
      "technologies": ["React", "Node.js"],
      "githubUrl": "https://github.com/...",
      "liveUrl": "https://..."
    }
  ],
  "contact": {
    "email": "contact@megha.dev",
    "phone": "+1 (555) 123-4567",
    "linkedin": "https://linkedin.com/in/megha",
    "github": "https://github.com/megha"
  },
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```

## API Endpoints

- `GET /api/portfolio` - Fetch portfolio data
- `PUT /api/portfolio` - Update portfolio data
- `POST /api/upload` - Upload images to Cloudinary

## Updating Content

To update the portfolio content:

1. **Using MongoDB Compass or CLI**:

   - Connect to your MongoDB database
   - Update the document in the `portfolio` collection
   - The changes will be reflected immediately on the website

2. **Using the API**:
   - Send a PUT request to `/api/portfolio` with the updated data
   - Images can be uploaded via POST to `/api/upload`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set all environment variables in your deployment platform:

- `MONGODB_URI`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

## Customization

### Styling

- Edit Tailwind classes in components
- Modify `tailwind.config.ts` for custom theme
- Update `globals.css` for global styles

### Components

- All components are in `src/components/`
- Each component is designed to be reusable and customizable

### Adding New Sections

1. Create a new component in `src/components/`
2. Add it to the main page in `src/app/page.tsx`
3. Update the database schema if needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or need help, please open an issue in the GitHub repository.
