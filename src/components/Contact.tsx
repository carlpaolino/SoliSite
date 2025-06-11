import React from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi'
import linksData from '../data/links.json'

const Contact: React.FC = () => {

  const contactMethods = [
    {
      icon: FiMail,
      label: 'Email',
      value: linksData.email,
      href: `mailto:${linksData.email}`,
      color: 'text-blue-400'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: linksData.phone,
      href: `tel:${linksData.phone}`,
      color: 'text-green-400'
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: linksData.linkedin,
      color: 'text-blue-500'
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'GitHub Profile',
      href: linksData.github,
      color: 'text-purple-400'
    }
  ]

  return (
    <section id="contact" className="section-spacing section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-16 text-center">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-16">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about engineering and technology. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 card hover:border-teal-400/50 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className={`${method.color} group-hover:text-teal-400 transition-colors duration-300 mb-4`}>
                  <method.icon className="w-8 h-8" />
                </div>
                <h4 className="text-white font-semibold mb-2">{method.label}</h4>
                <p className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors duration-300">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 