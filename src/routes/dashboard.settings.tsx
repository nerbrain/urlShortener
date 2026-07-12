import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/dashboard/settings')({
  component: SettingsPage,
})

function SettingsPage() {
  const [name, setName] = useState('Jane')
  const [email, setEmail] = useState('janedoe@example.com')
  const [notifications, setNotifications] = useState(true)
  const [weeklyDigest, setWeeklyDigest] = useState(false)

  const Toggle = ({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) => (
    <button
      onClick={() => onChange(!value)}
      className={`relative w-10 h-5.5 rounded-full transition-colors ${value ? 'bg-[#005B8B]' : 'bg-gray-200'}`}
    >
      <span className={`absolute top-0.5 left-0.5 w-4.5 h-4.5 bg-white rounded-full shadow transition-transform ${value ? 'translate-x-4.5' : ''}`} />
    </button>
  )

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-white rounded-2xl p-5 shadow-sm space-y-4">
      <h2 className="text-sm font-semibold text-gray-700 pb-2 border-b border-gray-100">{title}</h2>
      {children}
    </div>
  )

  const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <label className="text-sm text-gray-600 shrink-0">{label}</label>
      {children}
    </div>
  )

  return (
    <>
      {/* Mobile */}
      <div className="sm:hidden px-4 py-6 space-y-4">
        <h1 className="text-2xl font-semibold text-white">Settings</h1>
        <div className="bg-white rounded-2xl p-4 shadow-sm space-y-4">
          <h2 className="text-sm font-semibold text-gray-700">Profile</h2>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-500 mb-1">Name</p>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005b8b40]"
                value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Email</p>
              <input className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005b8b40]"
                value={email} onChange={e => setEmail(e.target.value)} />
            </div>
          </div>
          <button className="w-full text-sm bg-[#005B8B] text-white py-2 rounded-lg hover:bg-[#005a8bf2] transition-colors">
            Save Changes
          </button>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
          <h2 className="text-sm font-semibold text-gray-700">Notifications</h2>
          {[
            { label: 'Click alerts', value: notifications, onChange: setNotifications },
            { label: 'Weekly digest', value: weeklyDigest, onChange: setWeeklyDigest },
          ].map(row => (
            <div key={row.label} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{row.label}</span>
              <Toggle value={row.value} onChange={row.onChange} />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet + Desktop */}
      <div className="hidden sm:block p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
          <div className="w-9 h-9 rounded-full bg-[#5D8DA1] flex items-center justify-center text-white text-sm font-bold">J</div>
        </div>

        <div className="max-w-2xl space-y-4">
          <Section title="Profile">
            <Field label="Name">
              <input className="w-full sm:w-64 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005b8b40]"
                value={name} onChange={e => setName(e.target.value)} />
            </Field>
            <Field label="Email">
              <input className="w-full sm:w-64 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005b8b40]"
                value={email} onChange={e => setEmail(e.target.value)} />
            </Field>
            <div className="pt-2">
              <button className="text-sm bg-[#005B8B] text-white px-4 py-2 rounded-lg hover:bg-[#005a8bf2] transition-colors">
                Save Changes
              </button>
            </div>
          </Section>

          <Section title="Notifications">
            <Field label="Click alerts">
              <Toggle value={notifications} onChange={setNotifications} />
            </Field>
            <Field label="Weekly digest email">
              <Toggle value={weeklyDigest} onChange={setWeeklyDigest} />
            </Field>
          </Section>

          <Section title="Danger Zone">
            <Field label="Delete account">
              <button className="text-sm text-red-500 border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                Delete my account
              </button>
            </Field>
          </Section>
        </div>
      </div>
    </>
  )
}