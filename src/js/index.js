//JS Cookie    
function createCookie(c, d) {    
        document.cookie = c + "=" + d + "; path=/"
}

function readCookie(b) {
    var e = b + "=";
    var a = document.cookie.split(";");
    for (var d = 0; d < a.length; d++) {
        var f = a[d];
        while (f.charAt(0) == " ") {
            f = f.substring(1, f.length)
        }
        if (f.indexOf(e) == 0) {
            return f.substring(e.length, f.length)
        }
    }
    return null
}

(function(a) {
    a(document).ready(function() {
        var c = a("#text-finder"),       
            d = a(".post-body"),
            g = a("html, body");
     
      
        var b = readCookie("font_size");
        if (b != "" && b != null) {
            a(".post-body").css("font-size", b + "px")
        }
        a(".zoom-text").click(function() {
            var j = a(".post-body").css("font-size");
            j = j.replace("px", "");
            var h = a(this).attr("class");
            var i = Number(j);
            if (h.indexOf("zoom-in-text") != -1) {
                i++
            } else {
                i -= 1
            }
            createCookie("font_size", i);
            a(".post-body").css("font-size", i + "px");
            return false
        })
    })
})(jQuery);