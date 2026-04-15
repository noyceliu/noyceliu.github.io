---
title: 部署问题总结
date: 2025-07-10T20:14:22+08:00
author: 
  name: noyceliu  
  link: https://lruihao.cn
  avatar: /images/avatar.png
description: 学习在几分钟内创建一个 Hugo FixIt 站点。
resources:
  - name: featured-image
    src: cover.webp
tags:
  - Installation
  - Basics
draft: false
categories:
  - Documentation
collections:
  - Getting Started
lightgallery: true
toc:
  auto: false
  ordered: true

---
学习在几分钟内创建一个 Hugo **FixIt** 站点。

<!--more-->
## 问题汇总

> 新建一篇文章，但是在home page里面无法看到

mainsections 设置，page type参数

> 新建文章，看不到toc
    
一种原因：md文件里，标题的级数会影响；比如# 和## ，只有# 一级标题时，不显示，进一步原因待确认。

2.