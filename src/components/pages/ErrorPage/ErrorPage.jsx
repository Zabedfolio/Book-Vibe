import React from 'react';

const ErrorPage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f9f9f9',
      fontFamily: 'Georgia, serif',
      textAlign: 'center',
      padding: '24px',
    }}>
      <p style={{ fontSize: 13, letterSpacing: '0.15em', color: '#aaa', margin: '0 0 16px', textTransform: 'uppercase' }}>
        Error 404
      </p>

      <h1 style={{ fontSize: 48, fontWeight: 'normal', color: '#111', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
        Page not found
      </h1>

      <p style={{ fontSize: 15, color: '#888', margin: '0 0 40px', maxWidth: 360, lineHeight: 1.7 }}>
        The page you're looking for doesn't exist or has been moved.
      </p>

      <div style={{ display: 'flex', gap: 12 }}>
        <button
          onClick={() => window.history.back()}
          style={{
            padding: '10px 24px',
            fontSize: 14,
            background: 'transparent',
            border: '1px solid #ddd',
            color: '#555',
            cursor: 'pointer',
            borderRadius: 6,
          }}
        >
          Go back
        </button>
        <button
          onClick={() => window.location.href = '/'}
          style={{
            padding: '10px 24px',
            fontSize: 14,
            background: '#111',
            border: '1px solid #111',
            color: '#fff',
            cursor: 'pointer',
            borderRadius: 6,
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;