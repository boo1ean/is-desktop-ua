module.exports = function isDesktop (ua) {
	return !!(((ua.match(/Windows (NT|XP|ME|9)/) && !ua.match(/Phone/i)) && !ua.match(/Bot|Spider|ia_archiver|NewsGator/i) || ua.match(/Win( ?9|NT)/i))
		|| (ua.match(/Macintosh|PowerPC/i) && !ua.match(/Silk/i))
		|| (ua.match(/Linux/i) && ua.match(/X11/i) && !ua.match(/Charlotte/i))
		|| (ua.match(/CrOS/))
        || (ua.match(/Solaris|SunOS|BSD/i)));
}
