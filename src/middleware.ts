import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Check if the request is for the root path
    if (request.nextUrl.pathname === '/') {
        // Create a new URL for the redirect destination
        const url = request.nextUrl.clone();
        url.pathname = '/landing';

        // Return the redirect response
        return NextResponse.redirect(url);
    }

    // Continue with the request for all other paths
    return NextResponse.next();
}

// Configure which paths the middleware will run on
export const config = {
    matcher: '/',
};