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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FAF9F5',
          border: '1px solid #E3DECF',
          borderRadius: 7,
        }}
      >
        <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: -1, color: '#1F1D18' }}>VA</div>
        <div
          style={{
            width: 16,
            height: 3,
            marginTop: 1,
            borderRadius: 2,
            background: '#E8CDAD',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
