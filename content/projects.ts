export type Project = {
  title: string
  description: string
}

export const projects: Project[] = [
  {
    title: 'Bone Fracture Detection in X-ray Images',
    description:
      'Independent research project using convolutional neural networks and transfer learning (ResNet, VGG) for automated fracture detection in medical images.',
  },
  {
    title: 'Real-Time MERN Chat Application',
    description:
      'Developed a full-stack real-time chat system with authentication, WebSocket-based messaging, and optimized backend performance.',
  },
  {
    title: 'Quiz Application',
    description:
      'Built an interactive quiz platform with real-time feedback, scoring logic, and responsive user interface using vanilla JavaScript.',
  },
]
