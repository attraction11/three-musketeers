/*
* 从alert(num)的值可以看出，continue outPoint;语句的作用是跳出当前循环，并跳转到outPoint（标签）下的for循环继续执行。
* */
var num = 0;
outPoint:
  for(var i = 0; i < 10; i++)
  {
    for(var j = 0; j < 10; j++)
    {
      if(i == 5 && j == 5)
      {
        continue outPoint;
      }
      num++;
    }
  }
alert(num);  //95
