// Scroll suave al formulario
document.getElementById("btnContacto").addEventListener("click", () => {
  document.getElementById("contacto").scrollIntoView({
    behavior: "smooth"
  });
});

// Pequeña interacción al enviar formulario
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Mensaje enviado correctamente 👍");
  e.target.reset();
});
