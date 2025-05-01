document.addEventListener('DOMContentLoaded', () => {
  // Controles de tamaño de fuente
  const increaseFont = document.getElementById('increaseFont');
  const decreaseFont = document.getElementById('decreaseFont');
  const toggleContrast = document.getElementById('toggleContrast');
  const body = document.body;

  // Tamaños de fuente disponibles
  const fontSizes = ['font-size-small', 'font-size-large', 'font-size-xlarge'];
  let currentFontSize = 0;

  // Función para actualizar el tamaño de fuente
  const updateFontSize = () => {
    // Remover todas las clases de tamaño de fuente
    fontSizes.forEach(size => body.classList.remove(size));
    // Agregar la clase actual
    if (currentFontSize > 0) {
      body.classList.add(fontSizes[currentFontSize - 1]);
    }
  };

  // Aumentar tamaño de fuente
  increaseFont.addEventListener('click', () => {
    if (currentFontSize < fontSizes.length) {
      currentFontSize++;
      updateFontSize();
      savePreferences();
    }
  });

  // Disminuir tamaño de fuente
  decreaseFont.addEventListener('click', () => {
    if (currentFontSize > 0) {
      currentFontSize--;
      updateFontSize();
      savePreferences();
    }
  });

  // Alternar modo de alto contraste
  toggleContrast.addEventListener('click', () => {
    body.classList.toggle('high-contrast');
    savePreferences();
  });

  // Guardar preferencias en localStorage
  const savePreferences = () => {
    localStorage.setItem('fontSize', currentFontSize);
    localStorage.setItem('highContrast', body.classList.contains('high-contrast'));
  };

  // Cargar preferencias guardadas
  const loadPreferences = () => {
    const savedFontSize = localStorage.getItem('fontSize');
    const savedHighContrast = localStorage.getItem('highContrast');

    if (savedFontSize !== null) {
      currentFontSize = parseInt(savedFontSize);
      updateFontSize();
    }

    if (savedHighContrast === 'true') {
      body.classList.add('high-contrast');
    }
  };

  // Cargar preferencias al iniciar
  loadPreferences();
}); 