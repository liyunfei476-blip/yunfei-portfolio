// 按文件夹组织的作品集数据
const folderCollections = [
    {
        id: 'personal-resume',
        folderName: '个人简历',
        title: '个人简历',
        description: '重庆大学李云飞的个人简历，包含教育背景、专业技能、项目经历和求职意向。',
        summary: '详细展示教育背景、技术技能、项目经验和职业目标。',
        coverImage: '个人简历/重庆大学-李云飞-简历.pdf', // PDF封面用图标表示
        coverType: 'pdf',
        files: [
            {
                id: 'resume',
                title: '个人简历',
                description: '重庆大学李云飞的个人简历PDF文档',
                type: 'pdf',
                filePath: '个人简历/重庆大学-李云飞-简历.pdf',
                tags: ['简历', '教育', '工作经历'],
            }
        ]
    },
    {
        id: 'personal-statement',
        folderName: '自述',
        title: '关于我的经历',
        description: '详细的自述文档，介绍个人成长经历、学习动机、技术兴趣和职业规划。',
        summary: '个人成长历程、学习动机和未来职业发展规划。',
        coverImage: '自述/关于我的经历.pdf',
        coverType: 'pdf',
        files: [
            {
                id: 'about-me',
                title: '关于我的经历',
                description: '个人自述文档，详细介绍个人背景和职业目标',
                type: 'pdf',
                filePath: '自述/关于我的经历.pdf',
                tags: ['自述', '个人经历', '职业规划'],
            }
        ]
    },
    {
        id: 'hospital-automation',
        folderName: '实践项目：为妇幼保健院搭建自动化流程',
        title: '妇幼保健院自动化流程',
        description: '使用PowerQuery为妇幼保健院搭建自动化数据处理流程的Excel模板，提高工作效率和数据准确性。',
        summary: 'PowerQuery自动化数据处理Excel模板，提升医院工作效率。',
        coverImage: '实践项目：为妇幼保健院搭建自动化流程/powerquery自动化模版.xlsx',
        coverType: 'other',
        files: [
            {
                id: 'hospital-automation-excel',
                title: '妇幼保健院自动化流程Excel模板',
                description: '使用PowerQuery搭建自动化数据处理流程的Excel模板文件',
                type: 'other',
                filePath: '实践项目：为妇幼保健院搭建自动化流程/powerquery自动化模版.xlsx',
                tags: ['PowerQuery', '自动化', '数据分析', '医院系统', 'Excel'],
            }
        ]
    },
    {
        id: 'period-app',
        folderName: 'APP/生理周期App项目',
        title: '生理周期App',
        description: '一款帮助女性跟踪生理周期的Android应用，包含周期预测、数据统计、提醒功能和完善的界面设计。',
        summary: 'Android健康应用，帮助女性跟踪生理周期，包含数据统计和提醒功能。',
        coverImage: 'APP/生理周期App项目/界面展示/1.jpg',
        coverType: 'image',
        files: [
            {
                id: 'period-app-v1',
                title: '生理周期App v1',
                description: 'Android应用第一个版本',
                type: 'apk',
                filePath: 'APP/生理周期App项目/生理周期App-debug-v1.apk',
                tags: ['Android', '移动应用', '健康', 'v1'],
            },
            {
                id: 'period-app-v2',
                title: '生理周期App v2',
                description: 'Android应用第二个版本',
                type: 'apk',
                filePath: 'APP/生理周期App项目/生理周期App-debug-v2.apk',
                tags: ['Android', '移动应用', '健康', 'v2'],
            },
            {
                id: 'period-app-v3',
                title: '生理周期App v3',
                description: 'Android应用第三个版本',
                type: 'apk',
                filePath: 'APP/生理周期App项目/生理周期App-debug-v3.apk',
                tags: ['Android', '移动应用', '健康', 'v3'],
            },
            {
                id: 'period-app-v4',
                title: '生理周期App v4',
                description: 'Android应用第四个版本',
                type: 'apk',
                filePath: 'APP/生理周期App项目/生理周期App-debug-v4.apk',
                tags: ['Android', '移动应用', '健康', 'v4'],
            },
            {
                id: 'period-app-ui1',
                title: '主界面',
                description: '应用主界面截图',
                type: 'image',
                filePath: 'APP/生理周期App项目/界面展示/1.jpg',
                tags: ['界面', 'UI设计', '主界面'],
            },
            {
                id: 'period-app-ui2',
                title: '数据统计界面',
                description: '数据统计界面截图',
                type: 'image',
                filePath: 'APP/生理周期App项目/界面展示/2.jpg',
                tags: ['界面', '数据可视化', '统计'],
            },
            {
                id: 'period-app-ui3',
                title: '设置界面',
                description: '设置界面截图',
                type: 'image',
                filePath: 'APP/生理周期App项目/界面展示/3.jpg',
                tags: ['界面', '设置', '配置'],
            },
            {
                id: 'period-app-ui4',
                title: '日历视图',
                description: '日历视图截图',
                type: 'image',
                filePath: 'APP/生理周期App项目/界面展示/4.jpg',
                tags: ['界面', '日历', '视图'],
            },
            {
                id: 'period-app-ui5',
                title: '通知设置',
                description: '通知设置截图',
                type: 'image',
                filePath: 'APP/生理周期App项目/界面展示/5.jpg',
                tags: ['界面', '通知', '提醒'],
            },
            {
                id: 'period-app-ui6',
                title: '关于页面',
                description: '关于页面截图',
                type: 'image',
                filePath: 'APP/生理周期App项目/界面展示/6.jpg',
                tags: ['界面', '关于', '信息'],
            }
        ]
    },
    {
        id: 'learning-output',
        folderName: '学习过程产出',
        title: '学习成果',
        description: '系统化的学习笔记和研究文档，涵盖人工智能、数据分析、SQL等多个技术领域。',
        summary: 'AI、数据分析、SQL等领域的系统化学习笔记和研究文档。',
        coverImage: '学习过程产出/AI系统化学习手册.pdf',
        coverType: 'pdf',
        files: [
            {
                id: 'ai-learning-handbook',
                title: 'AI系统化学习手册',
                description: '系统化学习人工智能的指南手册，涵盖基础理论和实践方法',
                type: 'pdf',
                filePath: '学习过程产出/AI系统化学习手册.pdf',
                tags: ['AI', '学习', '手册', '人工智能'],
            },
            {
                id: 'low-budget-chatbot',
                title: '低预算聊天机器人创业研究',
                description: '关于低成本构建聊天机器人创业项目的方向层研究',
                type: 'pdf',
                filePath: '学习过程产出/低预算聊天机器人创业：前期研究（方向层）.pdf',
                tags: ['聊天机器人', '创业', '研究', 'AI应用'],
            },
            {
                id: 'data-analysis-notes',
                title: '数据分析学习笔记',
                description: '从入门到实践的数据分析学习笔记，包含实战案例',
                type: 'pdf',
                filePath: '学习过程产出/我的数据分析学习笔记：从入门到实践之路.pdf',
                tags: ['数据分析', '学习笔记', '实践', '案例'],
            },
            {
                id: 'sql-notes',
                title: 'SQL学习笔记',
                description: 'SQL数据库查询语言的学习笔记',
                type: 'pdf',
                filePath: '学习过程产出/SQL 学习笔记.pdf',
                tags: ['SQL', '数据库', '学习笔记', '查询'],
            }
        ]
    },
    {
        id: 'mini-programs',
        folderName: '小程序&智能体&工作流',
        title: '小程序与智能体',
        description: '开发的各种小程序、AI智能体和自动化工作流，展示实际应用能力和创新思维。',
        summary: '小程序、AI智能体和自动化工作流的开发成果展示。',
        coverImage: '小程序&智能体&工作流/AI旅行规划.jpg',
        coverType: 'image',
        files: [
            {
                id: 'ai-travel-planning',
                title: 'AI旅行规划智能体',
                description: '使用AI进行旅行规划的智能体界面展示',
                type: 'image',
                filePath: '小程序&智能体&工作流/AI旅行规划.jpg',
                tags: ['AI', '旅行规划', '智能体', '人工智能'],
            },
            {
                id: 'mini-app-collection1',
                title: '小程序&应用合集1',
                description: '开发的小程序和应用集合截图',
                type: 'image',
                filePath: '小程序&智能体&工作流/小程序&应用合集.jpg',
                tags: ['小程序', '应用', '集合', '开发'],
            },
            {
                id: 'mini-app-collection2',
                title: '小程序&应用合集2',
                description: '更多小程序和应用集合截图',
                type: 'image',
                filePath: '小程序&智能体&工作流/小程序&应用合集2.jpg',
                tags: ['小程序', '应用', '集合', '开发'],
            },
            {
                id: 'workflow-example',
                title: '工作流示例',
                description: '自动化工作流的示例展示',
                type: 'image',
                filePath: '小程序&智能体&工作流/工作流示例.jpg',
                tags: ['工作流', '自动化', '流程', '效率'],
            },
            {
                id: 'paper-writing-assistant',
                title: '论文辅助写作智能体',
                description: '辅助学术论文写作的AI智能体界面',
                type: 'image',
                filePath: '小程序&智能体&工作流/论文辅助写作智能体.jpg',
                tags: ['论文写作', 'AI智能体', '学术', '辅助工具'],
            }
        ]
    },
    {
        id: 'academic-paper',
        folderName: '论文',
        title: '学术论文',
        description: '关于贝叶斯流排序框架的研究论文，展示学术研究能力和算法理解。',
        summary: '贝叶斯流排序框架的研究论文，展示算法研究和学术能力。',
        coverImage: '论文/贝叶斯流排序框架.pdf',
        coverType: 'pdf',
        files: [
            {
                id: 'bayesian-flow-sorting',
                title: '贝叶斯流排序框架',
                description: '关于贝叶斯流排序框架的研究论文',
                type: 'pdf',
                filePath: '论文/贝叶斯流排序框架.pdf',
                tags: ['贝叶斯', '排序算法', '论文', '学术研究'],
            }
        ]
    },
    {
        id: 'video-creation',
        folderName: '视频创作',
        title: '视频创作',
        description: '个人视频创作作品展示，展示多媒体制作能力和创意表达。',
        summary: '个人视频创作作品展示，展示多媒体制作和创意表达能力。',
        coverImage: '视频创作/视频展示.jpg',
        coverType: 'image',
        files: [
            {
                id: 'video-showcase',
                title: '视频创作展示',
                description: '个人视频创作作品展示图片',
                type: 'image',
                filePath: '视频创作/视频展示.jpg',
                tags: ['视频创作', '展示', '多媒体'],
            }
        ]
    }
];

// 个人照片单独处理（不在集合中显示）
const personalPhoto = {
    id: 'personal-photo',
    title: '个人照片',
    description: '个人形象照片',
    filePath: '个人照片/个人照片.jpg',
    type: 'image'
};

// 获取封面图标
function getCoverIcon(type) {
    switch(type) {
        case 'pdf': return '<i class="fas fa-file-pdf text-red-500"></i>';
        case 'image': return '<i class="fas fa-image text-green-500"></i>';
        case 'video': return '<i class="fas fa-video text-blue-500"></i>';
        case 'apk': return '<i class="fab fa-android text-purple-500"></i>';
        case 'other': return '<i class="fas fa-file-excel text-green-500"></i>';
        default: return '<i class="fas fa-folder text-gray-500"></i>';
    }
}

// 获取文件类型图标
function getFileIcon(type) {
    switch(type) {
        case 'pdf': return '<i class="fas fa-file-pdf text-red-400"></i>';
        case 'image': return '<i class="fas fa-image text-green-400"></i>';
        case 'video': return '<i class="fas fa-video text-blue-400"></i>';
        case 'apk': return '<i class="fab fa-android text-purple-400"></i>';
        case 'other': return '<i class="fas fa-file-excel text-green-400"></i>';
        default: return '<i class="fas fa-file text-gray-400"></i>';
    }
}