import { createFileRoute } from '@tanstack/react-router'
import { useState, useRef, useEffect } from 'react'

export const Route = createFileRoute('/dashboard/')({
  component: DashboardPage,
})

const DATE_RANGES = [
  { label: 'Today', days: 0 },
  { label: 'Last 7 days', days: 7 },
  { label: 'Last 30 days', days: 30 },
  { label: 'Last 90 days', days: 90 },
  { label: 'This year', days: 365 },
]

const STATS = [
  { label: 'Active Links', value: '30', sub: 'out of 35 total' },
  { label: 'Total Clicks', value: '4.2k', sub: 'last 30 days' },
  { label: 'Forms Created', value: '8', sub: '2 active' },
  { label: 'Avg. CTR', value: '12%', sub: 'vs 9% last month' },
]

function DashboardPage() {
  const [selectedRange, setSelectedRange] = useState(DATE_RANGES[2])
  const [pickerOpen, setPickerOpen] = useState(false)
  const pickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setPickerOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const DateRangePicker = ({ compact = false }: { compact?: boolean }) => (
    <div ref={pickerRef} className="relative">
      <button
        onClick={() => setPickerOpen(!pickerOpen)}
        className={`flex items-center gap-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700
          hover:border-[#005B8B] hover:text-[#005B8B] transition-colors shadow-sm
          ${compact ? 'px-3 py-1.5' : 'px-4 py-2'}`}
      >
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span>{selectedRange.label}</span>
        <svg className={`w-3.5 h-3.5 shrink-0 transition-transform ${pickerOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      {pickerOpen && (
        <div className="absolute z-20 mt-1 right-0 bg-white border border-gray-200 rounded-xl shadow-lg py-1 min-w-40">
          {DATE_RANGES.map(range => (
            <button
              key={range.label}
              onClick={() => { setSelectedRange(range); setPickerOpen(false) }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors
                ${selectedRange.label === range.label
                  ? 'text-[#005B8B] font-medium bg-[#005b8b08]'
                  : 'text-gray-700 hover:bg-gray-50'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <>
      {/* Mobile */}
      <div className="sm:hidden px-4 py-6 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
          <DateRangePicker compact />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {STATS.map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl p-4 shadow-sm space-y-1">
              <p className="text-[#71717B] text-xs">{stat.label}</p>
              <p className="text-2xl font-light text-gray-900">{stat.value}</p>
              <p className="text-[#71717B] text-xs">{stat.sub}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Recent Links</h2>
          <div className="space-y-2">
            {['go.link/promo', 'go.link/launch', 'go.link/docs'].map(link => (
              <div key={link} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm text-[#005B8B] font-medium">{link}</span>
                <span className="text-xs text-gray-400">1.2k clicks</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet + Desktop */}
      <div className="hidden sm:block p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-3">
            {/* <button className="text-sm bg-[#005B8B] text-white px-4 py-2 rounded-lg hover:bg-[#005a8bf2] transition-colors">
              + New Link
            </button> */}
            <div className="w-9 h-9 rounded-full bg-[#5D8DA1] flex items-center justify-center text-white text-sm font-bold">J</div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-500">
            Showing data for <span className="font-medium text-gray-700">{selectedRange.label.toLowerCase()}</span>
          </p>
          <DateRangePicker />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {STATS.map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm space-y-1.5">
              <p className="text-[#71717B] text-xs font-medium uppercase tracking-wide">{stat.label}</p>
              <p className="text-3xl font-light text-gray-900">{stat.value}</p>
              <p className="text-[#71717B] text-xs">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-700">Recent Links</h2>
              <button className="text-xs text-[#005B8B] hover:underline">View all</button>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100">
                  <th className="text-left pb-2 font-medium">Link</th>
                  <th className="text-right pb-2 font-medium">Clicks</th>
                  <th className="text-right pb-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { link: 'go.link/promo', clicks: '1,204', active: true },
                  { link: 'go.link/launch', clicks: '987', active: true },
                  { link: 'go.link/docs', clicks: '542', active: false },
                  { link: 'go.link/sale', clicks: '311', active: true },
                ].map(row => (
                  <tr key={row.link} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 text-[#005B8B] font-medium">{row.link}</td>
                    <td className="py-3 text-right text-gray-600">{row.clicks}</td>
                    <td className="py-3 text-right">
                      <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium
                        ${row.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                        {row.active ? 'Active' : 'Paused'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              {[
                { label: 'Shorten a link', desc: 'Create a new short URL' },
                { label: 'Build a form', desc: 'Collect leads or feedback' },
                { label: 'View analytics', desc: 'See clicks and traffic' },
              ].map(action => (
                <button
                  key={action.label}
                  className="w-full text-left p-3 rounded-xl border border-gray-100 hover:border-[#005B8B] hover:bg-[#005b8b08] transition-all group"
                >
                  <p className="text-sm font-medium text-gray-800 group-hover:text-[#005B8B]">{action.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{action.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}