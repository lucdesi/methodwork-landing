const form = document.getElementById('register-form');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {
      nombre: document.getElementById('nombre').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Registro exitoso');
      } else {
        const text = await response.text();
        alert('Error: ' + text);
      }
    } catch (error) {
      console.error(error);
      alert('Error de red');
    }
  });
}
