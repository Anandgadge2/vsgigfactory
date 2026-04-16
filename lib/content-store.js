const STORAGE_KEY = 'gigfactory_content_v1'
const AUTH_KEY = 'gigfactory_admin_auth'

export const defaultContent = {
  projects: [
    {
      id: 'project-1',
      title: 'Microsoft B3 Building',
      description: 'End-to-end BIM support for a brownfield commercial building project.',
      area: '600,000 sqft',
      location: 'Hyderabad, India',
      status: 'Ongoing',
      type: 'Commercial',
      image: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg',
    },
    {
      id: 'project-2',
      title: 'Ryan International School',
      description: 'Architecture BIM modeling and documentation for school expansion.',
      area: '95,000 sqft',
      location: 'Pune, India',
      status: 'Ongoing',
      type: 'Institutional',
      image: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg',
    },
  ],
  caseStudies: [
    {
      id: 'case-1',
      title: 'Commercial Complex Development',
      category: 'Commercial',
      description: '50,000 sq.ft. commercial complex executed with BIM-first workflows.',
      client: 'ABC Developers',
      duration: '18 months',
      image: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg',
      video: 'https://res.cloudinary.com/demo/video/upload/v1536263475/dog.mp4',
      pdf: 'https://res.cloudinary.com/demo/image/upload/fl_attachment/sample.pdf',
    },
    {
      id: 'case-2',
      title: 'Residential Tower Project',
      category: 'Residential',
      description: '30-story residential tower delivered with coordinated MEP models.',
      client: 'XYZ Housing',
      duration: '24 months',
      image: 'https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg',
      video: 'https://res.cloudinary.com/demo/video/upload/v1536263475/dog.mp4',
      pdf: 'https://res.cloudinary.com/demo/image/upload/fl_attachment/sample.pdf',
    },
  ],
}

const hasWindow = () => typeof window !== 'undefined'

export function getContent() {
  if (!hasWindow()) return defaultContent

  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultContent))
    return defaultContent
  }

  try {
    const parsed = JSON.parse(raw)
    return {
      projects: parsed.projects ?? defaultContent.projects,
      caseStudies: parsed.caseStudies ?? defaultContent.caseStudies,
    }
  } catch {
    return defaultContent
  }
}

export function saveContent(data) {
  if (!hasWindow()) return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function verifyAdminCredentials(email, password) {
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? 'admin@gigfactory.com'
  const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? 'Admin@123'
  return email === adminEmail && password === adminPassword
}

export function setAdminAuth(isLoggedIn) {
  if (!hasWindow()) return
  window.localStorage.setItem(AUTH_KEY, isLoggedIn ? 'true' : 'false')
}

export function isAdminAuthenticated() {
  if (!hasWindow()) return false
  return window.localStorage.getItem(AUTH_KEY) === 'true'
}

export function logoutAdmin() {
  if (!hasWindow()) return
  window.localStorage.removeItem(AUTH_KEY)
}
