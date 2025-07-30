import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Admissions', href: '#admissions' },
    { name: 'Academic Programs', href: '#programs' },
    { name: 'Research', href: '#research' },
    { name: 'Campus Life', href: '#campus' },
    { name: 'Placements', href: '#placements' },
  ];

  const departments = [
    { name: 'Computer Science & Engineering', href: '#cse' },
    { name: 'Electronics & Communication', href: '#ece' },
    { name: 'Mechanical Engineering', href: '#mech' },
    { name: 'Electrical Engineering', href: '#eee' },
    { name: 'Civil Engineering', href: '#civil' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* University Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="h-8 w-8 text-dsu-blue" />
              <div>
                <h3 className="text-xl font-bold">DSU</h3>
                <p className="text-sm text-gray-400">School of Engineering</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Dayananda Sagar University's School of Engineering is committed to excellence 
              in education, research, and innovation, shaping the next generation of engineers.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-dsu-blue" />
                <span className="text-gray-300">+91-80-26721802</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-dsu-blue" />
                <span className="text-gray-300">info@dsu.edu.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-dsu-blue mt-1" />
                <span className="text-gray-300">
                  Dayananda Sagar University<br />
                  Shavige Malleshwara Hills<br />
                  Kumaraswamy Layout<br />
                  Bangalore - 560078
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-dsu-blue transition-colors duration-300 flex items-center space-x-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Departments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Departments</h4>
            <ul className="space-y-3">
              {departments.map((dept) => (
                <li key={dept.name}>
                  <motion.a
                    href={dept.href}
                    className="text-gray-300 hover:text-dsu-blue transition-colors duration-300 flex items-center space-x-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{dept.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            <p className="text-gray-300 mb-4">
              Get the latest updates and news from DSU School of Engineering.
            </p>
            
            <form className="space-y-3">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-dsu-blue focus:border-transparent text-white placeholder-gray-400"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                type="submit"
                className="w-full bg-dsu-blue text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-dsu-blue transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 pt-8 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Dayananda Sagar University. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-dsu-blue transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-dsu-blue transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-dsu-blue transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;