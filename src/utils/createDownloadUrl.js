export default function createDownloadUrl(fileName, content) {
  const a = document.createElement('a')
  const blob = new Blob([content])
  // var evt = document.createEvent("MouseEvents");
  // evt.initEvent("click", false, false);//initEvent 不加后两个参数在FF下会报错, 感谢 Barret Lee 的反馈
  a.download = fileName
  a.href = URL.createObjectURL(blob)
  a.className = "download__source"
  a.innerHTML = '点击下载或右键另存为'
  // aLink.dispatchEvent(evt);
  // var status = document.getElementById('status');
  // status.appendChild(aLink);
  return a
}