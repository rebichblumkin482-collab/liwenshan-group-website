import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const tags = ['全部', '学术会议', '论文发表', '组内活动', '获奖', '其他']

export default function NewsPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-full bg-white relative overflow-hidden">
      <div className="section-inner max-w-6xl mx-auto relative z-10">
        <motion.div variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <p className="text-sm tracking-[0.15em] text-sjtu-red font-medium mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            NEWS
          </p>
          <h2 className="font-bold text-sjtu-blue mb-8" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)' }}>
            新闻动态
          </h2>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main news list */}
            <div className="lg:col-span-3 space-y-0">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex items-start gap-6 py-6 border-b border-gray-100 cursor-pointer hover:bg-gray-50/60 -mx-3 px-3 rounded-lg transition-colors"
                >
                  <span className="text-sm text-gray-300 whitespace-nowrap pt-0.5" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    2025-00-00
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded font-medium whitespace-nowrap" style={{ background: '#BE1E2D12', color: '#BE1E2D' }}>
                    分类标签
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-gray-500 truncate">新闻标题待补充</p>
                    <p className="text-sm text-gray-350 mt-1 line-clamp-2">新闻摘要内容待补充…</p>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-8">
                {[1, 2, 3].map((p) => (
                  <button
                    key={p}
                    className={`w-9 h-9 rounded-lg text-sm border transition-colors ${
                      p === 1 ? 'bg-sjtu-red text-white border-sjtu-red' : 'border-gray-200 text-gray-500 hover:border-sjtu-red'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Category tags */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-500 mb-3">分类</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <button
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs border border-gray-200 text-gray-500 hover:border-sjtu-red hover:text-sjtu-red transition-colors"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Archive */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 mb-3">时间归档</h3>
                <div className="space-y-1">
                  {['2025年', '2024年', '2023年', '2022年'].map((y) => (
                    <button
                      key={y}
                      className="block w-full text-left px-3 py-1.5 rounded text-sm text-gray-500 hover:bg-gray-100 transition-colors"
                    >
                      {y}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
