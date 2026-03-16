import type { Metadata } from 'next';
import Image from 'next/image';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: '關於我們',
  description: `${siteConfig.name}成立於 ${siteConfig.established} 年，是具備XR體驗與藝術整合能力的跨域製作公司。`,
  openGraph: {
    title: `關於我們 | ${siteConfig.shortName}`,
    description: `${siteConfig.name}成立於 ${siteConfig.established} 年，是具備XR體驗與藝術整合能力的跨域製作公司。`,
  },
};

const partners = [
  {
    name: '三虎映製所',
    logo: 'https://static.wixstatic.com/media/5526fe_fe8c29a617154ac4bcfda27d49303c44~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Partner_%E4%B8%89%E8%99%8E%E6%98%A0%E8%A3%BD%E6%89%80.png',
    width: 72,
    height: 72,
  },
  {
    name: '軟硬倍事',
    logo: 'https://static.wixstatic.com/media/5526fe_857da5143f404e6da087fe2812bae153~mv2.png/v1/fill/w_170,h_79,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Partner_%E8%BB%9F%E7%A1%AC%E5%80%8D%E4%BA%8B.png',
    width: 170,
    height: 79,
  },
  {
    name: '飛望影像',
    logo: 'https://static.wixstatic.com/media/5526fe_8f7e7325d21046f7b01fd5527da96ff0~mv2.png/v1/fill/w_175,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Partner_%E9%A3%9B%E6%9C%9B%E5%BD%B1%E5%83%8F.png',
    width: 175,
    height: 72,
  },
  {
    name: '記得存檔',
    logo: 'https://static.wixstatic.com/media/5526fe_30da9ec22a104d07a7392b093e902e84~mv2.png/v1/fill/w_228,h_79,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Partner_%E8%A8%98%E5%BE%97%E5%AD%98%E6%AA%94.png',
    width: 228,
    height: 79,
  },
  {
    name: '台藝大數媒所',
    logo: 'https://static.wixstatic.com/media/5526fe_2e8bceb7f4de4ef59ef150747f6d306a~mv2.png/v1/fill/w_314,h_53,al_c,lg_1,q_85,enc_avif,quality_auto/Partner_%E5%8F%B0%E8%97%9D%E5%A4%A7%E6%95%B8%E5%AA%92%E6%89%80.png',
    width: 314,
    height: 53,
  },
  {
    name: 'INNERSPACE',
    logo: 'https://static.wixstatic.com/media/5526fe_105e6df4b757461aac2323ff484574ea~mv2.png/v1/fill/w_330,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/partner_INNERSPACE.png',
    width: 330,
    height: 45,
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-amber-500 uppercase">About Us</p>
        <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">關於我們</h1>
        <div className="mt-6 max-w-3xl space-y-4 text-lg text-zinc-400 leading-relaxed">
          <p>
            彩蛋影像有限公司成立於2018年，是具備XR體驗與藝術整合能力的跨域製作公司，致力於探索科技與傳統、科技與視覺的各種可能性，近年與劇場／舞團／表演藝術團體碰撞火花，跨界製作多種有趣與科技前瞻的互動體驗作品。
          </p>
          <p>
            我們的專業領域是AR、VR、MR、沉浸式裝置、博物館體驗、互動式體驗和科技藝術展演製作、沉浸式劇院、人工智慧......有時我們的專案橫跨這些領域，在藝術之間架起橋樑。
          </p>
          <p>
            與技術結合、與創意構思，致力在沉浸式內容領域創造新的體驗，透過想像和提問在生產鏈中實踐。
          </p>
        </div>
      </section>

      {/* 服務專長 */}
      <section className="border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">我們的專長</h2>
              <ul className="mt-6 space-y-3">
                {siteConfig.services.map((service) => (
                  <li key={service.name} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <div>
                      <span className="text-sm font-medium text-white">{service.name}</span>
                      <span className="text-sm text-zinc-500"> - {service.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">我們的理念</h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                我們相信科技不只是工具，更是創造體驗的媒介。從 VR 到 AR，從互動式展演到光雕投影，彩蛋影像不斷探索科技與藝術的邊界，為每一個專案注入創意與熱情。
              </p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                「彩蛋」象徵著驚喜與發現。我們希望每一部作品，都能為觀眾帶來意想不到的感動與驚喜。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 創辦人 */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest text-amber-500 uppercase">Founder</p>
        <h2 className="mt-2 text-2xl font-bold text-white">創辦人</h2>
        <div className="mt-8 flex flex-col items-start gap-8 sm:flex-row">
          <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-2xl bg-zinc-800">
            <Image
              src="https://static.wixstatic.com/media/5526fe_b980ce1769a24c69aa5615fcdc751835~mv2.jpg/v1/crop/x_21,y_0,w_558,h_338/fill/w_601,h_364,al_c,lg_1,q_80,enc_avif,quality_auto/kurtKao.jpg"
              alt="高憲郎 Kurt Kao"
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">高憲郎 Kurt Kao</h3>
            <p className="mt-1 text-sm text-amber-500">製作總監</p>
            <p className="mt-4 max-w-lg text-zinc-400 leading-relaxed">
              致力於跨媒體創意開發與應用製作。
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-amber-500/60" />
                台藝大影音創作與數位媒體產業研究所 客座講師
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-amber-500/60" />
                彩蛋影像有限公司創辦人
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-medium tracking-widest text-amber-500 uppercase">Partners</p>
          <h2 className="mt-2 text-2xl font-bold text-white">合作夥伴</h2>
          <div className="mt-12 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] p-6 transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.05]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className="h-12 w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
