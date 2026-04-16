import Image from "next/image";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">من نحن</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              تعد وكالة <strong>نور الهدى للسفر والسياحة</strong> من الشركات
              الطموحة في مجال خدمات السفر والسياحة، حيث نسعى إلى تقديم حلول
              متكاملة ومتميزة تلبي احتياجات عملائنا بأعلى معايير الجودة
              والاحترافية.
            </p>
            <p>
              نؤمن بأن السفر ليس مجرد انتقال من مكان إلى آخر، بل هو تجربة
              متكاملة تبدأ من لحظة التخطيط وتنتهي بذكريات لا تُنسى.
            </p>
            <p>
              نحرص على بناء علاقات طويلة الأمد مع عملائنا من خلال الالتزام
              بالمصداقية والشفافية وتقديم أفضل الأسعار التنافسية، إلى جانب خدمة
              عملاء متميزة تعمل على مدار الساعة لضمان راحتهم ورضاهم.
            </p>
          </div>
          <div className="about-image">
            <Image
              src="/images/about.jpg"
              alt="فريق نور الهدى"
              width={800}
              height={600}
              className="about-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
