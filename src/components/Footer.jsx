export default function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className="footer">
      <p className="footer__text">Copyright {year} Argent Bank</p>
    </footer>
  )
}