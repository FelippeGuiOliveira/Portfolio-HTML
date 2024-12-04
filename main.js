const sendMessageBtn = document.getElementById('sendMessageBtn');
const message = document.getElementById('message');

sendMessageBtn.addEventListener('click', () => {
    message.classList.remove('hidden');
});