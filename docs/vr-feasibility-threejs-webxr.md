# Three.js 瀏覽器場景轉 VR 可行性評估

- 日期：2026-11-02
- 階段：第二階段 可行性壓力測試
- 參考來源：Threads 貼文 https://www.threads.com/share/BASvikvRlC/ （Inkhaus @inkhaus.tw 轉貼，原作者 水母菌 Jellyfish）
- 評估人：Claude（依 Kurt 指示）

> 說明：雲端環境無法連到 threads.com，本評估透過 Kurt 的 Windows 電腦抓取貼文的文字 meta 資料。影片與截圖本身未能看到，技術推論基於貼文文字描述。

## 一、對方做了什麼

貼文描述的作品：

| 項目 | 內容 |
|------|------|
| 製作方式 | 一段文字 prompt，讓 Claude Opus 5.5 直接寫 Three.js 程式碼 |
| 場景 | 地鐵站剖面、販賣機街角、溫室花店、霧中公車站，共四個 |
| 互動 | 瀏覽器內可拖著旋轉（典型 OrbitControls） |
| 視覺風格 | 「PS1 畫面抖動」：頂點量化抖動、仿射貼圖變形、低解析度像素感 |
| 幾何 | 沒開 Blender、沒用現成模型，全部是程式產生的低多邊形幾何 |
| 音效 | 風聲、日光燈嗡嗡聲全部用 Web Audio API 合成，零音檔 |
| 氛圍 | 濃霧（Three.js Fog）、販賣機自發光、霧中偶爾亮起的車燈 |

### 製作評估

這類作品的技術門檻其實不在程式，而在「品味」：霧的濃度、光的顏色、構圖、留白。程式部分全是 Three.js 的標準技巧，用 Claude Code 一天內可以做出同等級的東西。真正花時間的是來回調整美術方向。

彩蛋影像現有的能力（Unreal、Unity、空間敘事、VR 舒適度判斷）正好補上這類作品最缺的部分。對方展示的是「AI 寫程式」，我們能加上的是「懂 VR 的人來導」。

## 二、做成 VR 可以嗎

**結論：可以，而且這是所有內容類型裡最容易轉 VR 的一種。**

Three.js 內建 WebXR 支援。把現有場景加上 `renderer.xr.enabled = true` 和 `VRButton`，Quest 3 的瀏覽器打開網址、按 Enter VR，就能戴著頭顯站在那個霧中公車站裡。不需要 Unity、Unreal、不用上 App Store、不用 sideload。一個網址搞定。

但「能進 VR」和「在 VR 裡好看又舒服」是兩回事。下面是真正要改的地方。

### 必須改的五件事

1. **相機與尺度**
   平面版是拖著轉的 OrbitControls，VR 裡頭顯就是相機。要把相機 rig 放在人眼高度（約 1.6 公尺）、合理的站位，而且場景必須是真實公制尺度（1 單位 = 1 公尺）。AI 生出來的場景尺度通常是隨意的，這是第一件要校正的事。

2. **PS1 抖動效果的實作方式**
   如果對方是用 EffectComposer 全螢幕後製做抖動和像素化，WebXR 的雙眼立體渲染預設不支援 EffectComposer。解法是把頂點抖動搬進材質的 vertex shader（`onBeforeCompile`），這在 XR 裡正常運作。
   更重要的是舒適度：螢幕空間的畫面抖動在 VR 裡等於暈眩製造機。抖動幅度要大幅降低，或改成只抖物件頂點、不抖整個畫面。仿射貼圖變形沒問題，可以保留。

3. **效能預算**
   Quest 3 瀏覽器要跑 72 或 90fps 雙眼。低多邊形 PS1 風格其實是最理想的 VR 美術方向。注意事項：三角面控制在 10 萬以內、draw call 越少越好、不開即時陰影或最多一盞、點光源不超過三四盞、霧用 FogExp2 很便宜。

4. **音效**
   Web Audio 在 Quest 瀏覽器可用，但 AudioContext 需要使用者手勢啟動，Enter VR 的那一下按鈕剛好可以用。建議把販賣機嗡嗡聲改成 `PositionalAudio`，走近才變大，這是 VR 比平面版多出來的沉浸感。

5. **移動與互動**
   最低限度是「站著看」的靜態 vignette，不用控制器，這已經很完整。如果要走動，加 thumbstick 或 teleport 移動，用 `XRControllerModelFactory` 顯示控制器。注意：PS1 抖動加上自由移動是暈眩風險最高的組合，兩者只能選一個做滿。

### 工時估計

| 範圍 | 工時 |
|------|------|
| 既有場景加 VRButton，能進 VR 看 | 半天 |
| 真正 VR-ready：尺度校正、XR 相容的 PS1 shader、舒適度調整、空間音效、控制器 | 2 到 4 天 |
| 整合進彩蛋影像網站成為一個作品頁（Next.js + React Three Fiber + @react-three/xr） | 再加 1 到 2 天 |
| 四個場景全部轉 VR 並串成一個可切換的體驗 | 1 到 2 週 |

## 三、風險清單

| 風險 | 嚴重度 | 備案 |
|------|--------|------|
| PS1 畫面抖動在 VR 造成暈眩 | 高 | 抖動改成頂點層級、幅度降到平面版的 1/4；提供「關閉抖動」選項 |
| 後製 pass 在 WebXR 失效 | 中 | 全部效果搬進材質 shader，不用 EffectComposer |
| AI 生成場景尺度錯亂 | 中 | 進 VR 前先放一個 1.8 公尺的參考人形校正 |
| Quest 3 瀏覽器掉幀 | 中 | 降低幾何細節、關陰影、霧改 FogExp2；真的不夠就降渲染解析度 |
| 自發光物件在立體視覺下看起來像貼紙 | 低 | 加 bloom 替代方案：用多層半透明 sprite 模擬光暈，不走後製 |
| 原作者版權 | 低 | 不要直接複製對方場景，自己寫 prompt 生成彩蛋影像的場景（例如高雄駁二倉庫、玉山登山口） |

## 四、與彩蛋影像現有業務的連結

- **影創所教學**：這是 VR180 S3D 實拍以外的另一條路。學生用文字生成 Three.js 場景、加 WebXR、在系上 4 台 Quest 3 上開網址就能看。不用裝任何 app，4 台頭顯分組輪流看完全沒問題。可以當一個 2 到 3 週的小單元。
- **公司網站**：彩蛋影像網站目前是 Next.js 16 + Tailwind 的靜態作品集。首頁 hero 區可以換成一個可拖轉的 Three.js 場景，桌機拖著看、Quest 3 打開同一個網址直接進 VR。這對一間做 XR 的公司來說是最直接的「現場示範」。
- **提案工具**：客戶來談展場案時，用一小時生出一個可以戴頭顯看的空間草模，比簡報上的示意圖有說服力得多。

## 五、建議的下一步

先做一個場景的原型驗證核心假設：「PS1 風格的 Three.js 場景，在 Quest 3 瀏覽器裡能舒服地看」。

原型範圍：霧中公車站一個場景、WebXR 進入、頂點層級抖動、空間音效、靜態站位不移動。在 Quest 3 上實際戴著看，確認立體感與舒適度，再決定要不要往網站整合或教學單元走。

## 參考資料

- Three.js WebXR 官方文件：https://threejs.org/docs/#manual/en/introduction/How-to-create-VR-content
- PS1 風格在 Three.js 的實作（仿射貼圖、頂點量化）：https://romanliutikov.com/blog/ps1-style-graphics-in-threejs
- React Three Fiber 的 XR 套件：https://github.com/pmndrs/xr
