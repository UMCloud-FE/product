---
nav:
  title: 快捷导航
  order: 1

order: 1
---

## 短信服务

```tsx
import React from 'react';

// demo start
class GuideBox extends React.Component {
  list = [
    // { name: '产品简介', url: '/usms/introduction/summary' },
    // { name: '审核标准', url: '/usms/introduction/2005/2101' },
    // { name: '产品定价', url: '/usms/price/domestic' },
    { name: '快速入门', url: '/docs/usms/guide/5001' },
    { name: '国内短信', url: '/docs/usms/guide/5003/301' },
    // { name: 'SDK文档', url: '/docs/usms/sdk_docs/7001' },
    // { name: 'API文档', url: '/docs/usms/api_docs/9001' },
    // { name: '常见问题', url: '/docs/usms/faq/1109' },
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
