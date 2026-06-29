import AppShell from "./components/layout/AppShell";
import { Section } from "./components/layout/Section";
import { Container } from "./components/layout/Container";
import { Hero } from "./features/Hero";
import { Projects } from "./features/Projects";
import { About } from "./features/About";
import { Contact } from "./features/Contact";

function App() {
  return (
    <AppShell>
      <Section id="home">
        <Container>
          <Hero />
        </Container>
      </Section>

      <Section id="projects">
        <Container>
          <Projects />
        </Container>
      </Section>

      <Section id="about">
        <Container size="md">
          <About />
        </Container>
      </Section>

      <Section id="contact">
        <Container size="md">
          <Contact />
        </Container>
      </Section>
    </AppShell>
  );
}

export default App;
