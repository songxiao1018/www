
// // 创建一个FileReader对象
// const fileReader = new FileReader();

// // 读取json文件
// fileReader.readAsText('./rectangles.json');

// // e.target.result中包含了文件内容
// const fileContent = fileReader.result;
// // 解析JSON字符串
// const jsonData = JSON.parse(fileContent);
// // 做一些处理，例如显示数据
// console.log(jsonData);

// // 绑定一个事件处理器，当文件读取完成后触发
// fileReader.onload = function (e) {
//     // e.target.result中包含了文件内容
//     const fileContent = e.target.result;
//     // 解析JSON字符串
//     const jsonData = JSON.parse(fileContent);
//     // 做一些处理，例如显示数据
//     console.log(jsonData);
// };

// // 创建一个文件输入元素，用户选择文件后读取
// const fileInput = document.createElement('input');
// fileInput.type = 'file';
// fileInput.accept = '.json';  // 这里可以指定文件类型

// fileInput.onchange = function (e) {
//     const file = e.target.files[0];
//     if (!file) {
//         return;
//     }
//     // 开始读取选择的文件
//     fileReader.readAsText(file);
// };

// // 将文件输入元素添加到页面中，并触发选择文件
// document.body.appendChild(fileInput);

fetch('http://192.168.16.105:3000/shenwang/rectangles.json')  // 发送GET请求
    .then(response => response.json())  // 解析JSON数据
    .then(data => { console.log(data); })// 处理数据   
    .catch(error => { console.error('Fetching error:', error); }); // 处理错误
