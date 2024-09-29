'use client'

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function LabSolution() {
  const params = useParams()
  const platform = params?.platform as string
  const labSlug = params?.labSlug as string

  // Fallback values in case params are undefined
  const title = labSlug ? labSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Lab Solution'
  const imageSrc = platform === 'tryhackme' ? '/images/tryhackme-banner.svg' : '/images/hackthebox-banner.png'
  
  // In a real application, you would fetch the lab data based on the platform and labSlug
  const labData = {
    title: title,
    image: imageSrc,
    content: 
    `
    Developer: Adel.Mouali
    `
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <header className="bg-gray-800 p-4 sticky top-0 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href={`/${platform}-labs`} className="text-2xl font-bold text-green-400 flex items-center">
            <ArrowLeft className="w-6 h-6 mr-2" /> Back to Labs
          </Link>
          <h1 className="text-2xl font-bold text-green-400">{labData.title}</h1>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <Image 
            src={labData.image} 
            alt={labData.title} 
            width={400} 
            height={200} 
            className="w-full h-40 object-cover"
          />
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">{labData.title} Solution</h2>
            <div className="prose prose-invert max-w-none">
              {labData.content}
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