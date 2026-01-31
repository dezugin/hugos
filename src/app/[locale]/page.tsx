import { getDictionary } from "@/i18n/dictionaries";
import { type Locale } from "@/i18n/config";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CodeProjects from "@/components/CodeProjects";
import Research from "@/components/Research";
import Reading from "@/components/Reading";
import Courses from "@/components/Courses";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen">
      <Navbar locale={locale} dict={dict} />
      <Hero locale={locale} dict={dict} />
      <About locale={locale} dict={dict} />
      <Skills locale={locale} dict={dict} />
      <CodeProjects locale={locale} dict={dict} />
      <Research locale={locale} dict={dict} />
      <Courses locale={locale} dict={dict} />
      <Reading locale={locale} dict={dict} />
      <Contact locale={locale} dict={dict} />
      <Footer locale={locale} dict={dict} />
    </main>
  );
}
