import Section from '@/components/Section'

export default function ExperiencePage() {
  return (
    <Section title="Experience">
      <div className="mt-6 space-y-6 max-w-prose">

        <p className="text-sm">
          Frontend Web Development Intern — PIE INFOCOM Pvt. Ltd.<br />
          March 2024 – June 2024
        </p>

        <p className="text-sm leading-relaxed">
          Worked on responsive React-based interfaces, REST API integration,
          and frontend performance optimization. Collaborated with
          cross-functional teams to improve application reliability.
        </p>

        <a
          href="/certificates/pie-infocom-internship.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-sm inline-block"
        >
          View Internship Certificate (PDF)
        </a>

      </div>
    </Section>
  )
}
