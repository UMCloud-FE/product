---
nav:
  title: 快捷导航
  order: 1

order: 6
---

## 国际短信

```tsx
import React from 'react';

// demo start
class GuideBox extends React.Component {
  list = [
    { name: '快速入门', url: '/docs/asms/guide/5001' },
    { name: '国际及港澳台短信', url: '/docs/asms/guide/5005/501' },
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
