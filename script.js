// Exibe a notificação de promoção após 2 segundos
setTimeout(function() {
    document.getElementById('promo-banner').style.display = 'block';
  }, 2000);

  // Fecha a notificação quando o botão for clicado
  document.getElementById('close-promo').addEventListener('click', function() {
    document.getElementById('promo-banner').style.display = 'none';
  });



  //Validação do formulário
   document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Previne o envio do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const card = document.getElementById('card').value;

    if (!name || !email || !card) {
      document.getElementById('form-message').textContent = 'Por favor, preencha todos os campos.';
      document.getElementById('form-message').style.color = 'red';
    } else {
      document.getElementById('form-message').textContent = 'Compra realizada com sucesso!';
      document.getElementById('form-message').style.color = 'green';
    }
  });