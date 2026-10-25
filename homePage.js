const logOutBtn = document.querySelector('.log-out');

logOutBtn.addEventListener('click', function() {
    alert('Logging out...');
    window.location.href = './index.html';
});