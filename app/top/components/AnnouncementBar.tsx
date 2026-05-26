export default function AnnouncementBar() {
  return (
    <div
      className="sticky top-0 z-[60] flex items-center justify-center h-10"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <p
        style={{
          fontSize: "12px",
          letterSpacing: "0.08em",
          color: "#1A1A1A",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        水〜日 10:00〜16:00 営業中　＊月・火 定休
      </p>
    </div>
  );
}
