// // 获取<select>元素
// var selectElement = document.getElementById("OneA");

// // 获取选中的<option>元素的值
// var selectedValue = selectElement.value;

// // 打印或使用这个值
// console.log(selectedValue); // 打印选中的值

// const fs = require('fs');
// const path = require('path');

const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:4000'); // 允许的源
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

// JavaScript函数，用于添加文本到页面
function getText() {
    // 获取<select>元素
    var OneA = document.getElementById("OneA"); var OneB = document.getElementById("OneB"); var OneC = document.getElementById("OneC"); var OneD = document.getElementById("OneD"); var OneE = document.getElementById("OneE");
    var TwoA = document.getElementById("TwoA"); var TwoB = document.getElementById("TwoB"); var TwoC = document.getElementById("TwoC"); var TwoD = document.getElementById("TwoD"); var TwoE = document.getElementById("TwoE");
    var ThreeA = document.getElementById("ThreeA"); var ThreeB = document.getElementById("ThreeB"); var ThreeC = document.getElementById("ThreeC"); var ThreeD = document.getElementById("ThreeD"); var ThreeE = document.getElementById("ThreeE");
    var FourA = document.getElementById("FourA"); var FourB = document.getElementById("FourB"); var FourC = document.getElementById("FourC"); var FourD = document.getElementById("FourD"); var FourE = document.getElementById("FourE");
    var FiveA = document.getElementById("FiveA"); var FiveB = document.getElementById("FiveB"); var FiveC = document.getElementById("FiveC"); var FiveD = document.getElementById("FiveD"); var FiveE = document.getElementById("FiveE");
    var SixA = document.getElementById("SixA"); var SixB = document.getElementById("SixB"); var SixC = document.getElementById("SixC"); var SixD = document.getElementById("SixD"); var SixE = document.getElementById("SixE");

    // var id = document.getElementById('id');
    var id = document.getElementById('id').value;

    // 获取选中的<option>元素的值
    var OneA_Value = OneA.value; var OneB_Value = OneB.value; var OneC_Value = OneC.value; var OneD_Value = OneD.value; var OneE_Value = OneE.value;
    var TwoA_Value = TwoA.value; var TwoB_Value = TwoB.value; var TwoC_Value = TwoC.value; var TwoD_Value = TwoD.value; var TwoE_Value = TwoE.value;
    var ThreeA_Value = ThreeA.value; var ThreeB_Value = ThreeB.value; var ThreeC_Value = ThreeC.value; var ThreeD_Value = ThreeD.value; var ThreeE_Value = ThreeE.value;
    var FourA_Value = FourA.value; var FourB_Value = FourB.value; var FourC_Value = FourC.value; var FourD_Value = FourD.value; var FourE_Value = FourE.value;
    var FiveA_Value = FiveA.value; var FiveB_Value = FiveB.value; var FiveC_Value = FiveC.value; var FiveD_Value = FiveD.value; var FiveE_Value = FiveE.value;
    var SixA_Value = SixA.value; var SixB_Value = SixB.value; var SixC_Value = SixC.value; var SixD_Value = SixD.value; var SixE_Value = SixE.value;

    // var chess_board = [
    //     [SixA_Value, SixB_Value, SixC_Value, SixD_Value, SixE_Value],
    //     [FiveA_Value, FiveB_Value, FiveC_Value, FiveD_Value, FiveE_Value],
    //     [FourA_Value, FourB_Value, FourC_Value, FourD_Value, FourE_Value],
    //     [ThreeA_Value, ThreeB_Value, ThreeC_Value, ThreeD_Value, ThreeE_Value],
    //     [TwoA_Value, TwoB_Value, TwoC_Value, TwoD_Value, TwoE_Value],
    //     [OneA_Value, OneB_Value, OneC_Value, OneD_Value, OneE_Value],
    // ]

    var chesses = [
        SixA_Value, SixB_Value, SixC_Value, SixD_Value, SixE_Value,
        FiveA_Value, FiveB_Value, FiveC_Value, FiveD_Value, FiveE_Value,
        FourA_Value, FourB_Value, FourC_Value, FourD_Value, FourE_Value,
        ThreeA_Value, ThreeB_Value, ThreeC_Value, ThreeD_Value, ThreeE_Value,
        TwoA_Value, TwoB_Value, TwoC_Value, TwoD_Value, TwoE_Value,
        OneA_Value, OneB_Value, OneC_Value, OneD_Value, OneE_Value,
    ]

    var board = {
        "司令": 0, "军长": 0, "军旗": 0,
        "师长": 0, "旅长": 0, "团长": 0, "营长": 0, "炸弹": 0,
        "连长": 0, "排长": 0, "工兵": 0, "地雷": 0,
    }

    var flag_result = "";

    for (var i = 0; i < chesses.length; i++) {
        if (chesses[i] == "司令") {
            board["司令"] += 1;
            if (board["司令"] > 1) {
                alert("司令只能有一个");
                flag_result = "司令只能有一个"
                // return;
            }
        } else if (chesses[i] == "军长") {
            board["军长"] += 1;
            if (board["军长"] > 1) {
                alert("军长只能有一个");
                flag_result = "军长只能有一个"
                // return;
            }
        } else if (chesses[i] == "军旗") {
            board["军旗"] += 1;
            if (board["军旗"] > 1) {
                alert("军旗只能有一个");
                flag_result = "军旗只能有一个"
                // return;
            }
        } else if (chesses[i] == "师长") {
            board["师长"] += 1;
            if (board["师长"] > 2) {
                alert("师长只能有两个");
                flag_result = "师长只能有两个"
                // return;
            }
        } else if (chesses[i] == "旅长") {
            board["旅长"] += 1;
            if (board["旅长"] > 2) {
                alert("旅长只能有两个");
                flag_result = "旅长只能有两个"
                // return;
            }
        } else if (chesses[i] == "团长") {
            board["团长"] += 1;
            if (board["团长"] > 2) {
                alert("团长只能有两个");
                flag_result = "团长只能有两个"
                // return;
            }
        } else if (chesses[i] == "营长") {
            board["营长"] += 1;
            if (board["营长"] > 2) {
                alert("营长只能有两个");
                flag_result = "营长只能有两个"
                // return;
            }
        } else if (chesses[i] == "炸弹") {
            board["炸弹"] += 1;
            if (board["炸弹"] > 2) {
                alert("炸弹只能有两个");
                flag_result = "炸弹只能有两个"
                // return;
            }
        } else if (chesses[i] == "连长") {
            board["连长"] += 1;
            if (board["连长"] > 3) {
                alert("连长只能有三个");
                flag_result = "连长只能有三个"
                // return;
            }
        } else if (chesses[i] == "排长") {
            board["排长"] += 1;
            if (board["排长"] > 3) {
                alert("排长只能有三个");
                flag_result = "排长只能有三个"
                // return;
            }
        } else if (chesses[i] == "工兵") {
            board["工兵"] += 1;
            if (board["工兵"] > 3) {
                alert("工兵只能有三个");
                flag_result = "工兵只能有三个"
                // return;
            }
        } else if (chesses[i] == "地雷") {
            board["地雷"] += 1;
            if (board["地雷"] > 3) {
                alert("地雷只能有三个");
                flag_result = "地雷只能有三个"
                // return;
            }
        } else {
            continue;
        }
    }

    var flag = document.getElementById('flag');

    flag.innerHTML = flag_result;


    var chess_board_json = {
        "id": id,
        "1___Six": {
            "6A": SixA_Value,
            "6B": SixB_Value,
            "6C": SixC_Value,
            "6D": SixD_Value,
            "6E": SixE_Value,
        },
        "2__Five": {
            "5A": FiveA_Value,
            "5B": FiveB_Value,
            "5C": FiveC_Value,
            "5D": FiveD_Value,
            "5E": FiveE_Value,
        },
        "3__Four": {
            "4A": FourA_Value,
            "4B": FourB_Value,
            "4C": FourC_Value,
            "4D": FourD_Value,
            "4E": FourE_Value,
        },
        "4_Three": {
            "3A": ThreeA_Value,
            "3B": ThreeB_Value,
            "3C": ThreeC_Value,
            "3D": ThreeD_Value,
            "3E": ThreeE_Value
            ,
        },
        "5___Two": {
            "2A": TwoA_Value,
            "2B": TwoB_Value,
            "2C": TwoC_Value,
            "2D": TwoD_Value,
            "2E": TwoE_Value,
        },
        "6___One": {
            "1A": OneA_Value,
            "1B": OneB_Value,
            "1C": OneC_Value,
            "1D": OneD_Value,
            "1E": OneE_Value,
        },
        "group": "null",
        "flag": flag_result,
    };

    // 打印这个值
    // console.log(chess_board_json); // 打印选中的值

    return chess_board_json;

}

function sendRed() {
    board_result = getText();

    board_result.group = "red";

    // console.log(board_result);

    if (board_result.flag != "") {
        console.log("error");
        return;
    }

    sendData(board_result)
}

function sendBlack() {
    board_result = getText();

    board_result.group = "black";

    // console.log(board_result);

    if (board_result.flag != "") {
        console.log("error");
        return;
    }

    sendData(board_result)
}

function sendData(data) {

    console.log(data);
    

    var flag = document.getElementById('flag');

    flag.innerHTML = "上传成功！";

    // if (board_result.flag == "") {
    //     console.log("error");
    //     return;
    // }
    
    // function sendPostRequest() {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:4000/connect_test", true);
        xhr.setRequestHeader("Content-Type", "application/json");
    
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log("请求成功，响应如下：", xhr.responseText);
            } else if (xhr.readyState === 4) {
                console.log("请求失败，状态码：", xhr.status);
            }
        };
    
        var data = JSON.stringify({ key: "value" }); // 这里可以设置你的请求数据
        xhr.send(data);
    // }
    
    // // 调用函数发送POST请求
    // sendPostRequest();
    
    

}