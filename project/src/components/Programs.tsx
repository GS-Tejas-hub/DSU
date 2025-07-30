import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Smartphone, 
  Cog, 
  Zap, 
  Car, 
  Building, 
  ArrowRight,
  Code
} from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      icon: Code,
      title: 'Computer Science & Engineering',
      description: 'Advanced programming, AI, machine learning, and software development',
      features: ['Data Science', 'Cybersecurity', 'Cloud Computing'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Information Science & Engineering',
      description: 'Information systems, database management, and enterprise solutions',
      features: ['Big Data', 'IoT', 'Mobile Computing'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Electrical & Electronics Engineering',
      description: 'Power systems, renewable energy, and smart grid technologies',
      features: ['Power Electronics', 'Control Systems', 'Smart Grids'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Cpu,
      title: 'Electronics & Communication',
      description: 'Digital communication, VLSI design, and embedded systems',
      features: ['5G Technology', 'VLSI Design', 'Signal Processing'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Cog,
      title: 'Mechanical Engineering',
      description: 'Manufacturing, robotics, and advanced materials engineering',
      features: ['Robotics', 'CAD/CAM', 'Thermal Engineering'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Building,
      title: 'Civil Engineering',
      description: 'Sustainable infrastructure, smart cities, and construction technology',
      features: ['Smart Cities', 'Green Building', 'Structural Design'],
      color: 'from-gray-500 to-gray-600'
    },
    {
      icon: Car,
      title: 'Automobile Engineering',
      description: 'Electric vehicles, autonomous systems, and automotive innovation',
      features: ['Electric Vehicles', 'Autonomous Systems', 'Vehicle Dynamics'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            B.Tech Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our industry-aligned engineering programs designed to prepare you for the future of technology.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                <motion.div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${program.color} text-white mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <program.icon className="h-8 w-8" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-dsu-blue transition-colors duration-300">
                  {program.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-dsu-blue rounded-full" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className="flex items-center space-x-2 text-dsu-blue font-semibold hover:text-blue-700 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-dsu-blue/20 rounded-2xl transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="bg-dsu-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Programs & Admission Details
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;