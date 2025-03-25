# Admin Template

一个基于 Vue 3、TypeScript 和 Vite 构建的后台管理系统模板。

## 项目介绍

本项目是一个现代化的后台管理系统模板，提供了基础的用户认证、布局系统和路由管理功能。适合用作企业级后台系统的起点项目。

## 技术栈

- Vue 3 - 渐进式 JavaScript 框架
- TypeScript - JavaScript 的超集，添加了类型系统
- Vite - 下一代前端构建工具
- Ant Design Vue - 企业级 UI 组件库
- Vue Router - 官方路由管理器
- Pinia - Vue 的状态管理库

## 功能特点

- 🔐 用户认证系统（登录/注册）
- 📱 响应式布局设计
- 🎨 基于 Ant Design Vue 的 UI 系统
- 🔄 状态管理集成
- 📦 模块化的项目结构

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发环境运行

```bash
pnpm dev
```

### 生产环境构建

```bash
pnpm build
```

## 项目结构

```
src/
  ├── api/        # API 接口
  ├── assets/     # 静态资源
  ├── components/ # 公共组件
  ├── config/     # 配置文件
  ├── pages/      # 页面组件
  ├── store/      # 状态管理
  └── main.ts     # 入口文件
```

## 使用说明

1. 克隆项目后，首先安装依赖
2. 配置开发环境，确保 Node.js 版本 >= 18
3. 运行开发服务器，访问 http://localhost:5173
4. 默认登录页面位于 /login 路径

## 贡献指南

欢迎提交 Issue 或 Pull Request 来帮助改进这个项目。

## 许可证

[MIT License](./LICENSE)
