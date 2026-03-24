// 应用逻辑 - 文件夹分类版本
document.addEventListener('DOMContentLoaded', function() {
    // 设置当前年份
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // 更新文件夹计数
    document.getElementById('folder-count').textContent = folderCollections.length;

    // 渲染所有文件夹卡片
    renderFolderCards();

    // 绑定模态框关闭事件
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });

    // 更新网站URL（如果是线上部署）
    updateSiteUrl();
});

// 渲染文件夹卡片
function renderFolderCards() {
    const grid = document.getElementById('folders-grid');
    grid.innerHTML = '';

    folderCollections.forEach(folder => {
        const card = createFolderCard(folder);
        grid.appendChild(card);
    });
}

// 创建文件夹卡片
function createFolderCard(folder) {
    const card = document.createElement('div');
    card.className = 'folder-card bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200';
    card.dataset.folderId = folder.id;

    const coverIcon = getCoverIcon(folder.coverType);
    const fileCount = folder.files.length;
    const fileTypes = [...new Set(folder.files.map(f => f.type))];

    card.innerHTML = `
        <div class="p-6 cursor-pointer folder-header">
            <div class="flex justify-between items-start mb-4">
                <div class="flex items-center space-x-3">
                    <div class="text-3xl">${coverIcon}</div>
                    <div>
                        <h3 class="font-bold text-xl">${folder.title}</h3>
                        <p class="text-gray-500 text-sm mt-1">${folder.folderName}</p>
                    </div>
                </div>
                <button class="expand-btn text-gray-400 hover:text-blue-500 transform transition-transform">
                    <i class="fas fa-chevron-down"></i>
                </button>
            </div>

            <p class="text-gray-600 mb-4 line-clamp-2">${folder.description}</p>
            <p class="text-gray-500 text-sm mb-4"><strong>摘要:</strong> ${folder.summary}</p>

            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                    <span class="text-sm text-gray-500">
                        <i class="fas fa-file mr-1"></i> ${fileCount}个文件
                    </span>
                    <span class="text-sm text-gray-500">
                        <i class="fas fa-tags mr-1"></i> ${fileTypes.length}种类型
                    </span>
                </div>
                <span class="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                    点击查看详情
                </span>
            </div>
        </div>

        <div class="expandable-content border-t border-gray-100">
            <div class="p-6 pt-4">
                <h4 class="font-semibold text-gray-700 mb-4">包含文件:</h4>
                <div class="space-y-3" id="files-${folder.id}">
                    <!-- 文件列表将通过JavaScript动态生成 -->
                </div>

                <div class="mt-6 pt-4 border-t border-gray-100">
                    <div class="flex justify-between">
                        <button class="view-all-btn px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2"
                                data-folder-id="${folder.id}">
                            <i class="fas fa-external-link-alt"></i>
                            <span>查看所有文件</span>
                        </button>
                        <button class="preview-folder-btn px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
                                data-folder-id="${folder.id}">
                            <i class="fas fa-eye"></i>
                            <span>预览封面文件</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 绑定展开/收起事件
    const header = card.querySelector('.folder-header');
    const expandBtn = card.querySelector('.expand-btn');
    const expandableContent = card.querySelector('.expandable-content');

    header.addEventListener('click', (e) => {
        if (!e.target.closest('.expand-btn') && !e.target.closest('.view-all-btn') && !e.target.closest('.preview-folder-btn')) {
            expandableContent.classList.toggle('expanded');
            const icon = expandBtn.querySelector('i');
            if (expandableContent.classList.contains('expanded')) {
                icon.className = 'fas fa-chevron-up';
                // 如果内容为空，渲染文件列表
                const filesContainer = card.querySelector(`#files-${folder.id}`);
                if (filesContainer.children.length === 0) {
                    renderFileList(folder, filesContainer);
                }
            } else {
                icon.className = 'fas fa-chevron-down';
            }
        }
    });

    expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        expandableContent.classList.toggle('expanded');
        const icon = expandBtn.querySelector('i');
        if (expandableContent.classList.contains('expanded')) {
            icon.className = 'fas fa-chevron-up';
            // 如果内容为空，渲染文件列表
            const filesContainer = card.querySelector(`#files-${folder.id}`);
            if (filesContainer.children.length === 0) {
                renderFileList(folder, filesContainer);
            }
        } else {
            icon.className = 'fas fa-chevron-down';
        }
    });

    // 绑定查看所有文件按钮
    card.querySelector('.view-all-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        openFolderModal(folder);
    });

    // 绑定预览封面按钮
    card.querySelector('.preview-folder-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        previewCoverFile(folder);
    });

    return card;
}

// 渲染文件列表
function renderFileList(folder, container) {
    container.innerHTML = '';

    folder.files.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item bg-gray-50 rounded-lg p-4';

        const fileIcon = getFileIcon(file.type);
        const isDownloadable = file.type === 'pdf' || file.type === 'apk';

        fileItem.innerHTML = `
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-3">
                    <div class="text-xl">${fileIcon}</div>
                    <div>
                        <h5 class="font-medium">${file.title}</h5>
                        <p class="text-gray-500 text-sm">${file.description}</p>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <button class="preview-file-btn text-blue-500 hover:text-blue-700 p-2"
                            data-file-id="${file.id}"
                            data-folder-id="${folder.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                    <a href="${file.filePath}" target="_blank"
                       class="text-gray-500 hover:text-gray-700 p-2"
                       ${isDownloadable ? 'download' : ''}>
                        <i class="fas fa-download"></i>
                    </a>
                </div>
            </div>
            <div class="mt-2 flex flex-wrap gap-1">
                ${file.tags.map(tag => `<span class="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">${tag}</span>`).join('')}
            </div>
        `;

        // 绑定预览文件事件
        fileItem.querySelector('.preview-file-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            openFileModal(file);
        });

        container.appendChild(fileItem);
    });
}

// 打开文件夹模态框（查看所有文件）
function openFolderModal(folder) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalContent = document.getElementById('modal-content');
    const modalInfo = document.getElementById('modal-info');
    const modalActions = document.getElementById('modal-actions');

    modalTitle.textContent = `${folder.title} - 所有文件`;
    modalDescription.textContent = folder.description;

    // 设置内容预览
    modalContent.innerHTML = `
        <div class="mb-6">
            <h4 class="text-lg font-semibold mb-4">项目描述:</h4>
            <p class="text-gray-700">${folder.description}</p>
            <p class="text-gray-600 mt-2"><strong>摘要:</strong> ${folder.summary}</p>
        </div>
        <div>
            <h4 class="text-lg font-semibold mb-4">包含文件 (${folder.files.length}个):</h4>
            <div class="space-y-3">
                ${folder.files.map(file => `
                    <div class="border rounded-lg p-4">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center space-x-3">
                                ${getFileIcon(file.type)}
                                <div>
                                    <h5 class="font-medium">${file.title}</h5>
                                    <p class="text-gray-500 text-sm">${file.description}</p>
                                </div>
                            </div>
                            <div class="flex space-x-2">
                                <button class="preview-in-modal-btn px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm"
                                        data-file-id="${file.id}">
                                    预览
                                </button>
                                <a href="${file.filePath}" target="_blank"
                                   class="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                                   ${file.type === 'pdf' || file.type === 'apk' ? 'download' : ''}>
                                    下载
                                </a>
                            </div>
                        </div>
                        <div class="mt-2 flex flex-wrap gap-1">
                            ${file.tags.map(tag => `<span class="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">${tag}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // 绑定模态框内的预览按钮
    modalContent.querySelectorAll('.preview-in-modal-btn').forEach(btn => {
        const fileId = btn.getAttribute('data-file-id');
        const file = folder.files.find(f => f.id === fileId);
        if (file) {
            btn.addEventListener('click', () => {
                closeModal(); // 先关闭当前模态框
                setTimeout(() => openFileModal(file), 300); // 延迟打开文件预览模态框
            });
        }
    });

    // 设置文件信息
    const fileTypes = [...new Set(folder.files.map(f => f.type))];
    modalInfo.innerHTML = `
        <li class="flex justify-between">
            <span class="text-gray-600">项目名称:</span>
            <span class="font-medium">${folder.title}</span>
        </li>
        <li class="flex justify-between">
            <span class="text-gray-600">文件夹:</span>
            <span>${folder.folderName}</span>
        </li>
        <li class="flex justify-between">
            <span class="text-gray-600">文件数量:</span>
            <span>${folder.files.length}个文件</span>
        </li>
        <li class="flex justify-between">
            <span class="text-gray-600">文件类型:</span>
            <span>${fileTypes.join(', ')}</span>
        </li>
    `;

    // 设置操作按钮
    modalActions.innerHTML = `
        <a href="${folder.files[0].filePath}" target="_blank"
           class="block w-full text-center py-3 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
           ${folder.files[0].type === 'pdf' || folder.files[0].type === 'apk' ? 'download' : ''}>
            下载示例文件
        </a>
        <button class="close-modal-btn block w-full text-center py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            关闭
        </button>
    `;

    // 绑定关闭按钮
    modalActions.querySelector('.close-modal-btn').addEventListener('click', closeModal);

    // 显示模态框
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

// 预览封面文件
function previewCoverFile(folder) {
    // 创建封面文件对象
    const coverFile = {
        id: `cover-${folder.id}`,
        title: `${folder.title} - 封面`,
        description: `这是${folder.title}的封面文件`,
        type: folder.coverType,
        filePath: folder.coverImage,
        tags: ['封面', folder.coverType]
    };

    openFileModal(coverFile);
}

// 打开文件模态框
function openFileModal(file) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalContent = document.getElementById('modal-content');
    const modalInfo = document.getElementById('modal-info');
    const modalActions = document.getElementById('modal-actions');

    modalTitle.textContent = file.title;
    modalDescription.textContent = file.description;

    // 设置内容预览
    modalContent.innerHTML = getFilePreviewContent(file);

    // 设置文件信息
    modalInfo.innerHTML = `
        <li class="flex justify-between">
            <span class="text-gray-600">文件类型:</span>
            <span class="font-medium">${file.type.toUpperCase()}</span>
        </li>
        <li class="flex justify-between">
            <span class="text-gray-600">文件路径:</span>
            <span class="text-sm">${file.filePath}</span>
        </li>
        <li class="flex justify-between">
            <span class="text-gray-600">标签:</span>
            <span>${file.tags ? file.tags.join(', ') : '无'}</span>
        </li>
    `;

    // 设置操作按钮
    const downloadText = file.type === 'apk' ? '下载APK文件' :
                        file.type === 'pdf' ? '下载PDF文档' :
                        file.type === 'video' ? '下载视频文件' :
                        file.type === 'other' ? '下载Excel文件' : '下载文件';

    modalActions.innerHTML = `
        <a href="${file.filePath}" target="_blank"
           class="block w-full text-center py-3 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
           ${file.type === 'apk' || file.type === 'pdf' || file.type === 'other' ? 'download' : ''}>
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

// 获取文件预览内容
function getFilePreviewContent(file) {
    switch(file.type) {
        case 'image':
            return `
                <div class="rounded-lg overflow-hidden">
                    <img src="${file.filePath}" alt="${file.title}"
                         class="w-full h-auto max-h-[60vh] object-contain mx-auto"
                         onerror="this.src='https://via.placeholder.com/800x600?text=图片加载失败'">
                </div>
            `;
        case 'pdf':
            return `
                <div class="border rounded-lg flex flex-col">
                    <div class="p-4 border-b bg-gray-50 flex justify-between items-center">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-file-pdf text-red-500 text-2xl"></i>
                            <span class="font-semibold">PDF文档预览</span>
                        </div>
                        <a href="${file.filePath}" target="_blank"
                           class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center space-x-2" download>
                            <i class="fas fa-download"></i>
                            <span>下载完整PDF</span>
                        </a>
                    </div>
                    <div class="p-8">
                        <p class="text-gray-700 mb-4">
                            由于浏览器限制，PDF文件无法直接嵌入预览。请点击上方按钮下载查看完整文档。
                        </p>
                        <div class="bg-gray-100 rounded-lg p-6 text-center">
                            <i class="fas fa-file-pdf text-6xl text-red-400 mx-auto mb-4"></i>
                            <p class="font-medium">${file.title}</p>
                            <p class="text-gray-500">PDF文档</p>
                            <p class="text-sm text-gray-400 mt-2">大小: 约${file.title.includes('简历') ? '1-2' : '3-5'}MB</p>
                        </div>
                    </div>
                </div>
            `;
        case 'video':
            return `
                <div class="rounded-lg overflow-hidden bg-black">
                    <video src="${file.filePath}" controls
                           class="w-full h-[60vh]" controlsList="nodownload">
                        您的浏览器不支持视频标签。
                    </video>
                </div>
            `;
        case 'apk':
            return `
                <div class="border rounded-lg p-8">
                    <div class="text-center mb-8">
                        <i class="fab fa-android text-6xl text-green-500 mx-auto mb-4"></i>
                        <h4 class="text-xl font-bold mb-2">Android应用程序</h4>
                        <p class="text-gray-600">该文件为Android APK安装包，可在Android设备上安装运行。</p>
                    </div>
                    <div class="text-center">
                        <a href="${file.filePath}" download
                           class="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl">
                            下载APK安装包
                        </a>
                        <p class="text-sm text-gray-500 mt-4">
                            请确保您的设备允许安装来自未知来源的应用。
                        </p>
                    </div>
                </div>
            `;
        case 'other':
            return `
                <div class="border rounded-lg flex flex-col">
                    <div class="p-4 border-b bg-gray-50 flex justify-between items-center">
                        <div class="flex items-center space-x-3">
                            <i class="fas fa-file-excel text-green-500 text-2xl"></i>
                            <span class="font-semibold">Excel文件预览</span>
                        </div>
                        <a href="${file.filePath}" target="_blank"
                           class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center space-x-2" download>
                            <i class="fas fa-download"></i>
                            <span>下载Excel文件</span>
                        </a>
                    </div>
                    <div class="p-8">
                        <p class="text-gray-700 mb-4">
                            由于浏览器限制，Excel文件无法直接嵌入预览。请点击上方按钮下载查看完整文件。
                        </p>
                        <div class="bg-gray-100 rounded-lg p-6 text-center">
                            <i class="fas fa-file-excel text-6xl text-green-400 mx-auto mb-4"></i>
                            <p class="font-medium">${file.title}</p>
                            <p class="text-gray-500">Excel文件</p>
                            <p class="text-sm text-gray-400 mt-2">大小: 约${file.title.includes('简历') ? '1-2' : '3-5'}MB</p>
                        </div>
                    </div>
                </div>
            `;
        default:
            return `<div class="text-center p-8 text-gray-500">无法预览此类型文件</div>`;
    }
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// 更新网站URL
function updateSiteUrl() {
    const urlElement = document.getElementById('site-url');
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        urlElement.textContent = window.location.origin;
    }
}