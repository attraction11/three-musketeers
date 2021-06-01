const co = require('co');
const log = require('../utils/log');

// simple demo
co(function* () {
  var a = Promise.resolve(1);
  var b = Promise.resolve(2);
  var c = Promise.resolve(3);
  var result = yield [a, b, c];
  log(result);
}).catch(onerror);


// async demo
function getTicket(unsername) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(`ticket-${unsername}`);
    }, 1000);
  });
}

function getUserInfo() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve({
        username: 'hejx'
      })
    }, 1000);
  });
}

co(function* () {
  var userInfo = yield getUserInfo();
  var ticket = yield getTicket(userInfo.username);
  
  log(ticket);
}).catch(onerror);


// error demo
co(function* () {
  try {
    yield Promise.reject(new Error('boom'));
  } catch (e) {
    log(e.message);
  }
}).catch(onerror);


function onerror(err) {
  console.error(err.stack);
}


// Array co
co(function* () {
  var result = yield [
    Promise.resolve('a'),
    Promise.resolve('b'),
    Promise.resolve('c')
  ];
  log(result);
}).catch(onerror);

// Object co
co(function* () {
  var result = yield {
    name: Promise.resolve('hejx'),
    sex: Promise.resolve('man')
  };
  log(result);
}).catch(onerror);


// co(fn*).then( val => )
co(function* () {
  return yield Promise.resolve(true);
}).then(function (val) {
  log(val);
}, function (err) {
  console.error(err.stack);
});
