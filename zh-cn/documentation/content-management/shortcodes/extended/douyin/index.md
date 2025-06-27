# 扩展 Shortcode - Douyin


`douyin` shortcode 提供了一个内嵌的用来播放抖音视频的响应式播放器。

<!--more-->

## 快速使用

视频 VideoID 可以通过 PC 端视频播放地址中获取。例如：

```code
https://www.douyin.com/video/7388149561765760266
```

一个 `douyin` 示例：

```markdown
{{</* douyin 7388149561765760266 */>}}
Or
{{</* douyin id=7388149561765760266 */>}}
```

呈现的输出效果如下：

{{< douyin id=7388149561765760266 >}}

## 详细参数

{{< version 0.3.7 >}}

`douyin` shortcode 有以下命名参数：

- **id** _[必需]_（**第一个**位置参数）

    抖音视频的 `id`。


---

> 作者: [Lruihao](https://lruihao.cn)  
> URL: http://localhost:54747/zh-cn/documentation/content-management/shortcodes/extended/douyin/  

