function convertToUpperCase() {
    // 获取元素，增加null检查
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    var ALL_num = document.getElementById('ALL_num');

    if (!inputText || !outputText) {
        console.error('元素未找到');
        return;
    }
    console.log('开始解析');

    // console.log('inputText:', inputText.value);

    // 按行分割文本
    let lines = inputText.value.split('\n');

    let char_list = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",

        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z",

        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z"
    ]

    let outputLines = [];

    // 输出所有行
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        let line_list = line.split("\t")
        if (line_list.length != 4) {
            continue
        }
        let first = line_list[0]
        let message = line_list[1]
        let date_time = line_list[2].split(" ")[0]
        let score = line_list[3]

        // console.log(message[message.length - 1])

        // # 是否是调查
        let flag_diaocha = 0
        let flag_nian = 0
        let flag_tuijian = 0
        let is_ok = "中断"
        let message_l =  message.length;
        let max_char = 0
        let min_char = 100
        
        for (let j = 0; j < message_l; j++) {
            // if (message[j] == "调" && message[j + 1] == "查") {
            //     flag_diaocha = 1
            if (message[j] == "号") {
                flag_diaocha = 1
            } else if (message[j] == "2" && message[j + 1] == "0" && message[j + 2] == "2" && message[j + 3] == "4") {
                flag_nian = 1
            } else if (message[j] == "完" && message[j + 1] == "成") {
                is_ok = "完成"
            } else if (message[j] == "推" && message[j + 1] == "荐") {
                flag_tuijian = 1
            }
            for (let k = 0; k < char_list.length; k++) {
                if (message[j] == char_list[k]) {
                    if (j < min_char)
                        min_char = j
                    if (j > max_char)
                        max_char = j
                }
            }
        }
        if (!(flag_diaocha == 1)) {
            continue
        }

        if (flag_nian == 1) {
            continue
        }

        if (flag_tuijian == 1) {
            continue
        }

        if (max_char - min_char < 3) {
            continue
        }

        let ID = ""
        for (let i = min_char ; i <= max_char; i++){
            ID += message[i]
        }

        // name, " ", message[min_char:max_char + 1], " ", is_ok, " ", date_time, " ", score
        // # 输出
        outputLines.push(`${is_ok}\t${ID}\t${date_time}\t${score}`);
        // console.log(`${first}\t${ID}\t${is_ok}\t${date_time}\t${score}`)
    }

    // outputLines按is_ok排序
    outputLines.sort(function(a, b) {
        let a_is_ok = a.split("\t")[0]
        let b_is_ok = b.split("\t")[0]
        if (a_is_ok == "完成") {
            return -1
        } else if (b_is_ok == "完成") {
            return 1
        } else {
            return 0
        }
    })

    // outputLines按ID去重
    let outputLines_new = [];
    let ID_list = [];
    for (let i = 0; i < outputLines.length; i++) {
        let ID = outputLines[i].split("\t")[1]
        let flag = 0
        for (let j = 0; j < ID_list.length; j++) {
            if (ID == ID_list[j]) {
                flag = 1
                break
            }
        }
        if (flag == 0) {
            ID_list.push(ID)
            outputLines_new.push(outputLines[i])
        }
    }
    outputLines = outputLines_new;
    // console.log(outputLines);


    outputLines.unshift('状态\t调查编号\t进行时间\t积分情况');

    // 更新输出框中的文本，使用换行符连接每一行
    outputText.value = outputLines.join('\n');
    ALL_num.innerHTML = outputLines.length;
    // outputText.value = lines[0]
}
