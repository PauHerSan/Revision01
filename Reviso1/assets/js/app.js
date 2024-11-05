const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) {
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
    $n.textContent = `${data.name}`; // Usar comillas invertidas
    $b.textContent = `${data.blog}`; // Usar comillas invertidas
    $l.textContent = `${data.location}`; // Usar comillas invertidas
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // Corregir referencia a $n
}

// Llamar a displayUser con un nombre de usuario
displayUser('stolinski').catch(handleError);
