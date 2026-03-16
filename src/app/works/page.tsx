import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import { projects, categories } from '@/data/projects';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: '作品集',
  description: `瀏覽${siteConfig.name}的所有作品，包含 VR 影片、XR 沉浸式體驗、互動裝置等精彩作品。`,
  openGraph: {
    title: `作品集 | ${siteConfig.shortName}`,
    description: `瀏覽${siteConfig.name}的所有作品，包含 VR 影片、XR 沉浸式體驗、互動裝置等精彩作品。`,
  },
};

export default function WorksPage() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-amber-500 uppercase">Our Works</p>
        <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">作品集</h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
          從 VR 影片到互動裝置，探索我們的創作歷程與成果。
        </p>

        {/* 分類標籤 */}
        <div className="mt-8 flex flex-wrap gap-2">
          <span className="rounded-full bg-amber-500 px-4 py-1.5 text-xs font-medium text-black">
            全部 ({projects.length})
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-white/10 px-4 py-1.5 text-xs text-zinc-400"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* 作品網格 */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
