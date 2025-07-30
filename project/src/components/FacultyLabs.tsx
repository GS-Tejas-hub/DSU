import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, BookOpen, Users } from 'lucide-react';

const FacultyLabs: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const facultyMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Dean, School of Engineering',
      specialization: 'Artificial Intelligence & Machine Learning',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      publications: '85+ Papers',
      experience: '20+ Years'
    },
    {
      name: 'Dr. Priya Sharma',
      position: 'Professor, Computer Science',
      specialization: 'Data Science & Cybersecurity',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=300',
      publications: '60+ Papers',
      experience: '15+ Years'
    },
    {
      name: 'Dr. Arjun Patel',
      position: 'Professor, Electronics & Communication',
      specialization: 'VLSI Design & Embedded Systems',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      publications: '75+ Papers',
      experience: '18+ Years'
    },
    {
      name: 'Dr. Kavitha Reddy',
      position: 'Professor, Mechanical Engineering',
      specialization: 'Robotics & Manufacturing',
      image: 'https://images.pexels.com/photos/3992659/pexels-photo-3992659.png?auto=compress&cs=tinysrgb&w=300',
      publications: '55+ Papers',
      experience: '16+ Years'
    }
  ];

  const labs = [
    {
      name: 'AI & Machine Learning Lab',
      description: 'Advanced research in artificial intelligence, deep learning, and neural networks',
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=400',
      equipment: ['High-performance GPUs', 'Deep Learning Workstations', 'IoT Sensors']
    },
    {
      name: 'Robotics & Automation Lab',
      description: 'State-of-the-art robotics research and development facility',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=400',
      equipment: ['Industrial Robots', '3D Printers', 'CNC Machines']
    },
    {
      name: 'Electronics Design Lab',
      description: 'VLSI design, PCB development, and embedded systems testing',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400',
      equipment: ['Oscilloscopes', 'Signal Generators', 'PCB Fabrication']
    },
    {
      name: 'Software Development Center',
      description: 'Modern software development and testing environment',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      equipment: ['High-end Workstations', 'Cloud Infrastructure', 'DevOps Tools']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % facultyMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + facultyMembers.length) % facultyMembers.length);
  };

  return (
    <section id="faculty" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Faculty & Research Labs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from industry experts and conduct cutting-edge research in our world-class laboratories.
          </p>
        </motion.div>

        {/* Faculty Carousel */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Distinguished Faculty</h3>
          
          <div className="relative">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center">
                    <motion.img
                      src={facultyMembers[currentSlide].image}
                      alt={facultyMembers[currentSlide].name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {facultyMembers[currentSlide].name}
                    </h4>
                    
                    <p className="text-dsu-blue font-semibold mb-2">
                      {facultyMembers[currentSlide].position}
                    </p>
                    
                    <p className="text-gray-600 mb-6">
                      {facultyMembers[currentSlide].specialization}
                    </p>
                    
                    <div className="flex justify-center space-x-6">
                      <div className="text-center">
                        <BookOpen className="h-6 w-6 text-dsu-blue mx-auto mb-1" />
                        <p className="text-sm font-semibold">{facultyMembers[currentSlide].publications}</p>
                      </div>
                      <div className="text-center">
                        <Award className="h-6 w-6 text-dsu-blue mx-auto mb-1" />
                        <p className="text-sm font-semibold">{facultyMembers[currentSlide].experience}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                onClick={prevSlide}
                className="p-3 bg-dsu-blue text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
              
              <motion.button
                onClick={nextSlide}
                className="p-3 bg-dsu-blue text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {facultyMembers.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-dsu-blue' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Research Labs */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Laboratories</h3>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {labs.map((lab, index) => (
              <motion.div
                key={lab.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={lab.image}
                    alt={lab.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{lab.name}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{lab.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-dsu-blue mb-2">Key Equipment:</p>
                    {lab.equipment.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-dsu-blue rounded-full" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FacultyLabs;