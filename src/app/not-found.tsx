'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-100 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-primary mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold text-black mb-3">
          Page Not Found
        </h2>
        <p className="text-stone-600 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link href="/">
          <Button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold cursor-pointer">
            Back to Home
          </Button>
        </Link>

      </div>
    </div>
  )
}