import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/forms')({
  component: FormsPage,
})

const FORMS = [
  { name: 'Lead Capture', responses: 142, active: true, created: 'Jun 10' },
  { name: 'Product Feedback', responses: 89, active: true, created: 'Jun 1' },
  { name: 'Event Registration', responses: 34, active: false, created: 'May 20' },
  { name: 'Newsletter Signup', responses: 211, active: true, created: 'May 5' },
]

function FormsPage() {
  return (
    <>
      {/* Mobile */}
      <div className="sm:hidden px-4 py-6 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Forms</h1>
          <button className="text-sm bg-[#005B8B] text-white px-3 py-1.5 rounded-lg">+ New</button>
        </div>
        {FORMS.map(form => (
          <div key={form.name} className="bg-white rounded-2xl p-4 shadow-sm space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-800">{form.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${form.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                {form.active ? 'Active' : 'Paused'}
              </span>
            </div>
            <p className="text-xs text-gray-500">{form.responses} responses · Created {form.created}</p>
          </div>
        ))}
      </div>

      {/* Tablet + Desktop */}
      <div className="hidden sm:block p-6 md:p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Forms</h1>
          <div className="flex items-center gap-3">
            <button className="text-sm bg-[#005B8B] text-white px-4 py-2 rounded-lg hover:bg-[#005a8bf2] transition-colors">
              + New Form
            </button>
            <div className="w-9 h-9 rounded-full bg-[#5D8DA1] flex items-center justify-center text-white text-sm font-bold">M</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FORMS.map(form => (
            <div key={form.name} className="bg-white rounded-2xl p-5 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-800">{form.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Created {form.created}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0
                  ${form.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                  {form.active ? 'Active' : 'Paused'}
                </span>
              </div>
              <div className="pt-2 border-t border-gray-50">
                <p className="text-2xl font-light text-gray-900">{form.responses}</p>
                <p className="text-xs text-gray-400">total responses</p>
              </div>
              <div className="flex gap-2 pt-1">
                <button className="flex-1 text-xs text-center py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-[#005B8B] hover:text-[#005B8B] transition-colors">
                  View
                </button>
                <button className="flex-1 text-xs text-center py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-[#005B8B] hover:text-[#005B8B] transition-colors">
                  Edit
                </button>
              </div>
            </div>
          ))}

          {/* Empty state card */}
          <button className="bg-white rounded-2xl p-5 shadow-sm border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 text-gray-400 hover:border-[#005B8B] hover:text-[#005B8B] transition-colors min-h-40">
            <span className="text-2xl">+</span>
            <span className="text-sm font-medium">New Form</span>
          </button>
        </div>
      </div>
    </>
  )
}