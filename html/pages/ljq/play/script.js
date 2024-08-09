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

    // console.log(red_chess);
    // console.log(black_chess);
    // console.log(board_chess);

    for (let i = 0; i < board_chess.length; i++) {
        board_chess[i].innerHTML = chess_list[i];
    }

}

function playChess(area) {
    // console.log(area);

    let flag = document.getElementById("flag");

    let arer_lbe = document.getElementById(area);

    // console.log(arer_lbe.innerHTML);

    let last_time = getCookieValue("play,0")

    if (last_time === "") {
        createCookie("play,0", area + "," + arer_lbe.innerHTML);
        flag.innerHTML = "已选棋";
        console.log("已选棋");
        return;
    }

    console.log("开始比对！");
    flag.innerHTML = "已选棋";
    console.log(last_time);

    let last_area = last_time.split(",")[0];
    let last_chess = last_time.split(",")[1];
    let this_area = area;
    let this_chess = arer_lbe.innerHTML;

    if (last_chess == "----") { last_chess = 0; }
    if (last_chess == "司令") { last_chess = 9; }
    if (last_chess == "军长") { last_chess = 8; }
    if (last_chess == "师长") { last_chess = 7; }
    if (last_chess == "旅长") { last_chess = 6; }
    if (last_chess == "团长") { last_chess = 5; }
    if (last_chess == "营长") { last_chess = 4; }
    if (last_chess == "连长") { last_chess = 3; }
    if (last_chess == "排长") { last_chess = 2; }
    if (last_chess == "工兵") { last_chess = 1; }
    if (this_chess == "炸弹") { this_chess = 100; }
    if (this_chess == "地雷") { this_chess = 101; }
    if (this_chess == "军旗") { this_chess = 102; }

    if (this_chess == "----") { this_chess = 0; }
    if (this_chess == "司令") { this_chess = 9; }
    if (this_chess == "军长") { this_chess = 8; }
    if (this_chess == "师长") { this_chess = 7; }
    if (this_chess == "旅长") { this_chess = 6; }
    if (this_chess == "团长") { this_chess = 5; }
    if (this_chess == "营长") { this_chess = 4; }
    if (this_chess == "连长") { this_chess = 3; }
    if (this_chess == "排长") { this_chess = 2; }
    if (this_chess == "工兵") { this_chess = 1; }
    if (this_chess == "炸弹") { this_chess = 100; }
    if (this_chess == "地雷") { this_chess = 101; }
    if (this_chess == "军旗") { this_chess = 102; }

    let last_ = document.getElementById(last_area);
    let this_ = document.getElementById(this_area);

    // 清空原始位置
    last_.innerHTML = "----";
    // 比对棋子
    let flag_win = 0;
    if (last_chess > this_chess) {
        flag_win = 1;
    }else if (last_chess == this_chess) {
        flag_win = 0;
    }else {
        flag_win = -1;
    }
    if (last_chess == 100 && this_chess == 101) {
        flag_win = 0;
    }
    if (last_chess == 1 && this_chess == 101) {
        flag_win = 1;
    }
    if (this_chess == 102) {
        flag_win = 2;
        flag.innerHTML = "夺旗"
        deleteCookie("play,0");
    }
    // 更新现在位置
    if (flag_win == 1) {
        this_.innerHTML = last_time.split(",")[1];
        flag.innerHTML = "胜利";
    } else if (flag_win == 0) {
        this_.innerHTML = "----";
        flag.innerHTML = "同归于尽";
    }else if (flag_win == -1) {
        // this_.innerHTML = last_time.split(",")[1];
        flag.innerHTML = "失败";
    }

    deleteCookie("play,0");
}
