import { NextRequest, NextResponse } from "next/server";
import {profileConfig} from "@/config/profile.config";
import {headers} from "next/headers";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams; 
    const target = searchParams.get('target');


    // Get user agent and IP for analytics
    const headersList = await headers()
    const userAgent = headersList.get('user-agent') || 'Unknown'
    const forwarded = headersList.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : headersList.get('x-real-ip') || 'unknown'

    // Determine redirect URL based on target parameter
    let redirectUrl: string

    switch (target) {
        case 'social':
            // Primary social profile (Instagram in this case)
            redirectUrl =
                profileConfig.social.instagram ||
                profileConfig.social.linkedin ||
                profileConfig.social.facebook ||
                process.env.NEXT_PUBLIC_SITE_URL ||
                '/'
            break
        case 'apply':
            redirectUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/apply`
            break
        default:
            redirectUrl = process.env.NEXT_PUBLIC_SITE_URL || '/'
    }

    // Log the QR scan event (this can be replaced with a proper analytics service)
    try {
        // Example:Send to external analytics endpoint
        await fetch('https://your-analytics-endpoint.com/track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                event: 'qr_scan',
                target,
                timestamp: new Date().toISOString(),
                userAgent,
                ip,
                redirectUrl,
            }),
        })
    } catch (error) {
        console.error('Failed to log QR scan event:', error)
    }

    // Redirect to the determined URL
    return NextResponse.redirect(redirectUrl, {
        status: 302,
        headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
        },
    })
}
