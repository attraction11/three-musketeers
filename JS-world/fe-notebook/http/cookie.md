### Cookie

- set-Cookie <响应首部字段> 开始状态管理所使用的 Cookie 信息 
- Cookie <请求首部字段> 服务器接收到的 Cookie 信息

#### Set-Cookie

- NAME=VALUE 赋予 Cookie 的名称和其值（必须项）
- expires=DATE Cookie 的有效期（若不明确指定，则默认为浏览器关闭之前）
- path=PATH 将服务器上的文件目录作为 Cookie 的适用对象（若不指定，则默认为文档所在的目录）
- domain=域名 作为 Cookie 适用对象的域名（若不指定，则默认为创建 Cookie 的服务器的域名）
- secure 仅在 HTTPS 安全通信时才发送 Cookie
- HttpOnly 加以限制，使 Cookie 不能被 javascript 脚本访问

#### Cookie

```js
Cookie: status=enable
```

首部字段 Cokkie 会告诉服务器，当客户端想获得 HTTP 状态管理支持时，就会在请求中包含从服务器接收到的 Cookie。接收到多个 Cookie 时，同样可以以多个 Cookie 形式发送。