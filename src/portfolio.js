const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'Tsaniah.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tsaniah Munfidah',
  role: 'Front End Developer',
  description:
    'Third-year informatics student. I am also a front-end developer student who has a passion on the technology field, especially front-end development. Have experience in learning about front-end development for about 1,5 years and back-end development for about 6 months.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/tsaniahmunfidah/',
    github: 'https://github.com/tsaniahm',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Spotify Clone by Tsaniah',
    description:
      'Spotify app by Tsaniah Munfidah is a website to create playlist by adding users favorite songs or tracks.',
    stack: ['React', 'Typescript', 'Material UI', 'Axios', 'testing-library'],
    sourceCode: 'https://github.com/tsaniahm/Spotify-P-G2FE2046.git',
    livePreview: 'https://myspotify-tsaniah-generasigigih.vercel.app/',
  },
  {
    name: 'Neimo (Neighborhood Monitoring) - Frontend',
    description:
      'A website to help people affected by covid-19 on reporting and monitoring covid-19 in their neighborhood area (RT)',
    stack: ['React Js', 'Axios', 'Bootstrap', 'Victory'],
    sourceCode: 'https://github.com/hafezdeldaffa/fe-neimo.git',
    livePreview: 'https://neimo.vercel.app/',
  },
  {
    name: 'Neimo (Neighborhood Monitoring) - Backend',
    description:
      'A website to help people affected by covid-19 on reporting and monitoring covid-19 in their neighborhood area (RT)',
    stack: ['Node js', 'Express js', 'MongoDB', 'Mongoose'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Material UI',
  'Bootstrap',
  'Git',
  'Jest',
  'Node js',
  'Express js',
  'SQL',
  'MongoDB'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'munfidahtsaniah@gmail.com',
}

export { header, about, projects, skills, contact }
