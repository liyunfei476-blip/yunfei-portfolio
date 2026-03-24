# 李云飞个人作品集网站

这是一个精美、响应式的个人作品集网站，专为面试展示设计。

## 网站特性

- **按文件夹分类展示** - 8个项目分类，每个分类一个卡片
- **现代化美观设计** - 使用Tailwind CSS + Font Awesome图标
- **完整交互功能** - 卡片展开/收起、文件预览、下载
- **响应式布局** - 适配手机、平板、桌面设备
- **简历摘要嵌入** - 直接在页面展示关键简历信息
- **多媒体支持** - PDF、图片、视频、APK文件全支持

## 项目结构

```
static-portfolio/
├── index.html              # 主页面（新版本）
├── index-old.html          # 旧版本（备份）
├── style.css              # 自定义样式
├── data-v2.js             # 作品集数据（新结构）
├── app-v2.js              # 交互逻辑（新版本）
├── README.md              # 说明文档
├── 个人照片/               # 个人照片
├── 个人简历/               # 简历PDF
├── APP/                   # 生理周期App项目
├── 学习过程产出/           # 学习笔记和研究
├── 小程序&智能体&工作流/   # 项目截图
├── 论文/                  # 学术论文
├── 视频创作/              # 图片文件
└── 实践项目：为妇幼保健院搭建自动化流程/ # Excel模板
```

## 本地运行

1. 确保在`static-portfolio`目录中
2. 运行以下命令启动本地服务器：
   ```bash
   python3 -m http.server 8080
   ```
3. 浏览器访问：http://localhost:8080

## 隐私注意事项

⚠️ **重要提醒**: 本网站包含您的个人联系方式（电话和邮箱）。在公开部署前，请考虑：
1. 如果您不希望公开手机号，可以删除或替换为 LinkedIn/微信等社交账号
2. 建议使用专门的求职邮箱而非个人主邮箱
3. 部署后定期检查访问日志，确保信息安全

## 线上部署（让面试官也能访问）

### 选项1：GitHub Pages（推荐） - 详细步骤

### 第1步：准备GitHub账号
1. 访问 [github.com](https://github.com)，点击 "Sign up" 注册新账号
2. 填写用户名（建议：`yunfei-li` 或 `liyunfei-portfolio`）、邮箱、密码
3. 验证邮箱后登录

### 第2步：创建新仓库
1. 登录后点击右上角 "+" → "New repository"
2. 填写仓库信息：
   - **Repository name**: `my-portfolio` (或 `yunfei-portfolio`、`liyunfei-work`)
   - **Description**: 个人作品集网站 - 李云飞
   - 选择 **Public**（公开）
   - **不要勾选** "Initialize this repository with a README"
3. 点击 "Create repository"

### 第3步：上传网站文件
#### 方法A：使用GitHub网页上传（最简单）
1. 在新建的仓库页面，点击 "Add file" → "Upload files"
2. 将整个`static-portfolio`文件夹的所有内容拖拽到上传区域
   - 包括：`index.html`, `style.css`, `data-v2.js`, `app-v2.js` 等所有文件
   - 包括所有子文件夹：`个人照片/`, `个人简历/`, `APP/` 等
3. 在下方填写提交信息：`Initial commit - 上传个人作品集网站`
4. 点击 "Commit changes"

#### 方法B：使用Git命令（推荐给有Git经验的用户）
```bash
# 在static-portfolio目录中执行：
git init
git add .
git commit -m "Initial commit - 个人作品集网站"
git branch -M main
git remote add origin https://github.com/你的用户名/my-portfolio.git
git push -u origin main
```

### 第4步：启用GitHub Pages
1. 在仓库页面点击 **Settings** (右上角齿轮图标)
2. 左侧菜单选择 **Pages**
3. 在 "Build and deployment" → "Source" 选择 **Deploy from a branch**
4. 在 "Branch" 选择：
   - Branch: `main`
   - Folder: `/ (root)`
5. 点击 **Save**
6. 等待1-2分钟，刷新页面，看到绿色提示 "Your site is live at ..."

### 第5步：访问你的网站
- 网站地址：`https://你的用户名.github.io/my-portfolio/`
- 例如：`https://yunfei-li.github.io/my-portfolio/`
- 第一次访问可能需要等待5-10分钟完全生效

### 常见问题解决
1. **页面显示404错误**：等待5-10分钟，清除浏览器缓存再试
2. **样式/图片不显示**：检查文件路径是否正确，GitHub Pages区分大小写
3. **想更新内容**：上传新文件覆盖旧文件，GitHub Pages会自动更新
4. **自定义域名**：在Pages设置中可绑定自己的域名（如 `portfolio.liyunfei.com`）

### 选项2：Vercel（最简单）

1. 访问 [vercel.com](https://vercel.com)，使用GitHub登录
2. 点击 "New Project"
3. 导入你的GitHub仓库，或直接拖拽`static-portfolio`文件夹上传
4. 点击 "Deploy"
5. 获得免费域名：`https://my-portfolio.vercel.app`

### 选项3：Netlify

1. 访问 [netlify.com](https://netlify.com)，注册登录
2. 拖拽`static-portfolio`文件夹到上传区域
3. 获得免费域名：`https://随机名称.netlify.app`

## 在简历中引用作品集

### 方法1：直接添加链接
在简历的"个人作品"或"附加信息"部分添加：
```
个人作品集：https://你的用户名.github.io/my-portfolio/
```

### 方法2：生成二维码（推荐）
1. 访问二维码生成网站：**qrcode-monkey.com** 或 **qr-code-generator.com**
2. 输入你的作品集链接：`https://你的用户名.github.io/my-portfolio/`
3. 自定义样式（可选）
4. 下载二维码图片（PNG格式）
5. 将二维码插入简历的合适位置

### 方法3：创建短链接
1. 访问短链接服务：**bit.ly** 或 **tinyurl.com**
2. 将长链接转换为短链接，如：`bit.ly/liyunfei-portfolio`
3. 在简历中使用短链接

### 简历示例写法
```markdown
## 个人作品集
- **在线作品集**: https://yunfei-li.github.io/my-portfolio/
- **包含内容**: 8个完整项目，涵盖移动开发、数据分析、AI应用等
- **二维码**: [插入二维码图片]
- **说明**: 点击链接或扫描二维码查看我的完整作品展示
```

## 功能说明

### 1. 文件夹分类展示
- 8个项目分类卡片
- 每个卡片显示：项目标题、描述、摘要、文件数量
- 点击卡片展开查看详细文件列表

### 2. 文件预览功能
- **图片**：直接预览
- **PDF**：提供下载链接和预览说明
- **视频**：浏览器内直接播放
- **APK**：下载安装说明

### 3. 简历摘要
- 教育背景
- 技术技能标签
- 项目经验摘要
- 学习成果列表
- 完整简历下载链接

### 4. 响应式设计
- 移动端：单列布局
- 平板：双列布局
- 桌面：三列布局

## 自定义修改

### 更新作品内容
编辑`data-v2.js`文件，修改`folderCollections`数组。

### 修改样式
编辑`style.css`文件，或直接在HTML的`<style>`标签中修改。

### 更新简历信息
编辑`index.html`文件中的简历摘要部分。

## 技术支持

如有问题或需要进一步定制，请提供详细需求。

---

**最后更新**: 2026年3月24日
**版本**: v2.0 - 文件夹分类展示 + 简历摘要集成
**设计目标**: 创建专业、美观的个人作品集，方便面试展示，可直接在简历中引用。