'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface ImageUploadProps {
  currentImage?: string
  onImageUpload: (imageUrl: string) => void
  folder?: string
  className?: string
}

export default function ImageUpload({ 
  currentImage, 
  onImageUpload, 
  folder = 'portfolio',
  className = ''
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select an image file')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setUploadError('Image size must be less than 5MB')
      return
    }

    setUploading(true)
    setUploadError('')

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('folder', folder)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        onImageUpload(data.url)
      } else {
        const data = await response.json()
        setUploadError(data.error || 'Upload failed')
      }
    } catch (error) {
      setUploadError('Upload failed. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center space-x-4">
        {currentImage ? (
          <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <Image src={currentImage} alt="Uploaded image" fill className="object-cover" />
          </div>
        ) : (
          <div className="w-24 h-24 rounded-lg bg-gray-100 dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400">
            No image
          </div>
        )}

        <label className="cursor-pointer">
          <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
          <div className={`inline-flex items-center px-4 py-2 rounded-md text-white ${uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} transition-colors`}>
            {uploading ? (
              <>
                <svg className="-ml-1 mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                Uploading...
              </>
            ) : (
              <>
                <svg className="-ml-1 mr-2 h-4 w-4 text-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Upload Image
              </>
            )}
          </div>
        </label>
      </div>

      {uploadError && (
        <div className="text-red-600 dark:text-red-400 text-sm">
          {uploadError}
        </div>
      )}

      <div className="text-xs text-gray-500 dark:text-gray-400">
        Supported formats: JPG, PNG, GIF, WebP. Max size: 5MB
      </div>
    </div>
  )
}
