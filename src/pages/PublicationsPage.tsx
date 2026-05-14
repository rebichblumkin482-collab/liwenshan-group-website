import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const years = ['全部', '2025', '2024', '2023', '2022', '2021', '2020']

export default function PublicationsPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-full bg-white relative overflow-hidden">
      <div className="section-inner max-w-6xl mx-auto relative z-10">
        <motion.div variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <p className="text-sm tracking-[0.15em] text-sjtu-red font-medium mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            PUBLICATIONS
          </p>
          <h2 className="font-bold text-sjtu-blue mb-8" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)' }}>
            论文成果
          </h2>

          {/* Filter bar */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {years.map((y) => (
              <button
                key={y}
                className="px-4 py-1.5 rounded-lg text-sm font-medium border border-gray-200 text-gray-500 hover:border-sjtu-red hover:text-sjtu-red transition-colors"
              >
                {y}
              </button>
            ))}
            <input
              type="text"
              placeholder="搜索论文…"
              className="ml-auto px-4 py-1.5 rounded-lg text-sm border border-gray-200 text-gray-500 focus:outline-none focus:border-sjtu-red transition-colors w-48"
            />
          </div>

          {/* Publication list */}
          <div className="space-y-0">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-start gap-6 py-5 border-b border-gray-100 text-gray-400"
              >
                <span className="text-sm min-w-[28px] pt-0.5">[{i}]</span>
                <div className="flex-1">
                  <p className="text-base text-gray-500">作者列表待补充</p>
                  <p className="font-medium text-gray-500 mt-0.5">论文标题待补充</p>
                  <p className="text-sm mt-0.5">
                    <span className="italic">期刊名称</span>, 卷(期), 页码, 年份
                  </p>
                </div>
                <span className="text-sm text-gray-300 whitespace-nowrap">2025</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
