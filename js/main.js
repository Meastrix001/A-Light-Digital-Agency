(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.menuBtn = document.querySelector('.menu-btn');
      this.nav = document.querySelector('.nav');
      this.navExit = document.querySelector('.menu-btn-exit');
    },
    registerEventListeners () {
      this.menuBtn.addEventListener("click", ev => {
        this.nav.classList.toggle('open'),
        this.navExit.classList.toggle('state')
      })
      this.navExit.addEventListener("click", ev => {
        this.nav.classList.toggle('open'),
        this.navExit.classList.toggle('state')
      })
    },
  };
  app.initialize();
})();
