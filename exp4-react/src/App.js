import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">MySite</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <div className="container">
        <div className="hero">
          <h1>Welcome 👋</h1>
          <p>
            This is the home page of our single page React website.
            Clean design, smooth layout, and modern UI.
          </p>

          <a className="btn" href="/about">
            Explore More →
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
