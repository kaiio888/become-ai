/* Shared behavior across every page */

document.addEventListener('DOMContentLoaded', () => {
  // mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '[ CLOSE ]' : '[ MENU ]';
    });
  }

  // rotating quote in hero
  const quoteCard = document.querySelector('.quote-card');
  if (quoteCard && typeof QUOTES !== 'undefined') {
    let i = Math.floor(Math.random() * QUOTES.length);
    const textEl = quoteCard.querySelector('blockquote');
    const citeEl = quoteCard.querySelector('cite');
    const entryEl = quoteCard.querySelector('.entry-no');
    const render = () => {
      const q = QUOTES[i];
      if (textEl) textEl.textContent = '"' + q.text + '"';
      if (citeEl) citeEl.textContent = '— ' + q.who;
      if (entryEl) entryEl.textContent = 'LOG ENTRY #' + String(100 + i).padStart(3, '0');
      quoteCard.classList.remove('settling');
      void quoteCard.offsetWidth;
      quoteCard.classList.add('settling');
    };
    render();
    const nextBtn = quoteCard.querySelector('.js-next-quote');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        i = (i + 1) % QUOTES.length;
        render();
      });
    }
    const shareBtn = quoteCard.querySelector('.js-share-quote');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        const q = QUOTES[i];
        const shareText = encodeURIComponent('"' + q.text + '" — Become AI');
        window.open('https://twitter.com/intent/tweet?text=' + shareText, '_blank');
      });
    }
  }

  // sticky ad dismiss
  const stickyAd = document.querySelector('.ad-slot--sticky');
  const stickyClose = document.querySelector('.js-close-sticky');
  if (stickyAd && stickyClose) {
    if (sessionStorage.getItem('hideSticky')) stickyAd.style.display = 'none';
    stickyClose.addEventListener('click', () => {
      stickyAd.style.display = 'none';
      sessionStorage.setItem('hideSticky', '1');
    });
  }

  // newsletter form (demo capture — see README to connect a real email service)
  const form = document.querySelector('.js-newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type=email]');
      const note = form.querySelector('.form-success');
      if (!input.value) return;
      const list = JSON.parse(localStorage.getItem('becomeai_emails') || '[]');
      list.push(input.value);
      localStorage.setItem('becomeai_emails', JSON.stringify(list));
      if (note) note.textContent = "You're on the list — check your inbox soon.";
      input.value = '';
    });
  }
});
