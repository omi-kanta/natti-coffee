'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

type Props = {
  detailedImage: { url: string; width: number; height: number };
};

export default function StoryCardModal({ detailedImage }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          marginTop: '16px',
          fontFamily: "'Noto Sans JP', sans-serif",
          fontWeight: 300,
          fontSize: '13px',
          color: '#3D3D3D',
          border: '1px solid rgba(61,61,61,0.4)',
          borderRadius: '4px',
          padding: '6px 16px',
          background: 'none',
          cursor: 'pointer',
          letterSpacing: '0.05em',
        }}
      >
        詳細を見る
      </button>

      {isOpen && createPortal(
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 24px 24px',
            boxSizing: 'border-box',
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="閉じる"
              style={{
                alignSelf: 'flex-end',
                marginBottom: '8px',
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '28px',
                lineHeight: 1,
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              ×
            </button>
            <Image
              src={detailedImage.url}
              alt=""
              width={detailedImage.width}
              height={detailedImage.height}
              style={{
                maxWidth: '100vw',
                maxHeight: '95vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '8px',
                display: 'block',
              }}
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
