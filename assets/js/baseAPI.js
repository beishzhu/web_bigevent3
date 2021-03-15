// 每次发送ajax请求前会先调用这个函数，可以用来拼接请求路径
$.ajaxPrefilter(function (options) {
  // console.log(options.url);
  options.url = 'http://ajax.frontend.itheima.net' + options.url
  // console.log(options.url);
})