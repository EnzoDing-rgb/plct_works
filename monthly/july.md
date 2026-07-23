## 1. ruyi-riscv-linux-book · RISC-V Linux 正式教材（主线）

### 项目概况

- 项目仓库：[ruyi-riscv-linux-book](https://github.com/DuoQilai/ruyi-riscv-linux-book)（老师主导，本人协作）
- 在线预览：https://enzoding-rgb.github.io/ruyi-riscv-book/
- 大纲：[`docs/CourseOutline.html`](https://github.com/DuoQilai/ruyi-riscv-linux-book/blob/main/docs/CourseOutline.html)
- 课程说明：[`docs/intro.md`](https://github.com/DuoQilai/ruyi-riscv-linux-book/blob/main/docs/intro.md)
- 评价标准：[`docs/course-evaluation-standard.md`](https://github.com/DuoQilai/ruyi-riscv-linux-book/blob/main/docs/course-evaluation-standard.md)
- 定位：把 6 月搭好的仓库骨架，推进成「大纲定稿 + 评价标准 + 选型依据 + 讲义/实验可上板」的课程交付线；一门课一条线，C + RuyiSDK + 真开发板。

### 7 月主要工作

#### 1）课程大纲定稿与验收口径

- 锁定 **ch01–ch06 + 综合项目** 的章节地图：每章「三节讲义 + 一个完整实验」，实验带 C 脚手架与板上可见验收现象。
- 重写 / 重排 `CourseOutline.html`：章→实验对照表、验收现象列、上板通道 / 温控风扇 / MQTT / 多线程协同等硬验收描述。
- 补充 `docs/intro.md`：课程定位、调研取舍、与外部框架的借鉴边界；明确自检标准——可运行、可验收、可衔接综合、可演示。
- 汇入并对齐外部参考材料（`reference/`：嵌入式学习路线、课程材料笔记等），用来反查「企业向技能链 / 可验收」是否写进大纲，而不是照搬营销文。

#### 2）课程评价标准（CIPP + OBE）

- 新增课题组自评标准 [`docs/course-evaluation-standard.md`](https://github.com/DuoQilai/ruyi-riscv-linux-book/blob/main/docs/course-evaluation-standard.md)，并在 README / 工作流中挂入口。
- 结构：**四部分 × 各 3 条 = 12 条**，每条 0–10 分，四部分等权；**不算**「合格/优秀」标签，只保留分数。
- 对应关系：开课意义（CIPP Context）→ 条件与资源（Input）→ 教学实施（Process）→ 学习成效（Product）；成效条目写法吸收 OBE「可观察目标 + 证据」。
- 用途：课题组按统一口径自评课程质量（目标人群、真板路径、物料/工具链、讲义实验齐备度、主线连贯、板上可演示证据等），与大纲里的章实验验收现象互补。

#### 3）器件与开发板选型调研

- 产出 [`misc/boards/riscv-ai-boards-2025-2026.md`](https://github.com/DuoQilai/ruyi-riscv-linux-book/blob/main/misc/boards/riscv-ai-boards-2025-2026.md)：RISC-V AI 推理板选型报告。
- 结论收敛为「两块板」对照（速度向 NPU 方案 vs 容量向多核大内存方案），写清预算、模型建议与取舍理由，服务后续综合项目 / 边缘推理部署选型。
- 配套缓存硬件手册与 LicheePi 4A 引脚笔记（`chapters/ch03/manuals/`），方便实验接线与默认引脚对齐。

#### 4）讲义 · 实验 · 脚手架落地

- 统一章节交付形态：`lecture.html`（讲义）+ `lab.html`（整章实验）+ `code/`（C 脚手架）；仓库扁平化，旧 `.md` / boards 归档进 `misc/`。
- ch01–ch06：按新大纲铺开讲义/实验页与代码骨架；ch02 收敛为「够用的 C」+ 假温控闯关实验。
- ch03：GPIO / UART / 外设讲义与实验正文，示例代码含 `blink`、`uart-echo`、`temp-fan`。
- ch04–ch06：按大纲锁死实验形态并给出脚手架方向（配置化温控、MQTT 控灯、三线程协同等）。
- 工程侧：统一 `misc/scripts/build.sh` 构建发布；Pages 根入口 `index.html`；讲义页 TOC / 自学导航等可读性改进。

#### 5）ch03 真板验证

- 在 LicheePi 4A 上把 **温控风扇** 实验从零拼装跑通：交叉编译 → 上板 → 温感触发风扇等约定现象。
- 补齐 gpiochip1 默认引脚与接线说明，实验指导写成「差量步骤 + 验收」，避免只贴通用命令。
- 验证结论回流进 `lab.html` / manuals，保证学生按文档能复现，而不是只在作者机器上偶然成功。

### 当前进度（截至 7 月）

| 范围 | 状态 |
|------|------|
| CourseOutline（ch01–ch06 + 综合） | 定稿更新 |
| 课程评价标准（CIPP + OBE，12 条） | 已交付并挂 README |
| 器件 / AI 板选型报告 | 已交付 |
| ch01–ch03 讲义 / 实验 / 代码 | 有可跑初稿；ch03 真板验证过 |
| ch04–ch06 + 综合正文 | 规划与脚手架已定，正文待继续 |

制作分支：`enzo`。

### 仓库结构（7 月形态）

```text
ruyi-riscv-linux-book/
├── docs/
│   ├── CourseOutline.html
│   ├── intro.md
│   ├── course-evaluation-standard.md   # CIPP+OBE 自评标准
│   └── index.html
├── chapters/ch01 … ch06/     # lecture.html + lab.html + code/
├── reference/                # 调研与外部课程材料
└── misc/
    ├── boards/               # 选型报告等
    ├── scripts/build.sh
    └── archive/
```

---

## 2. board-docs-frontend · 文档站维护（辅线）

### 项目概况

- 项目仓库：[board-docs-frontend](https://github.com/DuoQilai/board-docs-frontend)
- 在线站点：https://board-docs-frontend.pages.dev/

### 7 月主要工作

- 加固每日 `board-docs` 子模块同步：显式 fetch/checkout、补齐 `submodule update --init`，避免 `--remote` 带来的不稳定。
- 同步工作流增加 **deploy hook** 与变更日志，内容更新后更稳触发线上部署。
- README 精简：去掉冗余本地开发说明与手动触发描述，突出同步流程与数据源说明。

---
