# 主题切换演示项目

一个基于 Vite + Tailwind 构建的主题切换演示项目，使用 View Transitions API 实现平滑的主题切换动画效果。

## 安装和使用

### 环境要求

- Node.js 16.0 或更高版本
- pnpm 包管理器

### 安装依赖

```bash
# 使用 pnpm 安装依赖
pnpm install
```

### 开发模式

```bash
# 启动开发服务器
pnpm dev
# 或
pnpm start
```

开发服务器将在 `http://localhost:3000` 启动。

### 构建生产版本

```bash
# 构建生产版本
pnpm build
```

### 预览生产版本

```bash
# 预览构建后的项目
pnpm serve
```

## 功能说明

### 主题切换

点击页面右上角的"切换主题"按钮可以切换明暗主题。切换时会触发一个从点击位置开始的圆形扩散动画效果。

### View Transitions API

项目使用了 View Transitions API 来实现平滑的主题切换动画：

- 使用 `document.startViewTransition()` 创建视图过渡
- 通过 `clipPath` 动画实现圆形扩散效果
- 支持明暗主题切换时的不同动画方向

## 浏览器兼容性

### 支持的浏览器

- **Chrome 111+**: 完全支持 View Transitions API
- **Edge 111+**: 完全支持 View Transitions API
- \*\*Firefox : 暂不支持
- **Safari 18+**: 完全支持 View Transitions API

### 兼容性说明

1. **View Transitions API**: 这是一个相对较新的 Web API，仅在较新的浏览器版本中支持
2. **CSS 动画**: 主题切换动画依赖于 View Transitions API，在不支持的浏览器中会降级为无动画切换

### 降级处理

在不支持 View Transitions API 的浏览器中：

- 主题切换功能仍然正常工作
- 只是没有平滑的圆形扩散动画效果
- 主题切换会立即生效

### 检测支持

项目会自动检测浏览器是否支持 View Transitions API：

```javascript
// 检查 View Transitions API 支持
if (document.startViewTransition) {
  // 使用 View Transitions API
} else {
  // 降级处理
}
```

## 开发指南

### 添加新主题

1. 在 `tailwind.config.js` 中配置新的主题类
2. 在 CSS 中添加相应的样式
3. 在 `App.tsx` 中更新主题切换逻辑

### 自定义动画

可以修改 `src/index.css` 中的 View Transition 样式来自定义动画效果：

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
```

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

## 更新日志

- **v0.0.0**: 初始版本，实现基础的主题切换功能
