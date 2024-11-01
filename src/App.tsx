import { motion } from 'framer-motion';
import { Code2, Calendar, ChevronDown } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { EventCard } from './components/EventCard';
import { Navbar } from './components/Navbar';

function App() {
  const projects = [
    {
      title: "AI Chat Assistant",
      description: "A smart chatbot powered by machine learning that helps students with programming questions.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Student Portfolio Generator",
      description: "Tool that helps students create professional portfolios to showcase their projects.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com"
    },
    {
      title: "Code Learning Platform",
      description: "Interactive platform for learning programming through hands-on exercises.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80&w=800",
      demo: "https://demo.com"
    }
  ];

  const events = [
    {
      title: "Web Development Workshop",
      date: "March 15, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Room 301, Tech Building",
      description: "Learn the basics of web development with HTML, CSS, and JavaScript."
    },
    {
      title: "Hackathon 2024",
      date: "April 1-2, 2024",
      time: "9:00 AM - 9:00 PM",
      location: "Main Hall",
      description: "24-hour coding challenge to build innovative solutions."
    },
    {
      title: "Tech Talk: Future of AI",
      date: "April 15, 2024",
      time: "5:00 PM - 6:30 PM",
      location: "Auditorium",
      description: "Guest speaker discussing the latest trends in artificial intelligence."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <motion.header 
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-16"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary p-4 rounded-full mb-6"
          >
            <Code2 size={48} className="text-black" />
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Code Club
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Where Passion Meets Programming
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </motion.div>
      </motion.header>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Code Club is a community of passionate programmers, developers, and tech enthusiasts. 
              We believe in learning together, building amazing projects, and fostering innovation 
              through collaboration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-300">Meet the passionate individuals behind Code Club</p>
          </motion.div>
          {/* Team content will be added in the next iteration */}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-black border-t border-gray-800" id="projects">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
            <p className="text-gray-300">Innovative solutions built by our members</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4 bg-black border-t border-gray-800" id="events">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Calendar size={48} className="text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-300">Join us for learning and collaboration</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section id="contribute" className="py-20 px-4 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Contribute</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Want to be part of our community? There are many ways to contribute and make a difference!
            </p>
            <a href="#" className="btn btn-primary">
              Join Us Today
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Code Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;