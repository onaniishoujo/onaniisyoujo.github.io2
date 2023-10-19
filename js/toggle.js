function toggleCSS() {
      var linkElement = document.getElementById("custom-css");
      if (linkElement.disabled) {
        linkElement.disabled = false; // 启用CSS文件
      } else {
        linkElement.disabled = true; // 禁用CSS文件
      }
    }