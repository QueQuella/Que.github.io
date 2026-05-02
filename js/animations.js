// js/animations.js - 额外动画效果
document.addEventListener('DOMContentLoaded', function() {
    // 鼠标跟随效果
    document.addEventListener('mousemove', function(e) {
        const cards = document.querySelectorAll('.hand-drawn-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // 滚动渐显效果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // 观察所有卡片
    document.querySelectorAll('.hand-drawn-card').forEach(card => {
        observer.observe(card);
    });
});
