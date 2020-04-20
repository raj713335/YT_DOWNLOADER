

function ytView() {
var yt_video_url = document.getElementById("yt-video-url").value;
console.log(yt_video_url);
var id = yt_video_url.split("=");
console.log(id[1]);
var embedUrl = "https://www.youtube.com/embed/"+id[1];
console.log(embedUrl);
document.getElementById("yt-video").innerHTML = "<iframe src="+embedUrl+" frameborder='0' allowfullscreen></iframe>";
document.getElementById("videoID").innerHTML = id[1];
document.getElementById("videoURL").innerHTML = "<a href="+yt_video_url+">"+yt_video_url+"</a>";
eel.generate_qr(embedUrl)(setImage)
}

function ytPlayListView() {
var yt_video_url = document.getElementById("yt-video-url").value;
console.log(yt_video_url);
var list = yt_video_url.split("&list=");
console.log(list[1]);
var embedUrl = "https://www.youtube.com/embed/videoseries?list="+list[1];
console.log(embedUrl);
document.getElementById("yt-video").innerHTML = "<iframe src="+embedUrl+" frameborder='0' allowfullscreen></iframe>";
		document.getElementById("PlayListID").innerHTML = list[1];
document.getElementById("PlayListURL").innerHTML = "<a href="+yt_video_url+">"+yt_video_url+"</a>";
}
