import os


def main():
    for i in os.listdir('static'):
        new_name = i.split(" ")[0]
        print(i)
        if "-" in i:
            os.rename("static/"+i, "static/"+new_name)
        else:
            print("file already changed")


if __name__ == "__main__":
    main()
