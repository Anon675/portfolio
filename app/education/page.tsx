import Section from '@/components/Section'
import { education } from '@/content/education'

export default function EducationPage() {
  return (
    <Section title="Education">
      <div className="mt-6 max-w-prose">
        <p className="whitespace-pre-line text-sm leading-relaxed">
          {education}
        </p>
      </div>
    </Section>
  )
}
