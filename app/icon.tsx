import { ImageResponse } from 'next/og';

export const size = { width: 48, height: 48 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#141210',
          color: '#f3ece0',
          fontFamily: 'serif',
          fontSize: 32,
          fontWeight: 400,
          letterSpacing: '-0.02em',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'baseline' }}>
          P
          <span style={{ color: '#a84a1a' }}>.</span>
        </span>
      </div>
    ),
    size
  );
}
