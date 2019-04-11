import example from './modules/example';

require('es6-promise')
  .polyfill();

example(window.location.pathname);

// Or u can use lazy-loading

// import('./modules/example')
//   .then(function (example) {
//     example(window.location.pathname);
//   });
