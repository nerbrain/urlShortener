import { useState } from 'react'
import { createFileRoute, useNavigate, useRouterState, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: DashboardLayout,
})

const NAV_ITEMS = [
  { label: 'Dashboard', icon: '../src/assets/dashboard-100.png', iconActive: '../src/assets/dashboard-active-100.png',  path: '/dashboard' },
  { label: 'Links',     icon: '../src/assets/link-100.png', iconActive:'../src/assets/link-active-100.png', path: '/dashboard/links' },
  { label: 'Forms',     icon: '../src/assets/form-100.png', iconActive: '../src/assets/form-active-100.png', path: '/dashboard/forms' },
  { label: 'Analytics', icon: '../src/assets/analytics-100.png', iconActive:'../src/assets/analytics-active-100.png', path: '/dashboard/analytics' },
  { label: 'Settings',  icon: '../src/assets/settings-100.png', iconActive: '../src/assets/settings-active-100.png', path: '/dashboard/settings' },
]

function DashboardLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  const isActive = (path: string) =>
    path === '/dashboard' ? pathname === '/dashboard' : pathname.startsWith(path)

  const handleNav = (path: string) => {
    navigate({ to: path })
    setMenuOpen(false)
  }

  return (
    <div className="bg-[#5D8DA1] min-h-screen flex flex-col">

      {/* ── MOBILE NAV ───────────────────────────────── */}
      <nav className="sm:hidden bg-[#F1F7F3] shadow-sm">
        <div className="flex items-center justify-between px-4 py-4">
          <span className="font-bold text-xl text-gray-900">LOGO</span>
          <button
            className="flex flex-col justify-center gap-1.5 w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-gray-800 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-gray-800 transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-gray-200 px-4 pb-4">
            <ul className="flex flex-col space-y-1 pt-3 list-none">
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <button
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                      ${isActive(item.path) ? 'bg-[#005B8B] text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                    onClick={() => handleNav(item.path)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* ── TABLET + DESKTOP ─────────────────────────── */}
      <div className="hidden sm:flex flex-1">
        <aside className="flex flex-col justify-between w-52 md:w-60 bg-[#4a7a8f] px-3 py-8 shrink-0">
          <div className="space-y-1">
            <p className="text-white font-bold text-xl px-3 mb-8">LOGO</p>
            {NAV_ITEMS.map(item => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left
                  ${isActive(item.path) ? 'bg-white text-[#005B8B]' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
                onClick={() => handleNav(item.path)}
              >
                <img className='w-6' src={`${isActive(item.path) ? item.iconActive : item.icon }`}/>
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/10">
            <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-white text-xs font-bold">M</div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-xs font-medium truncate">Malik</p>
              <p className="text-white/60 text-xs truncate">malik@example.com</p>
            </div>
          </div>
        </aside>

        <main className="flex-1 bg-[#F1F7F3] overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile page content */}
      <div className="sm:hidden flex-1">
        <Outlet />
      </div>

    </div>
  )
}