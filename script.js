document.getElementById('confirm').addEventListener('click', function(event) {
    event.preventDefault();
    const form = document.getElementById('formulario');
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('confirmPassword')
    
    if (password.value !== confirmPassword.value) {
        alert('As senhas não coincidem. Por favor, verifique e tente novamente.');
        return;
    }
    if (form.checkValidity()) {
        const formData = new FormData(form);
        const json = {};
        formData.forEach(function(value, key) {
            json[key] = value;
        });
        
        console.log(JSON.stringify(json, null, 2));
        document.getElementById('conteudo-json').textContent = JSON.stringify(json, null, 2);
        document.getElementById('container-json').style.display = 'flex';
        document.getElementById('container').style.display = 'none';
        form.reset();
    } else {
        form.reportValidity();
    }
});
