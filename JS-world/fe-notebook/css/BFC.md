### BFC(Block Formatting Context)

一个BFC是一个HTML盒子并且至少满足下列条件中的任何一个：

* float的值不为none
* position的值不为static或者relative
* display的值为 table-cell, table-caption, inline-block, flex, 或者 inline-flex中的其中一个
* overflow的值不为visible

##### 创建BFC

给元素添加上面提到的任何一个CSS属性即可。

但要注意：

* display:table可能会产生一些问题
* overflow:scroll可能会显示不必要的滚动条
* float:left将会把元素置于容器的左边，其他元素环绕着它
* overflow:hidden将会剪切掉溢出的元素

##### 盒子对齐

在BFC中，每个盒子的左外边框紧挨着包含块的左边框（从右到左的格式，则为紧挨右边框）。即使存在浮动也是这样的（尽管一个盒子的边框会由于浮动而收缩），除非这个盒子的内部创建了一个新的BFC浮动，盒子本身将会变得更窄）。

##### 外边框折叠

当兄弟元素的外边距不一样时，将以最大的那个外边距为准，导致这个原因的前提是元素都在同一个BFC里，所以要避免这个问题，只需要让他们置于不同的BFC里即可。

##### 包含浮动

一个BFC可以包含浮动。很多情况下，假设一个父元素里有2个`float:left`的元素，一般我们可以使用伪元素清理浮动 `clean: both`，而使用BFC原理，也同样可以实现，给父元素添加`overflow: hidden`来形成BFC。

##### 防止文字环绕

假设在一个元素内，有图片和文字，此时将图片进行浮动处理，则会出现图片被文字环绕的情况。要解决这个问题，只需要对包含文字的元素进行BFC处理即可，可给包含文字的元素添加`overflow: hidden`。

##### 多列布局

很多时候进行三列布局，会导致最后一个元素被挤到第二行，就是因为33.33%这个宽度在不同的浏览器上可能会有一些大小的偏差，要解决这个问题，只需要将最后一个元素设置成BFC即可。但是这样的布局，会导致宽度不相等，不推荐。


[文章摘自w3cplus.com](https://www.w3cplus.com/css/understanding-block-formatting-contexts-in-css.html)