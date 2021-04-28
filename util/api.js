const baseUrl = ''
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: base + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				if (!res.status) {
					return 'false'
				}
				resolve(res)
			},
			fail: (err) => {
				console.log('请求接口失败')
				reject(err)
			}
		})
	})

}
