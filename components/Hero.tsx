export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">
          وكالة نور الهدى
          <br />
          للسفر والسياحة
        </h1>
        <p className="hero-subtitle">
          وجهتك الموثوقة لتنظيم الرحلات والسفر بكل راحة وأمان ✈️🌏
        </p>
        <p className="hero-desc">
          نسعى لتقديم أفضل الخدمات في مجال السياحة وحجوزات الطيران مع اهتمامنا
          بأدق التفاصيل لضمان تجربة سفر مميزة لعملائنا
        </p>
        <a href="#services" className="btn btn-primary">
          اكتشف خدماتنا
        </a>
        <a href="#contact" className="btn btn-outline">
          تواصل معنا
        </a>
      </div>
    </section>
  );
}
