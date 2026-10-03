// Filtres du portfolio
const filterBtns = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.card');
filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    filterBtns.forEach((b) => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
    cards.forEach((c) => {
      c.hidden = f !== 'tout' && !c.dataset.tags.split(' ').includes(f);
    });
  });
});

// Onglets Expérience / Formation
const tabBtns = document.querySelectorAll('[data-tab]');
tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabBtns.forEach((b) => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
    document.querySelectorAll('.panel').forEach((p) => { p.hidden = p.id !== btn.dataset.tab; });
  });
});
