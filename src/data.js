const devicon = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${name}/${name}-${variant}.svg`

export const skillGroups = [
  {
    title: 'Cloud & Backend',
    dark: true,
    skills: [
      { name: 'AWS', src: devicon('amazonwebservices', 'plain-wordmark') },
      { name: 'Node.js', src: devicon('nodejs') },
      { name: 'Cron Jobs', glyph: 'clock' },
      { name: 'Alerting', glyph: 'bell' },
    ],
  },
  {
    title: 'SQL & Databases',
    skills: [
      { name: 'SQL', glyph: 'database' },
      { name: 'PostgreSQL', src: devicon('postgresql') },
      { name: 'MySQL', src: devicon('mysql') },
      { name: 'DBeaver', src: devicon('dbeaver') },
    ],
  },
  {
    title: 'Hosting & CI/CD',
    skills: [
      { name: 'CI/CD Pipelines', glyph: 'pipeline' },
      { name: 'Cloud Hosting', glyph: 'cloud' },
      { name: 'Monitoring', glyph: 'activity' },
      { name: 'Git & GitHub', src: devicon('git') },
    ],
  },
  {
    title: 'Frontend',
    dark: true,
    skills: [
      { name: 'React JS', src: '/assets/reactjs.png' },
      { name: 'Next.js', src: devicon('nextjs') },
      { name: 'JavaScript', src: '/assets/js.png' },
      { name: 'HTML', src: '/assets/html.png' },
      { name: 'CSS', src: '/assets/css.png' },
      { name: 'Tailwind CSS', src: '/assets/thailwand.png' },
      { name: 'Bootstrap', src: '/assets/bootstarp.png' },
    ],
  },
]

export const experience = [
  {
    period: 'Mar 2025 — Present',
    role: 'Software Engineer',
    company: 'Freshbus',
    current: true,
    points: [
      'Own the operational dashboards the ops team relies on to track trips, bookings and service health in real time.',
      'Build and maintain scheduled cron jobs that automate reporting, data syncs and routine operational checks.',
      'Designed the alerting system that flags operational issues early, so the team acts before customers are affected.',
      'Work daily with AWS infrastructure and SQL databases — writing queries, modelling data and keeping pipelines reliable.',
    ],
    tags: ['AWS', 'SQL', 'Databases', 'Cron Jobs', 'Dashboards', 'Alerting', 'React'],
  },
  {
    period: 'Jan 2024 — Feb 2025',
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    points: [
      'Delivered responsive websites and web apps for clients from design to launch.',
      'Built reusable React / Next.js components and pixel-accurate UIs with Tailwind CSS and Bootstrap.',
      'Handled hosting, deployments and client communication end to end.',
    ],
    tags: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Hosting'],
  },
]

export const projects = [
  {
    title: 'RedPiston',
    subtitle: 'Industrial auto-parts platform',
    image: '/assets/redpiston.webp',
    width: 1400,
    height: 611,
    description:
      'A full-stack parts-discovery platform giving direct access to authentic OEM and OES components. React frontend with a vehicle selector (Make, Model, Year, Variant), number-plate search and part-number / VIN / category search, backed by a Node.js API and a PostgreSQL database.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'Search & Filters'],
    featured: true,
  },
  {
    title: 'Falcon & Flash',
    subtitle: 'Motorcycle club website',
    image: '/assets/p1.webp',
    width: 1200,
    height: 519,
    description:
      'A bold, image-led website for a motorcycle club with a strong hero, clear navigation and a call-to-action for new riders.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Fitness Club',
    subtitle: 'Gym & membership site',
    image: '/assets/p2.webp',
    width: 1200,
    height: 517,
    description: 'A conversion-focused gym website with trainer info, gallery and membership plans.',
    tags: ['HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Developer Portfolio',
    subtitle: 'Personal brand site',
    image: '/assets/p3.webp',
    width: 1200,
    height: 527,
    description: 'A dark, typography-led personal portfolio with animated sections and a responsive layout.',
    tags: ['React', 'Tailwind CSS'],
  },
]
