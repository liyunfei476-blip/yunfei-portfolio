let activeLens = 'all';
let selectedCollectionId = null;
let selectedAssetId = null;

const tickerItems = Array.from({ length: 10 }, () => 'AI 应用<em></em>数据流程<em></em>产品原型<em></em>研究沉淀');

document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderTicker();
    renderDashboard();
    renderLensChips();
    renderFeatured();
    renderArchive();
    bindModalEvents();
});

function renderHero() {
    document.getElementById('hero-kicker').textContent = 'Research / Systems / Product';
    document.getElementById('hero-title').textContent = profile.role;
    document.getElementById('hero-intro').textContent = profile.intro;
    document.getElementById('hero-statement').textContent = profile.statement;
    document.getElementById('hero-resume').href = profile.resume;
    document.getElementById('footer-mail').href = `mailto:${profile.email}`;
    document.getElementById('footer-resume').href = profile.resume;
    document.getElementById('footer-copy').textContent = '如果你想聊项目、实习或合作，可以直接联系我。';
    document.getElementById('portrait-image').src = profile.portrait;
    document.getElementById('portrait-image').alt = `${profile.name} 个人照片`;
}

function renderTicker() {
    document.getElementById('ticker-track').innerHTML = tickerItems.map(item => `<span>${item}</span>`).join('');
}

function renderDashboard() {
    const statsContainer = document.getElementById('stats-wall');
    statsContainer.innerHTML = quickStats.map((item, index) => `
        <article class="stat-card stat-card--${(index % 3) + 1}">
            <strong>${item.value}</strong>
            <span>${item.label}</span>
        </article>
    `).join('');

    const notesContainer = document.getElementById('note-stack');
    notesContainer.innerHTML = practiceNotes.map((note, index) => `
        <article class="sticky-note sticky-note--${(index % 3) + 1}">
            <span>Note 0${index + 1}</span>
            <p>${note}</p>
        </article>
    `).join('');

    const contactContainer = document.getElementById('contact-board');
    contactContainer.innerHTML = `
        <p class="panel-label">Now Available</p>
        <div class="contact-line">地点: <strong>${profile.location}</strong></div>
        <div class="contact-line">邮箱: <a href="mailto:${profile.email}">${profile.email}</a></div>
        <div class="contact-line">电话: <a href="tel:${profile.phone}">${profile.phone}</a></div>
        <div class="divider"></div>
        <div class="board-note">不把所有项目做成同一种卡片</div>
        <div class="board-note">让文件、截图和过程直接出镜</div>
        <div class="board-note">既有系统感，也保留表达欲</div>
    `;
}

function renderLensChips() {
    const lensRow = document.getElementById('lens-row');
    lensRow.innerHTML = lenses.map(lens => `
        <button type="button" class="lens-chip ${activeLens === lens.id ? 'is-active' : ''}" data-lens-id="${lens.id}">
            <span>${lens.label}</span>
            <small>${lens.hint}</small>
        </button>
    `).join('');

    lensRow.querySelectorAll('.lens-chip').forEach(button => {
        button.addEventListener('click', () => {
            activeLens = button.dataset.lensId;
            renderLensChips();
            renderArchive();
        });
    });
}

function renderFeatured() {
    const featuredGrid = document.getElementById('featured-grid');
    const featuredCollections = collections.filter(collection => featuredCollectionIds.includes(collection.id));
    featuredGrid.innerHTML = featuredCollections.map((collection, index) => `
        <article class="featured-card featured-card--${(index % 4) + 1}" data-collection-id="${collection.id}">
            <div class="featured-media">
                ${renderFeaturedMedia(collection)}
                <div class="featured-chip">${collection.year}</div>
            </div>
            <div class="featured-body">
                <p class="card-kicker">${collection.eyebrow}</p>
                <h4>${collection.title}</h4>
                <p>${collection.summary}</p>
                <div class="metric-row">
                    ${collection.metrics.map(metric => `<span>${metric}</span>`).join('')}
                </div>
            </div>
        </article>
    `).join('');

    featuredGrid.querySelectorAll('.featured-card').forEach(card => {
        card.addEventListener('click', () => openCollection(card.dataset.collectionId));
    });
}

function renderFeaturedMedia(collection) {
    const firstAsset = collection.assets[0];
    if (firstAsset && firstAsset.type === 'image') {
        return `<img src="${collection.featuredAsset}" alt="${collection.title}">`;
    }

    return `
        <div class="featured-placeholder">
            <span>${collection.eyebrow}</span>
            <strong>${collection.year}</strong>
        </div>
    `;
}

function renderArchive() {
    const archiveList = document.getElementById('archive-list');
    const visibleCollections = getCollectionsByLens(activeLens);

    archiveList.innerHTML = visibleCollections.map(collection => `
        <article class="archive-item">
            <div class="archive-index">${collection.eyebrow}</div>
            <div class="archive-copy">
                <h4>${collection.title}</h4>
                <p>${collection.detail}</p>
            </div>
            <div class="archive-meta">
                <span>${collection.year}</span>
                <span>${collection.assets.length} 份文件</span>
            </div>
            <button type="button" class="archive-action" data-collection-id="${collection.id}">
                <span>展开查看</span>
                <span>→</span>
            </button>
        </article>
    `).join('');

    archiveList.querySelectorAll('.archive-action').forEach(button => {
        button.addEventListener('click', () => openCollection(button.dataset.collectionId));
    });
}

function bindModalEvents() {
    document.getElementById('modal-backdrop').addEventListener('click', closeModal);
    document.getElementById('modal-close').addEventListener('click', closeModal);
}

function openCollection(collectionId) {
    selectedCollectionId = collectionId;
    const collection = collections.find(item => item.id === collectionId);
    if (!collection) return;
    selectedAssetId = collection.assets[0] ? collection.assets[0].id : null;
    renderModal();
    document.body.classList.add('is-locked');
    document.getElementById('modal-shell').hidden = false;
}

function closeModal() {
    document.getElementById('modal-shell').hidden = true;
    document.body.classList.remove('is-locked');
    selectedCollectionId = null;
    selectedAssetId = null;
}

function renderModal() {
    const collection = collections.find(item => item.id === selectedCollectionId);
    if (!collection) return;

    const asset = collection.assets.find(item => item.id === selectedAssetId) || collection.assets[0];

    document.getElementById('modal-kicker').textContent = collection.eyebrow;
    document.getElementById('modal-title').textContent = collection.title;
    document.getElementById('modal-description').textContent = collection.detail;
    document.getElementById('modal-metrics').innerHTML = collection.metrics.map(metric => `<span>${metric}</span>`).join('');

    const assetList = document.getElementById('modal-asset-list');
    assetList.innerHTML = collection.assets.map(item => `
        <button type="button" class="asset-row ${item.id === asset.id ? 'is-active' : ''}" data-asset-id="${item.id}">
            <span class="asset-icon">${getTypeLabel(item.type)}</span>
            <span class="asset-copy">
                <strong>${item.title}</strong>
                <small>${item.description}</small>
            </span>
            <span class="asset-type">${getTypeLabel(item.type)}</span>
        </button>
    `).join('');

    assetList.querySelectorAll('.asset-row').forEach(button => {
        button.addEventListener('click', () => {
            selectedAssetId = button.dataset.assetId;
            renderModal();
        });
    });

    document.getElementById('modal-preview').innerHTML = getAssetPreview(asset, collection);
    document.getElementById('asset-type').textContent = getTypeLabel(asset.type);
    document.getElementById('asset-title').textContent = asset.title;
    document.getElementById('asset-description').textContent = asset.description;

    const assetOpen = document.getElementById('asset-open');
    assetOpen.href = asset.filePath;
    assetOpen.removeAttribute('download');
    if (asset.type === 'pdf' || asset.type === 'apk' || asset.type === 'other') {
        assetOpen.setAttribute('download', '');
    }

    document.getElementById('asset-tags').innerHTML = asset.tags.map(tag => `<span>${tag}</span>`).join('');
}

function getAssetPreview(asset, collection) {
    if (asset.type === 'image') {
        return `
            <div class="preview-frame preview-frame--visual">
                <img class="preview-image" src="${asset.filePath}" alt="${asset.title}">
            </div>
        `;
    }

    return `
        <div class="preview-frame preview-frame--document">
            <div class="preview-badge">${getTypeLabel(asset.type)}</div>
            <h4>${asset.title}</h4>
            <p>${asset.description}</p>
            <p class="preview-note">
                ${asset.type === 'apk'
                    ? '这是 Android 安装包，建议在移动设备中下载测试。'
                    : asset.type === 'other'
                        ? '该文件为可下载资料，适合在本地软件中打开查看。'
                        : '该文档更适合在新窗口中阅读或下载后查看。'}
            </p>
            <div class="preview-actions">
                <a class="button button--solid" href="${asset.filePath}" target="_blank" rel="noreferrer">新窗口打开</a>
                <a class="button button--ghost" href="${asset.filePath}" download>下载文件</a>
            </div>
            ${collection.assets.some(item => item.type === 'image' || item.type === 'video') ? '<p class="preview-caption">左侧素材列表里也有这个项目的界面图或演示图，可继续切换查看。</p>' : ''}
        </div>
    `;
}
