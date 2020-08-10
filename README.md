# YT_DOWNLOADER
A CROSS PLATFORM DESKTOP APPLICATION TO DOWNLOAD YOUTUBE VIDEOS AND PLAYLIST .


# YT_DOWNLOADER

The simplest and fastest way to create applications with a Web UI and a Python backend.
![](YT_DOWNLOADER.png)



# YT_DOWNLOADER WORKING

<p align="center">
    <img src="DEMO/1.gif", width="1000">
    <br>
    <sup>The simplest and fastest way to create applications with a Web UI and a Python backend</sup>
</p>


## Getting Started
- Clone the repo and cd into the directory
```sh
$ git clone https://github.com/raj713335/YT_DOWNLOAD.git
$ cd YT_DOWNLOADER
```

- Install Eel, pytube3, , pyinstaller and easytkinter

```sh
$ pip install eel pytube3 pyinstaller easytkinter
```

- Run the app

```sh
$ python YT.py
```

## Packaging the app
You can pass any valid `pyinstaller` flag in the following command to further customize the way your app is built.
```sh
$ python -m eel YT.py web --noconsole --onefile --icon=barcode.icns
```

