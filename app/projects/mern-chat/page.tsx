import Section from '@/components/Section'
import Image from 'next/image'

export default function MernChatPage() {
  return (
    <Section title="Real-Time MERN Chat Application">

      <p className="max-w-3xl mb-8">
        This project is a real-time chat application developed using the
        MERN stack (MongoDB, Express, React, Node.js). The system supports
        authenticated users, real-time message delivery using WebSockets,
        and efficient backend data handling.
      </p>

      <Image
        src="/images/projects/mern-chat-login.png"
        alt="MERN chat application login interface"
        width={1200}
        height={700}
        className="rounded border"
      />

      <p className="mt-6 max-w-3xl opacity-80">
        The application was designed with a focus on reliability and
        real-world usage, including user authentication, message persistence,
        and scalable backend architecture.
      </p>

    </Section>
  )
}
