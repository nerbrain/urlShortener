import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/dashboard/links')({
  component: LinksPage,
})

type Link = {
  short: string
  original: string
  clicks: number
  active: boolean
  created: string
}

const INITIAL_LINKS: Link[] = [
  { short: 'go.link/promo',  original: 'https://example.com/summer-promotion-2024', clicks: 1204, active: true,  created: 'Jun 12' },
  { short: 'go.link/launch', original: 'https://example.com/product-launch-event',  clicks: 987,  active: true,  created: 'Jun 8'  },
  { short: 'go.link/docs',   original: 'https://docs.example.com/getting-started',  clicks: 542,  active: false, created: 'May 30' },
  { short: 'go.link/sale',   original: 'https://example.com/flash-sale-page',       clicks: 311,  active: true,  created: 'May 22' },
  { short: 'go.link/signup', original: 'https://example.com/register',              clicks: 210,  active: true,  created: 'May 15' },
]

// Create Link Modal 
function CreateLinkModal({ onClose, onSave }: { onClose: () => void; onSave: (l: Link) => void }) {
  const [originalUrl, setOriginalUrl] = useState('')
  const [customSlug, setCustomSlug]   = useState('')
  const [utmSource, setUtmSource]     = useState('')
  const [utmMedium, setUtmMedium]     = useState('')
  const [utmCampaign, setUtmCampaign] = useState('')
  const [showUtm, setShowUtm]         = useState(false)
  const [urlError, setUrlError]       = useState('')
  const [slugError, setSlugError]     = useState('')

  const validate = () => {
    let ok = true
    if (!originalUrl.trim()) {
      setUrlError('URL is required'); ok = false
    } else if (!/^https?:\/\/.+/.test(originalUrl)) {
      setUrlError('Must start with http:// or https://'); ok = false
    } else { setUrlError('') }

    if (customSlug && !/^[a-z0-9-]+$/.test(customSlug)) {
      setSlugError('Only lowercase letters, numbers and hyphens'); ok = false
    } else { setSlugError('') }

    return ok
  }

  const handleCreate = () => {
    if (!validate()) return
    const slug = customSlug || Math.random().toString(36).slice(2, 7)
    onSave({
      short: `go.link/${slug}`,
      original: originalUrl,
      clicks: 0,
      active: true,
      created: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    })
    onClose()
  }

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl shadow-xl flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <h2 className="text-base font-semibold text-gray-800">Create new link</h2>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 transition-colors"
          >✕</button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-5 py-4 space-y-4 flex-1">

          {/* Destination URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Destination URL <span className="text-red-400">*</span>
            </label>
            <input
              className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#005b8b40] transition-colors
                ${urlError ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
              placeholder="https://your-long-url.com/page"
              value={originalUrl}
              onChange={e => setOriginalUrl(e.target.value)}
              autoFocus
            />
            {urlError && <p className="text-xs text-red-500 mt-1">{urlError}</p>}
          </div>

          {/* Custom slug */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Custom slug <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <div className={`flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#005b8b40]
              ${slugError ? 'border-red-300' : 'border-gray-200'}`}>
              <span className="px-3 py-2.5 text-sm text-gray-400 bg-gray-50 border-r border-gray-200 whitespace-nowrap">
                go.link/
              </span>
              <input
                className="flex-1 px-3 py-2.5 text-sm focus:outline-none"
                placeholder="my-custom-slug"
                value={customSlug}
                onChange={e => setCustomSlug(e.target.value)}
              />
            </div>
            {slugError
              ? <p className="text-xs text-red-500 mt-1">{slugError}</p>
              : <p className="text-xs text-gray-400 mt-1">Leave blank to auto-generate</p>
            }
          </div>

          {/* UTM Parameters */}
          <div>
            <button
              className="flex items-center gap-2 text-sm text-[#005B8B] font-medium hover:underline"
              onClick={() => setShowUtm(v => !v)}
            >
              <span className={`transition-transform inline-block ${showUtm ? 'rotate-90' : ''}`}>▶</span>
              UTM Parameters <span className="text-gray-400 font-normal">(optional)</span>
            </button>

            {showUtm && (
              <div className="mt-3 space-y-3 pl-4 border-l-2 border-gray-100">
                {[
                  { label: 'Source',   value: utmSource,   set: setUtmSource,   placeholder: 'e.g. newsletter' },
                  { label: 'Medium',   value: utmMedium,   set: setUtmMedium,   placeholder: 'e.g. email' },
                  { label: 'Campaign', value: utmCampaign, set: setUtmCampaign, placeholder: 'e.g. summer-sale' },
                ].map(({ label, value, set, placeholder }) => (
                  <div key={label}>
                    <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
                    <input
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005b8b40]"
                      placeholder={placeholder}
                      value={value}
                      onChange={e => set(e.target.value)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-5 py-4 border-t border-gray-100 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="px-5 py-2 text-sm bg-[#005B8B] text-white rounded-lg hover:bg-[#005a8bf2] transition-colors font-medium"
          >
            Create link
          </button>
        </div>
      </div>
    </div>
  )
}

// Links Page
function LinksPage() {
  const [links, setLinks]       = useState<Link[]>(INITIAL_LINKS)
  const [search, setSearch]     = useState('')
  const [filter, setFilter]     = useState<'all' | 'active' | 'paused'>('all')
  const [showModal, setShowModal] = useState(false)

  const filtered = links.filter(l => {
    const matchesSearch = l.short.includes(search) || l.original.includes(search)
    const matchesFilter = filter === 'all' || (filter === 'active' ? l.active : !l.active)
    return matchesSearch && matchesFilter
  })

  return (
    <>
      {showModal && (
        <CreateLinkModal
          onClose={() => setShowModal(false)}
          onSave={link => setLinks(prev => [link, ...prev])}
        />
      )}

      {/* ── Mobile ── */}
      <div className="sm:hidden px-4 py-6 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Links</h1>
          <button
            onClick={() => setShowModal(true)}
            className="text-sm bg-[#005B8B] text-white px-3 py-1.5 rounded-lg"
          >+ New</button>
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
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium
                  ${link.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {link.active ? 'Active' : 'Paused'}
                </span>
              </div>
              <p className="text-xs text-gray-400 truncate">{link.original}</p>
              <p className="text-xs text-gray-500">{link.clicks.toLocaleString()} clicks · {link.created}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tablet + Desktop ── */}
      <div className="hidden sm:block p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Links</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="text-sm bg-[#005B8B] text-white px-4 py-2 rounded-lg hover:bg-[#005a8bf2] transition-colors"
            >+ New Link</button>
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
              >{f}</button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden overflow-x-auto">
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
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-10 text-center text-sm text-gray-400">
                    No links found. <button onClick={() => setShowModal(true)} className="text-[#005B8B] hover:underline">Create one?</button>
                  </td>
                </tr>
              )}
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