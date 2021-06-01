const log = require('../utils/log');

let target = {
  name: 'hejx'
};

let handle = {
  get(target, prop, receiver) {
    log(`getting ${prop}!`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, val, receiver) {
    log(`setting ${prop}!`);
    return Reflect.set(target, prop, val, receiver);
  }
};

let proxy = new Proxy(target, handle);

log(proxy.name);
proxy.name = 'hejx1';

log(proxy.name);