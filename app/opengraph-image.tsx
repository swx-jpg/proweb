import { ImageResponse } from 'next/og';

export const alt = 'Proweb — Estúdio web em Portugal';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#f3ece0',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* decorative blob */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,74,26,0.25) 0%, transparent 70%)',
            top: '-150px',
            right: '-150px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,106,57,0.2) 0%, transparent 70%)',
            bottom: '-100px',
            left: '-100px',
          }}
        />

        {/* top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: '#86796a',
            fontFamily: 'sans-serif',
            position: 'relative',
          }}
        >
          <span>Estúdio web · Portugal</span>
          <span>proweb.pt</span>
        </div>

        {/* big title in the middle */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            fontSize: '110px',
            fontWeight: 400,
            color: '#141210',
            letterSpacing: '-0.02em',
            lineHeight: 0.95,
            fontFamily: 'serif',
            position: 'relative',
          }}
        >
          <span style={{ display: 'block' }}>
            Websites que{' '}
            <span style={{ color: '#a84a1a', fontStyle: 'italic' }}>não</span>{' '}
            parecem feitos num template.
          </span>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: '28px',
            color: '#3a362f',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <span
              style={{
                fontFamily: 'serif',
                fontSize: '68px',
                lineHeight: 1,
                color: '#141210',
              }}
            >
              Proweb
            </span>
            <span
              style={{
                fontFamily: 'serif',
                fontSize: '68px',
                lineHeight: 1,
                color: '#a84a1a',
              }}
            >
              .
            </span>
          </div>
          <span style={{ fontSize: '22px', color: '#86796a' }}>
            60 dias de garantia · entrega em 3 a 14 dias
          </span>
        </div>
      </div>
    ),
    size
  );
}
