// 应用逻辑
document.addEventListener('DOMContentLoaded', function() {
    // 设置当前年份
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // 更新项目计数
    document.getElementById('item-count').textContent = portfolioData.length;

    // 渲染所有项目
    renderPortfolioItems('all');

    // 绑定分类按钮事件
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // 更新按钮状态
            document.querySelectorAll('.category-btn').forEach(b => {
                b.classList.remove('text-blue-600');
                b.classList.add('text-gray-600', 'hover:text-blue-600');
            });
            this.classList.remove('text-gray-600', 'hover:text-blue-600');
            this.classList.add('text-blue-600');

            // 渲染对应分类的项目
            renderPortfolioItems(category);
        });
    });

    // 绑定模态框关闭事件
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });

    // 初始选中"全部"按钮
    document.querySelector('.category-btn[data-category="all"]').click();
});

// 渲染项目卡片
function renderPortfolioItems(category) {
    const grid = document.getElementById('portfolio-grid');
    grid.innerHTML = '';

    const filteredItems = category === 'all'
        ? portfolioData
        : portfolioData.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const card = createPortfolioCard(item);
        grid.appendChild(card);
    });
}

// 创建项目卡片
function createPortfolioCard(item) {
    const card = document.createElement('div');
    card.className = 'portfolio-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200';

    const icon = getIcon(item.type);
    const categoryName = categories.find(c => c.id === item.category)?.name || item.category;

    card.innerHTML = `
        <div class="p-6">
            <div class="flex justify-between items-start mb-4">
                <div class="flex items-center space-x-3">
                    <div class="text-2xl">${icon}</div>
                    <div>
                        <h3 class="font-bold text-lg">${item.title}</h3>
                        <div class="flex items-center space-x-2 mt-1">
                            <span class="text-sm text-gray-500">${getCategoryIcon(item.category)}</span>
                            <span class="text-sm text-gray-500">${categoryName}</span>
                        </div>
                    </div>
                </div>
                <button class="view-detail-btn text-blue-500 hover:text-blue-700" data-id="${item.id}">
                    <i class="fas fa-external-link-alt"></i>
                </button>
            </div>

            <p class="text-gray-600 mb-4 line-clamp-2">${item.description}</p>

            <div class="flex flex-wrap gap-2 mb-4">
                ${item.tags.map(tag => `<span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">${tag}</span>`).join('')}
            </div>

            <div class="mb-4 rounded-lg overflow-hidden bg-gray-100 h-48 flex items-center justify-center">
                ${getPreviewContent(item)}
            </div>

            <div class="flex justify-between">
                <button class="view-detail-btn px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2" data-id="${item.id}">
                    <span>查看详情</span>
                    <i class="fas fa-external-link-alt text-sm"></i>
                </button>
                <a href="${item.filePath}" target="_blank" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2" ${item.type === 'apk' || item.type === 'pdf' ? 'download' : ''}>
                    <i class="fas fa-download"></i>
                    <span>${getDownloadText(item.type)}</span>
                </a>
            </div>
        </div>
    `;

    // 绑定查看详情事件
    card.querySelectorAll('.view-detail-btn').forEach(btn => {
        btn.addEventListener('click', () => openModal(item));
    });

    return card;
}

// 获取图标
function getIcon(type) {
    switch(type) {
        case 'pdf': return '<i class="fas fa-file-pdf text-red-500 text-xl"></i>';
        case 'image': return '<i class="fas fa-image text-green-500 text-xl"></i>';
        case 'video': return '<i class="fas fa-video text-blue-500 text-xl"></i>';
        case 'apk': return '<i class="fab fa-android text-purple-500 text-xl"></i>';
        default: return '<i class="fas fa-file-alt text-gray-500 text-xl"></i>';
    }
}

// 获取分类图标
function getCategoryIcon(categoryId) {
    switch(categoryId) {
        case 'about': return '<i class="fas fa-user"></i>';
        case 'project': return '<i class="fas fa-project-diagram"></i>';
        case 'app': return '<i class="fas fa-mobile-alt"></i>';
        case 'learning': return '<i class="fas fa-graduation-cap"></i>';
        case 'paper': return '<i class="fas fa-file-alt"></i>';
        case 'video': return '<i class="fas fa-video"></i>';
        default: return '<i class="fas fa-file-alt"></i>';
    }
}

// 获取预览内容
function getPreviewContent(item) {
    switch(item.type) {
        case 'image':
            return `<img src="${item.filePath}" alt="${item.title}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/400x200?text=图片预览'">`;
        case 'pdf':
            return `
                <div class="text-center p-8">
                    <i class="fas fa-file-pdf text-6xl text-red-400 mx-auto mb-4"></i>
                    <p class="text-gray-500">PDF文档</p>
                    <p class="text-sm text-gray-400">点击查看或下载</p>
                </div>
            `;
        case 'video':
            return `
                <div class="text-center p-8">
                    <i class="fas fa-video text-6xl text-blue-400 mx-auto mb-4"></i>
                    <p class="text-gray-500">视频文件</p>
                    <p class="text-sm text-gray-400">点击播放</p>
                </div>
            `;
        case 'apk':
            return `
                <div class="text-center p-8">
                    <i class="fab fa-android text-6xl text-green-400 mx-auto mb-4"></i>
                    <p class="text-gray-500">Android应用</p>
                    <p class="text-sm text-gray-400">APK安装包</p>
                </div>
            `;
        default:
            return `<div class="text-gray-500">未知类型</div>`;
    }
}

// 获取下载文本
function getDownloadText(type) {
    switch(type) {
        case 'apk': return '下载APK';
        case 'pdf': return '下载PDF';
        default: return '下载';
    }
}

// 打开模态框
function openModal(item) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalContent = document.getElementById('modal-content');
    const modalInfo = document.getElementById('modal-info');
    const modalActions = document.getElementById('modal-actions');

    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;

    // 设置内容预览
    modalContent.innerHTML = getModalContent(item);

    // 设置文件信息
    const categoryName = categories.find(c => c.id === item.category)?.name || item.category;
    modalInfo.innerHTML = `
        <li class="flex justify-between">
            <span class="text-gray-600">文件类型:</span>
            <span class="font-medium">${item.type.toUpperCase()}</span>
        </li>
        <li class="flex justify-between">
            <span class="text-gray-600">分类:</span>
            <span class="font-medium">${categoryName}</span>
        </li>
        <li class="flex justify-between">
            <span class="text-gray-600">标签:</span>
            <span>${item.tags.join(', ')}</span>
        </li>
    `;

    // 设置操作按钮
    const downloadText = getDownloadText(item.type);
    modalActions.innerHTML = `
        <a href="${item.filePath}" target="_blank" class="block w-full text-center py-3 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors" ${item.type === 'apk' || item.type === 'pdf' ? 'download' : ''}>
            ${downloadText}
        </a>
        <button class="close-modal-btn block w-full text-center py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            关闭预览
        </button>
    `;

    // 绑定关闭按钮
    modalActions.querySelector('.close-modal-btn').addEventListener('click', closeModal);

    // 显示模态框
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

// 获取模态框内容
function getModalContent(item) {
    switch(item.type) {
        case 'image':
            return `
                <div class="rounded-lg overflow-hidden">
                    <img src="${item.filePath}" alt="${item.title}" class="w-full h-auto max-h-[60vh] object-contain" onerror="this.src='https://via.placeholder.com/800x600?text=图片加载失败'">
                </div>
            `;
        case 'pdf':
            return `
                <div class="h-[60vh] border rounded-lg flex flex-col">
                    <div class="p-4 border-b bg-gray-50 flex justify-between items-center">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-file-pdf text-red-500 text-2xl"></i>
                            <span class="font-semibold">PDF预览</span>
                        </div>
                        <a href="${item.filePath}" target="_blank" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center space-x-2" download>
                            <i class="fas fa-download"></i>
                            <span>下载完整PDF</span>
                        </a>
                    </div>
                    <div class="flex-1 overflow-auto p-8">
                        <p class="text-gray-700 mb-4">
                            由于浏览器限制，PDF文件无法直接嵌入预览。请点击上方按钮下载查看完整文档。
                        </p>
                        <p class="text-gray-500">
                            文档大小: 约${item.title.includes('简历') ? '1-2' : '5-10'}MB
                        </p>
                    </div>
                </div>
            `;
        case 'video':
            return `
                <div class="rounded-lg overflow-hidden bg-black">
                    <video src="${item.filePath}" controls class="w-full h-[60vh]" controlsList="nodownload">
                        您的浏览器不支持视频标签。
                    </video>
                </div>
            `;
        case 'apk':
            const thumbnail = item.thumbnail ? `<img src="${item.thumbnail}" alt="应用截图" class="rounded-lg border">` : '';
            return `
                <div class="border rounded-lg p-8">
                    <div class="text-center mb-8">
                        <i class="fab fa-android text-6xl text-green-500 mx-auto mb-4"></i>
                        <h4 class="text-xl font-bold mb-2">Android应用程序</h4>
                        <p class="text-gray-600">该文件为Android APK安装包，可在Android设备上安装运行。</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        ${thumbnail}
                    </div>
                    <div class="text-center">
                        <a href="${item.filePath}" download class="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl">
                            下载APK安装包
                        </a>
                        <p class="text-sm text-gray-500 mt-4">
                            请确保您的设备允许安装来自未知来源的应用。
                        </p>
                    </div>
                </div>
            `;
        default:
            return `<div class="text-gray-500">无法预览此类型文件</div>`;
    }
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}