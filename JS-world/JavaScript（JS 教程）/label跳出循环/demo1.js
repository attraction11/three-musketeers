/*
* 从alert(num)的值可以看出，continue outPoint;语句的作用是跳出双循环，返回到outPoint层继续执行，输出 55。
* */
var num = 0;
outPoint:
  for (var i = 0 ; i < 10 ; i++){
    for (var j = 0 ; j < 10 ; j++){
      if( i == 5 && j == 5 ){
        break outPoint;
      }
      num++;
    }
  }

// 循环在 i 为5，j 为5的时候跳出双循环，返回到outPoint层继续执行，输出 55
alert(num);
