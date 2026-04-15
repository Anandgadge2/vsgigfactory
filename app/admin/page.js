'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  getContent,
  isAdminAuthenticated,
  logoutAdmin,
  saveContent,
} from '@/lib/content-store'

const emptyProject = {
  title: '',
  description: '',
  area: '',
  location: '',
  status: 'Ongoing',
  type: '',
  image: '',
}

const emptyCaseStudy = {
  title: '',
  category: '',
  description: '',
  client: '',
  duration: '',
  image: '',
  video: '',
  pdf: '',
}

export default function AdminPage() {
  const router = useRouter()
  const [tab, setTab] = useState('projects')
  const [content, setContent] = useState(() => getContent())
  const [editingId, setEditingId] = useState(null)
  const [projectForm, setProjectForm] = useState(emptyProject)
  const [caseForm, setCaseForm] = useState(emptyCaseStudy)

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      router.replace('/login')
      return
    }
  }, [router])

  const activeList = useMemo(
    () => (tab === 'projects' ? content.projects : content.caseStudies),
    [content, tab],
  )

  const upsert = () => {
    const form = tab === 'projects' ? projectForm : caseForm
    const collectionKey = tab === 'projects' ? 'projects' : 'caseStudies'

    const record = { ...form, id: editingId ?? `${tab}-${Date.now()}` }
    const nextItems = editingId
      ? content[collectionKey].map((item) => (item.id === editingId ? record : item))
      : [record, ...content[collectionKey]]

    const nextContent = { ...content, [collectionKey]: nextItems }
    setContent(nextContent)
    saveContent(nextContent)
    setEditingId(null)
    setProjectForm(emptyProject)
    setCaseForm(emptyCaseStudy)
  }

  const deleteItem = (id) => {
    const collectionKey = tab === 'projects' ? 'projects' : 'caseStudies'
    const nextContent = {
      ...content,
      [collectionKey]: content[collectionKey].filter((item) => item.id !== id),
    }
    setContent(nextContent)
    saveContent(nextContent)
    if (editingId === id) {
      setEditingId(null)
      setProjectForm(emptyProject)
      setCaseForm(emptyCaseStudy)
    }
  }

  const startEdit = (item) => {
    setEditingId(item.id)
    if (tab === 'projects') setProjectForm(item)
    else setCaseForm(item)
  }

  const handleLogout = () => {
    logoutAdmin()
    router.push('/login')
  }

  return (
    <main className="admin-wrap">
      <section className="toolbar">
        <h1>Admin Panel</h1>
        <div className="toolbar-actions">
          <button onClick={() => setTab('projects')} className={tab === 'projects' ? 'active' : ''}>Projects</button>
          <button onClick={() => setTab('caseStudies')} className={tab === 'caseStudies' ? 'active' : ''}>Case Studies</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h2>{editingId ? 'Update' : 'Add'} {tab === 'projects' ? 'Project' : 'Case Study'}</h2>

          {tab === 'projects' ? (
            <FormFields form={projectForm} setForm={setProjectForm} fields={[
              ['title', 'Title'],
              ['description', 'Description'],
              ['area', 'Area'],
              ['location', 'Location'],
              ['status', 'Status'],
              ['type', 'Type'],
              ['image', 'Cloudinary Image URL'],
            ]} />
          ) : (
            <FormFields form={caseForm} setForm={setCaseForm} fields={[
              ['title', 'Title'],
              ['category', 'Category'],
              ['description', 'Description'],
              ['client', 'Client'],
              ['duration', 'Duration'],
              ['image', 'Cloudinary Image URL'],
              ['video', 'Cloudinary Video URL'],
              ['pdf', 'Cloudinary PDF URL'],
            ]} />
          )}

          <div className="actions">
            <button onClick={upsert}>{editingId ? 'Update' : 'Add'} Record</button>
            {editingId ? <button onClick={() => { setEditingId(null); setProjectForm(emptyProject); setCaseForm(emptyCaseStudy) }}>Cancel Edit</button> : null}
          </div>
        </article>

        <article className="card">
          <h2>{tab === 'projects' ? 'Projects' : 'Case Studies'} ({activeList.length})</h2>
          <div className="list">
            {activeList.map((item) => (
              <div className="list-item" key={item.id}>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
                <div className="item-actions">
                  <button onClick={() => startEdit(item)}>Edit</button>
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <style jsx>{`
        .admin-wrap { padding: 24px; background: #f8fafc; min-height: calc(100vh - 90px); }
        .toolbar { display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; }
        .toolbar h1 { margin: 0; }
        .toolbar-actions { display: flex; gap: 8px; flex-wrap: wrap; }
        .toolbar-actions button { border: 1px solid #cbd5e1; background: #fff; padding: 10px 14px; border-radius: 8px; cursor: pointer; }
        .toolbar-actions .active { background: #0f766e; color: #fff; border-color: #0f766e; }
        .grid { margin-top: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .card { background: #fff; border-radius: 14px; padding: 16px; box-shadow: 0 10px 28px rgba(2, 6, 23, 0.06); }
        .list { display: grid; gap: 10px; max-height: 70vh; overflow: auto; }
        .list-item { border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; display: flex; justify-content: space-between; gap: 8px; align-items: start; }
        .list-item p { margin: 4px 0 0; color: #475569; font-size: 14px; }
        .item-actions, .actions { display: flex; gap: 8px; flex-wrap: wrap; }
        .item-actions button, .actions button { border: 0; background: #0f172a; color: #fff; padding: 8px 10px; border-radius: 6px; cursor: pointer; }
        .actions { margin-top: 10px; }

        @media (max-width: 960px) {
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  )
}

function FormFields({ form, setForm, fields }) {
  return (
    <div className="form-grid">
      {fields.map(([key, label]) => (
        <label key={key}>
          <span>{label}</span>
          <input
            type="text"
            value={form[key] ?? ''}
            onChange={(event) => setForm({ ...form, [key]: event.target.value })}
            placeholder={`Enter ${label.toLowerCase()}`}
          />
        </label>
      ))}

      <style jsx>{`
        .form-grid { display: grid; gap: 10px; }
        label { display: grid; gap: 6px; font-size: 14px; color: #0f172a; font-weight: 600; }
        input { border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px; font-size: 14px; }
      `}</style>
    </div>
  )
}
