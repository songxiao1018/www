// 获取DOM元素
const fileInput = document.getElementById('file');
const submitButton = document.getElementById('submit');
const outputTextarea = document.getElementById('output');
const totalJobsSpan = document.getElementById('totalJobs');
const filteredJobsSpan = document.getElementById('filteredJobs');

// 添加提交按钮点击事件监听器
submitButton.addEventListener('click', handleFileSubmit);

async function handleFileSubmit() {
    const file = fileInput.files[0];
    if (!file) {
        alert('请先选择文件！');
        return;
    }

    if (!file.name.match(/\.(xls|xlsx)$/)) {
        alert('请上传Excel文件！');
        return;
    }

    try {
        // 这里需要添加处理Excel文件的逻辑
        // 你可能需要使用类似xlsx库来解析Excel文件
        // 处理完成后更新统计数据和输出结果
        
        // 示例：更新统计数据
        totalJobsSpan.textContent = '100'; // 替换为实际的总职位数
        filteredJobsSpan.textContent = '50'; // 替换为实际的筛选后职位数
        
        // 示例：更新输出结果
        outputTextarea.value = '文件处理结果将显示在这里';
        
    } catch (error) {
        console.error('文件处理出错：', error);
        alert('文件处理失败，请重试！');
    }

    // 读取Excel文件内容
    const reader = new FileReader();
    reader.onload = function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, {type: 'array'});
        
        // 列举全部的工作表,并添加下拉选项
        const sheetNames = workbook.SheetNames;
        const sheetSelect = document.createElement('select');
        sheetSelect.id = 'sheetSelect';
        
        // 为每个工作表创建选项
        sheetNames.forEach(name => {
            const option = document.createElement('option');
            option.value = name;
            option.textContent = name;
            sheetSelect.appendChild(option);
        });
        
        // 将下拉框添加到文件输入框后面
        fileInput.parentNode.insertBefore(sheetSelect, fileInput.nextSibling);
        
        // 在选择下拉框后，读取对应的工作表
        sheetSelect.addEventListener('change', function() {
            const selectedSheetName = sheetSelect.value;
            const selectedSheet = workbook.Sheets[selectedSheetName];
            
            // 将选中的工作表转换为JSON数据
            const jsonData = XLSX.utils.sheet_to_json(selectedSheet, {header: 1});
            
            // 更新输出区域显示选中工作表的数据
            console.log('当前工作表数据:', jsonData);
            outputTextarea.value = JSON.stringify(jsonData, null, 2);
        });

        // 默认选中第一个工作表并触发change事件
        sheetSelect.value = sheetNames[0];
        const firstSheet = workbook.Sheets[sheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet, {header: 1});
        
        console.log('Excel数据:', jsonData);
        outputTextarea.value = JSON.stringify(jsonData, null, 2);
    };
    
    reader.readAsArrayBuffer(file);

}

// 添加文件输入变化事件监听器
fileInput.addEventListener('change', function(e) {
    const fileName = e.target.files[0]?.name;
    if (fileName) {
        // 可以在这里添加文件选择后的UI反馈
        console.log('已选择文件：', fileName);
    }
});