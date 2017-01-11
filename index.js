const path = require('path')
const express = require('express')

const app = express()
// 设置当前目录为静态资源目录
app.use(express.static('./'))

app.listen(3000, (err, res) => {
	if(err) {
		console.log(err)
		return
	}

	console.log("Server is listen at port 3000")
})