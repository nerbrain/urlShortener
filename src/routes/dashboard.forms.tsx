import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/dashboard/forms')({
  component: FormsPage,
})

type FieldType = 'text' | 'email' | 'textarea' | 'select' | 'checkbox'

type FormField = {
  id: string
  type: FieldType
  label: string
  placeholder: string
  required: boolean
}

type Form = {
  name: string
  responses: number
  active: boolean
  created: string
  fields?: FormField[]
}

const INITIAL_FORMS: Form[] = [
  { name: 'Lead Capture',       responses: 142, active: true,  created: 'Jun 10' },
  { name: 'Product Feedback',   responses: 89,  active: true,  created: 'Jun 1'  },
  { name: 'Event Registration', responses: 34,  active: false, created: 'May 20' },
  { name: 'Newsletter Signup',  responses: 211, active: true,  created: 'May 5'  },
]

const FIELD_TYPES: { type: FieldType; label: string; icon: string }[] = [
  { type: 'text',     label: 'Short text',   icon: 'T'  },
  { type: 'email',    label: 'Email',        icon: '@'  },
  { type: 'textarea', label: 'Long text',    icon: '¶'  },
  { type: 'select',   label: 'Dropdown',     icon: '▾'  },
  { type: 'checkbox', label: 'Checkbox',     icon: '☑'  },
]

function uid() { return Math.random().toString(36).slice(2, 8) }

// ── Step indicator ────────────────────────────────────────────────────────────
function Steps({ current, steps }: { current: number; steps: string[] }) {
  return (
    <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100">
      {steps.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-full text-xs font-semibold flex items-center justify-center transition-colors
            ${i < current ? 'bg-green-500 text-white' : i === current ? 'bg-[#005B8B] text-white' : 'bg-gray-100 text-gray-400'}`}>
            {i < current ? '✓' : i + 1}
          </div>
          <span className={`text-xs hidden sm:block ${i === current ? 'text-gray-800 font-medium' : 'text-gray-400'}`}>{label}</span>
          {i < steps.length - 1 && <div className="w-6 h-px bg-gray-200" />}
        </div>
      ))}
    </div>
  )
}

// Field card in builder
function FieldCard({
  field, index, total,
  onChange, onRemove, onMove,
}: {
  field: FormField
  index: number
  total: number
  onChange: (f: FormField) => void
  onRemove: () => void
  onMove: (dir: -1 | 1) => void
}) {
  const [open, setOpen] = useState(false)
  const typeLabel = FIELD_TYPES.find(t => t.type === field.type)?.label ?? field.type

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      {/* Card header */}
      <div
        className="flex items-center gap-3 px-4 py-3 bg-gray-50 cursor-pointer select-none"
        onClick={() => setOpen(o => !o)}
      >
        <span className="text-xs font-mono text-gray-400 w-4 shrink-0">{index + 1}</span>
        <span className="text-xs bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-500">{typeLabel}</span>
        <span className="text-sm font-medium text-gray-700 flex-1 truncate">{field.label || 'Untitled field'}</span>
        {field.required && <span className="text-xs text-red-400 shrink-0">required</span>}
        <div className="flex items-center gap-1 ml-auto" onClick={e => e.stopPropagation()}>
          <button disabled={index === 0} onClick={() => onMove(-1)}
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-200 text-gray-400 disabled:opacity-30 text-xs">↑</button>
          <button disabled={index === total - 1} onClick={() => onMove(1)}
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-200 text-gray-400 disabled:opacity-30 text-xs">↓</button>
          <button onClick={onRemove}
            className="w-6 h-6 flex items-center justify-center rounded hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors text-xs">✕</button>
        </div>
      </div>

      {/* Expanded editor */}
      {open && (
        <div className="px-4 py-3 space-y-3 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Label</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005b8b40]"
                value={field.label}
                onChange={e => onChange({ ...field, label: e.target.value })}
                placeholder="Field label"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Placeholder</label>
              <input
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005b8b40]"
                value={field.placeholder}
                onChange={e => onChange({ ...field, placeholder: e.target.value })}
                placeholder="Placeholder text"
              />
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              className="accent-[#005B8B]"
              checked={field.required}
              onChange={e => onChange({ ...field, required: e.target.checked })}
            />
            Required field
          </label>
        </div>
      )}
    </div>
  )
}

// Create Form modal 
function CreateFormModal({ onClose, onSave }: { onClose: () => void; onSave: (f: Form) => void }) {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [fields, setFields] = useState<FormField[]>([
    { id: uid(), type: 'text',  label: 'Full name',     placeholder: 'Your name',  required: true  },
    { id: uid(), type: 'email', label: 'Email address', placeholder: 'you@example.com', required: true },
  ])

  const addField = (type: FieldType) => {
    setFields(f => [...f, { id: uid(), type, label: '', placeholder: '', required: false }])
  }

  const updateField = (id: string, updated: FormField) =>
    setFields(f => f.map(x => x.id === id ? updated : x))

  const removeField = (id: string) =>
    setFields(f => f.filter(x => x.id !== id))

  const moveField = (id: string, dir: -1 | 1) =>
    setFields(f => {
      const i = f.findIndex(x => x.id === id)
      const next = [...f]
      const target = i + dir
      if (target < 0 || target >= next.length) return f;
      [next[i], next[target]] = [next[target], next[i]]
      return next
    })

  const handleSave = () => {
    onSave({
      name: name || 'Untitled form',
      responses: 0,
      active: true,
      created: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      fields,
    })
    onClose()
  }

  const STEPS = ['Details', 'Build', 'Review']

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-2xl sm:rounded-2xl rounded-t-2xl shadow-xl flex flex-col"
        style={{ maxHeight: '90vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
          <h2 className="text-base font-semibold text-gray-800">Create new form</h2>
          <button onClick={onClose} className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500">✕</button>
        </div>

        <Steps current={step} steps={STEPS} />

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-5 py-4">

          {/* Step 0 — Details */}
          {step === 0 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Form name <span className="text-red-400">*</span>
                </label>
                <input
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#005b8b40]"
                  placeholder="e.g. Lead Capture Form"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#005b8b40] resize-none"
                  placeholder="What is this form for?"
                  rows={3}
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Step 1 — Build */}
          {step === 1 && (
            <div className="space-y-3">
              <p className="text-xs text-gray-400">Click a field to edit it. Drag arrows to reorder.</p>

              {fields.map((field, i) => (
                <FieldCard
                  key={field.id}
                  field={field}
                  index={i}
                  total={fields.length}
                  onChange={updated => updateField(field.id, updated)}
                  onRemove={() => removeField(field.id)}
                  onMove={dir => moveField(field.id, dir)}
                />
              ))}

              {/* Add field row */}
              <div className="pt-2">
                <p className="text-xs font-medium text-gray-500 mb-2">Add a field</p>
                <div className="flex flex-wrap gap-2">
                  {FIELD_TYPES.map(({ type, label, icon }) => (
                    <button
                      key={type}
                      onClick={() => addField(type)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-gray-200 rounded-lg text-gray-600
                        hover:border-[#005B8B] hover:text-[#005B8B] transition-colors"
                    >
                      <span className="font-mono">{icon}</span> {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2 — Review */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4 space-y-1">
                <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Form name</p>
                <p className="text-sm font-semibold text-gray-800">{name || 'Untitled form'}</p>
                {description && <p className="text-xs text-gray-500">{description}</p>}
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-3">
                  {fields.length} field{fields.length !== 1 ? 's' : ''}
                </p>
                <div className="space-y-2">
                  {fields.map((field, i) => {
                    const typeLabel = FIELD_TYPES.find(t => t.type === field.type)?.label
                    return (
                      <div key={field.id} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
                        <span className="text-xs text-gray-300 w-4">{i + 1}</span>
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-500">{typeLabel}</span>
                        <span className="text-sm text-gray-700">{field.label || 'Untitled'}</span>
                        {field.required && <span className="ml-auto text-xs text-red-400">required</span>}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 shrink-0">
          <button
            onClick={() => step > 0 ? setStep(s => s - 1) : onClose()}
            className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            {step === 0 ? 'Cancel' : '← Back'}
          </button>
          {step < STEPS.length - 1
            ? <button
                onClick={() => setStep(s => s + 1)}
                disabled={step === 0 && !name.trim()}
                className="px-5 py-2 text-sm bg-[#005B8B] text-white rounded-lg hover:bg-[#005a8bf2] transition-colors font-medium disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            : <button
                onClick={handleSave}
                className="px-5 py-2 text-sm bg-[#005B8B] text-white rounded-lg hover:bg-[#005a8bf2] transition-colors font-medium"
              >
                Create form
              </button>
          }
        </div>
      </div>
    </div>
  )
}

// Forms page
function FormsPage() {
  const [forms, setForms] = useState<Form[]>(INITIAL_FORMS)
  const [showModal, setShowModal] = useState(false)

  const handleSave = (form: Form) => setForms(prev => [form, ...prev])

  return (
    <>
      {showModal && <CreateFormModal onClose={() => setShowModal(false)} onSave={handleSave} />}

      {/* Mobile */}
      <div className="sm:hidden px-4 py-6 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">Forms</h1>
          <button onClick={() => setShowModal(true)} className="text-sm bg-[#005B8B] text-white px-3 py-1.5 rounded-lg">+ New</button>
        </div>
        {forms.map(form => (
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
            <button
              onClick={() => setShowModal(true)}
              className="text-sm bg-[#005B8B] text-white px-4 py-2 rounded-lg hover:bg-[#005a8bf2] transition-colors"
            >
              + New Form
            </button>
            <div className="w-9 h-9 rounded-full bg-[#5D8DA1] flex items-center justify-center text-white text-sm font-bold">J</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {forms.map(form => (
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
                <button className="flex-1 text-xs text-center py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-[#005B8B] hover:text-[#005B8B] transition-colors">View</button>
                <button className="flex-1 text-xs text-center py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-[#005B8B] hover:text-[#005B8B] transition-colors">Edit</button>
              </div>
            </div>
          ))}

          <button
            onClick={() => setShowModal(true)}
            className="bg-white rounded-2xl p-5 shadow-sm border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 text-gray-400 hover:border-[#005B8B] hover:text-[#005B8B] transition-colors min-h-40"
          >
            <span className="text-2xl">+</span>
            <span className="text-sm font-medium">New Form</span>
          </button>
        </div>
      </div>
    </>
  )
}