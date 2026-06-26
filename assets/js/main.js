document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="http"]').forEach(a => {
    if (!a.hostname.includes(location.hostname)) { a.rel = 'noopener'; }
  });
});
