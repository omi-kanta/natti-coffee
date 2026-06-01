type Props = {
  businessHours?: string
  closed?: string
}

export default function AnnouncementBar({ businessHours, closed }: Props) {
  const text = [businessHours, closed].filter(Boolean).join('　　')

  if (!text) return null

  return (
    <div
      className="sticky top-0 z-[60] flex items-center justify-center h-10"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <p
        style={{
          fontSize: "13px",
          letterSpacing: "0.08em",
          color: "#1A1A1A",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {text}
      </p>
    </div>
  )
}
