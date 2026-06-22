type Props = {
  businessHours?: string
  closed?: string
}

export default function AnnouncementBar({ businessHours, closed }: Props) {
  const text = [businessHours, closed].filter(Boolean).join('　　')

  if (!text) return null

  return (
    <div
      className="sticky top-0 z-[60] flex items-center justify-center h-16 md:h-10"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      {/* PC: 横並び1行（既存通り） */}
      <p
        className="hidden md:block"
        style={{
          fontSize: "13px",
          letterSpacing: "0.08em",
          color: "#1A1A1A",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {text}
      </p>

      {/* SP: 縦並び2行 */}
      <div className="flex md:hidden flex-col items-center justify-center gap-0.5 py-1.5">
        {businessHours && (
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.05em",
              color: "#1A1A1A",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            {businessHours}
          </p>
        )}
        {closed && (
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.05em",
              color: "#1A1A1A",
              fontFamily: "system-ui, -apple-system, sans-serif",
            }}
          >
            {closed}
          </p>
        )}
      </div>
    </div>
  )
}