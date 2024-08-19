function createCookie(id, data, expires_time) {

    document.cookie = "key=value; expires=date; path=path; domain=domain; secure";
    document.cookie = id + "=" + data + "; expires=" + expires_time + "; path=/";
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

function getChessBoard() {
    flag = document.getElementById("flag");
    id = document.getElementById("id").value;

    char_list1 = ["A", "B", "C", "D", "E"];
    char_list2 = ["a", "b", "c", "d", "e"]
    num_list = ["6", "5", "4", "3", "2", "1"];
    board_chess = [];
    for (let i = 0; i < num_list.length; i++) {
        for (let j = 0; j < char_list1.length; j++) {
            board_chess.push(document.getElementById(char_list1[j] + num_list[i]));
        }
    }
    for (let i = 0; i < num_list.length; i++) {
        for (let j = 0; j < char_list2.length; j++) {
            board_chess.push(document.getElementById(char_list2[j] + num_list[i]));
        }
    }


    data_red = getCookieValue("chess_board," + id + ",red");
    data_black = getCookieValue("chess_board," + id + ",black");

    if (data_red === "" || data_black === "") {
        flag.innerHTML = "获取棋盘失败！";
        return;
    }

    flag.innerHTML = "获取棋盘成功！";

    red_chess = data_red.split(",");
    black_chess = data_black.split(",");

    chess_list = [];
    for (let i = 0; i < red_chess.length; i++) {
        chess_list.push(red_chess[i]);
    }
    for (let i = 0; i < black_chess.length; i++) {
        chess_list.push(black_chess[i]);
    }

    console.log(chess_list);

    for (let i = 0; i < board_chess.length; i++) {
        let group = chess_list[i].split(" ")[0];
        let chess = chess_list[i].split(" ")[1];

        if (chess == "----") {
            board_chess[i].name = "none";
            board_chess[i].innerHTML = " ";
        } else {
            board_chess[i].name = group;
            board_chess[i].innerHTML = chess;

            chess_none_id = board_chess[i].id + "-none";
            document.getElementById(chess_none_id).name = group;
        }
    }

    console.log(board_chess[0].id)

}

function playChess(area) {
    // console.log(area);

    let flag = document.getElementById("flag");

    let arer_lbe = document.getElementById(area);

    // console.log(arer_lbe.innerHTML);

    let last_time = getCookieValue("play,0")

    if (last_time === "") {
        // 排除军旗和地雷
        if (arer_lbe.innerHTML == "地雷" || arer_lbe.innerHTML == "军旗") {
            flag.innerHTML = "不可移动 重选棋";
            deleteCookie("play,0");
            return;
        }
        createCookie("play,0", area + "," + arer_lbe.innerHTML + "," + arer_lbe.name);
        flag.innerHTML = "已选棋";
        console.log("已选棋");
        return;
    }

    console.log("开始比对！");

    // 排除重复点击
    if (last_time.split(",")[0] == area) {
        flag.innerHTML = "重复点击 已选棋";
        return;
    }
    // 自己人跟换
    if (arer_lbe.name == last_time.split(",")[2]) {
        // 排除军旗和地雷
        if (arer_lbe.innerHTML == "地雷" || arer_lbe.innerHTML == "军旗") {
            flag.innerHTML = "不可移动 保持上次";
            return;
        }
        createCookie("play,0", area + "," + arer_lbe.innerHTML + "," + arer_lbe.name);
        flag.innerHTML = "更换 已选棋";
        console.log("已选棋");
        return;
    }

    flag.innerHTML = "已选棋";
    console.log(last_time);

    let last_area = last_time.split(",")[0];
    let last_chess = last_time.split(",")[1];
    let this_area = area;
    let this_chess = arer_lbe.innerHTML;
    let this_c = ""
    let last_c = ""

    if (last_chess == " ") { last_c = 0; }
    if (last_chess == "司令") { last_c = 9; }
    if (last_chess == "军长") { last_c = 8; }
    if (last_chess == "师长") { last_c = 7; }
    if (last_chess == "旅长") { last_c = 6; }
    if (last_chess == "团长") { last_c = 5; }
    if (last_chess == "营长") { last_c = 4; }
    if (last_chess == "连长") { last_c = 3; }
    if (last_chess == "排长") { last_c = 2; }
    if (last_chess == "工兵") { last_c = 1; }
    if (last_chess == "炸弹") { last_c = 100; }
    if (last_chess == "地雷") { last_c = 101; }
    if (last_chess == "军旗") { last_c = 102; }

    if (this_chess == " ") { this_c = 0; }
    if (this_chess == "司令") { this_c = 9; }
    if (this_chess == "军长") { this_c = 8; }
    if (this_chess == "师长") { this_c = 7; }
    if (this_chess == "旅长") { this_c = 6; }
    if (this_chess == "团长") { this_c = 5; }
    if (this_chess == "营长") { this_c = 4; }
    if (this_chess == "连长") { this_c = 3; }
    if (this_chess == "排长") { this_c = 2; }
    if (this_chess == "工兵") { this_c = 1; }
    if (this_chess == "炸弹") { this_c = 100; }
    if (this_chess == "地雷") { this_c = 101; }
    if (this_chess == "军旗") { this_c = 102; }

    let last_ = document.getElementById(last_area);
    let this_ = document.getElementById(this_area);

    // 清空原始位置
    last_.innerHTML = " ";
    last_.name = "none";
    document.getElementById(last_area + "-none").name = "none";


    // 比对棋子
    console.log(last_c);
    console.log(this_c);
    let flag_win = 0;
    if (last_c > this_c) {
        flag_win = 1;
    } else if (last_c == this_c) {
        flag_win = 0;
    } else {
        flag_win = -1;
    }
    // 炸弹
    if (last_c == 100) {
        if (this_c == 0) {
            flag_win = 1;
        } else {
            flag_win = 0;
        }
    }
    if (this_c == 100) {
        flag_win = 0;
    }
    // 地雷
    if (last_c == 1 && this_c == 101) {
        flag_win = 1;
    }
    if (this_c == 102) {
        flag_win = 2;
        flag.innerHTML = "夺旗";
        deleteCookie("play,0");
    }
    // 更新现在位置
    if (flag_win == 1) {
        this_.innerHTML = last_time.split(",")[1];
        this_.name = last_time.split(",")[2];
        document.getElementById(this_area + "-none").name = last_time.split(",")[2];
        flag.innerHTML = "胜利";
    } else if (flag_win == 0) {
        this_.innerHTML = " ";
        this_.name = "none";
        document.getElementById(this_area + "-none").name = "none";
        flag.innerHTML = "同归于尽";
    } else if (flag_win == -1) {
        // this_.innerHTML = last_time.split(",")[1];
        // document.getElementById(this_area + "-none").name = "none";
        flag.innerHTML = "失败";
    }

    deleteCookie("play,0");
}

function refront() {
    let char_list = ["A", "B", "C", "D", "E", "a", "b", "c", "d", "e"];
    let num_list = ["6", "5", "4", "3", "2", "1"];
    let display_chess = [];
    let none_chess = [];
    for (let i = 0; i < num_list.length; i++) {
        for (let j = 0; j < char_list.length; j++) {
            display_chess.push(document.getElementById(char_list[j] + num_list[i]));
            none_chess.push(document.getElementById(char_list[j] + num_list[i] + "-none"));
        }
    }

    console.log(display_chess);
    console.log(none_chess);

    for (let i = 0; i < display_chess.length; i++) {
        if (display_chess[i].style.display === 'none') {
            display_chess[i].style.display = 'inline';  // 显示文本1
            none_chess[i].style.display = 'none';   // 隐藏文本2
        } else {
            display_chess[i].style.display = 'none';   // 隐藏文本1
            none_chess[i].style.display = 'inline'; // 显示文本2
        }
    }
}

function refrontRed() {
    let char_list = ["A", "B", "C", "D", "E", "a", "b", "c", "d", "e"];
    let num_list = ["6", "5", "4", "3", "2", "1"];
    let display_chess = [];
    let none_chess = [];
    for (let i = 0; i < num_list.length; i++) {
        for (let j = 0; j < char_list.length; j++) {
            display_chess.push(document.getElementById(char_list[j] + num_list[i]));
            none_chess.push(document.getElementById(char_list[j] + num_list[i] + "-none"));
        }
    }

    for (let i = 0; i < display_chess.length; i++) {
        if (display_chess[i].name === 'red') {
            if (display_chess[i].style.display === 'none') {
                display_chess[i].style.display = 'inline';  // 显示文本1
                none_chess[i].style.display = 'none';   // 隐藏文本2
            } else {
                display_chess[i].style.display = 'none';   // 隐藏文本1
                none_chess[i].style.display = 'inline'; // 显示文本2
            }
        }
    }
}
function refrontBlack() {
    let char_list = ["A", "B", "C", "D", "E", "a", "b", "c", "d", "e"];
    let num_list = ["6", "5", "4", "3", "2", "1"];
    let display_chess = [];
    let none_chess = [];
    for (let i = 0; i < num_list.length; i++) {
        for (let j = 0; j < char_list.length; j++) {
            display_chess.push(document.getElementById(char_list[j] + num_list[i]));
            none_chess.push(document.getElementById(char_list[j] + num_list[i] + "-none"));
        }
    }

    for (let i = 0; i < display_chess.length; i++) {
        if (display_chess[i].name === 'black') {
            if (display_chess[i].style.display === 'none') {
                display_chess[i].style.display = 'inline';  // 显示文本1
                none_chess[i].style.display = 'none';   // 隐藏文本2
            } else {
                display_chess[i].style.display = 'none';   // 隐藏文本1
                none_chess[i].style.display = 'inline'; // 显示文本2
            }
        }
    }
}

var url = "http://127.0.0.1:4040/connect_test";
var httpRequest = new XMLHttpRequest();
httpRequest.open('POST', url, true);
httpRequest.setRequestHeader("Content-type", "application/json");
var obj = {
    "username": "mkii",
    "password": "1234"
};

httpRequest.send(JSON.stringify(obj));

// 响应后的回调函数
httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var json = httpRequest.responseText;
        console.log(json);
    }
};
