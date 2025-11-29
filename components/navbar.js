class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: rgba(100, 0, 32, 1);
          box-shadow: 0 2px 4px rgba(146, 43, 33, 0.8);
          font-family: sans-seri;
        }

        nav {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0.8rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        /* ---------------- LOGO AREA ---------------- */
        .logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          color: white;
        }

        .logo img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 50%;
        }

        /* Center title and subtext under logo */
        .logo-text {
          display: flex;
          flex-direction: column;
          align-items: center;  /* center horizontally */
          line-height: 1.2;
        }

        .logo-title {
          font-size: 1.3rem;
          font-weight: 700;
          text-align: center;
        }

        .logo-sub {
          font-size: 7px;
          opacity: 0.9;
          text-align: center;
        }

        /* ---------------- NAV LINKS ---------------- */
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a, .nav-links button {
          color: white;
          font-weight: 500;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          transition: opacity 0.3s, background 0.3s;
          padding: 0.5rem 0.8rem;
          border-radius: 4px;
        }

        .nav-links a:hover, .nav-links button:hover {
          opacity: 0.8;
          background-color: rgba(255,255,255,0.1);
        }

        /* ---------------- DROPDOWN ---------------- */
        .dropdown {
          position: relative;
        }

        .dropdown ul {
          position: absolute;
          left: 0;
          top: 100%;
          margin-top: 0.5rem;
          width: 200px;
          background: white;
          color: black;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          border-radius: 5px;
          display: none;
          flex-direction: column;
          z-index: 50;
        }

        .dropdown ul li a {
          color: black;
          padding: 0.5rem 1rem;
          display: block;
        }

        .dropdown ul li a:hover {
          background-color: #f0f0f0;
        }

        .dropdown.show ul {
          display: flex;
        }

        /* ---------------- MOBILE ---------------- */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: rgba(255, 255, 255, 0.95);
            padding: 1rem 2rem;
          }

          .nav-links.open {
            display: flex;
          }

          .nav-links a, .nav-links button {
            color: #333;
          }

          .mobile-menu-button {
            display: block;
            background: none;
            border: none;
            cursor: pointer;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu-button {
            display: none;
          }
        }
      </style>

      <nav>
        <a href="/" class="logo">
          <img src="https://i.postimg.cc/G3MpXHTj/EAE-(Esther-Ansa-Effanga)-Logo-Logo-Standalone-copy-5.png" alt="Logo">
          <div class="logo-text">
            <span class="logo-title">EAE LEGAL PRACTICE</span>
            <span class="logo-sub">FAMILY LAW • CORPORATE/COMMERCIAL LAW • PROPERTY LAW</span>
          </div>
        </a>

        <div class="nav-links">
          <a href="/">Home</a>
          <a href="#books">Books</a>
          <a href="#consultation">Consultation</a>
          <a href="/about.html">About</a>
          <a href="#testimonials">Testimonials</a>

          <!-- Articles Dropdown -->
          <div class="dropdown">
            <button id="articlesBtn">Articles ▾</button>
            <ul id="articlesDropdown">
              <li><a href="article.html?tag=family-law">Family Law</a></li>
              <li><a href="article.html?tag=Corporate/Commercial-law">Corporate/Commercial Law</a></li>
              <li><a href="article.html?tag=property-law">Property Law</a></li>
            </ul>
          </div>
        </div>

        <button class="mobile-menu-button" aria-label="Toggle Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
    `;

    // Mobile menu toggle
    const menuButton = this.shadowRoot.querySelector('.mobile-menu-button');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Articles dropdown toggle
    const articlesBtn = this.shadowRoot.querySelector('#articlesBtn');
    const dropdown = this.shadowRoot.querySelector('.dropdown');
    articlesBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    this.shadowRoot.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);

