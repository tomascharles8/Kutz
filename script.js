// Inicializar EmailJS
emailjs.init("lESLbSgwHavb9lmN7"); // ex: "XyZ123ABC456"

// Função de pagamento (já funciona)
function pagar(metodo) {
  const valor = document.getElementById("valor").value;
  const numero = "258873918379"; // número de recebimento
  let link = "";

  if (metodo === "mpesa") {
    link = `tel:*150*01*${numero}*${valor}#`;
  } else if (metodo === "emola") {
    link = `tel:*898*1*${numero}*${valor}#`;
  }

  window.location.href = link;
}

// Função para envio do formulário via EmailJS
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const params = {
    from_name: document.getElementById("nome").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("mensagem").value,
  };

  emailjs.send("service_w7gozk7", "template_5ceovcd", params)
    .then(() => {
      alert("✅ Mensagem enviada com sucesso!");
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      console.error("Erro ao enviar:", error);
      alert("❌ Ocorreu um erro. Verifique as credenciais.");
    });
});
