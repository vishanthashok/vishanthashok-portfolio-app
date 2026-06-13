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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FAF9F5',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: -4, color: '#1F1D18' }}>VA</div>
        <div
          style={{
            width: 88,
            height: 12,
            marginTop: 4,
            borderRadius: 8,
            background: '#E8CDAD',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
