import random
import heapq


def find_min_diff_ribbons(lists, num):
    result = [[] for _ in range(num)]
    line_len_list = [0] * num

    for now_list in lists:
        min_line_index = heapq.heappop(range(num))  # 获取最短的行的索引
        result[min_line_index].append(now_list)
        line_len_list[min_line_index] += now_list
        heapq.heappush(range(num), min_line_index)  # 重新加入堆中

    return result


random_numbers = [random.randint(0, 100) for _ in range(10)]
print(random_numbers)

arrangement = find_min_diff_ribbons(random_numbers, 4)

for i, arrangement_row in enumerate(arrangement, 1):
    print(f"第{i}行：{arrangement_row}, 总长度：{sum(arrangement_row)}")
