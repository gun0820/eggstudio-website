import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { siteConfig } from '@/data/site';

const heroImages = [
  'https://static.wixstatic.com/media/5526fe_9e968c44acd64d2c932a80b9297cd726~mv2.png/v1/fit/w_624,h_351,q_90,enc_avif,quality_auto/5526fe_9e968c44acd64d2c932a80b9297cd726~mv2.png',
  'https://static.wixstatic.com/media/5526fe_82609b7719b749a79d688a7d8eafe941~mv2.jpg/v1/fit/w_960,h_396,q_90,enc_avif,quality_auto/5526fe_82609b7719b749a79d688a7d8eafe941~mv2.jpg',
  'https://static.wixstatic.com/media/5526fe_23aa74858fe643fd913383c64d6adc93~mv2.jpg/v1/fit/w_960,h_396,q_90,enc_avif,quality_auto/5526fe_23aa74858fe643fd913383c64d6adc93~mv2.jpg',
  'https://static.wixstatic.com/media/5526fe_78487bd4bff342cab835ebffb81e3830~mv2.jpg/v1/fit/w_960,h_542,q_90,enc_avif,quality_auto/5526fe_78487bd4bff342cab835ebffb81e3830~mv2.jpg',
  'https://static.wixstatic.com/media/5526fe_bae758330d344b38bf898d14dd29a782~mv2.jpg/v1/fit/w_960,h_396,q_90,enc_avif,quality_auto/5526fe_bae758330d344b38bf898d14dd29a782~mv2.jpg',
  'https://static.wixstatic.com/media/5526fe_4da57ab77f35485abc96b82539392ffe~mv2.png/v1/fit/w_938,h_470,q_90,enc_avif,quality_auto/5526fe_4da57ab77f35485abc96b82539392ffe~mv2.png',
  'https://static.wixstatic.com/media/5526fe_32fff3503bf7480882a1c2a8e1b74b72~mv2.jpg/v1/fit/w_960,h_544,q_90,enc_avif,quality_auto/5526fe_32fff3503bf7480882a1c2a8e1b74b72~mv2.jpg',
  'https://static.wixstatic.com/media/5526fe_f11ca1dd34bb4f26a3d64ecc72aa87e4~mv2.jpg/v1/fit/w_960,h_642,q_90,enc_avif,quality_auto/5526fe_f11ca1dd34bb4f26a3d64ecc72aa87e4~mv2.jpg',
  'https://static.wixstatic.com/media/5526fe_55f0ddc1443649818b4475281a542ee3~mv2.png/v1/fit/w_960,h_471,q_90,enc_avif,quality_auto/5526fe_55f0ddc1443649818b4475281a542ee3~mv2.png',
  'https://static.wixstatic.com/media/5526fe_14f7569bd35741bcb8bb6a1b5e8ad4ef~mv2.jpg/v1/fit/w_960,h_642,q_90,enc_avif,quality_auto/5526fe_14f7569bd35741bcb8bb6a1b5e8ad4ef~mv2.jpg',
  'https://static.wixstatic.com/media/d152f6_a21ac99f47a34401970795ec8d4caf68~mv2.jpg/v1/fit/w_960,h_642,q_90,enc_avif,quality_auto/d152f6_a21ac99f47a34401970795ec8d4caf68~mv2.jpg',
];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* 背景輪播圖片網格 */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1 opacity-20">
          {heroImages.slice(0, 6).map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
                sizes="33vw"
                priority={i < 3}
              />
            </div>
          ))}
        </div>
        {/* 背景漸層覆蓋 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/80 to-[#0a0a0a]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-sm font-medium tracking-widest text-amber-500 uppercase">
            {siteConfig.nameEn}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl">
            科技與藝術的完美交融，<br />
            <span className="text-amber-500">打造極致沈浸式體驗</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
            彩蛋影像有限公司，專注於XR（VR/AR）內容創作與互動沈浸式展演，我們結合最新科技與創意，為客戶提供一站式規劃與製作服務，探索未來科技藝術的無限可能。
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/works"
              className="inline-flex items-center rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-amber-400 hover:scale-105"
            >
              瀏覽作品集
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-amber-500/50 hover:text-amber-500"
            >
              聯絡我們
            </Link>
          </div>
        </div>

        {/* 往下捲動提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-6 w-6 text-zinc-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* 輪播圖片展示 */}
      <section className="overflow-hidden py-12">
        <div className="flex animate-scroll gap-4">
          {[...heroImages, ...heroImages].map((img, i) => (
            <div key={i} className="relative h-48 w-80 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={img}
                alt={`作品展示 ${(i % heroImages.length) + 1}`}
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 精選作品 */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium tracking-widest text-amber-500 uppercase">Featured Works</p>
            <h2 className="mt-2 text-3xl font-bold text-white">精選作品</h2>
          </div>
          <Link
            href="/works"
            className="hidden text-sm text-zinc-400 transition-colors hover:text-amber-500 sm:block"
          >
            查看全部 &rarr;
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/works"
            className="text-sm text-zinc-400 transition-colors hover:text-amber-500"
          >
            查看全部作品 &rarr;
          </Link>
        </div>
      </section>

      {/* 服務項目 */}
      <section className="border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium tracking-widest text-amber-500 uppercase">Our Services</p>
            <h2 className="mt-2 text-3xl font-bold text-white">服務項目</h2>
            <p className="mx-auto mt-4 max-w-lg text-zinc-400">
              從構思到完成，我們提供全方位的 XR 沉浸式體驗製作服務
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service) => (
              <div
                key={service.name}
                className="group rounded-xl border border-white/5 bg-white/[0.03] p-6 transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.05]"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white/5 p-2 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-white">{service.name}</h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-amber-500/10 to-transparent p-12 text-center md:p-16">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              有 XR 沉浸式體驗製作需求？
            </h2>
            <p className="mx-auto mt-4 max-w-md text-zinc-400">
              無論是 VR 影片、互動式展演、光雕投影還是 AR 擴增實境，我們都能為您打造最佳方案。
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-amber-400 hover:scale-105"
            >
              立即聯絡
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
