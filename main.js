document.addEventListener('DOMContentLoaded', () => {
  const roles = document.getElementById('roles');
  const words = [' a maker', ' a developer', ' a leader', ' a designer', ' a creator',' a Cornell student'];
  let i = 0;
  let j = 0;
  let isDeleting = false;
  let currentWord = '';
  
  function type() {
    const word = words[i];
    if (isDeleting) {
      currentWord = word.substring(0, j--);
    } else {
      currentWord = word.substring(0, j++);
    }

    roles.textContent = currentWord;

    let delay = isDeleting ? 80 : 120;

    if (!isDeleting && currentWord === word) {
      delay = 1500;
      isDeleting = true;
    } else if (isDeleting && currentWord === '') {
      isDeleting = false;
      i = (i + 1) % words.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }

  type();
});