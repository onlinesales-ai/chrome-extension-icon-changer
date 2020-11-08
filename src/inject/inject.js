chrome.extension.sendMessage({}, function(response) {
    var iconMap = {
        'mail.google.com': {
            'icons':{
                'ico':'https://res.cloudinary.com/onlinesales/image/upload/v1604748755/gmail-icon_oum18t.ico',
                '32x32':'https://res.cloudinary.com/onlinesales/image/upload/v1604748755/gmail-icon_oum18t.ico',
                '64x64':'https://res.cloudinary.com/onlinesales/image/upload/v1604748755/gmail-icon_oum18t.ico',
                '36x36':'https://res.cloudinary.com/onlinesales/image/upload/v1604748755/gmail-icon_oum18t.ico',
                '48x48':'https://res.cloudinary.com/onlinesales/image/upload/v1604748755/gmail-icon_oum18t.ico',
                '96x96':'https://res.cloudinary.com/onlinesales/image/upload/v1604748755/gmail-icon_oum18t.ico',
                '512x512':'https://res.cloudinary.com/onlinesales/image/upload/v1604748755/gmail-icon_oum18t.ico'
            }
        },
        'calendar.google.com': {
            'icons':{
                'ico':'https://res.cloudinary.com/onlinesales/image/upload/favicon_upwuk4.ico',
                '32x32':'https://res.cloudinary.com/onlinesales/image/upload/favicon_upwuk4.ico',
                '64x64':'https://res.cloudinary.com/onlinesales/image/upload/favicon_upwuk4.ico',
                '36x36':'https://res.cloudinary.com/onlinesales/image/upload/favicon_upwuk4.ico',
                '48x48':'https://res.cloudinary.com/onlinesales/image/upload/favicon_upwuk4.ico',
                '96x96':'https://res.cloudinary.com/onlinesales/image/upload/favicon_upwuk4.ico',
                '512x512':'https://res.cloudinary.com/onlinesales/image/upload/favicon_upwuk4.ico'
            }
        },
        'meet.google.com': {
            'icons': {
                '32x32': 'https://res.cloudinary.com/onlinesales/image/upload/favicon-32x32_i4ryec.png',
                '36x36': 'https://res.cloudinary.com/onlinesales/image/upload/favicon-32x32_i4ryec.png',
                '64x64': 'https://res.cloudinary.com/onlinesales/image/upload/favicon-32x32_i4ryec.png',
                '48x48': 'https://res.cloudinary.com/onlinesales/image/upload/favicon-32x32_i4ryec.png',
                '96x96': 'https://res.cloudinary.com/onlinesales/image/upload/favicon-32x32_i4ryec.png',
                '512x512': 'https://res.cloudinary.com/onlinesales/image/upload/android-chrome-512x512_qztxwi.png',
                'ico':'https://res.cloudinary.com/onlinesales/image/upload/favicon_aegpqu.ico'
            }
        }
    }
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            if (!!iconMap[document.location.host]) {
                var links = document.querySelectorAll("link[rel*='icon']") || []
                if (links.length == 0) {
                    links = [document.createElement('link')]
                }
                links = Array.from(links)
                for(var i = 0; i < links.length; i++) {
                    var link = links[i]
                    link.type = 'image/x-icon';
                    link.rel = 'shortcut icon';
                    if (link.sizes && link.sizes.value) {
                        link.href = iconMap[document.location.host]['icons'][link.sizes.value] || iconMap[document.location.host]['icons']['ico'];
                    } else {
                        link.href = iconMap[document.location.host]['icons']['ico'];
                    }
                    document.getElementsByTagName('head')[0].appendChild(link);
                }
            }
	}
    }, 10);
});
