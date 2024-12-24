'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Brain, MessageSquare, Upload, Code, ChevronRight, Menu, X, Sun, Moon, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import React from 'react'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">MedAI Analyzer</span>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Features</a>
              <a href="#tech" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Technology</a>
              <a href="#cta" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Get Started</a>
              {mounted && (
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                  {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </Button>
              )}
            </div>
            <div className="md:hidden flex items-center">
              {mounted && (
                <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2">
                  {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900">
            <a href="#features" className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Features</a>
            <a href="#tech" className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Technology</a>
            <a href="#cta" className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Get Started</a>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Animated background */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-blue-500 dark:bg-blue-700 rounded-full"
                style={{
                  width: Math.random() * 300 + 50,
                  height: Math.random() * 300 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, repeatType: 'reverse' }}
              />
            ))}
          </motion.div>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Revolutionize Medical Report Analysis with AI
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Harness the power of Gemini AI to extract insights, answer questions, and streamline your medical workflow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button className="text-lg px-8 py-6 mr-4" size="lg">
              Try It Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/test" passHref>
              <Button variant="outline" className="text-lg px-8 py-6" size="lg">
                Take Your Test
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="mt-16 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-lg transform -rotate-3"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4">
              <Image
                src="/Med-Ai.jpg"
                width={800}
                height={400}
                alt="MedAI Analyzer Dashboard"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-50 dark:bg-gray-900 py-20 relative z-10">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <FeatureCard
                icon={<Upload className="h-12 w-12 text-blue-600 dark:text-blue-400" />}
                title="Easy File Upload"
                description="Securely upload medical reports in various formats for instant analysis."
              />
              <FeatureCard
                icon={<FileText className="h-12 w-12 text-blue-600 dark:text-blue-400" />}
                title="Information Extraction"
                description="Our AI extracts key data points and insights from complex medical reports."
              />
              <FeatureCard
                icon={<MessageSquare className="h-12 w-12 text-blue-600 dark:text-blue-400" />}
                title="Personalized Insights"
                description="Ask questions and receive tailored medical advice based on report analysis."
              />
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="tech" className="py-20 relative z-10">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">Powered by Cutting-Edge Technology</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Gemini AI Model</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Leveraging Google's state-of-the-art Gemini AI model for unparalleled natural language understanding and medical knowledge.
                </p>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Seamless API Integration</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our Next.js app integrates smoothly with the Gemini API, ensuring fast and reliable analysis of your medical reports.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 p-8 rounded-lg shadow-lg">
                  <Code className="h-16 w-16 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Technical Highlights</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Next.js for optimal performance and SEO</li>
                    <li>React for dynamic and responsive UI</li>
                    <li>Tailwind CSS for sleek, customizable design</li>
                    <li>Secure file handling and processing</li>
                    <li>Real-time AI-powered analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700 py-20 text-white relative z-10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Medical Analysis?</h2>
            <p className="text-xl mb-12">
              Join the future of healthcare technology. Try MedAI Analyzer today and experience the power of AI-assisted medical report analysis.
            </p>
            <div className="max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="mb-4" />
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" size="lg">
                Get Early Access
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 MedAI Analyzer. All rights reserved.</p>
          <p className="mt-2">
            Made with ❤️ by{' '}
            <Link href="https://github.com/kekubhai" className="text-blue-400 hover:text-blue-300">
              anirban.G
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-center text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
    </motion.div>
  )
}