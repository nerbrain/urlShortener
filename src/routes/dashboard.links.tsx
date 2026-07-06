import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/dashboard/links')({
  component: LinksPage,
})

const LINKS = [
  { short: 'go.link/promo', original: 'https://example.com/summer-promotion-2024', clicks: 1204, active: true, created: 'Jun 12' },
  { short: 'go.link/launch', original: 'https://example.com/product-launch-event', clicks: 987, active: true, created: 'Jun 8' },
  { short: 'go.link/docs', original: 'https://docs.example.com/getting-started', clicks: 542, active: false, created: 'May 30' },
  { short: 'go.link/sale', original: 'https://example.com/flash-sale-page', clicks: 311, active: true, created: 'May 22' },
  { short: 'go.link/signup', original: 'https://example.com/register', clicks: 210, active: true, created: 'May 15' },
]

function LinksPage() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'paused'>('all')

  const filtered = LINKS.filter(l => {
    const matchesSearch = l.short.includes(search) || l.original.includes(search)
    const matchesFilter = filter === 'all' || (filter === 'active' ? l.active : !l.active)
    return matchesSearch && matchesFilter
  })

  return (
    <>
      {/* Mobile */}
      <div className="sm:hidden px-4 py-6 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Links</h1>
          <button className="text-sm bg-[#005B8B] text-white px-3 py-1.5 rounded-lg">+ New</button>
        </div>
        <input
          className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005b8b40]"
          placeholder="Search links..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="space-y-3">
          {filtered.map(link => (
            <div key={link.short} className="bg-white rounded-2xl p-4 shadow-sm space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#005B8B]">{link.short}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${link.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {link.active ? 'Active' : 'Paused'}
                </span>
              </div>
              <p className="text-xs text-gray-400 truncate">{link.original}</p>
              <p className="text-xs text-gray-500">{link.clicks.toLocaleString()} clicks · {link.created}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet + Desktop */}
      <div className="hidden sm:block p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Links</h1>
          <div className="flex items-center gap-3">
            <button className="text-sm bg-[#005B8B] text-white px-4 py-2 rounded-lg hover:bg-[#005a8bf2] transition-colors">
              + New Link
            </button>
            <div className="w-9 h-9 rounded-full bg-[#5D8DA1] flex items-center justify-center text-white text-sm font-bold">M</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 max-w-sm">
            <input
              className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005b8b40]"
              placeholder="Search links..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-1 bg-white border border-gray-200 rounded-lg p-1">
            {(['all', 'active', 'paused'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 text-sm rounded-md capitalize transition-colors
                  ${filter === f ? 'bg-[#005B8B] text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-400 uppercase tracking-wide border-b border-gray-100 bg-gray-50/50">
                <th className="text-left px-5 py-3 font-medium">Short Link</th>
                <th className="text-left px-5 py-3 font-medium">Original URL</th>
                <th className="text-right px-5 py-3 font-medium">Clicks</th>
                <th className="text-center px-5 py-3 font-medium">Status</th>
                <th className="text-right px-5 py-3 font-medium">Created</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map(row => (
                <tr key={row.short} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3.5 text-[#005B8B] font-medium">{row.short}</td>
                  <td className="px-5 py-3.5 text-gray-400 max-w-xs truncate">{row.original}</td>
                  <td className="px-5 py-3.5 text-right text-gray-600">{row.clicks.toLocaleString()}</td>
                  <td className="px-5 py-3.5 text-center">
                    <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium
                      ${row.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {row.active ? 'Active' : 'Paused'}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right text-gray-400 text-xs">{row.created}</td>
                  <td className="px-5 py-3.5 text-right">
                    <button className="text-xs text-gray-400 hover:text-[#005B8B] transition-colors">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}