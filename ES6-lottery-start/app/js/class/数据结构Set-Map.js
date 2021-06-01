// ES6数据结构 Set-Map
{
  let list = new Set();
  list.add(5);
  list.add(7);

  console.log('size',list.size); // size 2
}

{
  // Set 初始化阶段赋值
  let arr = [1,2,3,4,5];
  let list = new Set(arr);

  // size同ES5中的length
  console.log('size',list.size); // size 5
}

{
  // Set数组中元素不能重复
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);

  console.log('list',list); // {1, 2}

  // Set不会进行数据类型的转换
  let arr=[1,2,3,1,'2'];
  let list2=new Set(arr);

  console.log('unique',list2); // {1, 2, 3, "2"}
}

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  console.log('has',list.has('add')); // has true
  console.log('delete',list.delete('add'),list); //delete true {"delete", "clear", "has"}
  list.clear(); // {}
  console.log('list',list); // undefined
}

{
  let arr=['add','delete','clear','has'];
  let list=new Set(arr);

  // key与value相同
  for(let key of list.keys()){
    console.log('keys',key); // add delete clear has
  }
  for(let value of list.values()){
    console.log('value',value); // add delete clear has
  }
  // 默认遍历values
  for(let value of list()){
    console.log('value',value); // add delete clear has
  }
  // 用法同数组
  for(let [key,value] of list.entries()){
    console.log('entries',key,value);
  }

  list.forEach(function(item){console.log(item);}) // add delete clear has
}

// WeakSet与Set支持的数据类型不同，只能是对象
// WeakSet中对象引用都是弱引用，比如在WeakSet添加对象是引用地址的添加
// 不进行垃圾回收，
// 没有clear方法，
// 没有set属性，
// 不能遍历
{
  let weakList=new WeakSet();
  let arg={};

  weakList.add(arg);

  // weakList.add(2); // 不支持数字添加
  console.log('weakList',weakList);
}

{
  let map = new Map();
  let arr=['123'];

  // map的key为数组
  map.set(arr,456);

  console.log('map',map,map.get(arr)); // map Map(1) {Array(1) => 456} 456
}

{
  // ES6 Map接收一个数组，数组的每一个元素还是数组
  let map = new Map([['a',123],['b',456]]);
  console.log('map args',map);
  console.log('size',map.size); //size 2
  console.log('delete',map.delete('a'),map);
  console.log('clear',map.clear(),map); // undefined
}

{
  // weakmap与Map支持的数据类型不同，只能是对象
  // 没有clear方法，
  // 没有set属性，
  // 不能遍历
  // WeakMap的专用场合就是，它的键所对应的对象，
  // 可能会在将来消失。WeakMap结构有助于防止内存泄漏。
  let weakmap=new WeakMap();

  let o={};
  weakmap.set(o,123);
  console.log(weakmap.get(o));
}

{
  // 数据结构横向对比，增，查，改，删
  let map=new Map();
  let array=[];
  // 增
  map.set('t',1);
  array.push({t:1});

  console.info('map-array',map,array);

  // 查
  let map_exist=map.has('t');
  let array_exist=array.find(item=>item.t);
  console.info('map-array',map_exist,array_exist);

  // 改
  map.set('t',2);
  array.forEach(item=>item.t?item.t=2:'');
  console.info('map-array-modify',map,array);

  // 删
  map.delete('t');
  let index=array.findIndex(item=>item.t);
  array.splice(index,1);
  console.info('map-array-empty',map,array);
}

{
  // set和array的对比
  let set=new Set();
  let array=[];

  // 增
  set.add({t:1});
  array.push({t:1});

  console.info('set-array',set,array);

  // 查
  let set_exist=set.has({t:1}); // false, 因为是两个对象
  let array_exist=array.find(item=>item.t);
  console.info('set-array',set_exist,array_exist);

  // 改
  set.forEach(item=>item.t?item.t=2:'');
  array.forEach(item=>item.t?item.t=2:'');
  console.info('set-array-modify',set,array);

  // 删
  set.forEach(item=>item.t?set.delete(item):'');
  let index=array.findIndex(item=>item.t);
  array.splice(index,1);
  console.info('set-array-empty',set,array);
}

{
  // map,set,object对比
  let item={t:1};
  let map=new Map();
  let set=new Set();
  let obj={};

  // 增
  map.set('t',1);
  set.add(item);
  obj['t']=1;

  console.info('map-set-obj',obj,map,set);

  // 查
  console.info({
    map_exist:map.has('t'),
    set_exist:set.has(item),
    obj_exist:'t' in obj
  })

  // 改
  map.set('t',2);
  item.t=2;
  obj['t']=2;
  console.info('map-set-obj-modify',obj,map,set);

  // 删除
  map.delete('t');
  set.delete(item);
  delete obj['t'];
  console.info('map-set-obj-empty',obj,map,set);
}

// 总结：能使用Map不使用数组，如果需要保持数据的唯一性，采用Set
// 尽量放弃使用对象保存数据
