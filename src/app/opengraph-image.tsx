import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/config'

export const runtime = 'edge'

export const alt = siteConfig.name
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #212121 0%, #C62828 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Logo/Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#F9A825',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            IVEQI
          </div>
          <div
            style={{
              fontSize: '32px',
              color: '#FFFFFF',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            Ivoire Équipements
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '24px',
            color: '#F5F5F5',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: '1.4',
          }}
        >
          Travaux • Location • Transport d'engins
        </div>

        {/* Certification badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            background: '#B71C1C',
            color: '#FFFFFF',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: 'bold',
          }}
        >
          ISO 9001:2015
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
