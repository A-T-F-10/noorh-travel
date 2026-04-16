const items = [
  { num: "01", title: "المصداقية والشفافية", desc: "نلتزم بالوضوح التام في جميع تعاملاتنا مع عملائنا من الأسعار حتى تفاصيل الرحلة", img: "/images/why-trust.jpg" },
  { num: "02", title: "أسعار تنافسية", desc: "نقدم أفضل الأسعار في السوق مع عروض حصرية ومستمرة تناسب جميع الميزانيات", img: "/images/why-price.jpg" },
  { num: "03", title: "فريق احترافي", desc: "فريق عمل ذو خبرة وكفاءة عالية يسعى دائماً لتقديم أفضل الحلول السياحية", img: "/images/why-team.jpg" },
  { num: "04", title: "دعم على مدار الساعة", desc: "خدمة عملاء متميزة تعمل 24/7 لضمان راحتكم والإجابة على استفساراتكم فوراً", img: "/images/why-support.jpg" },
  { num: "05", title: "التميّز والإبداع", desc: "نسعى دائماً لتقديم تجارب سفر استثنائية ومبتكرة تفوق توقعاتكم", img: "/images/why-excellence.jpg" },
  { num: "06", title: "رضا العملاء أولاً", desc: "راحتكم هي أولويتنا ورضاكم هو مقياس نجاحنا ودافعنا للتطوير المستمر", img: "/images/why-happy.jpg" },
];

export default function WhyUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <h2 className="section-title">لماذا نور الهدى؟</h2>
        <p className="section-subtitle">
          ما يميزنا عن غيرنا في عالم السفر والسياحة
        </p>
        <div className="why-us-grid">
          {items.map((item) => (
            <div className="why-card" key={item.num}>
              <div
                className="why-card-img"
                style={{ backgroundImage: `url('${item.img}')` }}
              />
              <div className="why-card-content">
                <div className="why-number">{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
