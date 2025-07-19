import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Only apply middleware to admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // You can add additional security checks here if needed
    // For now, we'll let the client-side handle authentication
    return NextResponse.next()
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
