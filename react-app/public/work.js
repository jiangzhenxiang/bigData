// onmessage = function(e) {
//   console.log('shoudao:', e.data)
// }
onmessage = function (event) {
  console.log('work接收信息', event.data)
  const {value, list} = event.data;
  doSomething(value, list)
}

function doSomething(value, list) {
  // 执行任务
  let searchData = list.filter((item, i) => {
      return item.title.indexOf(value) > -1
  })
  postMessage(searchData);
}
