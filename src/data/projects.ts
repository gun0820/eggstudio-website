export interface Project {
  slug: string;
  title: string;
  titleEn: string;
  category: string;
  year: number;
  description: string;
  thumbnail: string;
  tags: string[];
  /** 委製單位、業主或合作廠商 */
  client?: string;
  /** 彩蛋影像在本案中擔任的角色 */
  role?: string;
  /** 展演／放映地點 */
  venue?: string;
  /** 體驗或影片時長 */
  duration?: string;
  /** 製作規模、經費量級 */
  budget?: string;
  /** 作品詳細介紹，每個元素為一個段落 */
  overview?: string[];
  /** 技術與製作重點條列 */
  highlights?: string[];
  /** 展演、影展入選與獲獎紀錄 */
  awards?: string[];
}

export const projects: Project[] = [
  {
    slug: 'gjm',
    title: '玉山守護者',
    titleEn: 'Guardians of Jade Mountain',
    category: 'VR LBE',
    year: 2024,
    description: '大型互動虛擬實境體驗，帶領玩家深入玉山，展開一場守護自然的冒險旅程。',
    thumbnail: '/works/gjm.jpg',
    tags: ['VR', 'LBE', '6DoF', 'Installation'],
    client: '飛望影像 Volos Films × INNERSPACE VR FRANCE',
    role: '共同製作・製片',
    venue: '威尼斯影展 Venice Immersive、韓國國立現代美術館 MMCA、高雄市立歷史博物館',
    duration: '約 20 分鐘／場，最多 3 人同時體驗',
    overview: [
      '《玉山守護者》是臺法合製、由韓國導演權河允（Hayoun Kwon）執導的多人走動式 VR 作品。觀眾戴上頭顯後可在 10m × 10m 的實體空間中自由行走，最多三人同場，化身為玉山的「守護者」，沉浸在虛實交錯的山林之中。',
      '故事取材自日治時期的真實人物：日本人類學家森丑之助，與布農族大分（Tafen）社頭目阿里曼・西肯。阿里曼因族人死於日本人的監獄而誓言復仇，卻在森丑之助獨自穿越敵境、五日夜行安然生還之後，不得不承認這名日本人的勇氣。兩人自此結為摯友，森丑之助後來被稱為「布農之友」，並成為日本原住民政策最猛烈的批評者。',
      '體驗以台灣傳統皮影戲結合剪紙動畫的視覺語彙展開，旁白由玉山本身擔任——山是這段跨族友誼唯一的見證者。觀眾手上只有一盞 1930 年代造型的油燈，以「光」作為唯一的互動語彙，在全暗的環境中逐層深入玉山。場景則依據森丑之助留下的動植物寫生、照片與研究筆記重建。',
    ],
    highlights: [
      '6DoF 多人走動式 VR，10m × 10m 體驗場域，最多 3 人同場；採紅外線定位器搭配頭顯，在低光環境下仍能穩定定位',
      '以 Unreal Engine 開發，捨棄手把操作：觀眾手持虛擬油燈照亮場景觸發互動，語言選擇則以視線（gaze）完成',
      'Game Master 控制介面即時同步監控所有頭顯與主機，並以白色光暈標示彼此位置，避免多人碰撞',
      '運用「變化盲（change blindness）」手法，在觀眾身後擦除與改寫場景，於有限空間中創造無限行走的錯覺',
      '支援中文、英文、法文、日文、韓文與布農語共六種語言配音',
      '前一位觀眾留下的皮影會殘留給下一位觀眾看見，形成輪迴式的入場設計',
    ],
    awards: [
      '2024 第 81 屆威尼斯影展 Venice Immersive 競賽單元正式入選，於 Isola del Lazzaretto Vecchio 展演（8/28–9/7）',
      '2024–2025 韓國國立現代美術館 MMCA Seoul 展出（2024/10/25–2025/3/23），五個月累計 4,416 人次體驗',
      '2025 高雄市立歷史博物館「玉山守護者 VR －森丑之助的臺灣奇幻旅程」特展（10/3–10/26），高雄市電影館 × 高史博跨域合作',
      '作品源自 New Images Festival（巴黎）與高雄電影節合作之 Taiwan VR Residency，導演權河允為 2020 年駐村得主',
      '獲文化內容策進院 TAICCA 沉浸式內容國際合資合製支持、法國 CNC、巴黎市政府 Mission Cinéma、MMCA Korea 與 SBS Foundation 贊助',
    ],
  },
  {
    slug: 'dutchfort',
    title: '重返荷蘭城',
    titleEn: 'Dutchfort',
    category: 'AR',
    year: 2021,
    description: '常設展場｜實景再造｜擴增實境遊戲｜投影劇院，結合多種技術重現荷蘭城的歷史風華。',
    thumbnail: '/works/dutchfort.jpg',
    tags: ['AR', 'VR S3D', '光雕投影', 'MR', '常設展場'],
    client: '澎湖縣政府文化局',
    role: '統籌製作',
    venue: '澎湖金龜頭砲台文創園區',
    overview: [
      '《重返荷蘭城－風櫃尾歷史現場再現》是彩蛋影像為澎湖縣政府文化局執行的常設展，標的為國定古蹟馬公風櫃尾荷蘭城堡的活化再利用。',
      '展覽分為兩個展區。展區 A「初探・風櫃尾荷蘭古城」以 iPad AR 導覽帶領觀眾認識古城構造，四個互動項目、全區約 15 分鐘；展區 B「互動・風櫃尾歷史事件簿」以光雕投影互動重現五段歷史事件，全區約 20 分鐘。',
      '場域端同步進行現地清理、城堡輪廓重現、遺跡導覽牌設施與實體城堡模型製作，讓數位內容與真實古蹟現場相互對照。內容考證由文史顧問鄭維中協力，並依 2016 年古蹟調查研究報告重建：城堡平面近正方形、長寬約 56.5 公尺，四角稜堡共置 29 門砲。',
    ],
    highlights: [
      '展區 A：iPad AR 導覽，4 個互動項目、每項 2–3 分鐘',
      '展區 B：光雕投影互動，5 段歷史事件、每項 3–4 分鐘',
      '常設展採自動化無人系統控制與遠端維護，每月約 6,000 人次參觀',
      '實體端整合現地清理、城堡輪廓重現、遺跡導覽牌設施與城堡模型製作',
    ],
  },
  {
    slug: 'slhs',
    title: '神靈活現',
    titleEn: 'SLHS',
    category: 'AR',
    year: 2019,
    description: '以擴增實境技術讓神靈躍然眼前，創造虛實交融的文化體驗。',
    thumbnail: '/works/slhs.jpg',
    tags: ['AR', 'AR App', '文化體驗'],
    client: '文化部《IP 內容實驗室》「創 IP 秀 4D」原創加值實驗組',
    role: '製作總監・原創開發',
    venue: '2019 高雄電影節「XR 大觀」・駁二藝術特區 P3 倉庫',
    overview: [
      '《神靈活現》延續 VR 電影《落難神像》的粧佛工藝文本，入選文化部《IP 內容實驗室》「創 IP 秀 4D」實驗計畫原創加值實驗組。',
      '作品以 4D Views 容積擷取（Volumetric Capture）技術，完整記錄漆線雕藝師顏金益的工藝手路——搓線、纏線、上底漆、上金箔四個步驟，每個步驟約 15 秒，再經 CG 後期動畫處理，透過手機 AR App 讓神像工藝立體地出現在觀眾眼前。',
      '2019 年於高雄電影節「XR 大觀」單元展出（10/10–10/20），展區面寬 600 公分、深 120 公分，分為 AR 體驗區與漆線工藝區，藝師現場展演，累計超過 500 人次體驗。',
    ],
    highlights: [
      '4D Views 容積擷取結合 CG 後期動畫，完整保存漆線雕工藝的動態手路',
      '手機 AR App 呈現，觀眾可自由環繞觀看虛擬神像',
      '以 SLA 乳白光敏樹脂 3D 列印佛像線條模型（250 × 390 × 318.5 mm），供藝師現場對位',
      '團隊：製作總監高憲郎、導演高逸軍、動畫總監廖偉智（魔特創意）、AR 技術總監賴彥之（愛迪斯科技）',
    ],
    awards: [
      '2019 高雄電影節「XR 大觀」單元展出，累計 500 人次以上體驗',
      '展期間 NewImages、韓國富川奇幻影展、美國 Tribeca 影展 VR 策展人到場交流',
    ],
  },
  {
    slug: '3steps',
    title: '關鍵三布局',
    titleEn: '3 Steps',
    category: 'VR S3D',
    year: 2020,
    description: '立體視覺虛擬實境與內容創作的結合，以三個關鍵布局呈現深度敘事。',
    thumbnail: '/works/3steps.jpg',
    tags: ['VR S3D', '內容開發'],
    client: '外交部',
    role: '統籌製作',
    venue: '總統府展出',
    overview: [
      '《關鍵三布局》（CRUCIAL HOURS）是彩蛋影像為外交部製作的 VR S3D 立體虛擬實境影片，以 COVID-19 防疫為題，向國際說明台灣的防疫布局。',
      '影片以「十個小時」為敘事骨幹，串起十五個場景：中央流行疫情指揮中心、陳建仁談 SARS 經驗、桃園機場入境檢疫、電子圍籬追蹤系統、日產 1,500 萬片的口罩產線、聚陽實業防護衣、負壓病房、口罩外交、台大疫苗研發，到唐鳳的線上國際分享，最後定格於 TAIWAN CAN HELP. TAIWAN WILL HELP.',
      '完成中英雙語版本，並於總統府展出約兩個月，參觀人次約 5,000 人。',
    ],
    highlights: [
      'VR S3D 立體視覺，8K 解析度畫質',
      '中英雙語版本，同步交付 4K 平面版影片',
      '專案範疇涵蓋影片製作、記者會、教育訓練與 VR 體驗區建置維運',
    ],
  },
  {
    slug: 'ai-tu',
    title: '愛徒',
    titleEn: 'Ai Tu',
    category: 'VR S3D',
    year: 2022,
    description: 'VR S3D 立體視覺虛擬實境作品，探索師生之間的情感連結。',
    thumbnail: '/works/ai-tu.jpg',
    tags: ['VR S3D'],
    client: '軟硬倍事｜文策院 110 年度未來內容原型開發支持計畫',
    role: '共同開發・技術統籌',
    overview: [
      '《愛徒－致可溶化的魚》是彩蛋影像與軟硬倍事合作的異地共演線上演出原型，獲文化內容策進院「110 年度未來內容原型開發支持計畫」支持。',
      '作品同時存在三種視角：現場沈浸遊走的觀眾、線上監看的觀眾，以及戴上頭顯的 VR 體驗者。體驗依序展開為五個段落——文本說書、演員互動、命定體驗者、選擇與創造，最後成為「愛徒」。',
      '技術上以 Unity3D 搭配 URP 賽璐璐風格渲染，透過臉部辨識將演員的即時演出合成進 VR 體驗者的畫面中。',
    ],
    highlights: [
      'Unity3D + URP 賽璐璐風格渲染，以 TimeLine 控制演出流程',
      '臉部辨識即時合成演員演出至 VR 裝置，搭配 AirLink 無線串流',
      '同步進行表演團隊與觀眾訪談研究：八成受訪者可接受 800–1,000 元的線上展演票價',
    ],
  },
  {
    slug: 'save-the-castle',
    title: '拯救城堡總動員',
    titleEn: 'Save the Castle',
    category: '內容開發',
    year: 2021,
    description: '以創意內容開發打造的 5D 體感冒險體驗，觀眾化身勇者協力完成拯救任務。',
    thumbnail: '/works/save-the-castle.jpg',
    tags: ['內容開發', '5D體感'],
    client: '勞動部勞動及職業安全衛生研究所',
    role: '統籌製作',
    venue: '勞工安全衛生展示館 5D 劇院',
    overview: [
      '《拯救城堡總動員》（Castle Rescue）是彩蛋影像為勞動部勞動及職業安全衛生研究所製作的 5D 體感動畫，於勞工安全衛生展示館 5D 劇院放映，核心觀眾為兒童與青少年。',
      '故事從一座音樂盒城堡開始：地震後齒輪工廠解體，國王號召義勇軍前來修復。施工過程中接連發生墜落、落物撞擊、滑倒與吊掛未著反光背心等事故，安全帽、防滑鞋、反光背心與安全繩索因此一一登場；焊接火星引燃發電機漏油爆炸後，再帶出滅火器、防火布與焊接區隔離的觀念。',
      '5D 劇院結合立體放映系統、震動座椅與特效設備，由電腦控制系統與影像連動。動畫以遊戲引擎製作，保留了日後轉製 VR／AR 版本的彈性。本片另有英文版本，屬勞安所同案五支系列影片之一。',
    ],
    highlights: [
      '5D 體感劇院：立體放映系統＋震動座椅與特效設備＋電腦控制系統連動',
      '以遊戲引擎製作，保留後續轉製 VR／AR 的彈性',
      '將墜落、落物撞擊、滑倒、火災等職安情境，轉化為兒少能理解的冒險敘事',
      '中英雙語版本，屬勞安所同案五支系列影片之一',
    ],
  },
  {
    slug: 'small-thing-interactive',
    title: '小事製作_戰鬥果醬',
    titleEn: 'Small Thing Production - Battle Jam',
    category: '互動式展演',
    year: 2022,
    description: '與小事製作合作的互動式展演，將表演藝術與數位科技巧妙融合。',
    thumbnail: '/works/small-thing-interactive.jpg',
    tags: ['互動式展演', '表演藝術'],
    client: '國家兩廳院 35 週年委託製作｜小事製作 Les Petites Choses Production',
    role: '共同呈現・數位技術統籌',
    venue: '國家兩廳院 實驗劇場・數位空間',
    duration: '2022.02.21–02.27',
    overview: [
      '《小事製作：戰鬥果醬 OUS》是國家兩廳院 35 週年委託製作、由小事製作與彩蛋影像共同呈現的特別計畫，於 2022 TIFA 台灣國際藝術節演出。',
      '賽事開放 150 名參賽者報名，先透過三場數位海選選出 66 強，再進入實體賽事。數位海選在虛擬空間中進行，參賽者資訊化為互動道具散落於空間地圖上，另設名片交換區與 off battle jam 區，讓線上觀眾也能參與交流。',
      '實體賽事以子母畫面即時講評、多視角切換與大眾票選進行直播串流，把街舞比賽的臨場感延伸到劇場之外。',
    ],
    highlights: [
      '數位海選虛擬空間：互動道具化的參賽者資訊、名片交換區與 off battle jam 區',
      '實體賽事直播：子母畫面即時講評、多視角切換、線上大眾票選',
      '150 名報名者經三場數位海選選出 66 強，進入實體賽事',
    ],
    awards: [
      '2022 TIFA 台灣國際藝術節・國家兩廳院 35 週年委託製作',
      '系列前身《週一學校》累計逾 65 場實體與 12 場虛擬活動、逾 9,000 人參與',
      '2021 屆為該檔期第一個在 TIFA 售罄的作品，賽事當日限時動態觸及逾 23 萬人次',
    ],
  },
  {
    slug: 'fox-fairy',
    title: '狐仙',
    titleEn: 'Fox Fairy',
    category: '互動式展演',
    year: 2021,
    description: '以浮空投影與動態捕捉技術，重現東方民間傳說「狐仙」的神話世界。',
    thumbnail: '/works/fox-fairy.jpg',
    tags: ['浮空投影', '動態捕捉'],
    client: '國光劇團',
  },
  {
    slug: 'science-fiction',
    title: '科學幻想',
    titleEn: 'Science Fiction',
    category: '內容開發',
    year: 2021,
    description: '以動畫合成與特效打造的科幻影像作品，虛構場景與實拍畫面無縫疊合。',
    thumbnail: '/works/science-fiction.jpg',
    tags: ['動畫合成', '特效', '科幻'],
  },
  {
    slug: 'dream-god',
    title: '相信大神',
    titleEn: 'Believe in God',
    category: '互動式展演',
    year: 2021,
    description: '互動式展演作品，透過科技與觀眾互動，創造參與式的沉浸體驗。',
    thumbnail: '/works/dream-god.jpg',
    tags: ['互動式展演'],
    client: '2021 台灣文博會・數據廟 SUPERMICROS 主題館（華山展區）',
    role: '即時臉部捕捉互動技術開發',
    venue: '華山 1914 文化創意產業園區',
    overview: [
      '「夢想大神」是 2021 台灣文博會華山展區主題館「數據廟 SUPERMICROS」中的互動單元，彩蛋影像負責即時臉部捕捉互動的技術開發。',
      '該屆主題館以「相信人、土地、環境」為題，探討數據流可載舟亦覆舟。展區由線上平台、參拜大廳、夢想大神、信仰走廊、共創神殿、光明神諭與希望信物串連，觀眾的參觀數據最終會化為專屬籤詩與信物配對。',
      '「夢想大神」本身是一場大型螢幕脫口秀：前台為表演場域，後台架設動態捕捉設備，搭配 Chatbot 引導式問答與呈現百分比的空間跑馬燈，讓虛擬神明即時回應現場觀眾。展區每 20 分鐘一輪，每日 10:00–18:00 運作。',
    ],
    highlights: [
      '即時臉部捕捉互動：臉部辨識互動程式、人物臉部 3D 模型與表情動畫建置',
      'Unreal 影像顯示同步渲染，多組渲染工作站與臉部辨識裝置並行運作',
      'Chatbot 引導式問答與百分比空間跑馬燈，串接觀眾參觀數據',
      '展區每 20 分鐘一輪，每日 10:00–18:00 運作',
    ],
  },
  {
    slug: 'turtle-pleasure',
    title: '烏龜才有的快感',
    titleEn: 'Turtle Pleasure',
    category: '互動式展演',
    year: 2021,
    description: '互動式展演作品，以獨特的視角重新詮釋慢活哲學，感受意想不到的感官體驗。',
    thumbnail: '/works/turtle-pleasure.jpg',
    tags: ['互動式展演', 'AR', '動態捕捉'],
    client: '華山白晝之夜 Nuit Blanche',
    role: '製作總監・視覺影像製作',
    venue: '華山 1914 文化創意產業園區',
    overview: [
      '《烏龜才有的快感》是華山白晝之夜的科技藝術整合案例，以說唱藝術為核心，結合 AR 與動作捕捉技術，當天締造一萬人次觀賞的紀錄。',
      '彩蛋影像負責視覺影像製作，以 Unreal 即時運算搭配動態捕捉，並為演出量身設計虛擬攝影機鏡位。',
    ],
    highlights: [
      'Unreal 3D 即時運算，為演出量身設計虛擬攝影機鏡位',
      '動作捕捉結合虛擬攝影機，將說唱表演轉譯為即時影像',
      '演出當日觀賞人次約一萬人',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}

export const categories = [...new Set(projects.map((p) => p.category))];
