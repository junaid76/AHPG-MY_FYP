if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js');
  });
}




// if('serviceworker' in navigator){
//   navigator.serviceworker.register('/sw.js')
//     .then(reg => console.log('service worker registered'))
//     .catch(err => console.log('service worker not registered', err));
// }
// if ('serviceWorker' in navigator) {
// navigator.serviceWorker.register('./sw.js').then(function(reg) {
//     console.log('Successfully registered service worker', reg);
// }).catch(function(err) {
//     console.warn('Error whilst registering service worker', err);
// });
// }