import { ImageResponse } from 'next/og';
 
// Route segment config
export const runtime = 'edge';
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          border: '1px solid rgba(207,168,86,0.5)',
          color: '#cfa856',
          fontSize: '20px',
          fontStyle: 'italic',
          fontFamily: 'serif',
          lineHeight: '1',
          paddingTop: '2px', // Slight optical alignment
        }}
      >
        T
      </div>
    ),
    {
      ...size,
    }
  );
}
