import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar" style={{ viewTransitionName: "navbar" }}>
      <div className="navbar-logo">
        <div className="navbar-item">
          <Link href="/">Logo</Link>
        </div>
      </div>
      <div className="navbar-items">
        <div className="navbar-item">
          <Link href="/">Home</Link>
        </div>
        <div className="navbar-item">
          <Link href="/projects">Projects</Link>
        </div>
        <div className="navbar-item">
          <Link href="/about">About</Link>
        </div>
        <div className="navbar-item">
          <Link href="/info">Info</Link>
        </div>
      </div>
    </nav>
  );
}
