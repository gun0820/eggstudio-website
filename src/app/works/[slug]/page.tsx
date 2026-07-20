import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects';
import { siteConfig } from '@/data/site';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: '找不到作品' };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${siteConfig.shortName}`,
      description: project.description,
      type: 'article',
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // 取得相關作品（同分類，排除自己）
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <main className="pt-20">
      <article>
        {/* 麵包屑 */}
        <div className="mx-auto max-w-7xl px-6 pt-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500">
            <Link href="/" className="transition-colors hover:text-amber-500">首頁</Link>
            <span>/</span>
            <Link href="/works" className="transition-colors hover:text-amber-500">作品集</Link>
            <span>/</span>
            <span className="text-zinc-300">{project.title}</span>
          </nav>
        </div>

        {/* Hero 圖片區 */}
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-zinc-800">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>

        {/* 作品資訊 */}
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* 主要內容 */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-white md:text-4xl">{project.title}</h1>
              {project.titleEn !== project.title && (
                <p className="mt-2 text-lg text-zinc-500">{project.titleEn}</p>
              )}
              <p className="mt-6 text-zinc-400 leading-relaxed text-lg">
                {project.description}
              </p>

              {project.overview && project.overview.length > 0 && (
                <div className="mt-6 space-y-4">
                  {project.overview.map((paragraph, i) => (
                    <p key={i} className="text-zinc-400 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {project.highlights && project.highlights.length > 0 && (
                <section className="mt-12">
                  <h2 className="text-lg font-bold text-white">技術與製作重點</h2>
                  <ul className="mt-4 space-y-3">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-zinc-400 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.awards && project.awards.length > 0 && (
                <section className="mt-12">
                  <h2 className="text-lg font-bold text-white">展演與獲獎紀錄</h2>
                  <ul className="mt-4 space-y-3">
                    {project.awards.map((item) => (
                      <li key={item} className="flex gap-3 text-zinc-400 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* 側邊資訊 */}
            <div className="space-y-6">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">作品資訊</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs text-zinc-500">分類</dt>
                    <dd className="mt-1">
                      <span className="inline-block rounded-full bg-amber-500/90 px-3 py-0.5 text-xs font-medium text-black">
                        {project.category}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-zinc-500">年份</dt>
                    <dd className="mt-1 text-sm text-white">{project.year}</dd>
                  </div>
                  {project.client && (
                    <div>
                      <dt className="text-xs text-zinc-500">委製 / 合作單位</dt>
                      <dd className="mt-1 text-sm text-white">{project.client}</dd>
                    </div>
                  )}
                  {project.role && (
                    <div>
                      <dt className="text-xs text-zinc-500">擔任角色</dt>
                      <dd className="mt-1 text-sm text-white">{project.role}</dd>
                    </div>
                  )}
                  {project.venue && (
                    <div>
                      <dt className="text-xs text-zinc-500">展演地點</dt>
                      <dd className="mt-1 text-sm text-white">{project.venue}</dd>
                    </div>
                  )}
                  {project.duration && (
                    <div>
                      <dt className="text-xs text-zinc-500">體驗時長</dt>
                      <dd className="mt-1 text-sm text-white">{project.duration}</dd>
                    </div>
                  )}
                  {project.budget && (
                    <div>
                      <dt className="text-xs text-zinc-500">製作規模</dt>
                      <dd className="mt-1 text-sm text-white">{project.budget}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-xs text-zinc-500">標籤</dt>
                    <dd className="mt-1 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-400">
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* 相關作品 */}
        {relatedProjects.length > 0 && (
          <section className="border-t border-white/5 mt-16">
            <div className="mx-auto max-w-7xl px-6 py-16">
              <h2 className="mb-8 text-xl font-bold text-white">相關作品</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((p) => (
                  <Link key={p.slug} href={`/works/${p.slug}`} className="group block">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-amber-500/30">
                      <div className="relative aspect-video bg-zinc-800 overflow-hidden">
                        <Image
                          src={p.thumbnail}
                          alt={p.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-semibold text-white group-hover:text-amber-500 transition-colors">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-xs text-zinc-500">{p.category}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
