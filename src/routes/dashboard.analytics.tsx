import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/analytics')({
  component: AnalyticsPage,
})

const TOP_LINKS = [
  { link: 'go.link/promo', clicks: 1204, pct: 100 },
  { link: 'go.link/launch', clicks: 987, pct: 82 },
  { link: 'go.link/docs', clicks: 542, pct: 45 },
  { link: 'go.link/sale', clicks: 311, pct: 26 },
  { link: 'go.link/signup', clicks: 210, pct: 17 },
]

const TRAFFIC = [
  { source: 'Direct', visits: 1840, pct: 45 },
  { source: 'Social', visits: 1230, pct: 30 },
  { source: 'Email', visits: 614, pct: 15 },
  { source: 'Search', visits: 410, pct: 10 },
]

function AnalyticsPage() {
  return (
    <>
      {/* Mobile */}
      <div className="sm:hidden px-4 py-6 space-y-4">
        <h1 className="text-2xl font-semibold text-white">Analytics</h1>
        <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
          <h2 className="text-sm font-semibold text-gray-700">Top Links</h2>
          {TOP_LINKS.map(item => (
            <div key={item.link} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-[#005B8B] font-medium">{item.link}</span>
                <span className="text-gray-500">{item.clicks.toLocaleString()}</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#005B8B] rounded-full" style={{ width: `${item.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
          <h2 className="text-sm font-semibold text-gray-700">Traffic Sources</h2>
          {TRAFFIC.map(item => (
            <div key={item.source} className="flex items-center justify-between text-sm">
              <span className="text-gray-600">{item.source}</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#4a7a8f] rounded-full" style={{ width: `${item.pct}%` }} />
                </div>
                <span className="text-xs text-gray-400 w-8 text-right">{item.pct}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet + Desktop */}
      <div className="hidden sm:block p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Analytics</h1>
          <div className="w-9 h-9 rounded-full bg-[#5D8DA1] flex items-center justify-center text-white text-sm font-bold">J</div>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Clicks', value: '4,094' },
            { label: 'Unique Visitors', value: '3,120' },
            { label: 'Avg. CTR', value: '12%' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm">
              <p className="text-xs text-[#71717B] uppercase tracking-wide font-medium">{s.label}</p>
              <p className="text-3xl font-light text-gray-900 mt-1">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Top links */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-700 mb-5">Top Performing Links</h2>
            <div className="space-y-4">
              {TOP_LINKS.map(item => (
                <div key={item.link} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#005B8B] font-medium">{item.link}</span>
                    <span className="text-gray-500">{item.clicks.toLocaleString()} clicks</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#005B8B] rounded-full transition-all" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic sources */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-gray-700 mb-5">Traffic Sources</h2>
            <div className="space-y-4">
              {TRAFFIC.map(item => (
                <div key={item.source} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700 font-medium">{item.source}</span>
                    <span className="text-gray-500">{item.visits.toLocaleString()} visits · {item.pct}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#4a7a8f] rounded-full transition-all" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}