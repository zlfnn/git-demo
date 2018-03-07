//所声明的变量，只在let命令所在的代码块内有效
//for循环的计数器{}   在循环体外引用就会报错
//JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。
//for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
//
//不存在变量提升
function test(){
  for(let i=1;i<3;i++){
    console.log(i);
  }
  // console.log(i);
  console.log(a);
  let a = 1;
  // let a = 2;
}

function last(){
  const PI=3.1415926;
  const k={
    a:1
  }
  k.b=3;
  console.log(PI,k);
}


test();
// last();
