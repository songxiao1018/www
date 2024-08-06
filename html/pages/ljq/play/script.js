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


function playChess(area) {
    let log = getCookieValue("1,black")
    console.log(log);
    console.log(area);
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


    data_red = getCookieValue(id + ",red");
    data_black = getCookieValue(id + ",black");

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

    console.log(red_chess);
    console.log(black_chess);
    console.log(board_chess);

    for (let i = 0; i < board_chess.length; i++) {
        board_chess[i].innerHTML = chess_list[i];
    }

}