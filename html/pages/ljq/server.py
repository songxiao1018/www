# python
from flask import Flask, request, jsonify
import sqlite3
import time
import random
from contextlib import closing

app = Flask(__name__)


def server_init(db_path='server.db'):
    """
    Initialize the database and create the 'users' table if it does not exist.

    :param db_path: Path to the SQLite database file.
    """
    # Use a context manager to ensure the connection is properly closed even if an error occurs
    with closing(sqlite3.connect(db_path)) as root_conn:
        # Use the same context manager for the cursor to simplify the code
        with closing(root_conn.cursor()) as root_cursor:
            # Check if the table exists before creating it to avoid raising an exception
            root_cursor.execute(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='users';")
            table_exists = root_cursor.fetchone()
            if not table_exists:
                create_users_table_query = '''
                    CREATE TABLE IF NOT EXISTS users
                    (
                        id INTEGER PRIMARY KEY,
                        username TEXT NOT NULL, 
                        password TEXT NOT NULL, 
                        email TEXT
                    )
                '''
                root_cursor.execute(create_users_table_query)
                # Commit the transaction only if a change was made (table created)
                root_conn.commit()


@app.route('/connect_test', methods=['POST'])
def connect_test():
    # 打印接收数据
    print(request.json)
    return jsonify({"status": "连接成功！"}), 200


if __name__ == '__main__':
    server_init()
    app.run(host='0.0.0.0', debug=True, port="4000")  # 开启调试模式，实际部署时请关闭
