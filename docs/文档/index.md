
## 安装依赖

在命令行内输入以下指令安装依赖：

```bash
pip3 install "nonebot2[fastapi]>=2.3.1", "nonebot-adapter-onebot>=2.4.3", "requests>=2.32.3"
```

以上是运行本机器所必须的。此外，您可以自行选择是否安装其他依赖库，一些拓展的指令需要额外安装。不安装也仅会影响那部分指令的使用。

如若你需要使用 server status 指令，您需安装 `matplotlib` 库。使用如下指令安装：

```bash
pip3 install matplotlib
```

> [!WARNING]
> 此机器人仅支持 Python 3.8 及以上版本。若版本过低，否则可能会出现不可预知的错误。

## 配置环境

你可以到 [Releases](https://github.com/Minecraft-QQBot/BotServer/releases) 下载最新版本的机器人服务器。

### 使用 WebUi 配置（推荐）

在 V2.0.0 版本中，我们加入了 Webui 配置界面，帮助使用者更容易的调整配置。

要想使用 WebUi 请先运行机器人，双击解压后的 `BotServer` 文件夹内的 `Start.bat` 运行。在控制台中会打印出一串类似

```log
05-25 19:49:08 [INFO] WebUi http://host:port/webui?token=********
```

复制链接到浏览器里，就可以使用 WebUi 进行配置。注意，配置完成后请重启机器人配置才会生效。

> 本机器人仅支持 Onebot V11 协议，建议用 Websocket 反向链接。

### 手动配置（不推荐）

解压下载的 `BotServer.zip` 到任意位置，进入 `BotServer` 文件夹，编辑文件夹下的 [`.env`](https://github.com/Minecraft-QQBot/BotServer/blob/main/BotServer/.env) 文件，按照注释配置即可。

对于 QQ 机器人（如 GoCqHttp，LLOneBot，NapCat 等）的配置请见 [Onebot](https://onebot.adapters.nonebot.dev/docs/guide/setup) 适配器文档。


### 运行服务

双击解压后的 `BotServer` 文件夹内的 `Start.bat` 运行机器人服务器。当看到出现类似如下的日志时，

```log
05-25 19:49:08 [INFO] nonebot | OneBot V11 | Bot 2********6 connected
```

即代表机器人**连接成功**，你可以向群内发送`help`指令，若机器人正常回复，那么恭喜你已经安装成功了。若无反应，请检查配置是否正确，或联系作者寻求帮助。开始使用你的机器人吧！

## 帮助

Q: 如何使用指令？

A: 你可以在 QQ 群内发送 `help` 指令查看机器人的帮助信息，也可以用 `help <指令名称>` 查看具体指令的帮助信息。

Q: 为什么我发送的指令没有响应？

A: 请检查你是否加上了指令前缀（即 .env 内的 COMMAND_START）。

## 鸣谢

感谢以下人员为此机器人开发提供帮助，在此特别鸣谢：

- [meng877](https://github.com/meng877) 提出意见，贡献部分代码。
- [Decent_Kook](https://github.com/AISophon) 提供测试环境，提出意见。
- [creepebucket](https://github.com/creepebucket) 提供测试环境。

> [!TIP]
> 若遇到问题，或有更好的想法，可以加入 QQ 群 [`962802248`](https://qm.qq.com/q/B3kmvJl2xO) 或者提交 Issues 向作者反馈。若你有能力，欢迎为本项目提供代码贡献！

## 友链

- TQM 服务器
- [LemonFate 服务器](https://www.lemonfate.cn/)
- [RedstoneDaily 红石日报](https://www.redstonedaily.com/)
