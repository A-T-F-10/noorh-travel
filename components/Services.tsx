const services = [
  { icon: "🛫", title: "حجز تذاكر الطيران", desc: "حجز تذاكر طيران على جميع الخطوط الجوية بأفضل الأسعار التنافسية مع مرونة في الخيارات", img: "/images/service-flights.jpg" },
  { icon: "🏖️", title: "الرحلات السياحية", desc: "تنظيم رحلات سياحية داخلية ودولية مصممة خصيصاً لتلبية تطلعاتكم وميزانياتكم", img: "/images/service-tours.jpg" },
  { icon: "🕋", title: "برامج العمرة والحج", desc: "برامج عمرة وحج متكاملة بإشراف فريق متخصص لضمان أداء مناسككم بكل يسر وراحة", img: "/images/service-umrah.jpg" },
  { icon: "🗺️", title: "الاستشارات السياحية", desc: "استشارات سياحية متخصصة تساعدكم في اختيار الوجهات المناسبة وفقاً لاحتياجاتكم", img: "/images/service-consult.jpg" },
  { icon: "🏨", title: "حجز الفنادق", desc: "حجوزات فندقية في أفضل الفنادق حول العالم بأسعار مميزة وخدمات استثنائية", img: "/images/service-hotels.jpg" },
  { icon: "📋", title: "برامج سياحية مبتكرة", desc: "عروض وبرامج مبتكرة يتم تحديثها باستمرار لمواكبة أحدث التطورات في قطاع السياحة", img: "/images/service-programs.jpg" },
];

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <h2 className="section-title section-title-light">خدماتنا</h2>
        <p className="section-subtitle section-subtitle-light">
          حلول سفر متكاملة تلبي جميع احتياجاتكم
        </p>
        <div className="services-grid">
          {services.map((s) => (
            <div className="glass-card" key={s.title}>
              <div
                className="glass-card-img"
                style={{ backgroundImage: `url('${s.img}')` }}
              />
              <div className="glass-card-body">
                <div className="glass-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
