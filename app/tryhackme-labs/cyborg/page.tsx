'use client'

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CyborgSolution() {
  const title = "Cyborg"
  const imageSrc = "/images/cyborg_bare.png" // Change this to the actual image path

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <header className="bg-gray-800 p-4 sticky top-0 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/tryhackme-labs" className="text-2xl font-bold text-green-400 flex items-center">
            <ArrowLeft className="w-6 h-6 mr-2" /> Back to Labs
          </Link>
          <h1 className="text-2xl font-bold text-green-400">{title} Solution</h1>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <Image 
            src={imageSrc} 
            alt={title} 
            width={9000} 
            height={200} 
            className="mx-auto h-40 object-cover"
          />
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">{title} Solution</h2>
            <div className="prose prose-invert max-w-none">
              <p>Your detailed solution for the Cyborg lab goes here...</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-center p-4 mt-8">
        <p>&copy; {new Date().getFullYear()} CyberMaster. All rights reserved.</p>
      </footer>
    </div>
  )
}
