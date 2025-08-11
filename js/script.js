(() => {
    'use strict';

    const form = document.getElementById('citaForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener(
        'submit',
        (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                formMessage.textContent = '';
                return;
            }

            formMessage.textContent = '¡Cita solicitada con éxito! Nos contactaremos pronto.';
            formMessage.style.color = 'green';

            form.reset();
            form.classList.remove('was-validated');
        },
        false
    );
})();

// Video
const toggleBtn = document.getElementById('toggleVideosBtn');
const extraVideos = document.getElementById('videos-adicionales');

toggleBtn.addEventListener('click', () => {
    if (extraVideos.classList.contains('d-none')) {
        extraVideos.classList.remove('d-none');
        toggleBtn.textContent = 'Ver menos';
    } else {
        extraVideos.classList.add('d-none');
        toggleBtn.textContent = 'Ver más';
        window.scrollTo({ top: extraVideos.offsetTop - 100, behavior: 'smooth' });
    }
});