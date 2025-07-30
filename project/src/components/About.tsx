import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Users, BookOpen, Star, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { icon: Award, label: 'NIRF Ranking', value: '#28 Engineering' },
    { icon: Globe, label: 'International Collaborations', value: '50+ Universities' },
    { icon: Users, label: 'Faculty Excellence', value: '200+ PhDs' },
    { icon: BookOpen, label: 'Research Papers', value: '1000+ Publications' },
    { icon: Star, label: 'Placement Rate', value: '95%+' },
    { icon: TrendingUp, label: 'Average Package', value: '₹8.5 LPA' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About DSU School of Engineering
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A legacy of excellence in engineering education, research, and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Excellence in Engineering Education Since 2008
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Dayananda Sagar University's School of Engineering stands as a beacon of 
                technical excellence, consistently ranked among India's top engineering institutions. 
                Our commitment to innovation and industry-relevant education has shaped thousands 
                of successful engineers.
              </p>
              
              <p>
                With state-of-the-art laboratories, world-class faculty, and strong industry 
                partnerships, we provide an environment where students can explore, innovate, 
                and excel in their chosen fields of engineering.
              </p>
              
              <p>
                Our curriculum integrates theoretical knowledge with practical application, 
                ensuring graduates are industry-ready and equipped to tackle real-world challenges.
              </p>
            </div>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-dsu-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                NBA Accredited
              </div>
              <div className="bg-dsu-gold text-white px-4 py-2 rounded-full text-sm font-medium">
                NAAC A+ Grade
              </div>
              <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                ISO 9001:2015
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="DSU Campus"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Modern Campus Infrastructure</h4>
                <p className="text-sm opacity-90">State-of-the-art facilities spanning 100+ acres</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <achievement.icon className="h-8 w-8 text-dsu-blue mx-auto mb-3" />
              <div className="text-lg font-bold text-gray-900 mb-1">{achievement.value}</div>
              <div className="text-sm text-gray-600">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;