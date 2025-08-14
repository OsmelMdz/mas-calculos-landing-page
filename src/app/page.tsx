"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";

type Particle = {
  top: string;
  left: string;
  delay: string;
};

export default function Home() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 15 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      <header className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Más Cálculos
        </motion.h1>
        <p className={styles.subtitle}>
          Calculadoras eléctricas precisas y rápidas para profesionales y
          estudiantes.
        </p>

        <div className={styles.btnContainer}>
          <motion.a
            href="https://play.google.com/store/apps/details?id=com.mascalculos"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/icons/google_playstore.png"
              alt="Google Play"
              className={styles.btnPrimaryIcon}
            />
            Descargar en Google Play
          </motion.a>
          <motion.a
            href="https://apps.apple.com/es/app/apple-store/id375380948"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/icons/ios_appstore.png"
              alt="App Store"
              className={styles.btnPrimaryIcon}
            />
            Proximamente en App Store
          </motion.a>
        </div>
        {particles.map((p, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{ top: p.top, left: p.left, animationDelay: p.delay }}
          />
        ))}
      </header>

      <main>
        <section className={styles.features} id="features">
          <h2>¿Por qué elegir Más Cálculos?</h2>
          <div className={styles.featureGrid}>
            {[
              {
                title: "Precisión Profesional",
                desc: "Resultados confiables para tus proyectos eléctricos.",
                img: "/icons/precision.png",
              },
              {
                title: "Rápido y Fácil",
                desc: "Ahorra tiempo en cálculos complejos.",
                img: "/icons/fast.png",
              },
              {
                title: "6 Calculadoras en 1",
                desc: "Todas las herramientas que necesitas en tu bolsillo.",
                img: "/icons/tools.png",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image src={item.img} alt={item.title} width={60} height={60} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.testimonials}>
          <h2>Opiniones de nuestros usuarios</h2>
          <div className={styles.testimonialGrid}>
            {[
              {
                name: "Fernando García",
                review: "Excelente aplicación, muy útil para cálculos rápidos.",
                date: "Julio 2025",
              },
              {
                name: "Armando Martínez",
                review:
                  "Herramienta funcional para proyectar de manera sencilla.",
                date: "Mayo 2025",
              },
              {
                name: "Ángel Magadán",
                review: "Excelente, 100% recomendable.",
                date: "Mayo 2025",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className={styles.testimonialCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className={styles.reviewText}>
                  &quot;{testimonial.review}&quot;
                </p>
                <strong>{testimonial.name}</strong>
                <p className={styles.reviewDate}>{testimonial.date}</p>
                <div className={styles.stars}>★★★★★</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <h2>¿Listo para simplificar tus cálculos eléctricos?</h2>
          <div className={styles.btnContainer}>
            <Link
              href="https://play.google.com/store/apps/details?id=com.mascalculos"
              target="_blank"
              className={styles.btnPrimary}
            >
              <Image
                src="/icons/google_playstore.png"
                alt="Google Play"
                className={styles.btnPrimaryIcon}
              />
              Descargar ahora
            </Link>
            <Link
              href="https://apps.apple.com/es/app/apple-store/id375380948"
              target="_blank"
              className={styles.btnPrimary}
            >
              <Image
                src="/icons/ios_appstore.png"
                alt="App Store"
                className={styles.btnPrimaryIcon}
              />
              Proximamente
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <nav>
          <Link href="#features">Características</Link>
          <Link href="#contact">Contacto</Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.mascalculos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar
          </a>
        </nav>

        <p>
          © {new Date().getFullYear()}{" "}
          <a
            href="http://mascapacitacion.com.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Más Capacitación
          </a>
          . Todos los derechos reservados.
        </p>

        <p className={styles.developers}>
          Desarrollado por{" "}
          <a
            href="https://www.lii-tec.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lii-Tec
          </a>{" "}
          y{" "}
          <a
            href="https://osmel-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Osmel Dev
          </a>
        </p>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Más Cálculos",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "50",
            },
            review: [
              {
                "@type": "Review",
                author: "Fernando García",
                reviewBody:
                  "Excelente aplicación, muy útil para cálculos rápidos.",
                reviewRating: { "@type": "Rating", ratingValue: "5" },
              },
            ],
          }),
        }}
      />
    </>
  );
}
