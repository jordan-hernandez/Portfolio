let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    if (request.method === 'POST') {
      const contentType = request.headers.get('content-type');
      let data = {};
  
      if (contentType.includes('application/json')) {
        data = await request.json();
      } else if (contentType.includes('application/x-www-form-urlencoded')) {
        const formData = await request.formData();
        formData.forEach((value, key) => {
          data[key] = value;
        });
      }
  
      // Aquí puedes manejar los datos del formulario como desees.
      console.log('Formulario recibido:', data);
  
      return new Response('Formulario recibido', {
        headers: { 'Content-Type': 'text/plain' },
      });
    } else {
      return new Response('Método no permitido', {
        status: 405,
        headers: { 'Content-Type': 'text/plain' },
      });
    }
  }
  