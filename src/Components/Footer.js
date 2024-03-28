import React from 'react';
const Footer = () => {
  const start = 2023;
  const end = new Date().getFullYear();
  let copyrightString = start.toString();
  if (end > start) {
    copyrightString = `${start} - ${end}`;
  }
  return (
    <footer id="footer">
      <div class="container">
        <div class="social-links">
          <a
            href="http://linkedin.com/in/patel-vaidehi"
            class="linkedin"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="mailto:vaidehi.patel@sjsu.edu">
            <i class="bx bx-envelope"></i>
          </a>
        </div>
        <div class="credits" style={{ color: "#74808a" }}>
          © {copyrightString} Vaidehi Patel
        </div>
      </div>
    </footer>
  );
};

export default Footer;
