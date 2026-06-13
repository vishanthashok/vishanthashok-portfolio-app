import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
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
          background: '#080A0F',
          border: '1px solid #1C2030',
          borderRadius: 7,
        }}
      >
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: -1,
            backgroundImage: 'linear-gradient(120deg, #6C63FF 30%, #00D4AA 100%)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          VA
        </div>
      </div>
    ),
    { ...size }
  );
}
