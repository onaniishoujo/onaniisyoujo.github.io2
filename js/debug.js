// 递归遍历整个页面，查找包含 JSON 数据的元素并输出到控制台
function findAllJSONElements(element) {
    if (element.childNodes.length > 0) {
        for (let i = 0; i < element.childNodes.length; i++) {
            findAllJSONElements(element.childNodes[i]);
        }
    } else {
        if (element.nodeType === Node.ELEMENT_NODE) {
            try {
                const jsonContent = JSON.parse(element.textContent);
                console.log(jsonContent);
            } catch (error) {
                // 如果当前元素的文本内容不是合法的 JSON 格式，则捕获异常并继续遍历
            }
        }
    }
}

// 从整个文档的根元素开始查找
findAllJSONElements(document.documentElement);
