function queryStringify(obj) {
    let str = ''
    for (let k in obj) str += `${k}=${obj[k]}&`
    return str.slice(0, -1)
}

//封装ajax
function ajax(options) {
    let defaultoptions = {
        url: "",
        method: "GET",
        async: true,
        data: {},
        headers:{},
        success: function () { },
        error: function () { }
    }
    let { url, method, async, data, headers, success, error } = {
        ...defaultoptions,
        ...options
    }

    if (typeof data === 'object' && headers["content-type"]?.indexOf("json") > -1) {
        data = JSON.stringify(data)
    }else {
        data = queryStringify(data)
    }
    //如果是get，且有参数，直接组装url信息
    if (/^get$/i.test(method) && data) url += '?' + data

    //发送请求
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, async)
    xhr.onload = function () {
        if (!/^2\d{2}$/.test(xhr.status)) {
            error(`错误状态码:${xhr.status}`)
            return
        }
        try {
            let result = JSON.parse(xhr.responseText)
            success(result)
        } catch (err) {
            error(`解析失败,因为后端返回结果不是JSON字符串`)
        }
    }

    //设置请求头内信息
    for (let k in headers) xhr.setRequestHeader(k, headers[k])
    if (/^get$/i.test(method)) {
        xhr.send()
    } else {
        xhr.send(data)
    }
}


//Promise封装ajax
function pajax(options){
    return new Promise((resolve,reject)=>{
        ajax({
            ...options,
            success(res){
                resolve(res)
            },
            error(err){
                reject(err)
            }
        })
    })
}

// pajax().then(function(){}).catch(err=>{})

export{
    ajax,
    pajax
}