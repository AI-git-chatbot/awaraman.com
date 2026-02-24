document.addEventListener("DOMContentLoaded", function() {
    const booksSlider = document.querySelector(".books-slider");
    
    if (booksSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;

        booksSlider.addEventListener("mousedown", (e) => {
            isDown = true;
            booksSlider.classList.add("active");
            startX = e.pageX - booksSlider.offsetLeft;
            scrollLeft = booksSlider.scrollLeft;
        });

        booksSlider.addEventListener("mouseleave", () => {
            isDown = false;
            booksSlider.classList.remove("active");
        });

        booksSlider.addEventListener("mouseup", () => {
            isDown = false;
            booksSlider.classList.remove("active");
        });

        booksSlider.addEventListener("mousemove", (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - booksSlider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast
            booksSlider.scrollLeft = scrollLeft - walk;
        });
    }
});