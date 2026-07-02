import { getProfile } from "@/lib/profile";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Impact } from "@/components/sections/impact";
import { Journey } from "@/components/sections/journey";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Certifications } from "@/components/sections/certifications";
import { Swags } from "@/components/sections/swags";
import { Community } from "@/components/sections/community";
import { Contact } from "@/components/sections/contact";

export default async function Home() {
  const profile = await getProfile();

  return (
    <>
      <Hero profile={profile} />
      <About profile={profile} />
      <Impact />
      <Journey />
      <Skills />
      <Projects />
      <Certifications />
      <Swags />
      <Community />
      <Contact />
    </>
  );
}
