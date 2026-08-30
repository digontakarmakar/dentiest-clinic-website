export const updatePageSEO = (title: string, description?: string) => {
  document.title = `${title} | SMILEORA DENTAL`;
  if (description) {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }
  // Scroll to top smoothly on route change
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
