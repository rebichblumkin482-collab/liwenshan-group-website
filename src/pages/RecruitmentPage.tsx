import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Mail } from 'lucide-react'
import { siteConfig } from '../data/site'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function RecruitmentPage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="section-full bg-white relative overflow-hidden">
      <div className="section-inner max-w-3xl mx-auto relative z-10">
        <motion.div variants={fadeIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <p className="text-sm tracking-[0.15em] text-sjtu-red font-medium mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            RECRUITMENT
          </p>
          <h2 className="font-bold text-sjtu-blue mb-8" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)' }}>
            招生信息
          </h2>

          <div className="space-y-6">
            {/* 招生方向 */}
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-gray-400">
              <p className="text-sm font-medium text-gray-500 mb-3">招生方向</p>
              <div className="space-y-2">
                <p>博士研究生：后摩尔时代新型高能效半导体器件研发</p>
                <p>硕士研究生：低维纳米材料电子器件与传感器</p>
              </div>
              <p className="text-sm mt-3 text-gray-300">详细招生方向待补充</p>
            </div>

            {/* 申请要求 */}
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-gray-400">
              <p className="text-sm font-medium text-gray-500 mb-3">申请要求</p>
              <div className="space-y-1.5">
                <p>· 具有材料、物理、半导体、微电子等相关背景</p>
                <p>· 具备微纳器件加工经验者优先</p>
                <p>· 良好的英语阅读和写作能力</p>
              </div>
              <p className="text-sm mt-3 text-gray-300">详细要求待补充</p>
            </div>

            {/* 联系方式 */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-base font-medium text-white transition-all duration-200 hover:opacity-90"
                style={{ background: '#BE1E2D' }}
              >
                <Mail size={18} />
                联系导师：{siteConfig.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
