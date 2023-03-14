---
nav:
  title: 快捷导航
  order: 2

order: 5
---

## 短链工具

```tsx
import React from 'react';

// demo start
class GuideBox extends React.Component {
  list = [
    { name: '快速入门', url: '/docs/uslk/features/create' },
    { name: '产品简介', url: '/docs/uslk/introduction' },
    { name: '常见问题', url: '/docs/uslk/faq' },
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
