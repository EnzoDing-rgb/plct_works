# 产出

## ruyi-riscv-linux-book

- 第 1–4 章讲义/实验定稿：ch01 打通 RuyiSDK 安装、venv、烧录与 CoreMark 上板通道；ch02 补齐实验要用的 C 与本机假温控（本章不上板）；ch03 纯 GPIO 继电器风扇 + 寄存器心智模型与 relay-toggle；ch04 DHT22 从零引入、status/set + select。ch01/ch03/ch04 已在 LicheePi 4A 上板验证，ch02 本机上机验收。
- 组内汇报 deck（课程介绍 PPT，含 ch05/ch06 与 DeepSeek Harness 综合项目各压成一点） https://github.com/DuoQilai/ruyi-riscv-linux-book/tree/enzo/deck
- ch01 lab https://github.com/DuoQilai/ruyi-riscv-linux-book/blob/enzo/chapters/ch01/lab.html
- ch02 lab https://github.com/DuoQilai/ruyi-riscv-linux-book/blob/enzo/chapters/ch02/lab.html
- ch03 lab https://github.com/DuoQilai/ruyi-riscv-linux-book/blob/enzo/chapters/ch03/lab.html
- ch04 lab https://github.com/DuoQilai/ruyi-riscv-linux-book/blob/enzo/chapters/ch04/lab.html
- PR #4–#7（ch01–ch04）https://github.com/DuoQilai/ruyi-riscv-linux-book/pull/4
- commit https://github.com/DuoQilai/ruyi-riscv-linux-book/commit/70022ac ch04: DHT22 user-space read made reliable (verified on board)
- commit https://github.com/DuoQilai/ruyi-riscv-linux-book/commit/feccdce ch03: add fan-toggle complete example (source + Makefile), verified on board
- commit https://github.com/DuoQilai/ruyi-riscv-linux-book/commit/b325a10 Add internal 8-page course intro deck
