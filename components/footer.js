class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    // Footer HTML
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #008080;
          color: white;
          padding: 3rem 1rem;
          font-family: sans-serif;
        }
        .footer-content { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px,1fr)); gap:2rem; max-width:1280px; margin:0 auto; }
        .footer-section h3 { font-size:1.25rem; font-weight:bold; margin-bottom:1rem; color:#f3f4f6; }
        .footer-section p, .footer-section a { color:#e0e0e0; margin-bottom:0.5rem; display:flex; align-items:center; gap:0.5rem; text-decoration:none; }
        .footer-section a:hover { color:white; }
        .social-icons { display:flex; gap:1rem; margin-top:1rem; }
        .social-icons a { display:flex; align-items:center; justify-content:center; width:36px; height:36px; border-radius:50%; background-color:#374151; transition:0.3s; }
        .social-icons a:hover { background-color:#4b5563; }
        .social-icons a svg, .footer-section p svg { width:18px; height:18px; stroke-width:2; }
        .copyright { text-align:center; margin-top:3rem; padding-top:1.5rem; border-top:1px solid #374151; color:#9ca3af; font-size:0.875rem; }
      </style>

      <div class="footer-content">
        <div class="footer-section">
          <h3>EAE LEGAL PRACTICE</h3>
          <p>Your trusted partner for all legal matters. Providing expert guidance since 2005.</p>
          <div class="social-icons">
            <a href="#" class="social-facebook"></a>
            <a href="#" class="social-twitter"></a>
            <a href="#" class="social-linkedin"></a>
          </div>
        </div>

        <div class="footer-section">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="#books">Books</a>
          <a href="#consultation">Consultation</a>
          <a href="/about.html">About</a>
        </div>

        <div class="footer-section">
          <h3>Contact</h3>
          <p class="contact-address"></p>
          <p class="contact-city"></p>
          <p class="contact-phone"></p>
          <p class="contact-email"></p>
        </div>
      </div>

      <div class="copyright">
    Created by: <a href="https://wa.me/2348057822357" target="_blank" style="color:inherit; text-decoration:underline;">DevNova</a> for &copy; ${new Date().getFullYear()} EAE Legal Practice. All rights reserved.
</div>
    `;

    // Load feather-icons
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js';
    this.shadowRoot.appendChild(script);

    script.onload = () => {
      const { shadowRoot } = this;

      // Social icons
      shadowRoot.querySelector('.social-facebook').innerHTML = feather.icons.facebook.toSvg();
      shadowRoot.querySelector('.social-twitter').innerHTML = feather.icons.twitter.toSvg();
      shadowRoot.querySelector('.social-linkedin').innerHTML = feather.icons.linkedin.toSvg();

      // Contact icons
      shadowRoot.querySelector('.contact-address').innerHTML = feather.icons['map-pin'].toSvg() + '81, Ecomog Bus Stop Isashi';
      shadowRoot.querySelector('.contact-city').innerHTML = feather.icons['map-pin'].toSvg() + ' Iyana Isashi, Ojo, Lagos state.';
      shadowRoot.querySelector('.contact-phone').innerHTML = feather.icons.phone.toSvg() + ' (234) 916-461-6761';
      shadowRoot.querySelector('.contact-email').innerHTML = feather.icons.mail.toSvg() + ' info@eaelegalpractice.con';
    };
  }
}

customElements.define('custom-footer', CustomFooter);