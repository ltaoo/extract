$(function() {
	// 当页面加载完成后
	var body = {
		path: '/test.md',
		content_uri: 'static/others/empty.txt'
	};
	$.ajax({
		type: "POST",
		url: 'https://www.jianguoyun.com/d/ajax/fileops/create?sndId=c6ddca&sndMagic=967a0843a935fd5',
		body: JSON.stringify(body),
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		beforeSend: function (xhr) {
			var cookie = 'umn=litaowork%40aliyun.com;ta=mYUMbTzZnMTPwwCnUECQFcZFU5G4r8eqTiOBG6uzclw%3D;warningShown=true;tipShown=true';
			console.info('adding cookie: ' + cookie)
			xhr.setRequestHeader('Cookie', cookie)
		},
		success: function (data) {
			console.log(data)
		},
		error: function(err) {
			console.log(err)
		}
	})
})