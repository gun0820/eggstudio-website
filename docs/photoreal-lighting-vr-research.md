# 貼近實拍與光影變化：VR 場景製作路線研究

- 日期：2026-11-02
- 起因：Threads 貼文（vincent_aidev 轉述 VictorZakharov/threejs-nanites：100 萬棵樹、340 億三角面、RTX 4070 Ti 144 fps）
- 對照：Kurt 目前的做法（實拍或 AI 生成多視角 → COLMAP → Brush 解算 3DGS → Quest 3，見 v04、v05、v11）
- 評估人：Claude（依 Kurt 指示）

> 說明：雲端環境連不到 worldlabs.ai、arxiv.org、huggingface.co、radiancefields.com、cglounge.studio、athena.itec.aau.at，這些來源只讀到搜尋摘要，沒有讀全文。GitHub 的 README 有讀全文。貼文的 144 fps 來自 repo 自述，沒有自行驗證。

## 一、先把目標拆開

「儘量貼近實拍的效果」和「光影變化」其實是兩個會互相拉扯的目標：

| 目標 | 最擅長的技術 | 原因 |
|---|---|---|
| 看起來像實拍 | 3DGS | 把拍攝當下的光直接烤進每顆 splat，所以才真 |
| 光影會變 | 網格 + PBR 材質 + 即時光 | 材質和光分開存，光才能動；但「像實拍」要靠掃描材質撐 |

3DGS 之所以真，正是因為光不能動。要光能動，就得把材質和光拆開，拆開的那一刻擬真度就會掉一截。所以目標建議修正成三個層級擇一，而不是兩個都要：

| 層級 | 目標敘述 | 對應路線 |
|---|---|---|
| L1 | 實拍當下的光完整還原，Quest 3 上穩 72 fps | 3DGS（現況） |
| L2 | 同一場景有幾個固定時段（晨、午、黃昏、夜）可切換或漸變 | 多時段 3DGS |
| L3 | 任意光源、任意時間、互動光（手電筒、火光、動態陰影） | 掃描網格 + PBR，或可重打光 3DGS（研究中） |

另外三件事也要先定，否則效能數字沒意義：

1. 顯示端是 Quest 3 單機，還是 PC VR 串流？兩者可用預算差 5 到 10 倍。
2. 場景規模是單一主角物件（苔石）、一個房間（老屋），還是戶外森林？
3. 體驗者是站定環顧，還是自由走動？走動才需要 LOD 與遠景。

## 二、貼文那條路線對你有什麼用

threejs-nanites（MIT 授權）實際內容，依 README：

- 硬體與數字：RTX 4070 Ti，1920×1080，High 預設含 TAA、陰影、草、光束、雲。每個視角 GPU 時間約 2.4 到 10 ms，截圖標 144 fps 是 vsync 上限。自動畫質以桌機 5.5 ms、手機 14 ms 為預算。
- LOD：Nanite 式 cluster DAG，GPU 自己剔除與選細節；1M 棵樹地面視角 3.5 ms 畫 340 萬面，不用 Nanite 估約 0.8 秒。
- 樹：ez-tree（MIT）六種樹加三種灌木，靠 instancing 重複。
- 可用性：`src/nanite-lib/` 是獨立函式庫，只依賴 three.js 與 meshoptimizer，`npm run model` 可把 PLY、glTF、OBJ 轉成含 cluster DAG 的 `.nm` 格式，範例把一顆 glTF 石頭畫 25 萬次。
- 光影：有太陽陰影圖（自己的剔除與較粗 LOD，高空時關掉）、天空色霧、雲層、光束、風動。沒有時間變化控制，只有秋夏切換。沒有描述 PBR 材質模型。
- 限制：必須 WebGPU；沒有提到 WebXR；遮蔽剔除只在 150 公尺以下；數字來自單一顯卡。

結論：這條路線解決的是「大規模場景的幾何量」，不是「擬真打光」。它的打光是遊戲式的風格化，離實拍很遠。能搬過來的只有三件：

1. 重複植被用 instancing，不要每棵樹各自是獨立資料。
2. 掃描出來的高面數網格（例如 200 萬面的苔石）可以轉成 `.nm`，用 cluster LOD 畫到每像素一面，不用先手動減面。
3. 「GPU 時間預算自動調畫質」的設計，比固定點數的做法穩。

要注意的是 Quest 瀏覽器的 WebXR + WebGPU 綁定目前不可靠，Meta 開發者論壇有人回報 Chromium 134 標示支援但 demo 跑不起來。所以這套東西要進頭顯，短期只能走 PC VR 串流。

## 三、四條路線比較

| 路線 | 像實拍 | 光影可變 | Quest 3 可行性 | 成熟度 | 風險 |
|---|---|---|---|---|---|
| A 3DGS 烤光（現況） | 最高 | 不行 | 單機約 40 萬可見 splat 穩 72 fps；PC VR 你實測 100 萬顆 63 到 75 fps | 成熟 | 解析度是主要成本，不是點數 |
| B 多時段 3DGS | 高 | 固定幾個時段間漸變 | 同 A，但記憶體乘以時段數 | 可做，研究端有工具 | 要多次擷取或多次生成 |
| C 掃描網格 + PBR + 即時光 | 中高，看材質品質 | 完全自由 | 成熟，遊戲就是這樣做 | 成熟 | 苔蘚、細碎植物最難做像 |
| D 可重打光 3DGS | 高（論文數字） | 自由 | 沒有瀏覽器或頭顯可用的 viewer | 研究階段 | 2 到 4 週研發且結果不保證 |

### A：3DGS 烤光，把效能做對

這是你現在的路線，光不能動，但該補的是 LOD 和解析度策略，不是換技術。

- 效能規則：Quest 3 單機社群實測約 40 萬可見 splat 穩 72 fps（Unity VR fork、GSVision viewer 都設在這附近）；Spark 文件建議 Quest 3 控制在 100 萬顆以下。2026 年 9 月一份 Quest 3 的系統性研究（180 種條件）結論是渲染解析度是 GPU 成本主因，因為像素數平方成長；降點數只有在已經逼近 72 Hz 預算時才有效。這和你上次「先降每眼解析度」的想法一致。
- LOD 已經有現成的：Spark 2.0（World Labs，2026 年 4 月）用 splat 樹做連續 LOD，依視口切一刀，加 foveated 把細節集中在視線中心，離線 CLI 轉成可串流的 `.rad`，或在 Web Worker 即時建樹；demo 串流一億顆以上。PlayCanvas 與 SuperSplat 走 Streamed SOG，先載最粗層再依裝置預算補細節，Engine v2.17（2026 年 3 月）加了整個場景的 splat 總量預算。three.js r186 也內建了原生 splat 渲染器與 raycast（細節沒讀到全文）。
- 三種 viewer 都能混合網格：Spark（MIT，WebGL2，列有 WebXR 支援）、mkkellogg GaussianSplats3D（內建 WebXR）、dvt3d/splat-mesh。

### B：多時段 3DGS，用「時間流逝」取代「打光」

做法有兩種，都不碰材質分解：

1. 同一場景在幾個時段各拍一次（或 AI 生成同一張源圖的幾個時段版本），共用同一套 COLMAP 相機，各自訓練一組 splat，播放時交叉淡入。最笨但最穩，品質等於 A。
2. 用外觀嵌入（appearance embedding）訓一組共用幾何的模型。WildSplatter（2026 年 4 月）報告線性插值嵌入可得到平滑的光照過渡，32 維就夠，缺點是陰影這類複雜效果處理得弱、全域單一嵌入會輕微偏色。GaRe 把戶外光拆成太陽、天空、間接光三個分量，可各自或一起插值，陰影用 ray tracing 烤進每顆 splat 的可見度特徵，單次 pass 即時。R3GW（2026 年 3 月）支援任意環境圖重打光。

對你的 v11 AI 生成路線，方法 1 的對應是：同一張苔石源圖，先用 Qwen Edit 改成晨、午、黃昏三個版本，再各自走方位生成。但 AI 多視角不一致已經是 v11 最大的品質風險，再乘上三個時段風險會加倍，建議先把單一時段的幾何鎖住，再談時段。

### C：掃描網格 + PBR + 即時光，光完全自由

這是「光影變化」唯一成熟的路：

- 掃描：RealityScan 2.x（RealityCapture 改名，2.1.1 加 COLMAP 匯出；年營收超過 100 萬美元才需訂閱，低於此是否免費未確認）。
- 去光：Agisoft De-Lighter 免費，標記亮區與陰影區即可去除烤進貼圖的光，不需 AO 或 bent normal 圖，只能處理已貼圖的模型；2026 年是否仍維護未確認。
- 材質庫：Fab 上的 Megascans 苔石、苔地有 glTF 與 GLB 格式；2024 年的報導說可免費永久取得且 Fab 標準授權可商用，2026 年是否仍免費未確認。
- 渲染：three.js WebGPU 加太陽陰影、環境貼圖、烤好的 AO。參考 vvanghelue/webgpu-landscape-rendering：CDLOD 地形、GPU 剔除、impostor、GPU ray-march 的長距離軟陰影只在太陽移動時重烤，M4 基本款 1600×900 跑 3 到 15 ms。森林可直接套 threejs-nanites 的 nanite-lib。
- 代價：石頭、牆、地面做得像；苔蘚、細碎葉子、半透明這類最難，而這正是你 v11 的主角。

### D：可重打光 3DGS，先看不先做

研究進度很快但沒有一個能進瀏覽器或頭顯：

- 論文：R3DG（2023 基礎）、GaRe（戶外）、R3GW（任意環境圖）、SSD-GS（2026 年 4 月，散射與陰影分解）、VisibilitySplat（2026 年 10 月，可見度 pass 佔 55% 時間，還不即時）、GHPT（CVPR 2026，從 splat 重建網格再做 PBR 與混合路徑追蹤）、方向遮罩加 Split-Sum 的做法在桌機約 145 fps。
- 引擎：Volinga Plugin Pro 與 WallGS Pro 都能在 Unreal 用代理網格驅動 splat 重打光，近似做法，splat 之間不互相投影。這是走 Unreal 的選項，不是瀏覽器。
- 瀏覽器：目前只有一個 Swift + Metal 的社群 viewer 示範用 Split-Sum 環境光對 Ref-Gaussian 資產即時打光。Spark 有 GPU shader graph 可改 splat 顏色，理論上能移植同樣的 shader，前提是訓練端要輸出每顆 splat 的法線、反照率、粗糙度。

## 四、建議：混合路線，分兩個原型驗證

把場景拆成「主角」和「環境」，各用最擅長的技術：

- 主角（苔石、老屋室內這類要像實拍的）：3DGS，先 L1，有餘力做 L2 多時段。
- 環境（森林、地形、天空）：instanced 網格 + 即時太陽 + 天空，光可以動。
- 接縫：主角 splat 的拍攝時段要配合環境的太陽角度，不足處用色彩分級補。網格陰影投到 splat 上要靠深度整合，Meta 論壇回報 Quest 瀏覽器在 MSAA + 每幀陰影 + 3DGS 同開時會當機，所以這部分走 PC VR 串流或把陰影烤死。

原型一（約 1 週，先做）：
- 苔石一顆，兩個時段的 splat，在 Spark 或 three.js 裡交叉淡入，Quest 3 單機與 PC VR 各量一次，每眼解析度從 0.7 開始試。
- 通過條件：72 fps 穩、漸變過程沒有鬼影、你覺得「像」。

原型二（約 1 到 2 週）：
- 森林環境用 ez-tree 或 Megascans 網格 instancing，太陽可拖動，苔石 splat 放中間，PC VR 串流。
- 通過條件：太陽從早拖到晚，主角與環境不脫節。

兩個原型做完，就能回答「我的目標要訂在 L1、L2 還是 L3」，因為你會親眼看到 L2 的漸變夠不夠用。如果不夠，再評估 C 的苔蘚材質能不能做像，或等 D 成熟。

## 五、風險清單

| 風險 | 嚴重度 | 備案 |
|---|---|---|
| Quest 瀏覽器 WebXR + WebGPU 不穩，nanite-lib 進不了頭顯 | 高 | 環境走 PC VR 串流；或環境改 WebGL2 的 instancing + impostor |
| 多時段 AI 生成的幾何不一致 | 高 | 先鎖單一時段幾何；時段版本只改顏色不改結構 |
| A4000 過熱降頻，數字失真 | 中 | 量測時記錄溫度；考慮 5090（需另外授權） |
| Megascans、RealityScan 的免費與授權條件在 2026 年已變 | 中 | 下載前查 Fab 與 Epic 現行條款 |
| 可重打光 3DGS 看起來快成熟但一直沒有 viewer | 低 | 只追蹤，不投入 |

## 參考資料

- threejs-nanites：https://github.com/VictorZakharov/threejs-nanites
- ez-tree 與相關：https://github.com/AIFanatic/three-nanite 、 https://github.com/SamG-Coder/ThreeNaniteTest
- webgpu-landscape-rendering：https://github.com/vvanghelue/webgpu-landscape-rendering
- Spark：https://github.com/sparkjsdev/spark 、 Spark 2.0 說明 https://www.worldlabs.ai/blog/spark-2.0
- GaussianSplats3D：https://github.com/mkkellogg/GaussianSplats3D 、 splat-mesh：https://github.com/dvt3d/splat-mesh
- SuperSplat LOD：https://radiancefields.com/supersplat-2.30-adds-lcc2-import-with-format-agnostic-lod 、 PlayCanvas v2.17：https://app.cinevva.com/news/2026-03-06-playcanvas-v217-webgpu-splatting
- three.js r186 原生 splat：https://radiancefields.com/three.js-ships-its-native-gaussian-splat-renderer-and-splat-raycasting-in-r186
- Quest 3 3DGS 效能研究：https://athena.itec.aau.at/2026/09/3d-gaussian-splatting-rendering-performance-trade-offs-on-the-meta-quest-3/
- VRSplat：https://dl.acm.org/doi/full/10.1145/3728311
- Quest 3 單機 viewer 與 Unity fork：https://github.com/zachdrouin/GaussianSplatViewer 、 https://github.com/ninjamode/Unity-VR-Gaussian-Splatting
- Meta 論壇 WebXR + WebGPU 問題：https://communityforums.atmeta.com/t5/Web-Development/WebXR-WebGPU-Bindings-for-Dynamic-Gaussian-Splatting/td-p/1255357
- WildSplatter：https://arxiv.org/abs/2604.21182 、 GaRe：https://arxiv.org/abs/2507.20512 、 R3GW：https://arxiv.org/abs/2603.02801
- SSD-GS：https://arxiv.org/abs/2604.13333 、 VisibilitySplat：https://arxiv.org/abs/2610.19847 、 GHPT：https://nwu-vislab.github.io/GHPT/
- Split-Sum 可重打光 3DGS：https://www.sciencedirect.com/science/article/pii/S0141938226003860
- Metal 重打光 viewer：https://github.com/john-rocky/MetalGaussianSplatRelighting
- Volinga Plugin Pro：https://www.cgchannel.com/2026/08/volinga-plugin-pro-lets-you-relight-4dgs-data-inside-unreal-engine/ 、 WallGS Pro：https://radiancefields.com/wallgs-pro-brings-gaussian-splat-relighting-to-unreal-engine-5
- Marble 匯出：https://docs.worldlabs.ai/marble/export/gaussian-splat/index.md
- RealityScan 2.0：https://www.realityscan.com/news/realityscan-20-new-release-brings-powerful-new-features-to-a-rebranded-realitycapture
- Agisoft De-Lighter：https://www.cgchannel.com/?p=105614
- Megascans 與 Fab：https://cgpress.org/archives/quixel-offers-perpetual-access-to-the-entire-existing-megascans-library-with-a-single-click.html
- Hyperscape：https://radiancefields.com/meta-announces-meta-horizon-engine-and-capture
