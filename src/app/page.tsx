import Image from "next/image";
import content from "../data/content.json";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-left">
          <h2 className="hero-greeting">{content.hero.greeting}</h2>
          <h1 className="hero-name">{content.hero.name}</h1>
          <p className="hero-title">{content.hero.title}</p>
        </div>
        <div className="hero-right">
          <Image
            src={content.hero.image}
            alt="Daniel Martinez"
            width={800}
            height={1200}
            className="hero-image"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2 className="about-title">{content.about.title}</h2>
        <p className="about-description">{content.about.description1}</p>


      </section>

      {/* Photos Section */}
      <section className="photos-section">
        <h2 className="photos-title">{content.photos.title}</h2>
        <div className="photos-grid">
          {content.photos.images.map((imageSrc, index) => (
            <div key={index} className="photo-item">
              <Image
                src={imageSrc}
                alt={`Photo ${index + 1}`}
                width={400}
                height={300}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-left">
          <Image
            src={content.contact.image}
            alt="Daniel Martinez Contact"
            width={800}
            height={1200}
            className="contact-image"
          />
        </div>
        <div className="contact-right">
          <h2 className="contact-title">{content.contact.title}</h2>
          
          <div className="contact-group">
            <div className="contact-name">{content.contact.representation.manager.name}</div>
            <div className="contact-detail">Email - {content.contact.representation.manager.email}</div>

          </div>


        </div>
      </section>
    </div>
  );
}
