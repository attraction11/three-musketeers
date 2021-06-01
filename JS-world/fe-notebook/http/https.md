### HTTPS

#### HTTP 的缺点

- 通信使用明文（不加密），内容可能会被窃听
- 不验证通信方的身份，因此有可能遭遇伪装
- 无法证明报文的完整性，所以有可能遭篡改


#### SSL

SLL 是独立于 HTTP 的协议，所以不光是 HTTP 协议，其他运行在应用层的 SMTP 和 Telnet 等协议均可配合 SSL 协议使用。可以说，SSL 是当今世界上应用最为广泛的网络安全技术。

- HTTP: 应用 HTTP -> TCP -> IP
- HTTPS: 应用 HTTP -> SSL -> TCP -> IP