## 1. board-docs-frontend · RuyiSDK 开发板示例文档站

### 项目概况

- 项目仓库：[board-docs-frontend](https://github.com/DuoQilai/board-docs-frontend)
- 在线站点：https://board-docs-frontend.pages.dev/
- 作用：把 `ruyisdk/board-docs` 里的开发板示例文档渲染成网页，按「板子 → 示例」浏览检索。
- 技术栈：Astro 6 + React + TypeScript + Tailwind CSS v4 + shadcn/ui；托管于 Cloudflare Pages，`main` 更新自动上线。

### 6 月主要工作

- **CI 自动化**：新增每日 `board-docs` 子模块自动同步工作流——有更新则验证 `pnpm build` 通过后推送 `main`，触发线上重新部署。
- **修复同步流程**：修正 pnpm 安装（仅用 `packageManager` 字段）、submodule sync 在提交前不再 reset、CI pnpm 版本等问题。
- **示例分类扩展**：扩充示例 `status` 分类 slug（基础 / 外设 / 通信 / 网络 / 系统 / 多媒体 / 视觉 / AI / 加密 / 压缩 / GUI / 性能测试），旧值自动映射。
- **访问统计**：接入 Cloudflare Web Analytics beacon，并简化为 Cloudflare-only 部署的统计文档。
- **文档整理**：文档统一收进 `docs/` 目录；README 补充线上地址与部署事实；部署 / 统计文档按场景拆分；补充验证步骤的 Mac 快捷键说明。

---

## 2. riscv-embedded-course · 自研课程大纲（课程研发）

### 项目概况

- 项目仓库：[riscv-embedded-course](https://github.com/EnzoDing-rgb/riscv-embedded-course)
- 在线大纲：https://enzoding-rgb.github.io/riscv-embedded-course/
- 定位：本人作为课程研发，独立产出的一版《RISC-V Linux 嵌入式实践》课程草稿——在 RISC-V Linux 开发板上用 RuyiSDK + C 做嵌入式应用，含术语表、章节表、物料 BOM 与递进式项目。

### 6 月主要工作

- 多轮打磨课程大纲：白话重写、收敛为单板流程、调整 capstone 项目（关键词识别 + LED 控制）、去除 RevyOS 改用通用 Linux 表述、补充推荐教材、按 RuyiSDK 重构结构并附 Advanced Track。
- 产出 10 章 MNIST 方向 `CourseOutline`，精简 BOM 与 README，对齐 ch01–ch07。
- 改为 Linux 嵌入式方向大纲并加入 IoT capstone；README 白话重写。
- 上线 GitHub Pages：单入口 + `index.html` 跳转至 `CourseOutline.html`，浏览器直接可看完整大纲。
- 填写并整理课程进度表，移除本地 Excel 脚手架。

---

## 3. ruyi-riscv-linux-book · 教材仓库协作（重构 + 教案）

### 项目概况

- 项目仓库：ruyi-riscv-linux-book（老师主导的正式教材仓，本人作为协作者参与）
- 定位：在自研课程草稿基础上，进入老师的教材仓库做协作开发——负责仓库结构重构与前两章教案撰写。制作分支 `enzo`。

### 6 月主要工作

- **仓库重构**：将仓库重整为按章、按节的标准布局——`chapters/ch01|ch02/` 下每节拆为 `lecture.md`（讲义）+ `lab.md`（实验），整章 `slides.html`，新增 `boards/` 板卡参考与 `docs/archive/` 历史归档。
- **教案撰写**：完成 Chapter 1（开发环境篇，1.1–1.5）与 Chapter 2（工具链与工程，2.1–2.6）的讲义与实验，前后写了两版，统一格式；ch02 含 hello、project-template 示例代码。

### 仓库结构

```text
ruyi-riscv-linux-book/
├── docs/CourseOutline.html   # 课程总大纲
├── chapters/
│   ├── ch01/  # 开发环境篇（1.1–1.5）：slides.html + 各节 lecture.md / lab.md
│   └── ch02/  # 工具链与工程（2.1–2.6）：slides.html + code/ + 各节 lecture.md / lab.md
└── boards/    # licheepi4a / k1 板卡参考
```

---
