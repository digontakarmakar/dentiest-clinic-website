export const imageUrl = (fileName: string) => {
  const safeName = fileName.startsWith("/") ? fileName.slice(1) : fileName;
  return `${import.meta.env.BASE_URL}images/${safeName}`;
};
