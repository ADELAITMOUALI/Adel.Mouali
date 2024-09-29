'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const challenges = [
  { id: 1, title: "TryHackMe", image: "/images/tryhackme-banner.svg", solution: "/tryhackme-labs" },
  { id: 2, title: "Hack The Box", image: "/images/hackthebox-banner.png", solution: "/hackthebox-labs" },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <header className="bg-gray-800 p-4 sticky top-0 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-400">Adel.Mouali</h1>
          <div className="flex space-x-4">
            <a href="https://github.com/ADELAITMOUALI" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/adel-ait-mouali-a07020237" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <Image
                src="/images/adel-mouali.jpg"
                alt="Adel Mouali"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-green-400 text-center">Adel.Mouali</h2>
              <p className="text-center text-gray-400 mt-2">Junior Cybersecurity Analyst: Mastering CTFs and Ethical Hacking</p>
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-4xl font-bold mb-4">CTF Solutions</h2>
              <p className="text-xl text-gray-400 mb-8">Unraveling the mysteries of cybersecurity challenges</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {challenges.map((challenge) => (
                  <motion.div
                    key={challenge.id}
                    className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image 
                      src={challenge.image} 
                      alt={challenge.title} 
                      width={300} 
                      height={200} 
                      className="w-full h-48 object-cover" 
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                      <Link
                        href={challenge.solution}
                        className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200"
                      >
                        View Labs Solutions <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
          <footer className="bg-gray-800 text-center p-4 fixed  bottom-0 left-0 w-full ">
        <p>&copy; {new Date().getFullYear()} CyberMaster. All rights reserved.</p>
      </footer>
    </div>
  )
}

