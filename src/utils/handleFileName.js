export default function handleFileName(title) {
	// 文件名不能包含这些字符 \/：*？“<>|
	const reg = /[\\\/\*\?\|\<\>\:]+/g
	// 将不能包含的字符替换为 _
	title = title.replace(reg, '_')
	return title += '.md'
}