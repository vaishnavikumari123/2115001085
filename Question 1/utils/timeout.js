const timeout = (promise, time) => {
    return Promise.race([
      promise,
      new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Timeout')), time);
      }),
    ]);
  };
  
  module.exports