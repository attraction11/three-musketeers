// The async keyword before a function has two effects:
//
// Makes it always return a promise.
// Allows to use await in it.
// The await keyword before a promise makes JavaScript wait until that promise settles, and then:
//
// If it’s an error, the exception is generated, same as if throw error were called at that very place.
// Otherwise, it returns the result, so we can assign it to a value.
// Together they provide a great framework to write asynchronous code that is easy both to read and write.
//
// With async/await we rarely need to write promise.then/catch,
// but we still shouldn’t forget that they are based on promises,
// because sometimes (e.g. in the outmost scope) we have to use these methods.
// Also Promise.all is a nice thing to wait for many tasks simultaneously.

const log = require('../utils/log');

const getTicket = async function(username) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(`ticket-${username}`);
    }, 1000);
  });
};

const getUserInfo = async function() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      const userInfo = { username: 'hejx' };
      resolve(userInfo);
    }, 1000);
  });
};

const run = async function() {
  log('get userInfo');
  let userInfo = await getUserInfo();
  log('get ticket');
  let ticket = await getTicket(userInfo.username);

  log(`ticket is: ${ticket}`);
};

run();
