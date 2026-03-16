import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* 公司資訊 */}
          <div>
            <div className="mb-4">
              <Image
                src={siteConfig.logo.footer}
                alt="彩蛋影像"
                width={63}
                height={33}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-1 text-xs text-zinc-400">{siteConfig.nameEn}</p>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              專注於XR（VR/AR）內容創作與互動沈浸式展演，結合最新科技與創意，提供一站式規劃與製作服務。
            </p>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/works" className="text-sm text-zinc-400 transition-colors hover:text-amber-500">
                  作品集
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-zinc-400 transition-colors hover:text-amber-500">
                  關於我們
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-400 transition-colors hover:text-amber-500">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">聯絡資訊</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>{siteConfig.address}</li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-amber-500">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-amber-500"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-amber-500"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-amber-500"
                >
                  Threads
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. 統編：{siteConfig.taxId}
          </p>
        </div>
      </div>
    </footer>
  );
}
