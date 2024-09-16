const formulario = document.getElementById('formulario');
const imagemM = document.getElementById('imagemM');
const cr7 = document.getElementById('cr7');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const cartao = document.getElementById('cartao').value;
    const dataVencimento = document.getElementById('dataVencimento').value;
    const cvv = document.getElementById('cvv').value;

    // Adicione lógica de validação aqui para determinar qual famoso a pessoa é
    // Por exemplo:
    if (cartao === '1234' && dataVencimento === '2025-12-31' && cvv === '123') {
        cr7.innerHTML = "Você é o Cristiano Ronaldo";
        imagemM.src = "img/cr7.jfif";
    } else {
        cr7.innerHTML = " é o Cristiano Ronaldo";
        imagemM.src = "img/images.jfif";
    }
});