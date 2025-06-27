# 扩展 Shortcode - Spotify


`spotify` shortcode 提供了一个内嵌的响应式音乐播放器。

<!--more-->

## 快速使用

一个 `spotify` 示例：

```markdown
{{</* spotify type=artist id=74ASZWbe4lXaubB36ztrGX */>}}
Or
{{</* spotify artist 74ASZWbe4lXaubB36ztrGX */>}}
```

呈现的输出效果如下：

{{< spotify artist 74ASZWbe4lXaubB36ztrGX >}}

## 详细参数

{{< version 0.3.8 >}}

`spotify` shortcode 有以下命名参数：

- **type** _[必需]_ (**第一个**位置参数)

    Spotify 音乐的 `type`，可以是 `艺术家`、`专辑`、`曲目` 或 `播放列表`。

- **id** _[必需]_ (**第二个**位置参数)

    Spotify 音乐的 `id`，可以在 Spotify URL 中找到。

- **width** _[optional]_ (**第三个**位置参数)

    Spotify 音乐播放器的宽度。

- **height** _[optional]_ (**第四个**位置参数)

    Spotify 音乐播放器的高度。


---

> 作者: [Lruihao](https://lruihao.cn)  
> URL: http://localhost:54747/zh-cn/documentation/content-management/shortcodes/extended/spotify/  

