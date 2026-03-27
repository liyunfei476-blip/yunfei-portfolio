const profile = {
    name: '李云飞',
    role: '致力于把研究、流程和产品落到真实场景',
    intro: '我目前在重庆大学管理科学与工程方向专业就读硕士研究生，热爱探索新鲜事物，对工作充满热情，希望能够在实际工作中发挥自己的价值～',
    statement: '关于我：善于团队沟通协作，数据敏感度高，责任心强，以及不达目的誓不罢休的韧性',
    location: '接受任何地区工作',
    email: 'liyunfei_apply@163.com',
    phone: '159-3234-1031',
    resume: '个人简历/重庆大学-李云飞-简历.pdf',
    portrait: '个人照片/个人照片.jpg'
};

const quickStats = [
    { value: '7', label: '组核心作品' },
    { value: '20+', label: '可直接打开的文件' },
    { value: '3', label: '主要工作方向' }
];

const practiceNotes = [
    '1. 执行：用数据建模、自动化工具简化重复工作，大幅降低耗时成本；',
    '2. 复盘：沉淀知识资产，形成标准化分析模板与方法论；',
    '3. 迭代：将沉淀数据与经验用于AI训练，反哺团队提效，实现“经验-工具-效率”的正向闭环。'
];

const lenses = [
    { id: 'all', label: '全部视角', hint: '完整查看作品集' },
    { id: 'systems', label: '流程系统', hint: '偏自动化、数据和流程改造' },
    { id: 'product', label: '产品原型', hint: '偏应用、小程序和界面' },
    { id: 'research', label: '研究沉淀', hint: '偏论文、学习文档和方法' },
    { id: 'story', label: '表达与叙事', hint: '偏个人陈述和视频创作' }
];

const collections = [
    {
        id: 'profile-pack',
        lens: 'story',
        eyebrow: '01 / Profile',
        title: '个人档案与经历叙事',
        summary: '用简历、长文自述和个人照片，交代我是谁、为何做这些事，以及我如何做选择。',
        detail: '这一组内容不是传统“自我介绍区”，而是整个作品集的索引。它解释我的教育背景、职业兴趣，以及为什么我会在流程、研究和产品之间来回切换。',
        year: '2024 - 2026',
        featuredAsset: '个人照片/个人照片.jpg',
        metrics: ['3 份核心材料', '研究与产品并行', '长期主义驱动'],
        assets: [
            {
                id: 'resume',
                title: '个人简历',
                description: '用于快速查看教育背景、实习经历、技能组合和项目概况。',
                type: 'pdf',
                filePath: '个人简历/重庆大学-李云飞-简历.pdf',
                tags: ['简历', '教育', '经历']
            },
            {
                id: 'about-me',
                title: '关于我的经历',
                description: '更完整的自述版本，适合补充理解我的成长路径和职业判断。',
                type: 'pdf',
                filePath: '自述/关于我的经历.pdf',
                tags: ['自述', '动机', '长期方向']
            },
            {
                id: 'portrait',
                title: '个人照片',
                description: '作品集主视觉中的个人肖像素材。',
                type: 'image',
                filePath: '个人照片/个人照片.jpg',
                tags: ['肖像', '主视觉']
            }
        ]
    },
    {
        id: 'hospital-automation',
        lens: 'systems',
        eyebrow: '02 / Systems',
        title: '妇幼保健院自动化流程',
        summary: '把 PowerQuery 用在真实业务里，目标不是“会做报表”，而是让重复的数据整理流程可复用、可交接。',
        detail: '这个项目更像是一套内部操作系统。它处理多来源表格、减少手工整理，并把工作节奏从“等数据”改成“用数据”。这类工作通常不炫，但最考验结构意识。',
        year: '2025',
        featuredAsset: '实践项目：为妇幼保健院搭建自动化流程/powerquery自动化模版.xlsx',
        metrics: ['真实业务场景', 'PowerQuery 自动化', '强调可复用'],
        assets: [
            {
                id: 'hospital-template',
                title: 'PowerQuery 自动化模版',
                description: '用于数据清洗与流程衔接的 Excel / PowerQuery 模版。',
                type: 'other',
                filePath: '实践项目：为妇幼保健院搭建自动化流程/powerquery自动化模版.xlsx',
                tags: ['PowerQuery', 'Excel', '自动化']
            }
        ]
    },
    {
        id: 'period-app',
        lens: 'product',
        eyebrow: '03 / Product',
        title: '生理周期 App',
        summary: '一款围绕健康提醒与周期追踪的 Android 应用，包含连续迭代版本和完整界面截图。',
        detail: '这组内容展示的不是单张界面，而是一个产品从安装包、功能版本到视觉界面的连续性。相比“做了一个 App”，我更想呈现它如何从需求想法变成可以测试的真实物件。',
        year: '2025',
        featuredAsset: 'APP/生理周期App项目/界面展示/1.jpg',
        metrics: ['4 个 APK 版本', '6 张界面截图', '健康类产品场景'],
        assets: [
            {
                id: 'period-apk-v1',
                title: '生理周期 App v1',
                description: '第一版 APK 安装包。',
                type: 'apk',
                filePath: 'APP/生理周期App项目/生理周期App-debug-v1.apk',
                tags: ['Android', 'APK', 'v1']
            },
            {
                id: 'period-apk-v2',
                title: '生理周期 App v2',
                description: '第二版 APK 安装包。',
                type: 'apk',
                filePath: 'APP/生理周期App项目/生理周期App-debug-v2.apk',
                tags: ['Android', 'APK', 'v2']
            },
            {
                id: 'period-apk-v3',
                title: '生理周期 App v3',
                description: '第三版 APK 安装包。',
                type: 'apk',
                filePath: 'APP/生理周期App项目/生理周期App-debug-v3.apk',
                tags: ['Android', 'APK', 'v3']
            },
            {
                id: 'period-apk-v4',
                title: '生理周期 App v4',
                description: '第四版 APK 安装包。',
                type: 'apk',
                filePath: 'APP/生理周期App项目/生理周期App-debug-v4.apk',
                tags: ['Android', 'APK', 'v4']
            },
            {
                id: 'period-ui-1',
                title: '主界面',
                description: '进入应用后的主视图。',
                type: 'image',
                filePath: 'APP/生理周期App项目/界面展示/1.jpg',
                tags: ['UI', '主界面']
            },
            {
                id: 'period-ui-2',
                title: '数据统计',
                description: '围绕周期数据的统计展示。',
                type: 'image',
                filePath: 'APP/生理周期App项目/界面展示/2.jpg',
                tags: ['UI', '统计']
            },
            {
                id: 'period-ui-3',
                title: '设置界面',
                description: '偏系统和偏好的设置页。',
                type: 'image',
                filePath: 'APP/生理周期App项目/界面展示/3.jpg',
                tags: ['UI', '设置']
            },
            {
                id: 'period-ui-4',
                title: '日历视图',
                description: '围绕时间结构组织的周期日历。',
                type: 'image',
                filePath: 'APP/生理周期App项目/界面展示/4.jpg',
                tags: ['UI', '日历']
            },
            {
                id: 'period-ui-5',
                title: '通知设置',
                description: '提醒功能与通知方式配置。',
                type: 'image',
                filePath: 'APP/生理周期App项目/界面展示/5.jpg',
                tags: ['UI', '提醒']
            },
            {
                id: 'period-ui-6',
                title: '关于页面',
                description: '关于与版本信息展示。',
                type: 'image',
                filePath: 'APP/生理周期App项目/界面展示/6.jpg',
                tags: ['UI', '信息']
            }
        ]
    },
    {
        id: 'mini-programs',
        lens: 'product',
        eyebrow: '04 / Product',
        title: '小程序、智能体与工作流',
        summary: '这部分更像一个实验场，关注 AI 应用如何从想法变成可交互的工具。',
        detail: '这里收录的是不同方向的产品试验，包括旅行规划、论文写作辅助、工作流示例和小程序合集。它们并不追求统一，而是展示我如何快速把不同问题转译成可感知的界面。',
        year: '2025 - 2026',
        featuredAsset: '小程序&智能体&工作流/AI旅行规划.jpg',
        metrics: ['5 组界面素材', 'AI 应用导向', '实验密度高'],
        assets: [
            {
                id: 'travel-agent',
                title: 'AI 旅行规划',
                description: '面向旅行场景的 AI 规划界面展示。',
                type: 'image',
                filePath: '小程序&智能体&工作流/AI旅行规划.jpg',
                tags: ['AI', '旅行规划']
            },
            {
                id: 'mini-collection-1',
                title: '小程序与应用合集 1',
                description: '不同方向的小程序与工具集合。',
                type: 'image',
                filePath: '小程序&智能体&工作流/小程序&应用合集.jpg',
                tags: ['小程序', '合集']
            },
            {
                id: 'mini-collection-2',
                title: '小程序与应用合集 2',
                description: '更多应用场景与交互尝试。',
                type: 'image',
                filePath: '小程序&智能体&工作流/小程序&应用合集2.jpg',
                tags: ['小程序', '合集']
            },
            {
                id: 'workflow-demo',
                title: '工作流示例',
                description: '自动化工作流示例界面。',
                type: 'image',
                filePath: '小程序&智能体&工作流/工作流示例.jpg',
                tags: ['工作流', '自动化']
            },
            {
                id: 'paper-agent',
                title: '论文辅助写作智能体',
                description: '面向学术场景的写作辅助界面。',
                type: 'image',
                filePath: '小程序&智能体&工作流/论文辅助写作智能体.jpg',
                tags: ['AI 智能体', '学术']
            }
        ]
    },
    {
        id: 'learning-output',
        lens: 'research',
        eyebrow: '05 / Research',
        title: '学习手册与方法沉淀',
        summary: '不是为了“证明努力”，而是为了保留推理路径和复用方法。',
        detail: '这些文档是我处理新领域时最常见的方式: 一边学习，一边把结构整理出来。它们覆盖 AI、数据分析、SQL 和创业方向研究，比较完整地保留了我的学习方法。',
        year: '2024 - 2026',
        featuredAsset: '学习过程产出/AI系统化学习手册.pdf',
        metrics: ['4 份 PDF', '系统化笔记', '方法可复用'],
        assets: [
            {
                id: 'ai-handbook',
                title: 'AI 系统化学习手册',
                description: '从基础到实践的学习手册。',
                type: 'pdf',
                filePath: '学习过程产出/AI系统化学习手册.pdf',
                tags: ['AI', '手册']
            },
            {
                id: 'chatbot-research',
                title: '低预算聊天机器人创业研究',
                description: '面向方向判断的前期研究材料。',
                type: 'pdf',
                filePath: '学习过程产出/低预算聊天机器人创业：前期研究（方向层）.pdf',
                tags: ['创业', '聊天机器人']
            },
            {
                id: 'data-analysis-notes',
                title: '数据分析学习笔记',
                description: '从入门到实践的连续笔记。',
                type: 'pdf',
                filePath: '学习过程产出/我的数据分析学习笔记：从入门到实践之路.pdf',
                tags: ['数据分析', '学习笔记']
            },
            {
                id: 'sql-notes',
                title: 'SQL 学习笔记',
                description: '围绕查询和数据库基础的整理。',
                type: 'pdf',
                filePath: '学习过程产出/SQL 学习笔记.pdf',
                tags: ['SQL', '数据库']
            }
        ]
    },
    {
        id: 'academic-paper',
        lens: 'research',
        eyebrow: '06 / Research',
        title: '贝叶斯流排序框架论文',
        summary: '更偏学术的一组内容，体现我对抽象问题的耐心和结构化表达能力。',
        detail: '相比应用类项目，这篇论文展示的是另一种工作方式: 在更 formal 的写作和研究要求下，把问题边界、方法路径和结果表达清楚。',
        year: '2025',
        featuredAsset: '论文/贝叶斯流排序框架.pdf',
        metrics: ['1 篇论文', '算法与研究表达', '正式写作'],
        assets: [
            {
                id: 'bayesian-paper',
                title: '贝叶斯流排序框架',
                description: '围绕排序框架展开的研究论文。',
                type: 'pdf',
                filePath: '论文/贝叶斯流排序框架.pdf',
                tags: ['论文', '贝叶斯', '排序']
            }
        ]
    },
    {
        id: 'video-creation',
        lens: 'story',
        eyebrow: '07 / Story',
        title: '视频创作',
        summary: '这是作品集里偏表达的一面，用视觉叙事把信息变得更可感知。',
        detail: '由于成本限制，这里只展示了视频创作的截图，包含AI制作以及个人剪辑作品',
        year: '2025',
        featuredAsset: '视频创作/视频展示.jpg',
        metrics: ['1 组展示图', '视觉表达', '叙事补充'],
        assets: [
            {
                id: 'video-showcase',
                title: '视频创作展示',
                description: '视频方向作品的封面与展示图。',
                type: 'image',
                filePath: '视频创作/视频展示.jpg',
                tags: ['视频', '创作']
            }
        ]
    }
];

const featuredCollectionIds = [
    'hospital-automation',
    'period-app',
    'mini-programs',
    'learning-output'
];

function getCollectionsByLens(lensId) {
    if (lensId === 'all') return collections;
    return collections.filter(collection => collection.lens === lensId);
}

function getTypeLabel(type) {
    switch (type) {
        case 'pdf': return 'PDF';
        case 'image': return 'IMG';
        case 'video': return 'VID';
        case 'apk': return 'APK';
        default: return 'FILE';
    }
}
