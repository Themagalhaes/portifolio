function ampliarImagem(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('img-ampliada');

    img.src = src;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function fecharImagem() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}
