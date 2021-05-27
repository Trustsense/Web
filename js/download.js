$(".DownloadSnxw").click(
    function(e){
        var a = document.createElement('a');
        a.href = "https://github.com/SxnwDev/Exploit/raw/main/Snxw%20Boostrapper.exe";
        a.download = "download";
        a.click();
    }
);
$(".DownloadSnxw2").click(
    function(e){
        var a = document.createElement('a');
        var b = document.createElement('b');
        a.href = "https://github.com/SxnwDev/Exploit/raw/main/Snxw%20Boostrapper.exe";
        b.href = "https://snxw.ga/download";
        a.download = "download";
        a.click();
        b.click();
    }
);
