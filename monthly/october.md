# 2026 年 10 月进展 - 实习生

实习生进展月度汇总

## 丁冯德 (DingFengde)

### Mentor: 张馥媛

### 本月工作总结

本月的展示项目是中科院科学日的 Open Silicon 圆桌：RISC-V、x86、ARM 三条路线围坐，讲 Agent 时代的算力格局。我把它做成现场能直接开讲的版本：本地一条命令拉起，嘉宾按顺序开口，观众点名追问也有对应的声音。

仓库：https://github.com/EnzoDing-rgb/OpenSiliconBet

### 具体做了什么

- 对话从火山方舟换成 DeepSeek，供科学日现场直接开讲。密钥只留在本机 `.env`，不再进 Git。
- README 收成一段本地运行说明。`./dev.sh` 在 macOS、Linux 和 Windows Git Bash 里拉起前后端，缺的依赖自己装；已经有 `.env` 时不会覆盖。
- 去掉预录开场视频。Lex 先开口，六段嘉宾交锋要等上一段播完才接下一段，然后是黄仁勋视频串场、陈立武再接一句，再到观众提问、投票和 Lex 锐评。
- 开场时点「跳过开场」，Lex 的声音马上停，直接进入嘉宾论坛。嘉宾正在说时点「跳过 → 观众问答」，当前这位也会马上停，然后进入观众提问。
- 观众先点嘉宾标签（默认神秘 RISC-V 专家）再提问。被问到的人用自己的音色把回答念出来；语音通道断了会重连并补读。
- 五位讲者改用 Qwen-Audio 复刻音色，不再播原录音，也不再用通用系统音色。
- 神秘专家语速降到其他人的 0.87 倍，其余嘉宾保持原来的语速。

### 本月关键提交

- 换成 DeepSeek，并停止跟踪密钥文件：https://github.com/EnzoDing-rgb/OpenSiliconBet/commit/cfcfbaf
- 观众追问出声：https://github.com/EnzoDing-rgb/OpenSiliconBet/commit/0c478bc
- 复刻音色上场，并单独放慢神秘专家：https://github.com/EnzoDing-rgb/OpenSiliconBet/commit/a140b75
