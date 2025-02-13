export const slugify = (text) => {
    const from = "àáäâãåçèéëêìíïîñòóöôõùúüûýÿÀÁÄÂÃÅÇÈÉËÊÌÍÏÎÑÒÓÖÔÕÙÚÜÛÝŸ";
    const to = "aaaaaaceeeeiiiinooooouuuuyyAAAAAACEEEEIIIINOOOOOUUUUYY";
    const mapping = {};
  
    for (let i = 0; i < from.length; i++) {
      mapping[from.charAt(i)] = to.charAt(i);
    }
  
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Reemplaza espacios por -
      .replace(/[^\w-]+/g, (char) => mapping[char] || '') // Reemplaza caracteres especiales
      .replace(/--+/g, '-')         // Reemplaza múltiples - por uno solo
      .replace(/^-+/, '')             // Elimina - al inicio
      .replace(/-+$/, '');            // Elimina - al final
  };