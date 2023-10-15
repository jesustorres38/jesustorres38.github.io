import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jesus Torres",
  description: "Personal page, CV 2023 Jesus Torres",
}

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl '>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}
