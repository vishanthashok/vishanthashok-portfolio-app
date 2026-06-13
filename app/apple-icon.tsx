import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
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
        }}
      >
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: -5,
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
