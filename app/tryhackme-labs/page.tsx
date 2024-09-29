'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const labs = [
  { id: 1, title: "basic-pentesting", image: "/images/basic-pentesting.png", solution: "/tryhackme/basic-pentesting" },
  // { id: 2, title: "OWASP Top 10", image: "/images/owasp-top-10.png", solution: "/tryhackme/owasp-top-10" },
  { id: 2, title: "Cyborg", image: "/images/cyborg-banner.png", solution: "tryhackme-labs/cyborg" },

]

export default function TryHackMeLabs() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <header className="bg-gray-800 p-4 sticky top-0 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-400 flex items-center">
            <ArrowLeft className="w-6 h-6 mr-2" /> Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-green-400">TryHackMe Labs</h1>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labs.map((lab) => (
            <motion.div
              key={lab.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src={lab.image} alt={lab.title} width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{lab.title}</h3>
                <Link
                  href={lab.solution}
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200"
                >
                  View Solution <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-center p-4 fixed  bottom-0 left-0 w-full ">
        <p>&copy; {new Date().getFullYear()} CyberMaster. All rights reserved.</p>
      </footer>
    </div>
  )
}