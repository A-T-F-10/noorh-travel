import Image from "next/image";

const values = [
  { emoji: "🤝", label: "المصداقية", sub: "الشفافية في كل تعاملاتنا", cls: "value-item--1", img: "/images/why-trust.jpg" },
  { emoji: "🏆", label: "الاحترافية", sub: "معايير عالمية في الأداء", cls: "value-item--2", img: "/images/why-team.jpg" },
  { emoji: "📌", label: "الالتزام", sub: "مواعيد دقيقة ووعود محققة", cls: "value-item--3", img: "/images/why-excellence.jpg" },
  { emoji: "⭐", label: "التميّز", sub: "إبداع في كل تفصيل", cls: "value-item--4", img: "/images/why-support.jpg" },
  { emoji: "❤️", label: "رضا العملاء", sub: "راحتكم هي أولويتنا", cls: "value-item--5", img: "/images/why-happy.jpg" },
];

export default function Vision() {
  return (
    <section className="section section-alt" id="vision">
      <div className="container">
        <h2 className="section-title">رؤيتنا ورسالتنا</h2>

        {/* رؤيتنا */}
        <div className="vm-row">
          <div className="vm-img-wrap">
            <Image src="/images/vision.jpg" alt="رؤيتنا" width={800} height={400} className="vm-img" />
          </div>
          <div className="vm-content">
            <div className="vm-badge">🔭 رؤيتنا</div>
            <h3>أن نكون الخيار الأول</h3>
            <p>نطمح أن نكون الوجهة الأولى والأكثر ثقة في مجال السفر والسياحة من خلال تقديم خدمات عالية الجودة وتجارب سفر استثنائية تتجاوز التوقعات.</p>
          </div>
        </div>

        {/* رسالتنا */}
        <div className="vm-row vm-row-reverse">
          <div className="vm-img-wrap">
            <Image src="/images/mission.jpg" alt="رسالتنا" width={800} height={400} className="vm-img" />
          </div>
          <div className="vm-content">
            <div className="vm-badge">🎯 رسالتنا</div>
            <h3>خدمات متكاملة بكفاءة واحترافية</h3>
            <p>تقديم خدمات سفر وسياحة متكاملة تلبي احتياجات عملائنا بأعلى معايير الجودة والكفاءة مع التركيز على الراحة والثقة والتميز في كل تفصيل.</p>
          </div>
        </div>

        {/* قيمنا */}
        <div className="values-section">
          <div className="values-header">
            <span className="values-diamond">💎</span>
            <h3 className="values-heading">قيمنا الأساسية</h3>
            <p className="values-sub">المبادئ التي نبني عليها كل تجربة سفر</p>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div className={`value-item ${v.cls}`} key={v.label} style={{ backgroundImage: `url('${v.img}')` }}>
                <div className="value-overlay"></div>
                <div className="value-glow"></div>
                <span className="value-emoji">{v.emoji}</span>
                <strong>{v.label}</strong>
                <p>{v.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
