import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import React from 'react'
import config from '@/payload.config'
import { BlockRenderer } from '@/components/BlockRenderer'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  console.log('Attempting to load page with slug:', slug)

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    // First, let's see all pages to debug
    const allPages = await payload.find({
      collection: 'pages' as any,
      limit: 100,
    })

    console.log(
      'All available pages:',
      allPages.docs.map((p: any) => ({ title: p.title, slug: p.slug })),
    )

    const pages = await payload.find({
      collection: 'pages' as any,
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    })

    console.log('Found pages for slug "' + slug + '":', pages.docs.length)

    if (!pages.docs || pages.docs.length === 0) {
      console.log('No page found with slug:', slug)
      notFound()
    }

    const page = pages.docs[0] as any
    console.log('Page data:', {
      title: page.title,
      slug: page.slug,
      layoutBlocks: page.layout?.length || 0,
    })

    return (
      <div className="dynamic-page">
        <main>
          <BlockRenderer blocks={page.layout || []} />
        </main>
      </div>
    )
  } catch (error) {
    console.error('Error fetching page:', error)
    return (
      <div className="error-page" style={{ padding: '20px', background: '#ffebee' }}>
        <h1>Error Loading Page</h1>
        <p>Slug: {slug}</p>
        <p>Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>
    )
  }
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    const pages = await payload.find({
      collection: 'pages' as any,
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
    })

    if (!pages.docs || pages.docs.length === 0) {
      return {
        title: 'Page Not Found',
      }
    }

    const page = pages.docs[0] as any

    return {
      title: page.title,
      description: `${page.title} - Avanti CMS`,
    }
  } catch (error) {
    return {
      title: 'Error Loading Page',
    }
  }
}

// Generate static params for all pages (optional, for static generation)
export async function generateStaticParams() {
  const isBuildMode =
    process.env.PAYLOAD_DISABLE_DB === 'true' ||
    (process.env.NODE_ENV === 'production' && process.env.VERCEL === '1')

  // During Vercel/Next build with DB disabled, avoid initializing Payload
  if (isBuildMode) {
    return []
  }

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    const pages = await payload.find({
      collection: 'pages' as any,
      limit: 100, // Adjust as needed
    })

    return pages.docs.map((page: any) => ({
      slug: page.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}
