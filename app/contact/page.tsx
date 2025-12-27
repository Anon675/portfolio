import Section from '@/components/Section'

export default function ContactPage() {
  return (
    <Section title="Contact">
      <div className="mt-8 space-y-6 text-sm">

        <a href="mailto:amanshukla0704@gmail.com">
          amanshukla0704@gmail.com
        </a>

        <a
          href="https://linkedin.com/in/aman-shukla-948414201"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/aman-shukla-948414201
        </a>

        <a
          href="https://wa.me/+917408563978"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>

        <a
          href="/Aman_Shukla_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume (PDF)
        </a>

      </div>
    </Section>
  )
}
