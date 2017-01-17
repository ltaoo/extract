// const fetch = require('isomorphic-fetch')
const request = require('request')

const body = {
	path: '/test.md',
	content_uri: '/static/others/empty.txt'
}

const options = {
	url: 'https://www.jianguoyun.com/d/ajax/fileops/create?sndId=c6ddca&sndMagic=967a0843a935fd5', 
	headers: {
		"Accept": "*/*",
		"Accept-Encoding": "gzip, deflate, sdch, br",
		"Accept-Language": 'zh-CN,zh;q=0.8',
		"Connection": "keep-alive",
		"Content-Type": "application/x-www-form-urlencoded;charset-UTF-8",
		"Cookie": "umn=litaowork%40aliyun.com; ta=mYUMbTzZnMTPwwCnUECQFcZFU5G4r8eqTiOBG6uzclw%3D; warningShown=true; tipShown=true",
		"User-Agent": 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
		"Host": "www.jianguoyun.com",
		"Origin": "https://www.jianguoyun.com",
		"Referer": "https://www.jianguoyun.com/",
		"X-Requested-With": "XMLHttpRequest"
	},
	body: JSON.stringify(body)
}

// request.cookie('umn=litaowork%40aliyun.com')

request(options, (err, res, body) => {
	if(err) {
		console.log(err)
		return
	}

	console.log(res)
})
