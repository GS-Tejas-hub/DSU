import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const events = [
    {
      date: '2025-01-15',
      title: 'Spring Semester Begins',
      time: '9:00 AM',
      location: 'All Campuses',
      type: 'academic'
    },
    {
      date: '2025-01-20',
      title: 'Industry Expert Lecture Series',
      time: '2:00 PM',
      location: 'Main Auditorium',
      type: 'event'
    },
    {
      date: '2025-01-25',
      title: 'Technical Symposium 2025',
      time: '10:00 AM',
      location: 'Engineering Block',
      type: 'event'
    },
    {
      date: '2025-02-01',
      title: 'Mid-Semester Examinations',
      time: '9:00 AM',
      location: 'Examination Halls',
      type: 'exam'
    },
    {
      date: '2025-02-14',
      title: 'Project Showcase',
      time: '11:00 AM',
      location: 'Innovation Center',
      type: 'event'
    },
    {
      date: '2025-02-28',
      title: 'Research Paper Submission Deadline',
      time: '11:59 PM',
      location: 'Online Portal',
      type: 'deadline'
    }
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'academic': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'event': return 'bg-green-100 text-green-800 border-green-200';
      case 'exam': return 'bg-red-100 text-red-800 border-red-200';
      case 'deadline': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const upcomingEvents = events
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 4);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Academic Calendar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with important dates, events, and deadlines throughout the academic year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendar Widget */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
              <div className="flex space-x-2">
                <motion.button
                  onClick={prevMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </motion.button>
                <motion.button
                  onClick={nextMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 35 }, (_, i) => {
                const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i - 6);
                const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
                const isToday = date.toDateString() === new Date().toDateString();
                const hasEvent = events.some(event => 
                  new Date(event.date).toDateString() === date.toDateString()
                );

                return (
                  <motion.div
                    key={i}
                    className={`relative h-10 flex items-center justify-center text-sm cursor-pointer rounded-lg transition-colors duration-200 ${
                      isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                    } ${
                      isToday ? 'bg-dsu-blue text-white font-bold' : 'hover:bg-gray-100'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {date.getDate()}
                    {hasEvent && !isToday && (
                      <div className="absolute bottom-1 w-1 h-1 bg-dsu-blue rounded-full" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <CalendarIcon className="h-6 w-6 text-dsu-blue" />
              <h3 className="text-2xl font-bold text-gray-900">Upcoming Events</h3>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-xl border-2 ${getEventTypeColor(event.type)} hover:shadow-md transition-shadow duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <h4 className="font-semibold mb-2">{event.title}</h4>
                  
                  <div className="space-y-1 text-sm opacity-90">
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="w-full mt-6 bg-dsu-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Full Academic Calendar
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;