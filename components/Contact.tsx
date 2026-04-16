const WA_LINK =
  "https://wa.me/249922286051?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title">تواصل معنا</h2>
        <p className="section-subtitle">
          نسعد بخدمتكم والإجابة على جميع استفساراتكم
        </p>

        <div className="contact-wrapper">
          <div className="contact-card-main">
            <div className="contact-card-icon">📞</div>
            <h3>اتصل بنا</h3>
            <a href="tel:+249922286051" className="contact-phone">
              +249 92 228 6051
            </a>
          </div>
          <div className="contact-card-main">
            <div className="contact-card-icon">📧</div>
            <h3>راسلنا</h3>
            <p className="contact-email">info@nooralhuda-travel.com</p>
          </div>
          <div className="contact-card-main">
            <div className="contact-card-icon">📍</div>
            <h3>العنوان</h3>
            <p className="contact-address">المملكة العربية السعودية</p>
          </div>
          <div className="contact-card-main contact-card-wa">
            <div className="contact-card-icon">💬</div>
            <h3>واتساب</h3>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-wa-link"
            >
              راسلنا الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
