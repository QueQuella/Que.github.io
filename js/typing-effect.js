document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('typing-name');
    const titleElement = document.getElementById('typing-title');
    
    // 定义要循环的文本
    const nameText = "Quella";
    const titleText = "Portfolio";
    
    // 打字速度控制（毫秒）
    const typeSpeed = 150;
    const eraseSpeed = 100;
    const pauseTime = 2000; // 打完字后暂停的时间
    
    let nameIndex = 0;
    let titleIndex = 0;
    let isDeleting = false;
    let isTypingTitle = false;

    function typeWriter() {
        // 先处理名字
        if (!isTypingTitle) {
            if (!isDeleting && nameIndex < nameText.length) {
                // 打字阶段
                nameElement.innerHTML = nameText.substring(0, nameIndex + 1);
                nameIndex++;
                setTimeout(typeWriter, typeSpeed);
            } else if (!isDeleting && nameIndex === nameText.length) {
                // 名字打完，开始打标题
                isTypingTitle = true;
                setTimeout(typeWriter, pauseTime);
            } else if (isDeleting && nameIndex > 0) {
                // 删除阶段
                nameElement.innerHTML = nameText.substring(0, nameIndex - 1);
                nameIndex--;
                setTimeout(typeWriter, eraseSpeed);
            } else if (isDeleting && nameIndex === 0) {
                // 名字删完，重新开始打字
                isDeleting = false;
                setTimeout(typeWriter, typeSpeed);
            }
        } else {
            // 处理标题
            if (!isDeleting && titleIndex < titleText.length) {
                titleElement.innerHTML = titleText.substring(0, titleIndex + 1);
                titleIndex++;
                setTimeout(typeWriter, typeSpeed);
            } else if (!isDeleting && titleIndex === titleText.length) {
                // 标题打完，暂停后开始删除
                setTimeout(() => {
                    isDeleting = true;
                    isTypingTitle = false;
                    setTimeout(typeWriter, eraseSpeed);
                }, pauseTime);
            } else if (isDeleting && titleIndex > 0) {
                titleElement.innerHTML = titleText.substring(0, titleIndex - 1);
                titleIndex--;
                setTimeout(typeWriter, eraseSpeed);
            } else if (isDeleting && titleIndex === 0) {
                // 标题删完，重新开始打名字
                isDeleting = false;
                setTimeout(typeWriter, typeSpeed);
            }
        }
    }

    // 启动打字机效果
    typeWriter();
});

