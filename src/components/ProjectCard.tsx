import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/works/${project.slug}`} className="group block">
      <article className="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-amber-500/30 hover:bg-white/8">
        {/* 縮圖 */}
        <div className="relative aspect-video bg-zinc-800 overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* 分類標籤 */}
          <div className="absolute top-3 left-3">
            <span className="rounded-full bg-amber-500/90 px-3 py-1 text-xs font-medium text-black">
              {project.category}
            </span>
          </div>
        </div>

        {/* 資訊 */}
        <div className="p-5">
          <h3 className="text-base font-semibold text-white transition-colors group-hover:text-amber-500">
            {project.title}
          </h3>
          {project.titleEn !== project.title && (
            <p className="mt-1 text-xs text-zinc-500">{project.titleEn}</p>
          )}
          <p className="mt-2 text-sm text-zinc-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-500">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
