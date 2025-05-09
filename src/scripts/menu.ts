document.addEventListener("astro:page-load", () => {
  document.querySelector('.hamburger')?.addEventListener('click', () => {
    console.log('click')
    document.querySelector('#overlay')?.classList.toggle('hidden');
  });
  document.querySelector('#close-overlay')?.addEventListener('click', () => {
    console.log('click')
    document.querySelector('#overlay')?.classList.toggle('hidden');
  });
})
