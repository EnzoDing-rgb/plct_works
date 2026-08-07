# 产出

## ruyi-riscv-linux-book

- ch03 上板验证（LicheePi 4A）第三章实验已在真开发板上跑通：板端原生编译 temperature_fan → libgpiod v2 驱动继电器风扇 → 假温度 0.5°C 步进超阈值开风扇 → Ctrl+C 先关风扇再释放 GPIO；排障结论已写回 lab/讲义（含 IO1_3 拉不高等板级查证）
- 在线预览 https://enzoding-rgb.github.io/ruyi-riscv-book/
- chapters/ch03/lab.html https://enzoding-rgb.github.io/ruyi-riscv-book/chapters/ch03/lab.html
- chapters/ch03/lecture.html https://enzoding-rgb.github.io/ruyi-riscv-book/chapters/ch03/lecture.html
- docs/CourseOutline.html https://enzoding-rgb.github.io/ruyi-riscv-book/docs/CourseOutline.html
- course-evaluation-standard.md https://enzoding-rgb.github.io/ruyi-riscv-book/course-evaluation-standard.md
- misc/boards/riscv-ai-boards-2025-2026.md https://github.com/DuoQilai/ruyi-riscv-linux-book/blob/enzo/misc/boards/riscv-ai-boards-2025-2026.md
- commit https://github.com/DuoQilai/ruyi-riscv-linux-book/commit/1c0fb22 ch03: verified temperature_fan on board (libgpiod v2, relay fan, LicheePi 4A)
- commit https://github.com/DuoQilai/ruyi-riscv-linux-book/commit/a157f5e ch03: zero-to-assembly temp-fan lab + LPi4A gpiochip1 pin defaults
- commit https://github.com/DuoQilai/ruyi-riscv-linux-book/commit/8bf43a5 ch03: signal-chain troubleshooting narrative (IO1_3 pin issue on LPi4A)

## board-docs-frontend

- 在线站点 https://board-docs-frontend.pages.dev/
- 7 月 1 日修复子模块自动同步停滞与 Cloudflare deploy hook（详见仓库 commit 历史）
