export const formatDatetime = (datetime: string) => {
  const date = new Date(datetime);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }).format(date);
};
