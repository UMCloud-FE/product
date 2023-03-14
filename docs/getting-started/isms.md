---
nav:
  title: 快捷导航
  order: 2

order: 2
---

## 视频短信

```tsx
import React from 'react';

// demo start
class GuideBox extends React.Component {
  list = [
    { name: '快速入门', url: '/docs/isms/guide' },
    { name: '计费模式', url: '/docs/isms/price/1033' },
    { name: '词汇表', url: '/docs/isms/glossary/word' },
  ];

  render() {
    return (
      <div className="docs-getting-started-container">
        {this.list.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              className="docs-getting-started-item"
            >
              {item.name}
            </a>
          );
        })}
      </div>
    );
  }
}

export default GuideBox;
```
