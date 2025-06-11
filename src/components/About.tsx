import React from 'react'
import { motion } from 'framer-motion'
import profileData from '../data/profile.json'

const About: React.FC = () => {
  return (
    <section id="about" className="section-spacing section-padding bg-navy-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-16 text-center">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                My Story
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                {profileData.bio}
              </p>
            </div>

            {/* Interests */}
            <div className="card">
              <h3 className="text-2xl font-heading font-semibold text-white mb-6">
                Interests & Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profileData.interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 bg-navy-700 rounded-lg p-3 hover:bg-navy-600 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-slate-200 font-medium">{interest}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* What I'm Looking For */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-heading font-semibold text-white mb-6">
                What I'm Looking For
              </h3>
              <div className="space-y-4">
                {profileData.lookingFor.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-navy-700 rounded-lg hover:bg-navy-600 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center mt-1">
                      <span className="text-navy-900 font-bold text-sm">•</span>
                    </div>
                    <p className="text-slate-200 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Highlight */}
            <div className="card">
              <h3 className="text-2xl font-heading font-semibold text-white mb-6">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  'SolidWorks', 'MATLAB', 'Python', 'C++', 
                  'Arduino', 'ROS', 'PLC Programming', 'CAD Design',
                  'Control Systems', '3D Printing'
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="text-center p-3 bg-gradient-to-br from-teal-400/10 to-navy-700 rounded-lg border border-teal-400/20 hover:border-teal-400/50 transition-all duration-300"
                  >
                    <span className="text-teal-400 font-medium text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 