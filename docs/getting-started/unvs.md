---
nav:
  title: 快捷导航
  order: 2

order: 4
---

## 号码认证

```tsx
import React from 'react';

// demo start
class GuideBox extends React.Component {
  list = [
    { name: '快速入门', url: '/docs/unvs/guide' },
    { name: 'SDK文档', url: '/docs/unvs/sdk_docs/7001' },
    { name: '常见问题', url: '/docs/unvs/faq' },
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
