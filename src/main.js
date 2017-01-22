// import { getCurrentTabUrl, createDownloadUrl, handleFileName }  from './utils/index'
import lib from './utils'
// 样式
import './styles/main.css'

function renderStatus(statusText) {
  document.getElementById('app').textContent = statusText
}

// 当 dom 加载成功后执行
document.addEventListener('DOMContentLoaded', () => {
  lib.getCurrentTabUrl()
    .then(obj => {
      const {title, url} = obj
      renderStatus(`Performing create file for ${url} ...`)
      // 内容
      const content = `[${title}](${url})`
      // 先实现生成文件
      // 创建 a 标签
      const a = lib.createDownloadUrl(lib.handleFileName(title), content)
      // 将标题作为 a 链接的文字
      a.innerHTML = lib.handleFileName(title)
      // 将生成的 a 标签放入页面中
      const container = document.getElementById('app')
      container.innerHTML = ""
      container.appendChild(a)
    })
    .catch(err => {
      renderStatus(err)
    })
})