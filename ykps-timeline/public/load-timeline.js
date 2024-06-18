document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("content-container"); // 滚动容器
    let isLoading = false; // 是否正在加载数据
    let lastScrollTop = 0; // 上次滚动位置
    let lastDataId = null; // 最后加载的数据 ID

    console.log(container);
    console.log("start running script");

    // 监听滚动事件
    container.addEventListener("scroll", () => {
        const scrollTop = container.scrollTop;
        // 滚动距离超过一定阈值且没有正在加载数据时触发请求
        if (scrollTop > lastScrollTop + 100 && !isLoading) {
            fetchData();
        }
        lastScrollTop = scrollTop;
    });

    // 获取数据函数
    function fetchData() {
        isLoading = true;
        // 使用 AJAX 请求数据
        fetch("/api/data?lastDataId=" + lastDataId) // 替换为您的 API 路径
            .then((response) => response.json())
            .then((data) => {
                // 处理数据
                appendData(data);
                lastDataId = data.lastDataId; // 更新最后加载的数据 ID
                isLoading = false;
            })
            .catch((error) => {
                console.error("获取数据失败:", error);
                isLoading = false;
            });
    }

    // 追加数据函数
    function appendData(data) {
        // 将新数据追加到容器中
        data.forEach((item) => {
            const element = document.createElement("div");
            element.innerHTML = `
        <p>${item.content}</p>
      `;
            container.appendChild(element);
        });
    }
});
