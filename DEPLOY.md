# 猫咪日常：私人试用版发布说明

## 发布到 GitHub Pages

项目默认使用名为 `miao-daily` 的 GitHub 仓库。

1. 在 GitHub 创建公开仓库 `miao-daily`。
2. 将本项目推送到仓库的 `main` 分支。
3. 打开仓库 **Settings → Pages**。
4. 在 **Build and deployment** 中将 Source 设为 **GitHub Actions**。
5. 打开仓库的 **Actions** 页面，等待 `Deploy to GitHub Pages` 工作流完成。

发布地址通常为：

```text
https://你的GitHub用户名.github.io/miao-daily/
```

以后每次推送到 `main` 分支都会自动重新发布。

## 安装到手机桌面

- iPhone：使用 Safari 打开链接，点击“分享”，选择“添加到主屏幕”。
- Android：使用 Chrome 打开链接，在浏览器菜单中选择“安装应用”或“添加到主屏幕”。

## 数据说明

- 当前版本没有账号和云端同步。
- 每台设备、每个浏览器的数据彼此独立。
- 数据保存在浏览器本地，不会自动上传。
- 换手机、清除浏览器数据或删除网站数据前，应先在“数据与隐私”中导出 JSON 备份。
- 恢复备份会覆盖当前设备上的已有记录。

## 发布前检查

```bash
npm install
npm run build
```

构建成功后，`dist` 文件夹就是可部署的生产版本。
