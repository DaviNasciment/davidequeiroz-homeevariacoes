export function formatDate(isoTimestamp: string): { day: number, month: string, year: number, } {
  // Parse a string ISO 8601 para um objeto Date
  const date = new Date(isoTimestamp);

  // Obtém o dia e o mês a partir do objeto Date
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  return { day: day, month: month, year: year };
}