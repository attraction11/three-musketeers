function downloadZip(response, name) {
  const type = 'application/zip' // ZIP文件
  const blob = new Blob([response], { type: type })
  const downloadElement = document.createElement('a')
  const href = window.URL.createObjectURL(blob)
  // 后台再header中传文件名
  // const name = decodeURI(response.headers['content-disposition'].split('=')[1])
  downloadElement.href = href
  downloadElement.download = name
  document.body.appendChild(downloadElement)
  downloadElement.click()
  document.body.removeChild(downloadElement) // 下载完成移除元素
  window.URL.revokeObjectURL(href) // 释放掉blob对象
}

module.exports = downloadZip;
