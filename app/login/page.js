'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { setAdminAuth, verifyAdminCredentials } from '@/lib/content-store'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const valid = verifyAdminCredentials(email.trim(), password)

    if (!valid) {
      setError('Invalid admin credentials. Try again.')
      return
    }

    setAdminAuth(true)
    router.push('/admin')
  }

  return (
    <main className="admin-login-page">
      <div className="admin-login-card">
        <h1>Admin Login</h1>
        <p>Use your admin email and password to access the dashboard.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="admin@gigfactory.com"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
          />

          {error ? <p className="error-text">{error}</p> : null}

          <button type="submit">Login to Admin Panel</button>
        </form>

        <small>
          Default credentials are configurable with NEXT_PUBLIC_ADMIN_EMAIL and
          NEXT_PUBLIC_ADMIN_PASSWORD.
        </small>
      </div>

      <style jsx>{`
        .admin-login-page {
          min-height: calc(100vh - 90px);
          display: grid;
          place-items: center;
          padding: 24px;
          background: #f4f7fb;
        }

        .admin-login-card {
          width: min(100%, 460px);
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 16px 38px rgba(3, 27, 78, 0.08);
          padding: 24px;
        }

        h1 { margin: 0 0 8px; }
        p { margin: 0 0 16px; color: #4b5563; }
        form { display: grid; gap: 12px; }

        label { font-weight: 600; color: #111827; }

        input {
          border: 1px solid #d1d5db;
          border-radius: 8px;
          padding: 12px;
          font-size: 15px;
        }

        button {
          margin-top: 8px;
          border: 0;
          background: #0f766e;
          color: white;
          padding: 12px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
        }

        .error-text { color: #b91c1c; margin: 0; font-size: 14px; }

        small {
          margin-top: 14px;
          display: block;
          color: #6b7280;
          line-height: 1.5;
        }
      `}</style>
    </main>
  )
}
