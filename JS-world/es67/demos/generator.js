// generator promise

const log = require('../utils/log');

const runner = function(generator, value) {
  const result = generator.next(value);
  if (result.done) return;
  result.value.then((val) => {
    runner(generator, val);
  })
};

const getTicket = function(username) {
  return new Promise(function(resolve, reject) {
    resolve(`ticket-${username}`);
  });
};

const getUserInfo = function() {
  return new Promise(function(resolve, reject) {
    const userInfo = {
      username: 'hejx'
    };
    resolve(userInfo);
  });
};

const delay = function(ms) {
	return new Promise(function(resolve, reject) {
		log('delay, ms:', ms);
		setTimeout(() => {
				log('delay: done');
				resolve();
			}, ms);
	});
};

const generatorFunction = function* () {
  try {
    const userInfo = yield getUserInfo();
    yield delay(2000);
    const ticket = yield getTicket(userInfo.username);
    log(ticket);
  } catch (e) {
    log(e.message);
  }
};

const genertor = generatorFunction();
runner(genertor);

/*
生成器的主要功能是： 通过一段程序，持续迭代或枚举出符合某个公式或算法的有序数列中的元素。
传统的编程语言，早有异步编程的解决方案（其实是多任务的解决方案）。其中有一种叫做"协程"（coroutine），
意思是多个线程互相协作，完成异步任务。
*/
