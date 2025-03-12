import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header>
      <div class="logo">SaltPro</div>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#specs">Specs</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact" class="cta-button">Pre-order Now</a></li>
        </ul>
      </nav>
    </header>

    <section class="hero">
      <div class="hero-content">
        <h1>Introducing the <span class="highlight">SaltPro</span></h1>
        <p class="tagline">The world's most advanced salt shaker</p>
        <p class="description">Perfect seasoning, every time. Our revolutionary design ensures even distribution and precise control.</p>
        <div class="cta">
          <a href="#pricing" class="primary-button">Pre-order Now</a>
          <a href="#features" class="secondary-button">Learn More</a>
        </div>
      </div>
      <div class="hero-image">
        <img src="/images/salt-shaker-hero.png" alt="SaltPro Salt Shaker" />
      </div>
    </section>

    <section id="features" class="features">
      <h2>Why Choose SaltPro?</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">💧</div>
          <h3>Moisture Resistant</h3>
          <p>Special coating prevents clumping even in humid environments</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚙️</div>
          <h3>Adjustable Flow</h3>
          <p>Three precision settings for perfect seasoning control</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔄</div>
          <h3>Easy Refill</h3>
          <p>Twist-off cap with wide opening for mess-free refills</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">♻️</div>
          <h3>Eco-Friendly</h3>
          <p>Made from 100% recycled, BPA-free materials</p>
        </div>
      </div>
    </section>

    <section class="testimonial">
      <div class="testimonial-content">
        <blockquote>
          "The SaltPro has completely changed how I season my food. The precision is unmatched!"
        </blockquote>
        <cite>— Chef Maria Rodriguez, 3-Star Restaurant Owner</cite>
      </div>
    </section>

    <section id="specs" class="specs">
      <h2>Product Specifications</h2>
      <div class="specs-container">
        <div class="specs-image">
          <img src="/images/salt-shaker-specs.png" alt="SaltPro Specifications" />
        </div>
        <div class="specs-details">
          <div class="spec-item">
            <h4>Dimensions</h4>
            <p>Height: 4.5 inches (11.4 cm)<br>Diameter: 2 inches (5.1 cm)</p>
          </div>
          <div class="spec-item">
            <h4>Capacity</h4>
            <p>3.2 oz (90g) of salt</p>
          </div>
          <div class="spec-item">
            <h4>Materials</h4>
            <p>Recycled polymer body with stainless steel mechanism</p>
          </div>
          <div class="spec-item">
            <h4>Colors</h4>
            <p>Available in Matte Black, Brushed Silver, and Pearl White</p>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing" class="pricing">
      <h2>Pre-order Your SaltPro Today</h2>
      <div class="pricing-cards">
        <div class="pricing-card">
          <h3>SaltPro Basic</h3>
          <div class="price">$24.99</div>
          <ul>
            <li>1 SaltPro Shaker</li>
            <li>1-year warranty</li>
            <li>Free shipping</li>
          </ul>
          <a href="#contact" class="pricing-button">Pre-order Now</a>
        </div>
        <div class="pricing-card featured">
          <div class="best-value">Best Value</div>
          <h3>SaltPro Duo</h3>
          <div class="price">$39.99</div>
          <ul>
            <li>2 SaltPro Shakers</li>
            <li>2-year warranty</li>
            <li>Free shipping</li>
            <li>Complimentary refill kit</li>
          </ul>
          <a href="#contact" class="pricing-button">Pre-order Now</a>
        </div>
        <div class="pricing-card">
          <h3>SaltPro Premium</h3>
          <div class="price">$59.99</div>
          <ul>
            <li>2 SaltPro Shakers</li>
            <li>1 Pepper Pro Grinder</li>
            <li>5-year warranty</li>
            <li>Free shipping</li>
            <li>Gourmet salt sampler</li>
          </ul>
          <a href="#contact" class="pricing-button">Pre-order Now</a>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <h2>Reserve Yours Today</h2>
      <p>Be among the first to experience the SaltPro revolution.</p>
      <form id="pre-order-form" class="contact-form">
        <div class="form-group">
          <input type="text" id="name" placeholder="Your Name" required>
        </div>
        <div class="form-group">
          <input type="email" id="email" placeholder="Your Email" required>
        </div>
        <div class="form-group">
          <select id="model" required>
            <option value="" disabled selected>Select Your Model</option>
            <option value="basic">SaltPro Basic - $24.99</option>
            <option value="duo">SaltPro Duo - $39.99</option>
            <option value="premium">SaltPro Premium - $59.99</option>
          </select>
        </div>
        <div class="form-group">
          <textarea id="message" placeholder="Any special requests?"></textarea>
        </div>
        <button type="submit" class="submit-button">Complete Pre-order</button>
      </form>
    </section>

    <footer>
      <div class="footer-content">
        <div class="footer-logo">SaltPro</div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@saltpro.com">hello@saltpro.com</a></li>
              <li><a href="tel:+18005555555">1-800-555-5555</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright">
        &copy; 2023 SaltPro. All rights reserved.
      </div>
    </footer>
  </div>
`

// Form submission handler
document.getElementById('pre-order-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  alert(`Thank you, ${name}! Your pre-order has been received. We'll contact you soon with more details.`);
});
