// data/projectsData.ts
import { Project } from 'types/project';

export const projects: Project[] = [

  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern UI/UX and robust backend architecture.',
    detailedDescription: 'This comprehensive e-commerce platform features a modern, responsive design built with Next.js and TypeScript. It includes user authentication, product management, shopping cart functionality, payment integration with Stripe, order tracking, and an admin dashboard. The backend utilizes Node.js with Express and MongoDB for scalable data management. Key features include real-time inventory updates, automated email notifications, advanced search and filtering, and mobile-optimized checkout flow. The platform also implements SEO best practices and performance optimizations for lightning-fast loading times.',
    image: '/ryanpics.jpg',
    technologies: [
      { name: 'Next.js', color: 'bg-black' },
      { name: 'TypeScript', color: 'bg-blue-600' },
      { name: 'Tailwind CSS', color: 'bg-cyan-500' },
      { name: 'MongoDB', color: 'bg-green-600' },
      { name: 'Stripe', color: 'bg-purple-600' }
    ],
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://example-ecommerce.com',
    category: 'Full-Stack'
  },
  // {
  //   id: '2',
  //   title: 'AI-Powered Analytics Dashboard',
  //   description: 'Intelligent data visualization platform with machine learning insights and predictive analytics.',
  //   detailedDescription: 'An advanced analytics dashboard that leverages artificial intelligence to provide actionable business insights. Built with React and D3.js for interactive data visualizations, the platform integrates with multiple data sources and uses machine learning algorithms to identify trends and predict future outcomes. Features include real-time data streaming, customizable dashboards, automated report generation, anomaly detection, and collaborative sharing tools. The backend processes large datasets efficiently using Python and TensorFlow, while the frontend delivers an intuitive user experience with drag-and-drop functionality and responsive design.',
  //   image: '/ryanpics.jpg',
  //   technologies: [
  //     { name: 'React', color: 'bg-blue-500' },
  //     { name: 'D3.js', color: 'bg-orange-500' },
  //     { name: 'Python', color: 'bg-yellow-600' },
  //     { name: 'TensorFlow', color: 'bg-orange-600' },
  //     { name: 'PostgreSQL', color: 'bg-blue-700' }
  //   ],
  //   githubUrl: 'https://github.com/example/analytics',
  //   category: 'Data Science'
  // },
  // {
  //   id: '3',
  //   title: 'Mobile Banking App',
  //   description: 'Secure and intuitive mobile banking application with biometric authentication and real-time transactions.',
  //   detailedDescription: 'A cutting-edge mobile banking application developed with React Native, offering seamless financial management on both iOS and Android platforms. The app features biometric authentication, real-time transaction notifications, budgeting tools, investment tracking, and peer-to-peer payments. Security is paramount with end-to-end encryption, fraud detection algorithms, and secure API communications. The user interface follows modern design principles with smooth animations and accessibility features. Backend services are built with microservices architecture using Node.js and deployed on AWS for high availability and scalability.',
  //   image: '/ryanpics.jpg',
  //   technologies: [
  //     { name: 'React Native', color: 'bg-blue-400' },
  //     { name: 'Node.js', color: 'bg-green-500' },
  //     { name: 'AWS', color: 'bg-orange-400' },
  //     { name: 'Redis', color: 'bg-red-600' },
  //     { name: 'Docker', color: 'bg-blue-600' }
  //   ],
  //   githubUrl: 'https://github.com/example/mobile-banking',
  //   category: 'Mobile Development'
  // },
  // {
  //   id: '4',
  //   title: 'Smart Home IoT System',
  //   description: 'Comprehensive IoT platform for home automation with voice control and energy monitoring.',
  //   detailedDescription: 'An innovative smart home ecosystem that connects and controls various IoT devices through a centralized platform. The system includes voice command integration with Alexa and Google Assistant, energy consumption monitoring, automated scheduling, security camera integration, and climate control optimization. Built with a microservices architecture using Python FastAPI for the backend and Flutter for cross-platform mobile apps. The platform uses MQTT for device communication and implements edge computing for reduced latency. Machine learning algorithms optimize energy usage and predict maintenance needs, while the user-friendly interface provides real-time monitoring and control of all connected devices.',
  //   image: '/ryanpics.jpg',
  //   technologies: [
  //     { name: 'Python', color: 'bg-yellow-600' },
  //     { name: 'Flutter', color: 'bg-blue-400' },
  //     { name: 'MQTT', color: 'bg-purple-500' },
  //     { name: 'Raspberry Pi', color: 'bg-red-500' },
  //     { name: 'TensorFlow', color: 'bg-orange-600' }
  //   ],
  //   githubUrl: 'https://github.com/example/smart-home',
  //   category: 'IoT Development'
  // },
   
    {
    id: '5',
    title: 'Tobacco Management & Detection System',
    description: 'AI-powered detection system.',
    detailedDescription: 'AI-powered tobacco detection system using CLIP with 95% accuracy, featuring multi-user...',
    image: '/ryanpics.jpg',
    technologies: [
      { name: 'Python', color: 'bg-black' },
      { name: 'React', color: 'bg-blue-600' },
      { name: 'Laravel', color: 'bg-cyan-500' },
      { name: 'CLIP', color: 'bg-green-600' },
      { name: 'Pusher', color: 'bg-green-600' },
      { name: 'REST API', color: 'bg-green-600' },
      { name: 'AI/ML', color: 'bg-purple-600' }
    ],
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://example-ecommerce.com',
    category: 'Full-Stack'
  },

  {
    id: '6',
    title: 'Real-Time Chat App',
    description: 'Modern messaging platform with WebSocket integration, file sharing, and group chat functionality.',
    detailedDescription: 'A feature-rich messaging application with real-time communication, file sharing capabilities, and advanced group chat features for seamless collaboration.',
    image: '/images/projects/chat-app.jpg',
    technologies: [
      { name: 'React', color: 'bg-blue-600' },
      { name: 'Socket.io', color: '#010101' },
      { name: 'Express', color: '#000000' },
      { name: 'Redis', color: '#DC382D' }
    ],
    githubUrl: 'https://github.com/yourusername/chat-app',
    liveUrl: 'https://your-chat-demo.herokuapp.com',
    category: 'Full-Stack'
  },

   {
    id: '7',
    title: 'My Personal Portfolio website',
    description: 'A frontend project that showcases my skills and my skills',
    detailedDescription: 'A comprehensive e-commerce solution built with modern web technologies, featuring secure payment processing, real-time inventory management, and a powerful admin dashboard for store management.',
    image: '/ryansportifolio.png',
    technologies: [
      { name: 'React', color: 'bg-blue-600' },
      { name: 'Typescript', color: 'bg-blue-600' },
      { name: 'Next.js', color: 'bg-black' },
      { name: 'Tailwind CSS', color: 'bg-cyan-500' },
      { name: 'framer-motion', color: '#47A248' }
    ],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://your-ecommerce-demo.netlify.app',
    category: 'Frontend'
  },
  // {
  //   id: '8',
  //   title: 'Analytics Dashboard',
  //   description: 'Real-time data visualization platform with interactive charts and comprehensive reporting features.',
  //   detailedDescription: 'A powerful analytics platform that transforms complex data into actionable insights through interactive visualizations and comprehensive reporting capabilities.',
  //   image: '/images/projects/analytics.jpg',
  //   technologies: [
  //     { name: 'Vue.js', color: '#4FC08D' },
  //     { name: 'D3.js', color: '#F9A03C' },
  //     { name: 'Python', color: '#3776AB' },
  //     { name: 'PostgreSQL', color: '#336791' }
  //   ],
  //   githubUrl: 'https://github.com/yourusername/analytics-dashboard',
  //   liveUrl: 'https://your-analytics-demo.vercel.app',
  //   category: 'Frontend'
  // },
  // {
  //   id: '9',
  //   title: 'Real-Time Chat App',
  //   description: 'Modern messaging platform with WebSocket integration, file sharing, and group chat functionality.',
  //   detailedDescription: 'A feature-rich messaging application with real-time communication, file sharing capabilities, and advanced group chat features for seamless collaboration.',
  //   image: '/images/projects/chat-app.jpg',
  //   technologies: [
  //     { name: 'React', color: 'bg-blue-600' },
  //     { name: 'Socket.io', color: '#010101' },
  //     { name: 'Express', color: '#000000' },
  //     { name: 'Redis', color: '#DC382D' }
  //   ],
  //   githubUrl: 'https://github.com/yourusername/chat-app',
  //   liveUrl: 'https://your-chat-demo.herokuapp.com',
  //   category: 'Full-Stack'
  // },
  // {
  //   id: '10',
  //   title: 'Task Management System',
  //   description: 'Collaborative project management tool with team workflows, time tracking, and advanced reporting.',
  //   detailedDescription: 'A comprehensive project management solution designed for modern teams, featuring intuitive task organization, time tracking, team collaboration tools, and detailed project analytics.',
  //   image: '/images/projects/task-manager.jpg',
  //   technologies: [
  //     { name: 'Next.js', color: 'bg-black' },
  //     { name: 'TypeScript', color: '#3178C6' },
  //     { name: 'Prisma', color: '#2D3748' },
  //     { name: 'TailwindCSS', color: 'bg-cyan-500' }
  //   ],
  //   githubUrl: 'https://github.com/yourusername/task-management',
  //   liveUrl: 'https://your-taskmanager-demo.vercel.app',
  //   category: 'Full-Stack'
  // },
  // {
  //   id: '11',
  //   title: 'Weather Forecast App',
  //   description: 'Beautiful weather application with location-based forecasts and interactive maps.',
  //   detailedDescription: 'A responsive weather application providing accurate forecasts with beautiful visualizations and interactive mapping features.',
  //   image: '/images/projects/weather-app.jpg',
  //   technologies: [
  //     { name: 'React', color: 'bg-blue-600' },
  //     { name: 'TypeScript', color: '#3178C6' },
  //     { name: 'Chart.js', color: '#FF6384' },
  //     { name: 'OpenWeather API', color: '#E6533C' }
  //   ],
  //   githubUrl: 'https://github.com/yourusername/weather-app',
  //   liveUrl: 'https://your-weather-app.vercel.app',
  //   category: 'Frontend'
  // },

  // {
  //   id: '12',
  //   title: 'REST API Service',
  //   description: 'Scalable backend API with authentication, rate limiting, and comprehensive documentation.',
  //   detailedDescription: 'A robust RESTful API service built with best practices, featuring JWT authentication, rate limiting, and auto-generated documentation.',
  //   image: '/images/projects/api-service.jpg',
  //   technologies: [
  //     { name: 'Node.js', color: '#339933' },
  //     { name: 'Express', color: '#000000' },
  //     { name: 'JWT', color: '#000000' },
  //     { name: 'Swagger', color: '#85EA2D' }
  //   ],
  //   githubUrl: 'https://github.com/yourusername/api-service',
  //   liveUrl: null, // No live demo for backend-only project
  //   category: 'Backend'
  // }
  
];