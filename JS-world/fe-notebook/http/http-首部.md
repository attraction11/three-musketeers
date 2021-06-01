### HTTP 首部

HTTP 协议的请求和响应报文中必定包含 HTTP 首部，只是我们平时在使用 Web 的过程中感受不到它。

#### 通用首部字段

|首部字段名|说明|
|--------|-------------|
| Cache-Control | 控制缓存的行为 |
| Connection | 逐跳首部、链接的管理 |
| Date | 创建报文的日期 |
| Pragma | 报文指令 |
| Trailer | 报文末端的首部一览 |
| Transfer-Encoding | 指定报文主体的传输编码方式 |
| Upgrade| 升级为其他协议 |
| Via | 代理服务的相关信息 |
| Warning | 错误通知 |

#### 请求首部字段

|首部字段名|说明|
|--------|-------------|
| Accept | 用户代理可以处理的媒体类型 |
| Accept-Charset | 优先的字符集 |
| Accept-Encoding | 优先的内容编码 |
| Accept-Language | 优先的语言（自然语言）|
| Authorization | Web认证信息 |
| Expect | 期待服务器的特定行为 |
| From | 用户的电子邮箱地址 |
| Host | 请求资源所在的服务器 |
| if-Match | 比较实体标记（ETag）|
| if-Modified-Since | 比较资源的更新时间 |
| if-None-Match | 比较实体标记（与 if-Match 相反）|
| if-Range | 资源未更新时发送实体 Byte 的范围请求 |
| if-Unmodified-Since | 比较资源的更新时间（与 if-Modified-Since 相反）|
| Max-Forwards | 最大传输逐跳数 |
| Proxy-Authorization| 代理服务器要求客户端的认证信息 |
| Range | 实体的字节范围请求 |
| Referer | 对请求中 URI 的原始获取方 |
| TE | 传输码的优先级 |
| User-Agent | HTTP 客户端程序的信息 |

#### 响应首部字段

|首部字段名|说明|
|--------|-------------|
| Accept-Ranges | 是否接受字节范围请求 |
| Age | 推算资源创建经过的时间 |
| ETag | 资源的匹配信息 |
| Location | 令客户端重定向至指定 URI |
| Proxy-Authenticate | 代理服务器对客户端的认证信息 |
| Retry-Alert | 对再次发起请求的时机要求 |
| Server | HTTP 服务器的安装信息 |
| Vary | 代理服务器缓存的管理信息 |
| WWW-Authenticate | 服务器对客户端的认证信息 |

#### 实体首部字段

|首部字段名|说明|
|--------|-------------|
| Allow | 资源可支持的 HTTP 方法 |
| Content-Encoding | 实体主体适用的编码方法 |
| Content-Language | 实体主体的自然语言 |
| Content-Length | 实体主体的大小（单位：字节）|
| Content-Location | 替代对应资源的 URI |
| Content-MD5 | 实体主体的报文摘要 |
| Content-Range | 实体主体的位置范围 |
| Content-Type | 实体主体的媒体类型 |
| Expires | 实体主体过期的日期时间 |
| Last-Modified | 资源的最后修改日期时间 |



