'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { useModal } from '@/app/components/ModalContext';

type Props = {
  image?: { url: string; width: number; height: number };
  buttonLabel: string;
};

export default function MenuImageModal({ image, buttonLabel }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsModalOpen } = useModal();

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
      setIsModalOpen(true);
    } else {
      document.body.style.overflow = '';
      setIsModalOpen(false);
    }
    return () => {
      document.body.style.overflow = '';
      setIsModalOpen(false);
    };
  }, [isOpen, setIsModalOpen]);

  if (!image) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
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
        {buttonLabel}
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
              src={image.url}
              alt=""
              width={image.width}
              height={image.height}
              className="
                w-auto h-auto object-contain rounded-lg block
                max-w-[90vw] max-h-[80vh]
                md:max-w-[55vw] md:max-h-[90vh]
              "
            />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
