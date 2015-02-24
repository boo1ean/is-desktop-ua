require('should');
var isDesktop = require('./');

var desktopUas = [
	'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36',
	'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2226.0 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.4; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2225.0 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2225.0 Safari/537.36',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2224.3 Safari/537.36',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36',
	'Mozilla/5.0 (Windows NT 4.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.67 Safari/537.36',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.67 Safari/537.36',
	'Mozilla/5.0 (X11; OpenBSD i386) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1944.0 Safari/537.36',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.3319.102 Safari/537.36',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.2309.372 Safari/537.36',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.2117.157 Safari/537.36',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1866.237 Safari/537.36',
	'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/4E423F',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36 Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10',
	'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.517 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1667.0 Safari/537.36',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.16 Safari/537.36',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/536.5 (KHTML, like Gecko) YaBrowser/1.0.1084.5402 Chrome/19.0.1084.5402 Safari/536.5',
	'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/536.5 (KHTML, like Gecko) YaBrowser/1.0.1084.5402 Chrome/19.0.1084.5402 Safari/536.5',
	'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/536.5 (KHTML, like Gecko) YaBrowser/1.0.1084.5402 Chrome/19.0.1084.5402 Safari/536.5',
	'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.12785 YaBrowser/13.12.1599.12785 Safari/537.36',
	'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 YaBrowser/14.7.1916.15705 Safari/537.36',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3) Gecko/20090305 Firefox/3.1b3 GTB5',
	'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; ko; rv:1.9.1b2) Gecko/20081201 Firefox/3.1b2',
	'Mozilla/5.0 (X11; U; SunOS sun4u; en-US; rv:1.9b5) Gecko/2008032620 Firefox/3.0b5',
	'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.8.1.12) Gecko/20080214 Firefox/2.0.0.12',
	'Mozilla/5.0 (Windows; U; Windows NT 5.1; cs; rv:1.9.0.8) Gecko/2009032609 Firefox/3.0.8',
	'Mozilla/5.0 (X11; U; OpenBSD i386; en-US; rv:1.8.0.5) Gecko/20060819 Firefox/1.5.0.5',
	'Mozilla/5.0 (Windows; U; Windows NT 5.0; es-ES; rv:1.8.0.3) Gecko/20060426 Firefox/1.5.0.3',
	'Mozilla/5.0 (Windows; U; WinNT4.0; en-US; rv:1.7.9) Gecko/20050711 Firefox/1.0.5',
	'Mozilla/5.0 (Windows; Windows NT 6.1; rv:2.0b2) Gecko/20100720 Firefox/4.0b2',
	'Mozilla/5.0 (X11; Linux x86_64; rv:2.0b4) Gecko/20100818 Firefox/4.0b4',
	'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2) Gecko/20100308 Ubuntu/10.04 (lucid) Firefox/3.6 GTB7.1',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.0b7) Gecko/20101111 Firefox/4.0b7',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:2.0b8pre) Gecko/20101114 Firefox/4.0b8pre',
	'Mozilla/5.0 (X11; Linux x86_64; rv:2.0b9pre) Gecko/20110111 Firefox/4.0b9pre',
	'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:2.0b9pre) Gecko/20101228 Firefox/4.0b9pre',
	'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:2.2a1pre) Gecko/20110324 Firefox/4.2a1pre',
	'Mozilla/5.0 (X11; U; Linux amd64; rv:5.0) Gecko/20100101 Firefox/5.0 (Debian)',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:6.0a2) Gecko/20110613 Firefox/6.0a2',
	'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:12.0) Gecko/20100101 Firefox/12.0',
	'Mozilla/5.0 (Windows NT 6.1; rv:15.0) Gecko/20120716 Firefox/15.0a2',
	'Mozilla/5.0 (X11; Ubuntu; Linux armv7l; rv:17.0) Gecko/20100101 Firefox/17.0',
	'Mozilla/5.0 (Windows NT 6.1; rv:21.0) Gecko/20130328 Firefox/21.0',
	'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:22.0) Gecko/20130328 Firefox/22.0',
	'Mozilla/5.0 (Windows NT 5.1; rv:25.0) Gecko/20100101 Firefox/25.0',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:25.0) Gecko/20100101 Firefox/25.0',
	'Mozilla/5.0 (Windows NT 6.1; rv:28.0) Gecko/20100101 Firefox/28.0',
	'Mozilla/5.0 (X11; Linux i686; rv:30.0) Gecko/20100101 Firefox/30.0',
	'Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0',
	'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:33.0) Gecko/20100101 Firefox/33.0',
];

var nonDesktopUas = [
	'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
	'Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
	'Mozilla/5.0 (Linux; U; Android 2.3; en-us) AppleWebKit/999+ (KHTML, like Gecko) Safari/999.9',
	'Mozilla/5.0 (Linux; U; Android 2.3.5; zh-cn; HTC_IncredibleS_S710e Build/GRJ90) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.4; fr-fr; HTC Desire Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; T-Mobile myTouch 3G Slide Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.3; zh-tw; HTC_Pyramid Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.3; zh-tw; HTC_Pyramid Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari',
	'Mozilla/5.0 (Linux; U; Android 2.3.3; zh-tw; HTC Pyramid Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.3; ko-kr; LG-LU3000 Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; HTC_DesireS_S510e Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.3; en-us; HTC_DesireS_S510e Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile',
	'Mozilla/5.0 (Linux; U; Android 2.3.3; de-de; HTC Desire Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.3.3; de-ch; HTC Desire Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.2; fr-lu; HTC Legend Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.2; en-sa; HTC_DesireHD_A9191 Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.2.1; fr-fr; HTC_DesireZ_A7272 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.2.1; en-gb; HTC_DesireZ_A7272 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.2.1; en-ca; LG-P505R Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.2.1; de-de; HTC_Wildfire_A3333 Build/FRG83D) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
	'Mozilla/5.0 (Linux; U; Android 2.1-update1; es-mx; SonyEricssonE10a Build/2.0.A.0.504) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',
	'Mozilla/5.0 (Linux; U; Android 1.6; ar-us; SonyEricssonX10i Build/R2BA026) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
	'Mozilla/5.0 (iPad; U; CPU OS 4_2_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',
	'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; es-es) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B360 Safari/531.21.10',
	'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7',
	'Mozilla/5.0 (iPad; U; CPU OS 4_3_3 like Mac OS X; de-de) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5',
	'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; de-de) AppleWebKit/533.17.9 (KHTML, like Gecko)',
	'NokiaC3-00/5.0 (04.60) Profile/MIDP-2.1 Configuration/CLDC-1.1 Mozilla/5.0 AppleWebKit/420+ (KHTML, like Gecko) Safari/420+',
	'Mozilla/5.0 (iPad; U; CPU OS 4_3_5 like Mac OS X; de-de) AppleWebKit/533.17.9 (KHTML, like Gecko)',
	'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10A5376e',
	'Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53',
	'MobileSafari/9537.53 CFNetwork/672.0.8 Darwin/14.0.0',
	'Mozilla/5.0 (Linux; U; Android 1.5; de-de; HTC Magic Build/CRB17) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1',
	'Mozilla/5.0 (Linux; U; Android 2.1-update1; en-au; HTC_Desire_A8183 V1.16.841.1 Build/ERE27) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',
	'Mozilla/5.0 (Linux; U; Android 4.2; en-us; Nexus 10 Build/JVP15I) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30',
];

describe('Desktop detector', function () {
	it('Should return true for desktop useragents', function () {
		desktopUas.forEach(function (ua) {
			isDesktop(ua).should.be.ok;
		});
	});

	it('Should return false for non-desktop useragents', function () {
		nonDesktopUas.forEach(function (ua) {
			isDesktop(ua).should.not.be.ok;
		});
	});
});