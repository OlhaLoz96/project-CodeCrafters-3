(() => {
  const refsq = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openMenuBtn: document.querySelector("[data-menu-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeMenuBtns: document.querySelectorAll("[data-menu-close]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[data-menu]"),
  };

  refsq.openMenuBtn.addEventListener("click", toggleModal);

  for (const btn of refsq.closeMenuBtns)
    btn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refsq.modal.classList.toggle("is-opens");
  }
})();