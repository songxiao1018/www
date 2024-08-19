import random


def find_min_diff_ribbons(lists, num):
    result = []
    line_len_list = []
    for k in range(num):
        result.append([])
        line_len_list.append(0)

    for now_list in lists:
        min_line = min(line_len_list)
        min_num = line_len_list.index(min_line)
        result[min_num].append(now_list)
        line_len_list[min_num] += now_list
        flag = True

    return result


random_numbers = [random.randint(0, 100) for _ in range(10)]
print(random_numbers)

arrangement = find_min_diff_ribbons(random_numbers, 4)

for i in range(arrangement.__len__()):
    print(f"第{i + 1}行：{arrangement[i]}, 总长度：{sum(arrangement[i])}")
