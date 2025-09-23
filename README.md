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
   Create a `.env.local` file in the root directory (see `.env.example` for a template):

```env
# MongoDB Connection
# Example local: mongodb://localhost:27017
# Example Atlas: mongodb+srv://<user>:<password>@<cluster>.mongodb.net
MONGODB_URI=
MONGODB_DB_NAME=MyPortfolioDB

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Optional runtime
# NODE_ENV=development
# PORT=3000
```

4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## MongoDB credentials: from scratch (Atlas and local)

You have two easy options to get MongoDB credentials:

### Option A — MongoDB Atlas (free tier, recommended)

1. Create an Atlas account and project

- Go to https://www.mongodb.com/atlas
- Create an account, create a new Project, then create a Free (M0) Cluster.

2. Create a database user

- In Atlas, go to Database Access → Add New Database User
- Choose “Password” authentication
- Set a username and strong password (save them! you’ll put them in the URI)
- Database user permissions: Start with “Built-in Role: Read and write to any database” (you can later restrict to your DB)

3. Allow your IP address

- In Atlas, go to Network Access → Add IP Address
- For quick local testing, you can use 0.0.0.0/0 (any IP). For production, restrict to specific IPs.

4. Get your connection string (URI)

- In Atlas, go to Database → Connect → Drivers → Node.js → Copy the connection string. It looks like:

```
mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/?retryWrites=true&w=majority
```

5. Fill your env

- In `.env.local`:

```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB_NAME=MyPortfolioDB
```

6. Verify the connection (optional)

- Run the bundled test script to connect and seed a default portfolio document:
  - PowerShell (from project root):
    - node test-mongodb.js

### Option B — Local MongoDB (no cloud)

1. Install MongoDB Community Server or use Docker

- Native installer: https://www.mongodb.com/try/download/community
- Or Docker (optional):

```
docker run --name mongo -p 27017:27017 -d mongo:7
```

2. Connection string

- Use this in `.env.local`:

```
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB_NAME=MyPortfolioDB
```

3. (Optional) Create the database/collection

- The app will create documents on first run. You can also use MongoDB Compass or mongosh to create `MyPortfolioDB` and a `portfolio` collection.

### Security tips

- Never commit secrets. Use `.env.local` for local development.
- Use least-privileged DB users in production. Restrict IP access in Atlas.
- Rotate credentials periodically.

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
