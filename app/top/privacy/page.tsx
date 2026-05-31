'use client';

import Header from '@/app/top/components/Header';
import Footer from '@/app/top/components/Footer';

const sections = [
  {
    number: '1',
    title: '個人情報の取得･利用･提供等について',
    paragraphs: [
      '個人情報を取得する際は、その利用目的をできる限り明確に特定し、その目的達成に必要な限度において適法かつ公正な手段を用い、同意を得て取得します。',
      '個人情報を利用する際は、本人に明示、通知、または公表した利用目的の範囲内に限定し、それに反する目的外利用を行なわないための措置を講じます。',
      '個人情報を第三者に提供またはその取扱いを委託する際は、本人が同意を与えた利用目的の範囲内で、適法にこれを行います。',
    ],
  },
  {
    number: '2',
    title: '安全対策の実施について',
    paragraphs: [
      '個人情報の正確性およびその利用の安全性を確保するため、情報セキュリティ対策を始めとする安全措置を構築し、個人情報への不正アクセス、個人情報の漏洩、滅失または毀損等の的確な防止とセキュリティの是正に努めます。',
    ],
  },
  {
    number: '3',
    title: '苦情および相談等に対する適正な対応について',
    paragraphs: [
      '本人からの苦情および相談があった場合には、適切かつ迅速に対応いたします。また、個人情報を提供された本人の権利を尊重し、本人から自己情報の開示、訂正、削除、または利用もしくは提供の停止等を求められたときは、適法かつ遅滞なく応じます。',
    ],
  },
  {
    number: '4',
    title: '法令・指針・規範の遵守について',
    paragraphs: [
      '適正な個人情報保護の実現のため、個人情報の取扱いに関する法令、国が定める指針およびその他の規範を遵守します。',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main style={{ backgroundColor: '#FAF7F2' }}>
      <Header />

      {/* ヒーロー */}
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: '#FAF7F2' }}
      >
        <p
          style={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 500,
            fontSize: '11px',
            letterSpacing: '0.25em',
            color: 'rgba(61,61,61,0.5)',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          Privacy Policy
        </p>
        <h1
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(22px, 4vw, 36px)',
            color: '#3D3D3D',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          プライバシーポリシー
        </h1>
      </section>

      {/* 区切り線 */}
      <div
        style={{
          width: '40px',
          height: '1px',
          backgroundColor: 'rgba(61,61,61,0.2)',
          margin: '0 auto',
        }}
      />

      {/* 本文 */}
      <section
        style={{
          backgroundColor: '#FAF7F2',
          paddingTop: 'clamp(48px, 6vw, 80px)',
          paddingBottom: 'clamp(48px, 6vw, 80px)',
          paddingLeft: 'clamp(24px, 5%, 40px)',
          paddingRight: 'clamp(24px, 5%, 40px)',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          {/* リード文 */}
          <p
            style={{
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeight: 300,
              fontSize: '14px',
              lineHeight: 2.2,
              color: '#3D3D3D',
              marginBottom: '56px',
            }}
          >
            ハンディマン株式会社は、個人情報に関する管理の重要性を十分に認識し、「個人情報の保護に関する法律」を遵守するとともに、ここに個人情報保護に関する基本方針を定め、適切かつ確実な個人情報の管理を推進いたします。
          </p>

          {/* セクション */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {sections.map((section) => (
              <div key={section.number}>
                <h2
                  style={{
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontWeight: 500,
                    fontSize: '15px',
                    color: '#3D3D3D',
                    lineHeight: 1.7,
                    marginBottom: '16px',
                    paddingBottom: '12px',
                    borderBottom: '1px solid rgba(61,61,61,0.1)',
                  }}
                >
                  {section.number}. {section.title}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {section.paragraphs.map((text, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: "'Noto Sans JP', sans-serif",
                        fontWeight: 300,
                        fontSize: '14px',
                        lineHeight: 2.2,
                        color: '#3D3D3D',
                        opacity: 0.85,
                        margin: 0,
                      }}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* お問い合わせ窓口 */}
          <div
            style={{
              marginTop: '64px',
              padding: '32px',
              backgroundColor: 'rgba(61,61,61,0.04)',
              borderRadius: '8px',
            }}
          >
            <p
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '0.2em',
                color: 'rgba(61,61,61,0.5)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Contact
            </p>
            <p
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 400,
                fontSize: '14px',
                color: '#3D3D3D',
                lineHeight: 1.6,
                marginBottom: '12px',
              }}
            >
              個人情報に関するお問い合わせ窓口
            </p>
            <p
              style={{
                fontFamily: "'Noto Sans JP', sans-serif",
                fontWeight: 300,
                fontSize: '14px',
                color: '#3D3D3D',
                lineHeight: 2,
                margin: 0,
                opacity: 0.85,
              }}
            >
              NATUVIEW
              <br />
              埼玉県入間市東町1-2-12 平成ハウス9号室
              <br />
              TEL：04-2003-3471
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
