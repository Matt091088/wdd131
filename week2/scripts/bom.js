// Referencias a los elementos del DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Lógica para agregar capítulos
button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    // Crear elementos
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');

    // Establecer contenido
    li.textContent = input.value;
    deleteBtn.textContent = '❌';
    deleteBtn.setAttribute('aria-label', `Remove ${input.value}`);

    // Agregar botón al li y li a la lista
    li.appendChild(deleteBtn);
    list.appendChild(li);

    // Borrar campo de entrada y devolver el foco
    input.value = '';
    input.focus();

    // Eliminar el li si se hace clic en el botón
    deleteBtn.addEventListener('click', () => {
      list.removeChild(li);

// Obtener referencias a los elementos
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Escuchar clics en el botón "Add Chapter"
button.addEventListener('click', function () {
  const chapter = input.value.trim();

  if (chapter === '') {
    // Si el campo está vacío, no hace nada y devuelve el foco
    input.focus();
    return;
  }

  // Crear el <li> y el botón de borrar
  const li = document.createElement('li');
  li.textContent = chapter;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.setAttribute('aria-label', `Remove ${chapter}`);
  deleteButton.classList.add('delete'); // importante para delegación

  // Agregar botón al li, y li a la lista
  li.appendChild(deleteButton);
  list.appendChild(li);

  // Limpiar input y devolver foco
  input.value = '';
  input.focus();
});

// Delegación de eventos: escuchar clics en la lista
list.addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('delete')) {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});


    });
  }
});
