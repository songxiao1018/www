// JavaScript函数，用于添加文本到页面
function getText() {
    // 获取<select>元素
    var A1 = document.getElementById("A1"); var B1 = document.getElementById("B1"); var C1 = document.getElementById("C1"); var D1 = document.getElementById("D1"); var E1 = document.getElementById("E1");
    var A2 = document.getElementById("A2"); var B2 = document.getElementById("B2"); var C2 = document.getElementById("C2"); var D2 = document.getElementById("D2"); var E2 = document.getElementById("E2");
    var A3 = document.getElementById("A3"); var B3 = document.getElementById("B3"); var C3 = document.getElementById("C3"); var D3 = document.getElementById("D3"); var E3 = document.getElementById("E3");
    var A4 = document.getElementById("A4"); var B4 = document.getElementById("B4"); var C4 = document.getElementById("C4"); var D4 = document.getElementById("D4"); var E4 = document.getElementById("E4");
    var A5 = document.getElementById("A5"); var B5 = document.getElementById("B5"); var C5 = document.getElementById("C5"); var D5 = document.getElementById("D5"); var E5 = document.getElementById("E5");
    var A6 = document.getElementById("A6"); var B6 = document.getElementById("B6"); var C6 = document.getElementById("C6"); var D6 = document.getElementById("D6"); var E6 = document.getElementById("E6");

    // var id = document.getElementById('id');
    var id = document.getElementById('id').value;

    // 获取选中的<option>元素的值
    var A1_Value = A1.value; var B1_Value = B1.value; var C1_Value = C1.value; var D1_Value = D1.value; var E1_Value = E1.value;
    var A2_Value = A2.value; var B2_Value = B2.value; var C2_Value = C2.value; var D2_Value = D2.value; var E2_Value = E2.value;
    var A3_Value = A3.value; var B3_Value = B3.value; var C3_Value = C3.value; var D3_Value = D3.value; var E3_Value = E3.value;
    var A4_Value = A4.value; var B4_Value = B4.value; var C4_Value = C4.value; var D4_Value = D4.value; var E4_Value = E4.value;
    var A5_Value = A5.value; var B5_Value = B5.value; var C5_Value = C5.value; var D5_Value = D5.value; var E5_Value = E5.value;
    var A6_Value = A6.value; var B6_Value = B6.value; var C6_Value = C6.value; var D6_Value = D6.value; var E6_Value = E6.value;

    // A1    // B1    // C1    // D1    // E1
    // A2    // B2    // C2    // D2    // E2
    // A3    // B3    // C3    // D3    // E3
    // A4    // B4    // C4    // D4    // E4
    // A5    // B5    // C5    // D5    // E5
    // A6    // B6    // C6    // D6    // E6


    var chesses = [
        A6_Value, B6_Value, C6_Value, D6_Value, E6_Value,
        A5_Value, B5_Value, C5_Value, D5_Value, E5_Value,
        A4_Value, B4_Value, C4_Value, D4_Value, E4_Value,
        A3_Value, B3_Value, C3_Value, D3_Value, E3_Value,
        A2_Value, B2_Value, C2_Value, D2_Value, E2_Value,
        A1_Value, B1_Value, C1_Value, D1_Value, E1_Value,
    ]

    board_now =
        A6_Value + "," + B6_Value + "," + C6_Value + "," + D6_Value + "," + E6_Value + "," +
        A5_Value + "," + B5_Value + "," + C5_Value + "," + D5_Value + "," + E5_Value + "," +
        A4_Value + "," + B4_Value + "," + C4_Value + "," + D4_Value + "," + E4_Value + "," +
        A3_Value + "," + B3_Value + "," + C3_Value + "," + D3_Value + "," + E3_Value + "," +
        A2_Value + "," + B2_Value + "," + C2_Value + "," + D2_Value + "," + E2_Value + "," +
        A1_Value + "," + B1_Value + "," + C1_Value + "," + D1_Value + "," + E1_Value 

    // console.log(board_now)

    var board = {
        "司令": 0, "军长": 0, "军旗": 0,
        "师长": 0, "旅长": 0, "团长": 0, "营长": 0, "炸弹": 0,
        "连长": 0, "排长": 0, "工兵": 0, "地雷": 0,
    }

    for (var i = 0; i < chesses.length; i++) {
        if (chesses[i] == "司令") {
            board["司令"] += 1;
            if (board["司令"] > 1) {
                alert("司令只能有一个");
                return;
            }
        } else if (chesses[i] == "军长") {
            board["军长"] += 1;
            if (board["军长"] > 1) {
                alert("军长只能有一个");
                return;
            }
        } else if (chesses[i] == "军旗") {
            board["军旗"] += 1;
            if (board["军旗"] > 1) {
                alert("军旗只能有一个");
                return;
            }
        } else if (chesses[i] == "师长") {
            board["师长"] += 1;
            if (board["师长"] > 2) {
                alert("师长只能有两个");
                return;
            }
        } else if (chesses[i] == "旅长") {
            board["旅长"] += 1;
            if (board["旅长"] > 2) {
                alert("旅长只能有两个");
                return;
            }
        } else if (chesses[i] == "团长") {
            board["团长"] += 1;
            if (board["团长"] > 2) {
                alert("团长只能有两个");
                return;
            }
        } else if (chesses[i] == "营长") {
            board["营长"] += 1;
            if (board["营长"] > 2) {
                alert("营长只能有两个");
                return;
            }
        } else if (chesses[i] == "炸弹") {
            board["炸弹"] += 1;
            if (board["炸弹"] > 2) {
                alert("炸弹只能有两个");
                return;
            }
        } else if (chesses[i] == "连长") {
            board["连长"] += 1;
            if (board["连长"] > 3) {
                alert("连长只能有三个");
                return;
            }
        } else if (chesses[i] == "排长") {
            board["排长"] += 1;
            if (board["排长"] > 3) {
                alert("排长只能有三个");
                return;
            }
        } else if (chesses[i] == "工兵") {
            board["工兵"] += 1;
            if (board["工兵"] > 3) {
                alert("工兵只能有三个");
                return;
            }
        } else if (chesses[i] == "地雷") {
            board["地雷"] += 1;
            if (board["地雷"] > 3) {
                alert("地雷只能有三个");
                return;
            }
        } else {
            continue;
        }
    }

    var chess_board_json = {
        "id": id,
        "1___Six": { "A6": A6_Value, "B6": B6_Value, "C6": C6_Value, "D6": D6_Value, "E6": E6_Value, },
        "2__Five": { "A5": A5_Value, "B5": B5_Value, "C5": C5_Value, "D5": D5_Value, "E5": E5_Value, },
        "3__Four": { "A4": A4_Value, "B4": B4_Value, "C4": C4_Value, "D4": D4_Value, "E4": E4_Value, },
        "4_Three": { "A3": A3_Value, "B3": B3_Value, "C3": C3_Value, "D3": D3_Value, "E3": E3_Value, },
        "5___Two": { "A2": A2_Value, "B2": B2_Value, "C2": C2_Value, "D2": D2_Value, "E2": E2_Value, },
        "6___One": { "A1": A1_Value, "B1": B1_Value, "C1": C1_Value, "D1": D1_Value, "E1": E1_Value, },
        "group": "null",
        // "flag": flag_result,
    };

    return board_now; // chess_board_json,

}

function sendRed() {
    board_txt = getText();

    if (board_txt == null) {
        return;
    }

    // var id = document.getElementById('id');
    var id = document.getElementById('id').value;

    sendData(board_txt, id, "red")
}

function sendBlack() {
    board_txt = getText();

    if (board_txt == null) {
        return;
    }

    // var id = document.getElementById('id');
    var id = document.getElementById('id').value;

    sendData(board_txt, id, "black")
}

function createCookie(id, group, data, expires_time) {

    document.cookie = "key=value; expires=date; path=path; domain=domain; secure";
    document.cookie = id + "," + group + "=" + data + "; expires=" + expires_time + "; path=/";
}

function getCookieValue(name) {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return "";
}

function deleteCookie(name) {
    // deleteCookie("user");
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
}


function sendData(data, id, group) {
    console.log(data);

    var flag = document.getElementById('flag');

    flag.innerHTML = "上传成功！";

    let time_now = new Date();

    console.log(time_now);

    // Fri, 27 Mar 2025 00:00:00 GMT
    let expires_time = new Date(time_now.getFullYear() + 1, time_now.getMonth(), time_now.getDate());

    createCookie(id, group, data, expires_time.toUTCString());

    // 等待3秒后，刷新页面
    setTimeout(function () {
        location.reload();
    }, 3000);


}