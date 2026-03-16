import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: '聯絡我們',
  description: `聯絡${siteConfig.name}，洽詢 VR 影片、XR 體驗、AI 影像等各類影像製作服務。`,
  openGraph: {
    title: `聯絡我們 | ${siteConfig.shortName}`,
    description: `聯絡${siteConfig.name}，洽詢 VR 影片、XR 體驗、AI 影像等各類影像製作服務。`,
  },
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-amber-500 uppercase">Contact Us</p>
        <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">聯絡我們</h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
          有任何影像製作需求或合作提案，歡迎與我們聯繫。
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* 聯絡表單 */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="mb-6 text-xl font-semibold text-white">傳送訊息</h2>
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-zinc-400">
                    姓名 <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-zinc-400">
                    Email <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm text-zinc-400">
                  公司 / 組織
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50"
                  placeholder="公司或組織名稱（選填）"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm text-zinc-400">
                  需求類型
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50"
                >
                  <option value="">請選擇服務類型</option>
                  {siteConfig.services.map((s) => (
                    <option key={s.name} value={s.name}>{s.name}</option>
                  ))}
                  <option value="other">其他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-zinc-400">
                  訊息內容 <span className="text-amber-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50"
                  placeholder="請描述您的需求..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-amber-500 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-amber-400 sm:w-auto sm:px-8"
              >
                送出訊息
              </button>
            </form>
          </div>

          {/* 聯絡資訊 */}
          <div className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h2 className="mb-6 text-xl font-semibold text-white">公司資訊</h2>
              <dl className="space-y-6">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">公司名稱</dt>
                  <dd className="mt-1 text-sm text-white">{siteConfig.name}</dd>
                  <dd className="text-xs text-zinc-500">{siteConfig.nameEn}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">統一編號</dt>
                  <dd className="mt-1 text-sm text-white">{siteConfig.taxId}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">地址</dt>
                  <dd className="mt-1 text-sm text-white">{siteConfig.address}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${siteConfig.email}`} className="text-sm text-amber-500 hover:text-amber-400 transition-colors">
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">Facebook</dt>
                  <dd className="mt-1">
                    <a
                      href={siteConfig.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amber-500 hover:text-amber-400 transition-colors"
                    >
                      彩蛋影像粉絲專頁
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h2 className="mb-4 text-xl font-semibold text-white">負責人</h2>
              <p className="text-sm text-white">高憲郎 Kurt Kao</p>
              <p className="mt-1 text-xs text-zinc-500">製作總監 / 創辦人</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
