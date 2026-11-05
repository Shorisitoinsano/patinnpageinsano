// Punto de entrada de Alpine.js para @astrojs/alpinejs.
// Registra el plugin collapse y los componentes reutilizables antes de que Alpine arranque.
import collapse from '@alpinejs/collapse';

export default (Alpine) => {
  Alpine.plugin(collapse);

  Alpine.data('carousel', (n) => ({
    i: 0, n,
    next() { this.i = (this.i + 1) % this.n; },
    prev() { this.i = (this.i - 1 + this.n) % this.n; },
    go(k) { this.i = k; }
  }));

  Alpine.data('diary', () => ({
    open: null, opener: null,
    show(id, el) {
      this.open = id; this.opener = el;
      document.documentElement.classList.add('overflow-hidden');
      this.$nextTick(() => { const b = this.$root.querySelector('[data-modal="' + id + '"] [data-close]'); if (b) b.focus(); });
    },
    hide() {
      if (this.open === null) return;
      this.open = null;
      document.documentElement.classList.remove('overflow-hidden');
      if (this.opener) this.opener.focus();
    }
  }));

  Alpine.data('faq', () => ({
    open: 0,
    toggle(k) { this.open = this.open === k ? null : k; }
  }));

  Alpine.data('contactForm', () => ({
    sent: false, e: {}, v: { name: '', email: '', topic: '', msg: '' },
    submit() {
      const v = this.v, e = {};
      if (v.name.trim().length < 2) e.name = true;
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email.trim())) e.email = true;
      if (!v.topic) e.topic = true;
      if (v.msg.trim().length < 10) e.msg = true;
      this.e = e;
      if (Object.keys(e).length) {
        this.$nextTick(() => { const f = this.$root.querySelector('[aria-invalid="true"]'); if (f) f.focus(); });
        return;
      }
      this.sent = true;
      this.v = { name: '', email: '', topic: '', msg: '' };
    }
  }));
};
