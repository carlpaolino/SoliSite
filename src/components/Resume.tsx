import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiExternalLink } from 'react-icons/fi'
import { Document, Page, pdfjs } from 'react-pdf'
import linksData from '../data/links.json'

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const Resume: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setLoading(false)
    setError(null)
  }

  const onDocumentLoadError = (error: Error) => {
    console.error('Error loading PDF:', error)
    setError('Failed to load resume. Please try downloading instead.')
    setLoading(false)
  }

  const goToPrevPage = () => {
    setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1))
  }

  const goToNextPage = () => {
    setPageNumber(prevPageNumber => 
      numPages ? Math.min(prevPageNumber + 1, numPages) : prevPageNumber
    )
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = linksData.resumeURL
    link.download = 'Solomon_Nackashi_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="section-spacing section-padding bg-navy-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-16 text-center">
            Resume
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <button
              onClick={downloadResume}
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <FiDownload className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
            <a
              href={linksData.resumeURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <FiExternalLink className="w-4 h-4" />
              <span>Open in New Tab</span>
            </a>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="card bg-white rounded-lg overflow-hidden shadow-2xl"
          >
            {loading && (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400 mx-auto mb-4"></div>
                  <p className="text-slate-600">Loading resume...</p>
                </div>
              </div>
            )}

            {error && (
              <div className="flex items-center justify-center h-96">
                <div className="text-center">
                  <p className="text-red-500 mb-4">{error}</p>
                  <button
                    onClick={downloadResume}
                    className="bg-teal-400 text-navy-900 px-6 py-2 rounded-lg hover:bg-teal-500 transition-colors duration-300"
                  >
                    Download Resume Instead
                  </button>
                </div>
              </div>
            )}

            {!error && (
              <div className="pdf-container">
                <Document
                  file={linksData.resumeURL}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading=""
                  error=""
                  className="flex justify-center"
                >
                  <Page
                    pageNumber={pageNumber}
                    className="shadow-lg"
                    width={Math.min(800, window.innerWidth - 80)}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>

                {/* PDF Navigation */}
                {numPages && numPages > 1 && (
                  <div className="flex items-center justify-center space-x-4 p-4 bg-gray-50 border-t">
                    <button
                      onClick={goToPrevPage}
                      disabled={pageNumber <= 1}
                      className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                        pageNumber <= 1
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-teal-400 text-navy-900 hover:bg-teal-500'
                      }`}
                    >
                      Previous
                    </button>
                    <span className="text-navy-900 font-medium">
                      Page {pageNumber} of {numPages}
                    </span>
                    <button
                      onClick={goToNextPage}
                      disabled={pageNumber >= numPages}
                      className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                        pageNumber >= numPages
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-teal-400 text-navy-900 hover:bg-teal-500'
                      }`}
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>

          {/* Resume Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="card text-center">
              <h3 className="text-xl font-heading font-semibold text-white mb-2">
                Education
              </h3>
              <p className="text-slate-300">
                B.S. Mechanical Engineering<br />
                Georgia Institute of Technology
              </p>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-heading font-semibold text-white mb-2">
                Focus Areas
              </h3>
              <p className="text-slate-300">
                Automation & Robotics<br />
                Control Systems
              </p>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-heading font-semibold text-white mb-2">
                Experience
              </h3>
              <p className="text-slate-300">
                Engineering Projects<br />
                Research & Development
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Resume 