# Platform.FakePlayer

通过在服务器上挂假人来与 [BotServer](https://github.com/Minecraft-QQBot/BotServer) 对接的工具，基于 Node.js 的 mineflayer 库。

> [!CAUTION]
> 只有 Mineflayer 库支持的 Minecraft 版本才能使用本工具，支持范围请到 [这里](https://prismarinejs.github.io/mineflayer/#/zh/README_ZH_CN?id=特点) 查看。

## 特色功能

- 可以播报玩家死亡。
- 私聊假人发送消息到 QQ 群。

## 搭建环境

本项目基于 Node.js 开发，请确保您的系统中已安装 Node.js 环境。如果还没安装，请到 [这里](https://nodejs.org/zh-cn/download/package-manager) 安装。

安装 Node.js 完毕后，你还需要安装如下依赖库。安装指令如下：

```bash
npm install mineflayer websocket base-64 utf8
```

> [!TIP]
> 若下了很久也没有安装成功，甚至报错，请尝试设置镜像源：
> ```bash
> npm config set registry https://registry.npmmirror.com/
> ```

## 安装配置

请到 [Releases](https://github.com/Minecraft-QQBot/Platform.FakePlayer/releases) 下载最新版本的假人服务器。下载完毕并解压后，请配置文件夹下的 `Config.json` 文件，各项的含义如下：

```json
{
    "reconnect_interval": 8000, // 重连间隔，单位毫秒
    "token": "", // 机器人服务器的 token
    "uri": "ws://{host}:{port}/", // 机器人服务器的 WebSocket 地址
    // 以下为假人账号信息
    "account": {
        "auth": "", // 登录方式，正版需改为 microsoft，不填则为离线登录
        "password": "", // 密码，不填则为离线登录
        "username": "QwQ", // 用户名，对于正版请填写邮箱
        "permission": false, // 是否拥有管理员权限
        "execute_commands": [ // 进入服务器后执行的指令，如登录等。
            "l QwQ123"
        ]
    },
    // 以下为要互联的 Minecraft 服务器信息
    "servers": [
        {
            "name": "Survival",
            "host": "locoalhost",
            "port": 25565
        },
        {
            "name": "Creative",
            "host": "locoalhost",
            "port": 25566
        }
    ]
}
```

## 运行假人

你可以双击 `Start.bat` 运行假人服务器，也可以在命令行中运行 `node Main.js` 命令。假人启动后，会自动连接到 Minecraft 服务器，并开始监听 QQ 群消息。

享受你的快乐时光吧！
