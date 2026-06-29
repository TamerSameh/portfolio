import AppShell from "./components/layout/AppShell";
import { Section } from "./components/layout/Section";
import { Container } from "./components/layout/Container";
import { Hero } from "./features/Hero";

function App() {
  return (
    <AppShell>
      <Section>
        <Container>
          <Hero />
        </Container>
      </Section>
    </AppShell>
  );
}

export default App;