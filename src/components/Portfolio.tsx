import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'
import projectsData from '../data/projects.json'

interface Project {
  id: string
  title: string
  blurb: string
  descriptionMD: string
  tech: string[]
  image: string
  githubUrl?: string
  demoUrl?: string
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  const formatDescription = (markdown: string) => {
    // Simple markdown to HTML conversion for demo purposes
    return markdown
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n- /g, '<br>• ')
  }

  return (
    <section id="portfolio" className="section-spacing section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-16 text-center">
            Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="card h-full hover:transform hover:scale-[1.02] transition-all duration-500">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://via.placeholder.com/600x300/0A192F/64FFDA?text=${encodeURIComponent(project.title)}`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed">
                    {project.blurb}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-teal-400/10 text-teal-400 border border-teal-400/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 text-xs bg-slate-400/10 text-slate-400 border border-slate-400/20 rounded-full">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex space-x-4 pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center space-x-2 text-slate-400 hover:text-teal-400 transition-colors duration-300"
                      >
                        <FiGithub className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center space-x-2 text-slate-400 hover:text-teal-400 transition-colors duration-300"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-navy-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://via.placeholder.com/800x300/0A192F/64FFDA?text=${encodeURIComponent(selectedProject.title)}`
                    }}
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-navy-900/80 hover:bg-navy-900 text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-heading font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>

                  <div
                    className="text-slate-300 leading-relaxed mb-6 prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: `<p>${formatDescription(selectedProject.descriptionMD)}</p>`
                    }}
                  />

                  {/* Full Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-lg font-heading font-semibold text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 bg-teal-400/10 text-teal-400 border border-teal-400/20 rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex space-x-4">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center space-x-2"
                      >
                        <FiGithub className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    )}
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center space-x-2"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio 