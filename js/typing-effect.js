// js/typing-effect.js - 循环打字机效果
document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.getElementById('main-title');
    const fullText = "Quella Portfolio";
    
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    let deletingSpeed = 100;
    let pauseTime = 2000;

    function typeWriter() {
        const currentText = fullText.substring(0, charIndex);
        
        if (!isDeleting && charIndex < fullText.length) {
            // 打字阶段
            titleElement.textContent = currentText + fullText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else if (!isDeleting && charIndex === fullText.length) {
            // 打完字，暂停后开始删除
            setTimeout(() => {
                isDeleting = true;
                setTimeout(typeWriter, deletingSpeed);
            }, pauseTime);
        } else if (isDeleting && charIndex > 0) {
            // 删除阶段
            titleElement.textContent = fullText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeWriter, deletingSpeed);
        } else if (isDeleting && charIndex === 0) {
            // 删完字，重新开始打字
            isDeleting = false;
            setTimeout(typeWriter, typingSpeed + 500);
        }
    }

    // 启动打字机效果
    typeWriter();
});
