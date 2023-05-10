import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '智能短信',
    url: '/product/docs/uaim/introduction/index',
    Svg: 'https://umweb-static.cn-sh2.ufileos.com/docs/icons/UAIM.svg',
    description: (
      <>
        将传统文本短信无缝升级为可交互的富媒体信息。帮助您实现与用户应用交互、内容访问、信息查询、智能客服等实时互动。
      </>
    ),
  },
  {
    title: '视频短信',
    url: '/product/docs/isms/',
    Svg: 'https://umweb-static.cn-sh2.ufileos.com/docs/icons/ISMS.svg',
    description: (
      <>
        支持文字、图片、视频及音频等多种丰富的内容组合发送，通过多元化的内容互动组合方式，更丰富、更直观的维度呈现给用户群体。
      </>
    ),
  },
  {
    title: '文本短信',
    url: '/product/docs/usms/',
    Svg: 'https://umweb-static.cn-sh2.ufileos.com/docs/icons/USMS.svg',
    description: (
      <>
        文本短信服务（USMS）是UMCloud为用户提供的一种云通信服务，帮助广大开发者便捷、灵活接入高质量的短信服务。
      </>
    ),
  },
];

function Feature({ Svg, title, description, url }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{ cursor: 'pointer' }} onClick={() => {
        window.location.href = url;
      }}>
        <img width={50} height={50} src={Svg} alt='product' style={{ marginBottom: '16px' }} />
        <h3>{title}</h3>
      </div>
      <div className="text--center padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
