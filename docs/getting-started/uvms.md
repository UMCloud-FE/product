---
nav:
  title: 快捷导航
  order: 2

order: 3
---

## 语音消息服务

```tsx
import React from 'react';

// demo start
class GuideBox extends React.Component {
  list = [
    { name: '快速入门', url: '/docs/uvms/guide/start' },
    { name: 'SDK文档', url: '/docs/uvms/sdk' },
    { name: '常见问题', url: '/docs/uvms/questions' },
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
