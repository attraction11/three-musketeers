function downloadXlsx(response, name) {
  // 这里res.result_content是返回的blob对象
  // const type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' // excel文件
  const blob = new Blob([response])
  console.log(blob)
  const downloadElement = document.createElement('a')
  const href = window.URL.createObjectURL(blob) // 创建下载的链接
  downloadElement.href = href
  console.log(href)
  downloadElement.download = name + '.xlsx' // 下载后文件名
  document.body.appendChild(downloadElement)
  downloadElement.click() // 点击下载
  document.body.removeChild(downloadElement) // 下载完成移除元素
  window.URL.revokeObjectURL(href) // 释放掉blob对象
}

module.exports = downloadXlsx;
