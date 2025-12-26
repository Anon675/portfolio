import Section from '@/components/Section'

export default function ExperiencePage() {
  return (
    <Section title="Experience">

      <p className="mb-6">
        Frontend Web Development Intern — PIE INFOCOM Pvt. Ltd.<br />
        March 2024 – June 2024
      </p>

      <p className="mb-8 max-w-3xl">
        Worked on responsive React-based interfaces, REST API integration,
        and frontend performance optimization. Collaborated with
        cross-functional teams to improve application reliability.
      </p>

      <a
        href="/certificates/pie-infocom-internship.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        View Internship Certificate (PDF)
      </a>

    </Section>
  )
}
