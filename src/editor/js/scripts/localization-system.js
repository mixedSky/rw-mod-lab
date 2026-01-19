
const userLanguage = getUserLanguage();

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === 1) {
        translateElement(node, translations);
        node.querySelectorAll('[data-i18n]').forEach(el => translateElement(el, translations));
      }
    });
  });
});

observer.observe(document.body, { childList: true, subtree: true });

