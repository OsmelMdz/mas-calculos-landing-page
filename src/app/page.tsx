"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./page.module.scss";

type Particle = {
  top: string;
  left: string;
  delay: string;
};

export default function Home() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const calculadoras = [
    {
      img: "/screenshots/calc1.png",
      name: "Calculadora de Corriente",
    },
    {
      img: "/screenshots/calc2.png",
      name: "Calculadora de Voltaje",
    },
    {
      img: "/screenshots/calc3.png",
      name: "Calculadora de Potencia",
    },
    {
      img: "/screenshots/calc4.png",
      name: "Calculadora de Corriente",
    },
    {
      img: "/screenshots/calc5.png",
      name: "Calculadora de Voltaje",
    },
    {
      img: "/screenshots/calc6.png",
      name: "Calculadora de Potencia",
    },
    {
      img: "/screenshots/calc7.png",
      name: "Calculadora de Corriente",
    },
    {
      img: "/screenshots/calc8.png",
      name: "Calculadora de Voltaje",
    },
    {
      img: "/screenshots/calc9.png",
      name: "Calculadora de Potencia",
    },
    {
      img: "/screenshots/calc10.png",
      name: "Calculadora de Corriente",
    },
    {
      img: "/screenshots/calc11.png",
      name: "Calculadora de Voltaje",
    },
    {
      img: "/screenshots/calc12.png",
      name: "Calculadora de Potencia",
    },
    {
      img: "/screenshots/calc13.png",
      name: "Calculadora de Corriente",
    },
    {
      img: "/screenshots/calc14.png",
      name: "Calculadora de Voltaje",
    },
    {
      img: "/screenshots/calc15.png",
      name: "Calculadora de Potencia",
    },
  ];

  const items = [
    { img: "/screenshots/login.png", title: "Pantalla de Login" },
    { img: "/screenshots/register.png", title: "Pantalla de Registro" },
  ];

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
        <p className={styles.normaSeal}>
          <strong>Más Capacitación</strong> |<strong> NOM-001-SEDE-2012</strong>
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
              width={24}
              height={24}
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
              width={24}
              height={24}
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
                title: "Más de 30 Calculadoras",
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

        <section className={styles.offlineInfo} id="offlineInfo">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>¡ Sin conexión a Internet !</h2>
            <p>
              <strong>Más Cálculos</strong> está diseñado para que nunca te
              detengas:
            </p>
            <ul>
              <li className={styles.offlineItem}>
                - Funciona <strong>sin conexión</strong> siempre que mantengas
                tu sesión iniciada.
              </li>
              <li className={styles.offlineItem}>
                - Versión gratuita con{" "}
                <strong>5 cálculos por calculadora</strong> cada semana.
              </li>
              <li className={styles.offlineItem}>
                ¿Necesitas más? Obtén <strong>Más Cálculos Pro</strong> por sólo{" "}
                <strong>$99 MXN</strong> y desbloquea todas las calculadoras sin
                límite.
              </li>
            </ul>
            <p className={styles.note}>
              *Si cierras sesión, necesitarás conexión a internet para volver a
              entrar.
            </p>
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.mascalculospro"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
              whileHover={{ scale: 1.05 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <Image
                src="/icons/google_playstore.png"
                alt="Google Play"
                width={24}
                height={24}
                className={styles.btnPrimaryIcon}
              />
              Comprar Más Cálculos Pro
            </motion.a>
          </motion.div>
        </section>

        <section className={styles.appScreenshots} id="screenshots">
          <h2>Explora Más Cálculos</h2>
          <p>Mira cómo luce nuestra aplicación por dentro.</p>

          <div className={styles.authScreens}>
            {items.map((item, index) => (
              <motion.div
                key={index}
                className={styles.authCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  layout="responsive"
                  width={200}
                  height={400}
                />
                <p>{item.title}</p>
              </motion.div>
            ))}
          </div>
          <h2>+30 Calculadoras incluidas</h2>
          <p>
            Una herramienta para cada necesidad eléctrica. Mira cómo luce la app
            por dentro.
          </p>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={800}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {calculadoras.map((calc, index) => (
              <SwiperSlide key={index}>
                <div className={styles.calcCard}>
                  <Image
                    src={calc.img}
                    alt={calc.name}
                    layout="responsive"
                    width={200}
                    height={400}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className={styles.norma} id="norma">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>Seguridad y Confianza</h2>
            <p>
              Todas nuestras calculadoras están diseñadas conforme a la{" "}
              <strong>NOM-001-SEDE-2012</strong>, la Norma Oficial Mexicana que
              establece los requisitos mínimos para las instalaciones eléctricas
              en México. Garantizamos{" "}
              <strong>seguridad, confiabilidad y cumplimiento legal</strong> en
              cada cálculo.
            </p>
            <div className={styles.normaBadge}>
              <Image
                src="/icons/norma.png"
                alt="Norma NOM-001-SEDE-2012"
                width={80}
                height={80}
              />
              <span>Cumple con NOM-001-SEDE-2012</span>
            </div>
          </motion.div>
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
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <Link
                href="https://play.google.com/store/apps/details?id=com.mascalculos"
                target="_blank"
                className={styles.btnPrimary}
              >
                <Image
                  src="/icons/google_playstore.png"
                  alt="Google Play"
                  width={24}
                  height={24}
                  className={styles.btnPrimaryIcon}
                />
                Descargar ahora
              </Link>
            </motion.div>
            <Link
              href="https://apps.apple.com/es/app/apple-store/id375380948"
              target="_blank"
              className={styles.btnPrimary}
            >
              <Image
                src="/icons/ios_appstore.png"
                alt="App Store"
                width={24}
                height={24}
                className={styles.btnPrimaryIcon}
              />
              Proximamente
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <nav className={styles.footerNav}>
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

        <p className={styles.legal}>
          Todas las calculadoras cumplen con la{" "}
          <strong>NOM-001-SEDE-2012</strong> para garantizar seguridad y
          calidad.
        </p>

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

        <div className={styles.socialLinks}>
          <a
            href="https://www.facebook.com/MasCapacitacionCursos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Image
              src="/icons/facebook.png"
              alt="Facebook"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.instagram.com/mas_capacitacion/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.tiktok.com/@mascapacitacion"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <Image
              src="/icons/tiktok.png"
              alt="TikTok"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.youtube.com/@mascapacitacion"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Image
              src="/icons/youtube.png"
              alt="YouTube"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5219511175007&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <Image
              src="/icons/whatsapp.png"
              alt="WhatsApp"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://open.spotify.com/show/0zShlEF00es0wjUitb9aNs?si=e95aeb682e05447e&nd=1&dlsi=2ceadcff5e0c4b2b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
          >
            <Image
              src="/icons/spotify.png"
              alt="Spotify"
              width={24}
              height={24}
            />
          </a>
        </div>

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
