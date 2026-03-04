// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {

    // ----- LOGIN (apenas na página login.html) -----
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const pass = document.getElementById('loginPassword').value.trim();
            const errorDiv = document.getElementById('loginError');
            if (email === 'voluntario@joinville.com' && pass === 'voluntario') {
                errorDiv.innerText = '';
                // Redireciona para a página inicial
                window.location.href = 'index.html';
            } else {
                errorDiv.innerText = 'E-mail ou senha incorretos. Tente novamente.';
            }
        });
    }

    // ----- MODAL DE INSCRIÇÃO (apenas na página projetos.html) -----
    // Inicializa o modal do Bootstrap (se existir)
    const modalElement = document.getElementById('projectModal');
    let modal = null;
    if (modalElement) {
        modal = new bootstrap.Modal(modalElement);
    }

    // Botões "Participar" nos cards
    document.querySelectorAll('.join-project').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectName = this.dataset.project;
            const quickSelect = document.getElementById('quickProject');
            if (quickSelect && projectName) {
                for (let opt of quickSelect.options) {
                    if (opt.textContent === projectName) {
                        opt.selected = true;
                        break;
                    }
                }
            }
            if (modal) modal.show();
        });
    });

    // Formulário de inscrição rápida (modal)
    const quickForm = document.getElementById('quickSignupForm');
    if (quickForm) {
        quickForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('quickName').value.trim();
            const email = document.getElementById('quickEmail').value.trim();
            const errorDiv = document.getElementById('quickError');
            const quickSelect = document.getElementById('quickProject');
            if (name === '' || email === '') {
                errorDiv.innerText = 'Preencha todos os campos.';
                return;
            }
            if (!email.includes('@') || !email.includes('.')) {
                errorDiv.innerText = 'E-mail inválido.';
                return;
            }
            errorDiv.innerText = '';
            alert(`Inscrição enviada para ${name} no projeto ${quickSelect.value} (simulação)`);
            if (modal) modal.hide();
            quickForm.reset();
        });
    }

    // ----- FORMULÁRIO DE CONTATO (apenas na página contato.html) -----
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const msg = document.getElementById('contactMsg').value.trim();
            const errorDiv = document.getElementById('contactError');
            if (!name || !email || !msg) {
                errorDiv.innerText = 'Todos os campos são obrigatórios.';
                return;
            }
            if (!email.includes('@') || !email.includes('.')) {
                errorDiv.innerText = 'E-mail inválido.';
                return;
            }
            errorDiv.innerText = '';
            alert('Mensagem enviada com sucesso (simulação)! Em breve responderemos.');
            contactForm.reset();
        });
    }

});