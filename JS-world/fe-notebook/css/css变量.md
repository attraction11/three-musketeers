### CSS变量

##### 变量的声明

声明变量的时候，变量名前面要加两根连词线（--）。

各种值都可以放入 CSS 变量

```css
:root{
  --main-color: #4d4e53;
  --main-bg: rgb(255, 255, 255);
  --logo-border-color: rebeccapurple;

  --header-height: 68px;
  --content-padding: 10px 20px;

  --base-line-height: 1.428571429;
  --transition-duration: .35s;
  --external-link: "external link";
  --margin-top: calc(2vh + 20px);
}
```

变量名大小写敏感。

##### var()

var()函数用于读取变量, 还可以使用第二个参数，表示变量的默认值。如果该变量不存在，就会使用这个默认值, 第二个参数不处理内部的逗号或空格，都视作参数的一部分。

```css
a {
  color: var(--foo);
  text-decoration-color: var(--bar);
}
```

变量值只能用作属性值，不能用作属性名.


##### 变量值的类型

如果变量值是一个字符串，可以与其他字符串拼接, 如果变量值是数值，不能与数值单位直接连用。

```css
.foo {
  --gap: 20;
  /* 无效 */
  margin-top: var(--gap)px;
}

/* 必须使用calc()函数，将它们连接 */
.foo {
  --gap: 20;
  margin-top: calc(var(--gap) * 1px);
}
```

##### 作用域

同一个 CSS 变量，可以在多个选择器内声明。读取的时候，优先级最高的声明生效。这与 CSS 的"层叠"（cascade）规则是一致的。

```css
<style>
  :root { --color: blue; }
  div { --color: green; }
  #alert { --color: red; }
  * { color: var(--color); }
</style>

<p>蓝色</p>
<div>绿色</div>
<div id="alert">红色</div>
```

变量的作用域就是它所在的选择器的有效范围, 由于这个原因，全局的变量通常放在根元素:root里面，确保任何选择器都可以读取它们。

##### 响应式布局

可以在响应式布局的media命令里面声明变量，使得不同的屏幕宽度有不同的变量值。

```css
body {
  --primary: #7F583F;
  --secondary: #F7EFD2;
}

a {
  color: var(--primary);
  text-decoration-color: var(--secondary);
}

@media screen and (min-width: 768px) {
  body {
    --primary:  #F7EFD2;
    --secondary: #7F583F;
  }
}
```

##### @support

使用@support命令进行检测

```css
@supports ( (--a: 0)) {
  /* supported */
}

@supports ( not (--a: 0)) {
  /* not supported */
}
```

##### JavaScript 操作

JavaScript 也可以检测浏览器是否支持 CSS 变量。

```js
const isSupported =
  window.CSS &&
  window.CSS.supports &&
  window.CSS.supports('--a', 0);

if (isSupported) {
  /* supported */
} else {
  /* not supported */
}
```

操作 CSS 变量

```js
// 设置变量
document.body.style.setProperty('--primary', '#7F583F');

// 读取变量
document.body.style.getPropertyValue('--primary').trim();
// '#7F583F'

// 删除变量
document.body.style.removeProperty('--primary');
```

这意味着，JavaScript 可以将任意值存入样式表。

```js
const docStyle = document.documentElement.style;

document.addEventListener('mousemove', (e) => {
  docStyle.setProperty('--mouse-x', e.clientX);
  docStyle.setProperty('--mouse-y', e.clientY);
});

```

[css-variables](http://www.ruanyifeng.com/blog/2017/05/css-variables.html)