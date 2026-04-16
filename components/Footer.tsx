export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>✈️ نور الهدى للسفر والسياحة</h3>
            <p>وجهتك الموثوقة لتنظيم الرحلات والسفر بكل راحة وأمان</p>
          </div>
          <div className="footer-links">
            <a href="#home">الرئيسية</a>
            <a href="#about">من نحن</a>
            <a href="#services">خدماتنا</a>
            <a href="#contact">تواصل معنا</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 وكالة نور الهدى للسفر والسياحة — جميع الحقوق محفوظة</p>
          <p className="footer-credit">
            Designed & Built by{" "}
            <a href="https://www.blackbird.blog/" target="_blank" rel="noopener noreferrer">
              Blackbird
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
