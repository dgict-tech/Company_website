import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useMemo, useRef, useState } from "react"
import Swal from "sweetalert2"
import { Send, Check, X, Globe, Mail, Server, LayoutTemplate, Sparkles } from "lucide-react"

const PRICING = {
  domain: {
    label: "Domain Registration",
    note: "registered per year",
    icon: Globe,
    options: [
      { id: "net", label: ".net", price: 18000 },
      { id: "com", label: ".com", price: 24000 }
    ],
  },
  email: {
    label: "Business Email",
    note: "billed yearly",
    icon: Mail,
    options: [
      { id: "workspace", label: "Google Workspace", price: 120000 },
      { id: "custom-mail", label: "Custom Mail Service (Webmail)", price: 18000 },
    ],
  },
  hosting: {
    label: "Host My Website",
    note: "hosting, billed yearly",
    icon: Server,
    options: [
      { id: "t1", label: "6GB RAM / 64GB SSD", price: 45000 },
      { id: "t2", label: "6GB RAM / 128GB SSD", price: 65000 },
      { id: "t3", label: "12GB RAM / 128GB SSD", price: 95000 },
      { id: "t4", label: "12GB RAM / 256GB SSD", price: 140000 },
      { id: "t5", label: "Higher / Custom", price: null, custom: true },
    ],
  },
  platform: {
    label: "Website Platform",
    note: "one-time build cost",
    icon: LayoutTemplate,
    options: [
      { id: "personal", label: "Personal Website", price: 60000 },
      { id: "company", label: "Company Website", price: 100000 },
      { id: "business", label: "Business Website", price: 150000 },
      { id: "ecommerce", label: "Ecommerce Website", price: null, custom: true },
    ],
  },
  addons: {
    label: "Added Services / Features",
    note: "select all that apply",
    icon: Sparkles,
    multi: true,
    options: [
      { id: "ai-chat", label: "AI Chat Integration", price: 50000 },
      { id: "payment", label: "Payment Gateway Integration", price: 40000 },
      { id: "ticket", label: "Ticket System Integration", price: 60000 },
      { id: "migration", label: "Data Migration", price: 30000 },
      { id: "modernisation", label: "Website Modernisation", price: null, custom: true },
    ],
  },
}

const PILL_ORDER = ["domain", "email", "hosting", "platform", "addons"]

const inputClass =
  "w-full text-black p-3.5 rounded-lg bg-white border border-gray-300 focus:border-[#42b55e] focus:outline-none transition placeholder-gray-500"

const naira = (n) => `₦${n.toLocaleString()}`

// Smoothly counts a number up/down whenever `target` changes.
function useAnimatedNumber(target, duration = 500) {
  const [value, setValue] = useState(target)
  const prevRef = useRef(target)

  useEffect(() => {
    const start = prevRef.current
    const startTime = performance.now()
    let frame

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(start + (target - start) * eased))
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      } else {
        prevRef.current = target
      }
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target, duration])

  return value
}

export default function ServiceRequest() {
  const [contact, setContact] = useState({ firstName: "", lastName: "", phone: "", email: "" })
  const [activePill, setActivePill] = useState(null)
  const [choices, setChoices] = useState({ domain: null, email: null, hosting: null, platform: null, addons: [] })
  const [customNotes, setCustomNotes] = useState({ hosting: "", platform: "", addons: "" })
  const [submitting, setSubmitting] = useState(false)
  const [justSubmitted, setJustSubmitted] = useState(false)

  const togglePill = (id) => setActivePill((prev) => (prev === id ? null : id))

  const pickSingle = (category, optionId) => {
    setChoices((prev) => ({ ...prev, [category]: prev[category] === optionId ? null : optionId }))
  }

  const toggleAddon = (optionId) => {
    setChoices((prev) => {
      const has = prev.addons.includes(optionId)
      return { ...prev, addons: has ? prev.addons.filter((a) => a !== optionId) : [...prev.addons, optionId] }
    })
  }

  const removeSelection = (category, optionId) => {
    if (PRICING[category].multi) {
      setChoices((prev) => ({ ...prev, addons: prev.addons.filter((a) => a !== optionId) }))
    } else {
      setChoices((prev) => ({ ...prev, [category]: null }))
    }
  }

  const isCustomSelected = (category) => {
    if (!PRICING[category]) return false
    if (PRICING[category].multi) {
      return choices.addons.some((id) => PRICING.addons.options.find((o) => o.id === id)?.custom)
    }
    const chosenId = choices[category]
    if (!chosenId) return false
    return Boolean(PRICING[category].options.find((o) => o.id === chosenId)?.custom)
  }

  const { total, hasCustom, selectedLabels, customNotesText, chips } = useMemo(() => {
    let total = 0
    let hasCustom = false
    const selectedLabels = []
    const customNotesText = []
    const chips = []

    ;["domain", "email", "hosting", "platform"].forEach((key) => {
      const chosenId = choices[key]
      if (!chosenId) return
      const opt = PRICING[key].options.find((o) => o.id === chosenId)
      if (!opt) return
      selectedLabels.push(`${PRICING[key].label}: ${opt.label}`)
      chips.push({ category: key, optionId: opt.id, label: opt.label })
      if (opt.custom) {
        hasCustom = true
        if (customNotes[key]) customNotesText.push(`${PRICING[key].label} (${opt.label}): ${customNotes[key]}`)
      } else {
        total += opt.price
      }
    })

    choices.addons.forEach((id) => {
      const opt = PRICING.addons.options.find((o) => o.id === id)
      if (!opt) return
      selectedLabels.push(`${PRICING.addons.label}: ${opt.label}`)
      chips.push({ category: "addons", optionId: opt.id, label: opt.label })
      if (opt.custom) {
        hasCustom = true
        if (customNotes.addons) customNotesText.push(`${PRICING.addons.label} (${opt.label}): ${customNotes.addons}`)
      } else {
        total += opt.price
      }
    })

    return { total, hasCustom, selectedLabels, customNotesText, chips }
  }, [choices, customNotes])

  const hasAnySelection = selectedLabels.length > 0
  const animatedTotal = useAnimatedNumber(total)

  const onSubmit = async (event) => {
    event.preventDefault()
    if (!hasAnySelection) {
      Swal.fire({
        title: "Pick a service first",
        text: "Select at least one service under \"I want:\" before submitting.",
        icon: "info",
        confirmButtonColor: "#42b55e",
      })
      return
    }
    setSubmitting(true)

    const fullName = `${contact.firstName} ${contact.lastName}`.trim()
    const totalLine = hasCustom ? `${naira(total)} + Custom Request` : naira(total)

    // Group selections by section so the email reads like a proper summary,
    // not a flat dump of form fields.
    const sectionLines = ["domain", "email", "hosting", "platform"]
      .map((key) => {
        const chosenId = choices[key]
        if (!chosenId) return null
        const opt = PRICING[key].options.find((o) => o.id === chosenId)
        if (!opt) return null
        const priceStr = opt.custom ? "Custom quote" : naira(opt.price)
        return `  • ${PRICING[key].label}: ${opt.label} (${priceStr})`
      })
      .filter(Boolean)

    if (choices.addons.length > 0) {
      sectionLines.push(`  • ${PRICING.addons.label}:`)
      choices.addons.forEach((id) => {
        const opt = PRICING.addons.options.find((o) => o.id === id)
        if (!opt) return
        const priceStr = opt.custom ? "Custom quote" : naira(opt.price)
        sectionLines.push(`      - ${opt.label} (${priceStr})`)
      })
    }

    const notesBlock =
      customNotesText.length > 0
        ? `\n\nCustom Requirements:\n${customNotesText.map((n) => `  • ${n}`).join("\n")}`
        : ""

    const message = [
      `New service request from ${fullName || "a website visitor"}.`,
      "",
      "Services Requested:",
      ...sectionLines,
      "",
      `Estimated Total: ${totalLine}`,
      notesBlock,
    ]
      .join("\n")
      .trim()

    const payload = {
      access_key: "f43edaad-045f-4256-a3d6-4a80da4e3c17",
      subject: `New Service Request — ${fullName || "Website Visitor"} (${totalLine})`,
      from_name: "DGICT Service Request Form",
      name: fullName,
      phone: contact.phone,
      email: contact.email,
      message,
      services_requested: selectedLabels.join(" | "),
      estimated_total: totalLine,
      custom_requirements: customNotesText.join(" | ") || "N/A",
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      }).then((r) => r.json())

      if (res.success) {
        setJustSubmitted(true)
        Swal.fire({
          title: "Request sent!",
          text: hasCustom
            ? "Thank you, we'll reach out to schedule a call about the custom parts of your request and confirm final pricing."
            : "Thank you, we've received your request and will follow up shortly to confirm details.",
          icon: "success",
          confirmButtonColor: "#42b55e",
        })
        setContact({ firstName: "", lastName: "", phone: "", email: "" })
        setChoices({ domain: null, email: null, hosting: null, platform: null, addons: [] })
        setCustomNotes({ hosting: "", platform: "", addons: "" })
        setActivePill(null)
        setTimeout(() => setJustSubmitted(false), 1600)
      } else {
        throw new Error("Submission failed")
      }
    } catch {
      Swal.fire({
        title: "Something went wrong",
        text: "Please try again, or reach us directly at dgictech@gmail.com.",
        icon: "error",
        confirmButtonColor: "#42b55e",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="services-request"
      className="bg-[#42b55e] py-20 px-6 md:px-16 text-white relative overflow-hidden"
    >
      <div className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-black/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="bg-white/20 text-black px-4 py-2 rounded-full font-semibold inline-block mb-4">
            Get Started
          </span>
          <h2 className="text-black text-4xl md:text-5xl font-bold mb-4">
            Tell Us What You Need
          </h2>
          <p className="text-black/80 text-lg max-w-2xl mx-auto">
            Pick everything you need below and see your estimate build up live. Anything
            custom gets flagged for a quick call before we finalize pricing.
          </p>
        </motion.div>

        <form onSubmit={onSubmit} className="bg-white rounded-2xl p-6 md:p-10 space-y-10 relative">
          {/* Success burst overlay */}
          <AnimatePresence>
            {justSubmitted && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/90 rounded-2xl flex items-center justify-center z-30"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="bg-[#42b55e] rounded-full p-4">
                    <Check size={36} className="text-white" />
                  </div>
                  <p className="text-black font-semibold text-lg">Request sent!</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tell us about you */}
          <div>
            <h3 className="text-black text-xl font-bold mb-4">Tell us about you</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                required
                value={contact.firstName}
                onChange={(e) => setContact((c) => ({ ...c, firstName: e.target.value }))}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                value={contact.lastName}
                onChange={(e) => setContact((c) => ({ ...c, lastName: e.target.value }))}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Phone"
                required
                value={contact.phone}
                onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                className={inputClass}
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={contact.email}
                onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                className={inputClass}
              />
            </div>
          </div>

          {/* How can we help you */}
          <div>
            <h3 className="text-black text-xl font-bold mb-1">How can we help you?</h3>
            <p className="text-gray-500 text-sm mb-5">I want:</p>

            <div className="flex flex-wrap gap-3 mb-4">
              {PILL_ORDER.map((key) => {
                const service = PRICING[key]
                const Icon = service.icon
                const isActive = activePill === key
                const isFilled = service.multi
                  ? choices.addons.length > 0
                  : Boolean(choices[key])
                return (
                  <motion.button
                    key={key}
                    type="button"
                    whileHover={{ translateY: -2 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => togglePill(key)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all ${
                      isActive || isFilled
                        ? "bg-gradient-to-r from-[#42b55e] to-[#2f9e44] text-white border-2 border-transparent shadow-md shadow-[#42b55e]/30"
                        : "bg-gray-100 text-gray-700 border-2 border-transparent hover:border-[#42b55e]/40 hover:shadow-sm"
                    }`}
                  >
                    <Icon size={16} />
                    {isFilled && <Check size={14} />}
                    {service.label}
                  </motion.button>
                )
              })}
            </div>

            {/* Selection summary chips */}
            <AnimatePresence>
              {chips.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-wrap gap-2 mb-4 overflow-hidden"
                >
                  {chips.map((chip) => (
                    <motion.span
                      key={`${chip.category}-${chip.optionId}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-1.5 bg-[#f6ee8f]/60 text-black text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {chip.label}
                      <button
                        type="button"
                        onClick={() => removeSelection(chip.category, chip.optionId)}
                        className="hover:bg-black/10 rounded-full p-0.5 transition"
                      >
                        <X size={12} />
                      </button>
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {activePill && (
                <motion.div
                  key={activePill}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mt-2">
                    <p className="text-gray-500 text-xs mb-3">{PRICING[activePill].note}</p>
                    <div className="flex flex-wrap gap-2">
                      {PRICING[activePill].options.map((opt) => {
                        const selected = PRICING[activePill].multi
                          ? choices.addons.includes(opt.id)
                          : choices[activePill] === opt.id
                        return (
                          <motion.button
                            key={opt.id}
                            type="button"
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ translateY: -2 }}
                            onClick={() =>
                              PRICING[activePill].multi ? toggleAddon(opt.id) : pickSingle(activePill, opt.id)
                            }
                            className={`px-4 py-2 rounded-lg text-sm font-medium border-2 transition-all flex items-center gap-2 ${
                              selected
                                ? "bg-black text-white border-black shadow-md"
                                : "bg-white text-gray-700 border-gray-300 hover:border-[#42b55e] hover:shadow-sm"
                            }`}
                          >
                            {selected && <Check size={14} className="text-[#f6ee8f]" />}
                            {opt.label}
                            <span className={selected ? "text-[#f6ee8f]" : "text-[#42b55e]"}>
                              {opt.custom ? "· Custom" : `· ${naira(opt.price)}`}
                            </span>
                          </motion.button>
                        )
                      })}
                    </div>

                    {isCustomSelected(activePill) && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <label className="text-gray-700 text-sm font-medium mb-1 block">
                          Tell us what you need for this, we'll reach out to discuss cost
                        </label>
                        <textarea
                          rows="4"
                          required
                          placeholder="e.g. products to sell, expected traffic, features you want, budget range, timeline..."
                          value={customNotes[activePill] || ""}
                          onChange={(e) =>
                            setCustomNotes((prev) => ({ ...prev, [activePill]: e.target.value }))
                          }
                          className={`${inputClass} resize-none`}
                        ></textarea>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="sticky bottom-4 z-20 bg-white/95 backdrop-blur border border-gray-200 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 px-5 py-4">
            <p className="text-black text-xl font-bold">
              {hasAnySelection ? (
                <>
                  Total Cost: {naira(animatedTotal)}
                  {hasCustom && <span className="text-[#42b55e]"> + Custom Request</span>}
                </>
              ) : (
                <span className="text-gray-400 font-medium text-base">
                  Select a service above to see your estimate
                </span>
              )}
            </p>
            <motion.button
              type="submit"
              disabled={submitting}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-[#42b55e] to-[#2f9e44] hover:from-[#3a9a4d] hover:to-[#26833a] text-white transition font-semibold px-8 py-3 rounded-lg cursor-pointer flex items-center justify-center gap-2 group disabled:opacity-60 w-full md:w-auto shadow-md shadow-[#42b55e]/30"
            >
              {submitting ? "Sending..." : "Submit Request"}
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  )
}