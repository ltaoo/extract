const fetch = require('isomorphic-fetch')

const body = {
	path: '/test.md',
	content_uri: 'static/others/empty.txt'
}

fetch('https://www.jianguoyun.com/d/ajax/fileops/create?sndId=c6ddca&sndMagic=967a0843a935fd5', {
	method: 'POST',
	body: JSON.stringify(body)
})
	.then(res => res.json())
	.then(json => {
		console.log(json)
	})
	.catch(err => {
		console.log(err)
	})