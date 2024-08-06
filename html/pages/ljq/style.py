# .前线3 {
#     grid-area: 前线3;
#     background: #3498db;
#     background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
#     background-image: -moz-linear-gradient(top, #3498db, #2980b9);
#     background-image: -ms-linear-gradient(top, #3498db, #2980b9);
#     background-image: -o-linear-gradient(top, #3498db, #2980b9);
#     background-image: linear-gradient(to bottom, #3498db, #2980b9);
#     -webkit-border-radius: 20;
#     -moz-border-radius: 20;
#     border-radius: 20px;
#     font-family: Arial;
#     color: #ffffff;
#     font-size: 20px;
#     padding: 17px 30px 40px 30px;
#     text-decoration: none;
# }
import random

grid_list = ["OneA", "OneB", "OneC", "OneD", "OneE",
             "TwoA", "TwoB", "TwoC", "TwoD", "TwoE",
             "ThreeA", "ThreeB", "ThreeC", "ThreeD", "ThreeE",
             "FourA", "FourB", "FourC", "FourD", "FourE",
             "FiveA", "FiveB", "FiveC", "FiveD", "FiveE",
             "SixA", "SixB", "SixC", "SixD", "SixE",
             "FrontA", "FrontC", "FrontE", "MountainB", "MountainD",
             "One", "Two", "Three", "Four", "Five", "Six", "Front",
             "A", "B", "C", "D", "E"]

for gird in grid_list:
    # 生成10个16进制的随机颜色代码
    color = [random.randint(0, 0xFFFFFF) for i in range(12)]
    # print(color)

    # print(f"    background: #{color[0]:06X};")
    print(f".{gird} {{\n"
          f"    grid-area: {gird};\n"
          f"    background: #{color[10]:06X};\n"
          f"    background-image: -webkit-linear-gradient(top, #{color[0]:06X}, #{color[1]:06X});\n"
          f"    background-image: -moz-linear-gradient(top, #{color[2]:06X}, #{color[3]:06X});\n"
          f"    background-image: -ms-linear-gradient(top, #{color[4]:06X}, #{color[5]:06X});\n"
          f"    background-image: -o-linear-gradient(top, #{color[6]:06X}, #{color[7]:06X});\n"
          f"    background-image: linear-gradient(to bottom, #{color[8]:06X}, #{color[9]:06X});\n"
          f"    -webkit-border-radius: 20;\n"
          f"    -moz-border-radius: 20;\n"
          f"    border-radius: 20px;\n"
          f"    font-family: Arial;\n"
          f"    color: #ffffff;\n"
          f"    font-size: 20px;\n"
          f"    padding: 17px 30px 40px 30px;\n"
          f"    text-decoration: none;\n"
          f"}}\n")
