// 读取JSON文件
fetch('rectangles.json')
    .then(response => response.json())
    .then(data => {
        // 获取容器元素
        const rectanglesContainer = document.getElementById('rectangles');
        const rectanglesContainer2 = document.getElementById('rectangles2');

        // 遍历矩形数据
        data.forEach(rectangle => {
            // 创建一个新的div元素
            const rectangleElement = document.createElement('div');

            // 创建矩形元素
            rectangleElement.classList.add('rectangle');
            rectangleElement.style.width = '100' + 'px';
            rectangleElement.style.height = rectangle.height + 'px';
            rectangleElement.textContent = rectangle.id;
            rectangleElement.style.backgroundColor = rectangle.color;

            // 将矩形元素添加到容器中
            // rectanglesContainer.appendChild(rectangleElement);
            rectanglesContainer2.appendChild(rectangleElement);
        });
    })
    .catch(error => console.error('读取JSON文件失败:', error));
