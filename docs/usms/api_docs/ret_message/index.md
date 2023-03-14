# 回执消息推送

## 状态报告推送

通过 HTTP 批量推送的方式将短信回执状态报告推送至客户指定地址。

<h3>协议说明</h3>

| 类别 | 说明                                           |
| ---- | ---------------------------------------------- |
| URL  | 用户配置的 HTTP 回调地址（当前需用户主动提供） |
| 方式 | POST                                           |
| 协议 | HTTP + JSON                                    |
| 编码 | UTF-8                                          |

<h3>请求说明</h3>

请求为 JSON Array 格式，单次请求可能会包含多个短信回执状态报告内容。

<h5>请求示例</h5>

```json
{
  "MsgType": 2,
  "Data": [
    {
      "SessionNo": "d0****f7-0fc3-****-****-9f73****6c6e",
      "Phone": "185****9057",
      "CostCount": 2,
      "ReceiptTime": 1563867000,
      "ReceiptResult": "发送成功", //通过该字段判断发送结果，枚举值见参数说明
      "ReceiptCode": "Delivrd",
      "ReceiptDesc": "用户接收成功",
      "UserId": "you man c define the content by yrself"
    },
    {
      "SessionNo": "d1****f7-0fc3-****-****-9f73****6c6e",
      "Phone": "185****9057",
      "CostCount": 2,
      "ReceiptTime": 1563867000,
      "ReceiptResult": "发送失败",
      "ReceiptCode": "MSBLACK",
      "ReceiptDesc": "手机在运营商防骚扰黑名单",
      "UserId": "you man c define the content by yrself"
    }
  ]
}
```

<h5>参数说明</h5>

| Parameter name | Type  | Description                       | Case | Required |
| -------------- | ----- | --------------------------------- | ---- | -------- |
| MsgType        | int   | 推送消息类型，2 代表 回执状态报告 | 2    | Y        |
| Data           | Array | 批次列表                          |      | Y        |

- Data

| Parameter name | Type   | Description                                                                                                                                                                               | Case              | Required |
| -------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | -------- |
| SessionNo      | string | [短信发送](https://docs.UMCloud.cn/api/usms-api/send_usms_message) 的发送序列号                                                                                                           | xddd-xx-ss-ss-ss  | Y        |
| Phone          | string | 手机号码                                                                                                                                                                                  | 18512345678       | Y        |
| CostCount      | int    | 短信拆分条数                                                                                                                                                                              | 2                 | Y        |
| ReceiptTime    | int    | 状态报告时间                                                                                                                                                                              | 1563867000        | Y        |
| ReceiptResult  | string | 回执状态结果，可根据该字段判断发送结果，枚举值：<br />> 发送成功 或 Success：代表短消息发送成功<br />> 发送失败 或 Fail：代表短消息发送失败<br />> 状态未知 或 Unknow：代表运营商未上报状态报告 | 发送成功          | Y        |
| ReceiptCode    | string | 状态报告编码                                                                                                                                                                              | Delivrd           | Y        |
| ReceiptDesc    | string | 状态报告说明                                                                                                                                                                              | 用户接收成功      | Y        |
| UserId         | string | 自定义的业务标识 ID，字符串（ 长度不能超过 32 位），不支持 单引号、表情包符号等特殊字符                                                                                                   | UMCloud-uhost-001 | N        |

<h3>响应说明</h3>

<h5>响应示例</h5>

```
{
    code: 0,
    message: "ok"
}
```

<h5>参数说明</h5>

| code | message  | Description |
| ---- | -------- | ----------- |
| 0    | ok       | 接收成功    |
| 非 0 | 异常说明 | 未接收成功  |

<h3>重推说明</h3>

首次推送失败后（非成功响应），将每隔 1 秒进行重推，累计重推 3 次仍未成功，将停止推送。

<hr/>

## 上行消息推送

通过 HTTP 批量推送的方式将上行消息推送至客户指定地址。

<h3>协议说明</h3>

| 类别 | 说明                                           |
| ---- | ---------------------------------------------- |
| URL  | 用户配置的 HTTP 回调地址（当前需用户主动提供） |
| 方式 | POST                                           |
| 协议 | HTTP + JSON                                    |
| 编码 | UTF-8                                          |

<h3>请求说明</h3>

请求为 JSON Array 格式，单次请求可能会包含多个上行消息内容。

<h5>请求示例</h5>

```json
{
  "MsgType": 0,
  "Data": [
    {
      "ExtendCode": "12345",
      "UserId": "you man c define the content by yrself",
      "Phone": "185****9057",
      "ReplyContent": "好的，可以了",
      "ReplyTime": 1573552778
    },
    {
      "ExtendCode": "12346",
      "UserId": "you man c define the content by yrself",
      "Phone": "185****9057",
      "ReplyContent": "收到，谢谢",
      "ReplyTime": 1573552778
    }
  ]
}
```

<h5>参数说明</h5>

| Parameter name | Type  | Description                  | Case | Required |
| -------------- | ----- | ---------------------------- | ---- | -------- |
| MsgType        | int   | 推送消息类型，0 代表上行消息 | 0    | Y        |
| Data           | Array | 批次列表                     |      | Y        |

- Data

| Parameter name | Type   | Description                                        | Case              | Required |
| -------------- | ------ | -------------------------------------------------- | ----------------- | -------- |
| ExtendCode     | string | 扩展码，默认不带                                   | 12345             | N        |
| UserId         | string | 自定义的业务标识 ID，字符串（ 长度不能超过 32 位） | UMCloud-uhost-001 | N        |
| Phone          | string | 手机号码                                           | 18512345678       | Y        |
| ReplyContent   | string | 上行（回复）消息                                   | 好的，收到了      | Y        |
| ReplyTime      | int    | 回复时间                                           | 1563867000        | Y        |

<h3>响应说明</h3>

<h5>响应示例</h5>

```
{
    code: 0,
    message: "ok"
}
```

<h5>参数说明</h5>

| code | message  | Description |
| ---- | -------- | ----------- |
| 0    | ok       | 接收成功    |
| 非 0 | 异常说明 | 未接收成功  |

<h5>重推说明</h5>

首次推送失败后（非成功响应），将每隔 1 秒进行重推，累计重推 3 次仍未成功，将停止推送。
