# embodied-ailab.github.io 从零上线指南

## 1. 先确认 GitHub 名称

要使用：

```text
https://embodied-ailab.github.io/
```

GitHub 用户名或组织名必须是：

```text
embodied-ailab
```

仓库名必须是：

```text
embodied-ailab.github.io
```

建议使用 GitHub 组织承载网站，后续可以邀请协作者，也不会与个人账号内容混在一起。

## 2. 创建 GitHub 组织

登录 GitHub 后，新建组织并尝试使用：

```text
embodied-ailab
```

如果该名称已被占用，就无法获得完全相同的 GitHub Pages 地址，需要更换组织名和本项目中的站点地址。

## 3. 创建仓库

在 `embodied-ailab` 组织下创建公开仓库：

```text
embodied-ailab.github.io
```

不要勾选自动生成模板文件，保持空仓库即可。

## 4. 上传项目

### 使用 Git

解压源码后，在项目根目录执行：

```bash
git init
git add .
git commit -m "Initialize EAI-Lab website"
git branch -M main
git remote add origin https://github.com/embodied-ailab/embodied-ailab.github.io.git
git push -u origin main
```

### 不使用命令行

进入空仓库，选择：

```text
Add file → Upload files
```

上传解压后的全部文件，并确认隐藏目录 `.github/workflows/` 也在仓库中。

## 5. 开启 GitHub Pages

进入仓库：

```text
Settings → Pages → Build and deployment → Source
```

选择：

```text
GitHub Actions
```

## 6. 等待自动部署

每次推送到 `main` 分支，部署流程会自动：

1. 安装 Node.js；
2. 安装 Astro 与依赖；
3. 构建静态网站；
4. 上传构建结果；
5. 发布到 GitHub Pages。

在仓库 `Actions` 页面看到绿色对勾后，访问：

```text
https://embodied-ailab.github.io/
```

## 7. 切换深浅色主题

网站右上角已经提供深浅色开关：

- 第一次访问时跟随系统设置；
- 点击后在浅色与深色之间切换；
- 选择会保存在浏览器中。

## 8. 新增内容

在以下目录新增 Markdown 或 MDX 文件：

```text
src/content/research/
src/content/projects/
```

本地预览：

```bash
npm install
npm run dev
```

提交并推送后，网站会自动更新。
