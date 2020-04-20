import eel


print("Hello")

eel.init('web')


@eel.expose
def dummy(dummy_param):
    print("I got a parameter: ", dummy_param)
    return "string_value", 1, 1.2, True, [1, 2, 3, 4], {"name": "eel"}


@eel.expose
def generate_qr(data):
    print(data)
    from pytube import YouTube
    from tkinter import filedialog

    # filename = filedialog.asksaveasfilename(initialdir="/", title="Select File",
    #                                       filetypes=(("Folder",""),
    #                                       ("video files", "*.mp4"), ("Image files", "*.png"), ("Image files", "*.jpg"),("all files", "*.*")))
    #
    #
    # print(filename)


    # root.filename = filedialog.asksaveasfilename(initialdir="/", title="Select file",
    #                                              filetypes=(("video files", "*.mp4"), ("all files", "*.*")))
    # print(root.filename)
    import os

    filename=(os.getcwd())
    filename+='/DOWNLOADS'

    print(filename)

    YouTube(data).streams.get_highest_resolution().download(filename)

    print("SUCESS")


eel.start('about.html', size=(1000, 600))
