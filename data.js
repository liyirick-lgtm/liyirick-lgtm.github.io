// Content data for the portfolio. Edit here to add/remove projects, gear, posts.
// All bilingual fields use {en, zh} — both required.

const prodData = [
  {id:'proj1',type:'drama',title:{en:'Whispers of the East',zh:'东方低语'},role:{en:'Unit Production Manager',zh:'制片主任'},desc:{en:'A 12-episode vertical short drama exploring cultural identity in modern China. Led a crew of 25+ across 3 shooting locations over 4 weeks. Managed a ¥800K budget and coordinated post-production with VFX team.',zh:'12 集竖屏短剧，探索现代中国的文化认同。带领 25+ 人团队，在 3 个拍摄地完成 4 周拍摄。管理 80 万预算，协调 VFX 后期团队。'},gallery:3,video:true},
  {id:'proj2',type:'film',title:{en:'Borderline',zh:'边界'},role:{en:'Producer / Cinematographer',zh:'制片 / 摄影指导'},desc:{en:'Award-nominated short film about immigrant experiences. Dual role as producer and DP — handled logistics, budgeting, and shot the film on BMPCC 6K with vintage anamorphic lenses.',zh:'提名奖项的移民题材短片。制片与摄影双重身份——负责统筹、预算，使用 BMPCC 6K 搭配复古变形镜头拍摄。'},gallery:4,video:true},
  {id:'proj3',type:'commercial',title:{en:'TechFlow Brand Film',zh:'TechFlow 品牌片'},role:{en:'Executive Producer',zh:'执行制片'},desc:{en:'60-second brand film for a Silicon Valley startup. Conceptualized the visual story, managed client relations, hired crew, and delivered final cut within a 2-week turnaround.',zh:'硅谷创业公司 60 秒品牌宣传片。构思视觉故事、管理客户关系、组建团队，2 周内完成交付。'},gallery:2,video:true},
  {id:'proj4',type:'drama',title:{en:'The Algorithm',zh:'算法人生'},role:{en:'Line Producer',zh:'执行制片'},desc:{en:'Sci-fi short drama series exploring AI consciousness. Managed day-to-day operations, scheduling, and kept production on track despite location challenges.',zh:'科幻短剧系列，探索 AI 意识主题。负责日常运营、排期管理，在多个拍摄地点挑战下保持制作进度。'},gallery:3,video:false},
  {id:'proj5',type:'commercial',title:{en:'Golden Gate Eats',zh:'金门美食'},role:{en:'Producer / Camera Op',zh:'制片 / 摄影'},desc:{en:'Food & lifestyle commercial series for Bay Area restaurants. Fast-paced production with same-day edits delivered for social media campaigns.',zh:'湾区餐厅美食生活类广告系列。快节奏制作，当天完成剪辑并投放社交媒体。'},gallery:2,video:true},
  {id:'proj6',type:'film',title:{en:'Silent Current',zh:'暗流'},role:{en:'Cinematographer',zh:'摄影指导'},desc:{en:'Moody noir-style short film. Shot on RED Komodo with vintage Helios lenses. Extensive color grading in DaVinci Resolve.',zh:'暗色调黑色电影风格短片。使用 RED Komodo 搭配 Helios 复古镜头拍摄。DaVinci Resolve 深度调色。'},gallery:3,video:true}
];
// Wondrous Production G&E truck rental package — every item below is included
// when you book the truck. Source: wondrousproduction.com/services-2
const gearData = {
  led:[
    {name:'Aputure Storm 1200X',spec:'Bi-color LED COB',price:'×2'},
    {name:'Aputure Storm 1000C',spec:'RGBWW LED COB',price:'×1'},
    {name:'LightGear Spectrum 4',spec:'High-output LED',price:'×1'},
    {name:'LightGear Spectrum 2L',spec:'LED panel',price:'×1'},
    {name:'Aputure 600X',spec:'Bi-color LED COB',price:'×2'},
    {name:'Aputure 600C',spec:'RGBWW LED COB',price:'×1'},
    {name:'Aputure 300X',spec:'Bi-color LED COB',price:'×2'},
    {name:'Aputure 300C',spec:'RGBWW LED COB',price:'×1'},
    {name:'Aputure Storm 80C',spec:'RGBWW LED COB',price:'×2'},
    {name:'Aputure Infinite Bar 8-Light Kit',spec:'RGBWW pixel bar',price:'×1 kit'},
    {name:'Aputure MC Pro 8-Light Kit',spec:'RGBWW mini panels',price:'×1 kit'},
    {name:'Astera Luna Bulb 8-Light Kit',spec:'Wireless RGB practicals',price:'×1 kit'}
  ],
  power:[
    {name:"25' Stinger",spec:'Extension cord',price:'×5'},
    {name:"50' Stinger",spec:'Extension cord',price:'×5'},
    {name:'Watson Tri-Tap Adapter',spec:'1→3 split',price:'×5'},
    {name:'Power Strip',spec:'Multi-outlet',price:'×3'},
    {name:'DJI Power 1000 Power Bank',spec:'1024 Wh portable battery',price:'×1'}
  ],
  modifier:[
    {name:'Spotlight Attachment',spec:'19° / 26° / 36° lens kit',price:'×1'},
    {name:'Godox LiteFlow K1 Kit',spec:'Reflector cine kit',price:'×1'},
    {name:'F10 Fresnel + Barndoors',spec:'Wide / spot range',price:'×2'},
    {name:'Aputure CF12 Fresnel + Barndoors',spec:'12" Fresnel',price:'×2'},
    {name:'Lantern 90',spec:'90 cm soft lantern',price:'×2'},
    {name:'Lightdome 150',spec:'150 cm soft octa',price:'×1'},
    {name:'Lightdome II',spec:'Soft parabolic',price:'×1'},
    {name:"Matthews 40×40\" Flag Kit",spec:'Solid / floppy / silk, with bag',price:'×1 kit'},
    {name:"6×6' Fabric Kit",spec:'Solid · Ultra Bounce · Unbleached Muslin · ½ Grid · Full Grid · Soft Frost',price:'×1 set'},
    {name:"6×6' 50° Egg Crate",spec:'Light control grid',price:'×1'}
  ],
  production:[
    {name:'Hollyland C1 Pro',spec:'8-headset wireless intercom',price:'×1 kit'},
    {name:'Chauvet Hurricane 1800',spec:'Fog machine',price:'×1'},
    {name:'PMI Smoke NINJA Pro',spec:'Battery hazer kit',price:'×1 kit'},
    {name:'Panyan DIT Cart',spec:'Mobile data / monitor cart',price:'×1'}
  ],
  grip:[
    {name:'Turtle Base C-Stand',spec:'40" arm',price:'×5'},
    {name:'Sliding Leg C-Stand',spec:'40" arm',price:'×5'},
    {name:'Baby C-Stand',spec:'Smaller footprint',price:'×4'},
    {name:'Beefy Baby Stand',spec:'Heavy-duty baby stand',price:'×3'},
    {name:'Low Boy',spec:'Low-angle stand',price:'×2'},
    {name:'Combo Stand',spec:'Junior receiver',price:'×3'},
    {name:'Mombo Combo Stand',spec:'Heavy combo, junior receiver',price:'×2'},
    {name:'Hi-Hi Roller Stand',spec:'Wheeled high stand',price:'×2'},
    {name:"6×6' Frame",spec:'Speed-rail frame',price:'×3'},
    {name:"12×12' Frame",spec:'Speed-rail frame',price:'×1'},
    {name:'Apple Box Family',spec:'Full / half / quarter / pancake',price:'×4 sets'},
    {name:'Dana Dolly',spec:'4 ft + 6 ft rails',price:'×1 kit'},
    {name:'Cardellini Clamp',spec:'End jaw',price:'×5'},
    {name:'Mafer Clamp',spec:'Super clamp w/ pin',price:'×5'},
    {name:'Duckbill Clamp',spec:'Wide-grip',price:'×2'},
    {name:'C Clamp',spec:'Bar clamp',price:'×2'},
    {name:'Sand Bag',spec:'15 / 25 / 35 lb (5 each)',price:'×15'},
    {name:'6 ft Ladder',spec:'Step ladder',price:'×1'}
  ]
};
const devData = [
  {id:'dev1',cat:'hw',title:{en:'Smart Trash Can',zh:'智能垃圾桶'},icon:'🗑️',desc:{en:'ESP32-powered trash can with gesture sensing, auto-open lid, and Home Assistant integration.',zh:'基于 ESP32 的智能垃圾桶，支持手势感应、自动开盖，接入 Home Assistant。'},stack:['ESP32','Servo','HC-SR04','MQTT','HA'],problem:{en:'Manual trash can lids are unhygienic; commercial smart ones are overpriced.',zh:'手动垃圾桶盖不卫生，商用智能垃圾桶太贵。'},solution:{en:'ESP32 + ultrasonic sensor + servo motor. Lid opens when hand detected within 15cm, auto-closes after 5s. MQTT integration for HA tracking.',zh:'ESP32 + 超声波传感器 + 舵机。手在 15cm 内检测到自动开盖，5 秒后关闭。MQTT 接入 HA。'},result:{en:'Cost: ~$8 in parts. Running 24/7 for 6 months. Blog post went viral.',zh:'成本约 ¥60，稳定运行 6 个月。博客文章在 Maker 社区走红。'},github:'#',blog:'blog1'},
  {id:'dev2',cat:'hw',title:{en:'NFC Multi-Card Device',zh:'NFC 多卡合一设备'},icon:'💳',desc:{en:'Consolidate multiple NFC cards into one ESP32-based device with OLED display.',zh:'将多张 NFC 卡整合到一个 ESP32 设备中，OLED 屏幕选择切换。'},stack:['ESP32','PN532','OLED','3D Print','LiPo'],problem:{en:'Carrying multiple access cards is annoying.',zh:'携带多张门禁卡很烦。'},solution:{en:'ESP32 + PN532 reads/stores card UIDs. OLED + rotary encoder for selection. 3D-printed case with LiPo.',zh:'ESP32 + PN532 读取存储卡片 UID。OLED + 旋转编码器选择。3D 打印外壳 + LiPo。'},result:{en:'Cloned 5 access cards. Battery lasts ~2 weeks. Keychain-sized.',zh:'克隆 5 张门禁卡，续航约 2 周，可挂钥匙链。'},github:'#'},
  {id:'dev3',cat:'sw',title:{en:'AI Manga Pipeline',zh:'AI 漫画制作流水线'},icon:'🎨',desc:{en:'Multi-agent pipeline for vertical manga using ComfyUI + FLUX.1 + CrewAI.',zh:'基于 ComfyUI + FLUX.1 + CrewAI 的竖屏漫画多智能体流水线。'},stack:['Python','ComfyUI','FLUX.1','CrewAI','Claude API','Docker'],problem:{en:'Creating consistent manga for Douyin requires too much manual work.',zh:'为抖音短剧制作风格一致的漫画需要大量人工。'},solution:{en:'CrewAI orchestrates story generation (Claude API), character consistency (FLUX.1 + LoRA), panel layout, text overlay. ComfyUI handles image generation.',zh:'CrewAI 编排故事生成（Claude API）、角色一致性（FLUX.1 + LoRA）、分镜布局和文字排版。ComfyUI 处理图像生成。'},result:{en:'Per-episode time: 8h → 45min. 《地母七重奏》in production.',zh:'单集时间 8h → 45min。《地母七重奏》制作中。'},github:'#'},
  {id:'dev4',cat:'sw',title:{en:'Production Mgmt Tool',zh:'制片管理工具'},icon:'📋',desc:{en:'Python CLI for film production schedules, crew contacts, and budget tracking.',zh:'Python CLI 工具，管理排期、团队联系和预算。'},stack:['Python','SQLite','Click','Rich','Docker'],problem:{en:'Spreadsheet chaos on small productions.',zh:'小型制作项目表格混乱。'},solution:{en:'CLI with Rich terminal UI. SQLite stores schedules, contacts, budget. PDF export.',zh:'Rich 终端 UI + SQLite 存储排期、联系方式、预算。支持 PDF 导出。'},result:{en:'Used on 3 productions. Saved ~2h/week. Open-sourced.',zh:'已在 3 个项目中使用，每周省约 2h。已开源。'},github:'#'},
  {id:'dev5',cat:'hw',title:{en:'Gyro Game Controller',zh:'陀螺仪游戏手柄'},icon:'🎮',desc:{en:'ESP32 + MPU6050 gyro-based BLE HID game controller.',zh:'ESP32 + MPU6050 陀螺仪蓝牙游戏手柄。'},stack:['ESP32','MPU6050','BLE HID','3D Print','LiPo'],problem:{en:'Wanted motion-controlled gaming without expensive controllers.',zh:'想要体感游戏但不想买贵手柄。'},solution:{en:'ESP32 reads gyro data, maps tilt to directional input, sends via BLE HID.',zh:'ESP32 读取陀螺仪数据，映射倾斜为方向输入，BLE HID 发送。'},result:{en:'Latency <20ms. Works with any BLE device.',zh:'延迟 <20ms，兼容所有 BLE 设备。'},github:'#'},
  {id:'dev6',cat:'sw',title:{en:'Shell 30-Day Mastery',zh:'Shell 30 天精通'},icon:'$_',desc:{en:'Interactive Shell/Bash learning system with progress tracking.',zh:'Shell/Bash 交互式学习系统，带进度追踪。'},stack:['HTML','CSS','JS','Bash'],problem:{en:'No structured Shell curriculum from zero to production.',zh:'缺少从零到生产就绪的 Shell 课程。'},solution:{en:'Web-based curriculum with 30 lessons, embedded exercises, localStorage progress.',zh:'Web 课程，30 节课，内嵌练习，localStorage 进度。'},result:{en:'Completed myself. Now used by 3 friends.',zh:'自己完成全部课程，3 个朋友在用。'},github:'#'}
];
const blogData = [
  {id:'blog1',tag:'tech',title:{en:'Building a Smart Trash Can with ESP32',zh:'用 ESP32 打造智能垃圾桶——完整指南'},date:'2026-02-15',excerpt:{en:'A step-by-step build log from parts list to Home Assistant integration.',zh:'从零件清单到 Home Assistant 集成的完整制作记录。'},crosslink:{type:'dev',id:'dev1',label:{en:'View project →',zh:'查看项目 →'}},body:{en:'<h2>Why Build This?</h2><p>Commercial smart trash cans cost $50-200. I built one for <strong>$8 in parts</strong> running 24/7 for 6 months.</p><h2>Parts List</h2><p>ESP32 DevKit (~$3), HC-SR04 (~$1), SG90 servo (~$1), jumper wires, USB cable.</p><h2>The Build</h2><p>Mount ultrasonic sensor at 45° downward — catches hand motion without false triggers. Servo needs a simple lever arm attached to the lid...</p><h3>MQTT Integration</h3><p>Adding MQTT is trivial with <code>PubSubClient</code>. Publish open/close events and track usage in Home Assistant.</p>',zh:'<h2>为什么要做？</h2><p>商用智能垃圾桶 300-1500 元。我用<strong>约 60 元零件</strong>做了一个，稳定运行 6 个月。</p><h2>零件</h2><p>ESP32（约 20 元）、HC-SR04（约 5 元）、SG90（约 8 元）、杜邦线、USB 线。</p><h2>制作</h2><p>超声波传感器向下 45°——检测手部不误触。舵机加杠杆臂连接桶盖...</p><h3>MQTT 集成</h3><p>用 <code>PubSubClient</code> 添加 MQTT，发布开关事件，Home Assistant 追踪使用量。</p>'}},
  {id:'blog2',tag:'film',title:{en:'What UPM School Doesn\'t Teach You',zh:'制片主任学校没教你的事'},date:'2026-01-28',excerpt:{en:'Lessons from the trenches of short drama production.',zh:'短剧制片一线的经验教训。'},crosslink:null,body:{en:'<h2>The Real Job</h2><p><strong>No plan survives first contact with reality.</strong> Here are things I learned the hard way...</p><h2>Budget Truth</h2><p>Always add 15% contingency. Always.</p><h2>Crew Communication</h2><p>The most important skill isn\'t budgeting — it\'s <strong>reading the room</strong>. A tired crew makes mistakes. A fed crew works miracles.</p>',zh:'<h2>真正的工作</h2><p><strong>没有计划能在现实面前存活。</strong>以下是血泪经验...</p><h2>预算真相</h2><p>永远预留 15% 应急资金。永远。</p><h2>团队沟通</h2><p>最重要的技能不是做预算——是<strong>察言观色</strong>。疲惫团队犯错，吃饱团队创造奇迹。</p>'}},
  {id:'blog3',tag:'life',title:{en:'Drucker in the Edit Room',zh:'剪辑室里的德鲁克'},date:'2026-01-10',excerpt:{en:'How Drucker-based management changed my approach to film production.',zh:'德鲁克管理学如何改变了我的制片思维。'},crosslink:null,body:{en:'<h2>The Unexpected Overlap</h2><p>Drucker\'s ideas about <strong>effectiveness vs. efficiency</strong> directly map to production challenges...</p><h2>Knowledge Workers on Set</h2><p>Each department head is an expert making autonomous decisions. The producer\'s job is to <strong>create conditions for their best work</strong>.</p>',zh:'<h2>意想不到的交集</h2><p>德鲁克关于<strong>效果与效率</strong>的理论直接适用于制片...</p><h2>片场上的知识工作者</h2><p>每个部门负责人都是独立决策的专家。制片人的工作是<strong>创造最好的工作条件</strong>。</p>'}},
  {id:'blog4',tag:'tech',title:{en:'ComfyUI + FLUX.1: Character Consistency',zh:'ComfyUI + FLUX.1：角色一致性流水线'},date:'2025-12-20',excerpt:{en:'Technical deep-dive into maintaining character consistency in AI manga.',zh:'AI 漫画角色一致性的技术深度解析。'},crosslink:{type:'dev',id:'dev3',label:{en:'View project →',zh:'查看项目 →'}},body:{en:'<h2>The Consistency Problem</h2><p>One image is easy. <strong>20 panels with the same character</strong> is a nightmare...</p><h2>LoRA Strategy</h2><p>Train character LoRA: 15-20 images, consistent lighting, varied angles. Rank 16, 1500 steps.</p>',zh:'<h2>一致性问题</h2><p>一张图简单。<strong>20 个分镜同一角色</strong>则是噩梦...</p><h2>LoRA 策略</h2><p>训练角色 LoRA：15-20 张图，统一光照，不同角度。rank 16，1500 步。</p>'}},
  {id:'blog5',tag:'life',title:{en:'Why I Refuse to Pick a Lane',zh:'为什么我拒绝只走一条路'},date:'2025-11-15',excerpt:{en:'On being a producer who codes and why cross-disciplinary thinking matters.',zh:'一个会写代码的制片人，跨学科思维为何重要。'},crosslink:null,body:{en:'<h2>The Question</h2><p>"So what do you actually do?" The honest answer: <strong>I build things across domains.</strong></p>',zh:'<h2>最常被问的问题</h2><p>"你到底做什么？"诚实回答：<strong>我在不同领域构建东西。</strong></p>'}}
];
