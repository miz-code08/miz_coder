let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active')
            })
        }

    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động gửi mặc định của biểu mẫu

    let form = event.target;
    let formData = new FormData(form);

    fetch('<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdSu57h750syTC-IkQyFfXf9rNleeTXpGhKIULWUx7yAdFrZQ/viewform?embedded=true" width="640" height="959" frameborder="0" marginheight="0" marginwidth="0">Đang tải…</iframe>', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            alert('Your message has been sent!');
            form.reset(); // Xóa biểu mẫu sau khi gửi
        } else {
            return response.text(); // Đọc chi tiết lỗi từ phản hồi
        }
    }).then(errorText => {
        alert('Failed to send message: ' + errorText);
    }).catch(error => {
        console.error('Error:', error);
        alert('Error: ' + error.message);
    });
});




