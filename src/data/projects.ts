export interface Project {
  slug: string;
  title: string;
  titleEn: string;
  category: string;
  year: number;
  description: string;
  thumbnail: string;
  tags: string[];
  client?: string;
  duration?: string;
}

export const projects: Project[] = [
  {
    slug: 'gjm',
    title: '玉山守護者',
    titleEn: 'Guardians of Jade Mountain',
    category: 'VR LBE',
    year: 2024,
    description: '大型互動虛擬實境體驗，帶領玩家深入玉山，展開一場守護自然的冒險旅程。',
    thumbnail: 'https://static.wixstatic.com/media/5526fe_9e968c44acd64d2c932a80b9297cd726~mv2.png/v1/fill/w_749,h_387,al_c,lg_1,q_85,enc_avif,quality_auto/1Copie%20de%20GuardiansStill017.png',
    tags: ['VR', 'LBE', '6DoF', 'Installation'],
  },
  {
    slug: 'dutchfort',
    title: '重返荷蘭城',
    titleEn: 'Dutchfort',
    category: 'AR',
    year: 2020,
    description: '常設展場｜實景再造｜擴增實境遊戲｜投影劇院，結合多種技術重現荷蘭城的歷史風華。',
    thumbnail: 'https://static.wixstatic.com/media/5526fe_82609b7719b749a79d688a7d8eafe941~mv2.jpg/v1/fill/w_1005,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1Copie%20de%20GuardiansStill017.jpg',
    tags: ['AR', 'VR S3D', '光雕投影', 'MR', '常設展場'],
  },
  {
    slug: 'slhs',
    title: '神靈活現',
    titleEn: 'SLHS',
    category: 'AR',
    year: 2018,
    description: '以擴增實境技術讓神靈躍然眼前，創造虛實交融的文化體驗。',
    thumbnail: 'https://static.wixstatic.com/media/5526fe_23aa74858fe643fd913383c64d6adc93~mv2.jpg/v1/fill/w_1005,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1Copie%20de%20GuardiansStill017.jpg',
    tags: ['AR', 'AR App', '文化體驗'],
  },
  {
    slug: '3steps',
    title: '關鍵三布局',
    titleEn: '3 Steps',
    category: 'VR S3D',
    year: 2019,
    description: '立體視覺虛擬實境與內容創作的結合，以三個關鍵布局呈現深度敘事。',
    thumbnail: 'https://static.wixstatic.com/media/5526fe_78487bd4bff342cab835ebffb81e3830~mv2.jpg/v1/fill/w_1005,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1Copie%20de%20GuardiansStill017.jpg',
    tags: ['VR S3D', '內容開發'],
  },
  {
    slug: 'ai-tu',
    title: '愛徒',
    titleEn: 'Ai Tu',
    category: 'VR S3D',
    year: 2022,
    description: 'VR S3D 立體視覺虛擬實境作品，探索師生之間的情感連結。',
    thumbnail: 'https://static.wixstatic.com/media/5526fe_bae758330d344b38bf898d14dd29a782~mv2.jpg/v1/fill/w_1005,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1Copie%20de%20GuardiansStill017.jpg',
    tags: ['VR S3D'],
  },
  {
    slug: 'save-the-castle',
    title: '拯救城堡總動員',
    titleEn: 'Save the Castle',
    category: '內容開發',
    year: 2019,
    description: '以創意內容開發打造的 4D 體感冒險體驗，觀眾化身勇者協力完成拯救任務。',
    thumbnail: 'https://static.wixstatic.com/media/5526fe_4da57ab77f35485abc96b82539392ffe~mv2.png/v1/fill/w_908,h_470,al_c,q_90,enc_avif,quality_auto/1Copie%20de%20GuardiansStill017.png',
    tags: ['內容開發', '4D體感'],
  },
  {
    slug: 'small-thing-interactive',
    title: '小事製作_戰鬥果醬',
    titleEn: 'Small Thing Production - Battle Jam',
    category: '互動式展演',
    year: 2023,
    description: '與小事製作合作的互動式展演，將表演藝術與數位科技巧妙融合。',
    thumbnail: 'https://static.wixstatic.com/media/5526fe_32fff3503bf7480882a1c2a8e1b74b72~mv2.jpg/v1/fill/w_1005,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1Copie%20de%20GuardiansStill017.jpg',
    tags: ['互動式展演', '表演藝術'],
  },
  {
    slug: 'fox-fairy',
    title: '狐仙',
    titleEn: 'Fox Fairy',
    category: '光雕投影',
    year: 2021,
    description: '以浮空投影與動態捕捉技術，重現東方民間傳說「狐仙」的神話世界。',
    thumbnail: 'https://static.wixstatic.com/media/5526fe_f11ca1dd34bb4f26a3d64ecc72aa87e4~mv2.jpg/v1/fill/w_1005,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1Copie%20de%20GuardiansStill017.jpg',
    tags: ['光雕投影', '浮空投影', '動態捕捉'],
  },
  {
    slug: 'science-fiction',
    title: '科學幻想',
    titleEn: 'Science Fiction',
    category: '內容開發',
    year: 2022,
    description: '融合科學與幻想的創意內容，帶領觀眾穿越科幻場景，感受未來世界的想像。',
    thumbnail: 'https://static.wixstatic.com/media/5526fe_55f0ddc1443649818b4475281a542ee3~mv2.png/v1/fill/w_1005,h_520,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/1Copie%20de%20GuardiansStill017.png',
    tags: ['內容開發', '科幻'],
  },
  {
    slug: 'dream-god',
    title: '相信大神',
    titleEn: 'Believe in God',
    category: '互動式展演',
    year: 2021,
    description: '互動式展演作品，透過科技與觀眾互動，創造參與式的沉浸體驗。',
    thumbnail: 'https://static.wixstatic.com/media/5526fe_14f7569bd35741bcb8bb6a1b5e8ad4ef~mv2.jpg/v1/fill/w_1005,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1Copie%20de%20GuardiansStill017.jpg',
    tags: ['互動式展演'],
  },
  {
    slug: 'turtle-pleasure',
    title: '烏龜才有的快感',
    titleEn: 'Turtle Pleasure',
    category: '互動式展演',
    year: 2020,
    description: '互動式展演作品，以獨特的視角重新詮釋慢活哲學，感受意想不到的感官體驗。',
    thumbnail: 'https://static.wixstatic.com/media/d152f6_a21ac99f47a34401970795ec8d4caf68~mv2.jpg/v1/fill/w_1005,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1Copie%20de%20GuardiansStill017.jpg',
    tags: ['互動式展演'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}

export const categories = [...new Set(projects.map((p) => p.category))];
