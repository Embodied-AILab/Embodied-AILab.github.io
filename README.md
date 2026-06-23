# EAI-Lab｜具身智能研究室

基于 Astro、Markdown/MDX 和 GitHub Pages 的中文技术网站，发布地址规划为：

```text
https://embodied-ailab.github.io/
```

网站包含：

```text
/papers    论文精读
/agents    AI Agent / Vibe Coding
/projects  项目复现
/about     关于网站
/search    站内搜索
```

## 本地运行

请先安装 Node.js 22 或更新版本，然后执行：

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:4321`。

## 写文章

内容保存在：

```text
src/content/papers/
src/content/agents/
src/content/projects/
```

复制同栏目下现有 `.mdx` 文件，修改顶部元数据和正文即可。

## 发布到 embodied-ailab.github.io

要获得该地址，GitHub 用户名或组织名需要是：

```text
embodied-ailab
```

并在该用户或组织下创建公开仓库：

```text
embodied-ailab.github.io
```

将项目推送到 `main` 分支后，在仓库中选择：

```text
Settings → Pages → Source → GitHub Actions
```

项目已经包含自动构建和部署配置。详细步骤见 [SETUP_GUIDE.md](./SETUP_GUIDE.md)。
