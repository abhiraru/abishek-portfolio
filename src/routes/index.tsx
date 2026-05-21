import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { GithubStats } from "@/components/portfolio/GithubStats";
import { TechStackMarquee } from "@/components/portfolio/TechStackMarquee";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abishek M H — Laravel Full Stack Developer" },
      {
        name: "description",
        content:
          "Laravel Full Stack Developer with 3+ years of experience building scalable SaaS platforms, REST APIs and integrations with Laravel, PHP and React.js.",
      },
      { property: "og:title", content: "Abishek M H — Laravel Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Building scalable multi-tenant SaaS platforms, REST APIs and integrations (Stripe, HubSpot, Twilio, OpenAI).",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Abishek M H",
          jobTitle: "Laravel Full Stack Developer",
          email: "mailto:abishekabiharidad@gmail.com",
          url: "/",
          sameAs: [
            "https://github.com/abhiraru",
            "https://linkedin.com/in/abishek-m-h-283201200",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubStats />
        <TechStackMarquee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
