const { MongoClient } = require('mongodb');

async function testConnection() {
  const uri = process.env.MONGODB_URI || "mongodb+srv://megha_portfolio:9NUmEH64CYjqzwaX@cluster0.7h9sy40.mongodb.net/MyPortfolioDB?retryWrites=true&w=majority&appName=Cluster0";
  
  const client = new MongoClient(uri);
  
  try {
    console.log('Attempting to connect to MongoDB...');
    await client.connect();
    console.log('✅ Successfully connected to MongoDB Atlas!');
    
    // Test database operations
    const db = client.db('MyPortfolioDB');
    const collection = db.collection('portfolio');
    
    // Check if portfolio document exists
    const existingPortfolio = await collection.findOne({ active: true });
    
    if (existingPortfolio) {
      console.log('✅ Portfolio document found in database');
      console.log('Portfolio data:', JSON.stringify(existingPortfolio, null, 2));
    } else {
      console.log('📝 No portfolio document found. Creating default portfolio...');
      
      // Create default portfolio data
      const defaultPortfolio = {
        active: true,
        hero: {
          name: 'Megha',
          title: 'Full Stack Developer',
          description: 'Passionate about creating beautiful and functional web applications',
          image: '/placeholder-avatar.jpg'
        },
        about: {
          description: 'I am a passionate full stack developer with experience in modern web technologies. I love creating efficient, scalable, and user-friendly applications that solve real-world problems.',
          image: '/placeholder-about.jpg'
        },
        skills: [
          { name: 'React', level: 90 },
          { name: 'Node.js', level: 85 },
          { name: 'TypeScript', level: 80 },
          { name: 'MongoDB', level: 75 },
          { name: 'Next.js', level: 85 },
          { name: 'Tailwind CSS', level: 88 },
          { name: 'JavaScript', level: 92 },
          { name: 'Python', level: 70 }
        ],
        projects: [
          {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce platform built with Next.js, MongoDB, and Stripe for payments.',
            image: '/placeholder-project1.jpg',
            technologies: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
            githubUrl: 'https://github.com/megha/ecommerce',
            liveUrl: 'https://ecommerce-demo.vercel.app'
          },
          {
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates using Socket.io.',
            image: '/placeholder-project2.jpg',
            technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
            githubUrl: 'https://github.com/megha/taskmanager',
            liveUrl: 'https://taskmanager-demo.netlify.app'
          },
          {
            title: 'Weather Dashboard',
            description: 'A responsive weather dashboard that displays current weather and forecasts using OpenWeather API.',
            image: '/placeholder-project3.jpg',
            technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
            githubUrl: 'https://github.com/megha/weather-dashboard',
            liveUrl: 'https://weather-dashboard-demo.vercel.app'
          }
        ],
        contact: {
          email: 'contact@megha.dev',
          phone: '+1 (555) 123-4567',
          linkedin: 'https://linkedin.com/in/megha',
          github: 'https://github.com/megha'
        },
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      const result = await collection.insertOne(defaultPortfolio);
      console.log('✅ Default portfolio created with ID:', result.insertedId);
    }
    
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
  } finally {
    await client.close();
    console.log('🔌 Connection closed');
  }
}

testConnection();
