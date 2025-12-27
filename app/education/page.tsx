import Section from '@/components/Section'
import { education } from '@/content/education'

export default function EducationPage() {
  return (
    <Section title="Education">
      <p className="whitespace-pre-line text-gray-700 dark:text-gray-300">
        {education}
      </p>
    </Section>
  )
}
