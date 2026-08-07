# 产出

## ruyi-riscv-linux-book

- ch03 上板验证（LicheePi 4A）第三章实验已在真开发板上跑通：板端原生编译 temperature_fan → libgpiod v2 驱动继电器风扇 → 假温度 0.5°C 步进超阈值开风扇 → Ctrl+C 先关风扇再释放 GPIO；排障结论已写回 lab/讲义（含 IO1_3 拉不高等板级查证）
- 在线预览 https://enzoding-rgb.github.io/ruyi-riscv-book/
- chapters/ch03/lab.html https://enzoding-rgb.github.io/ruyi-riscv-book/chapters/ch03/lab.html
- chapters/ch03/lecture.html https://enzoding-rgb.github.io/ruyi-riscv-book/chapters/ch03/lecture.html
- commit https://github.com/DuoQilai/ruyi-riscv-linux-book/commit/1c0fb22 ch03: verified temperature_fan on board (libgpiod v2, relay fan, LicheePi 4A)
- commit https://github.com/DuoQilai/ruyi-riscv-linux-book/commit/a157f5e ch03: zero-to-assembly temp-fan lab + LPi4A gpiochip1 pin defaults
- commit https://github.com/DuoQilai/ruyi-riscv-linux-book/commit/da59cf3 ch03: fake-temp step 0.5°C for faster on-board verification
- commit https://github.com/DuoQilai/ruyi-riscv-linux-book/commit/4c5ddac ch03: clean-exit on board + chip/wiring lessons from real bring-up
- commit https://github.com/DuoQilai/ruyi-riscv-linux-book/commit/8bf43a5 ch03: signal-chain troubleshooting narrative (e.g. IO1_3 pin issue on LPi4A)
- commit https://github.com/DuoQilai/ruyi-riscv-linux-book/commit/bbc85dc ch03: rewrite lab for relay-direct GPIO output (post on-board validation)
- commit https://github.com/DuoQilai/ruyi-riscv-linux-book/commit/1a674e5 ch03: restructure lecture to pure GPIO output (relay/fan)
- commit https://github.com/DuoQilai/ruyi-riscv-linux-book/commit/4037e60 ch03: devmem register address 0xffec006000 bit5 + install note
- docs/CourseOutline.html https://enzoding-rgb.github.io/ruyi-riscv-book/docs/CourseOutline.html
- intro.md https://enzoding-rgb.github.io/ruyi-riscv-book/intro.md
- course-evaluation-standard.md https://enzoding-rgb.github.io/ruyi-riscv-book/course-evaluation-standard.md
- misc/boards/riscv-ai-boards-2025-2026.md https://github.com/DuoQilai/ruyi-riscv-linux-book/blob/enzo/misc/boards/riscv-ai-boards-2025-2026.md
- commit https://github.com/DuoQilai/ruyi-riscv-linux-book/commit/2a8e65f docs: ship ch01–ch06 lecture/lab pages and scaffolds
- commit https://github.com/DuoQilai/ruyi-riscv-linux-book/commit/3c4694c docs: add course evaluation standard (CIPP+OBE fused)

## board-docs-frontend

- 在线站点 https://board-docs-frontend.pages.dev/
- commit https://github.com/DuoQilai/board-docs-frontend/commit/3295c3f fix(ci): replace git submodule update --remote with explicit fetch/checkout
- commit https://github.com/DuoQilai/board-docs-frontend/commit/2568a6e feat(ci): add deploy hook + change logging to sync workflow
- commit https://github.com/DuoQilai/board-docs-frontend/commit/38a8fc9 docs: remove dev setup and manual trigger, keep essentials
