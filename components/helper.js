export function formatDate(date) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  return `${months[date.getMonth()]} ${date.getDate()}${
    date.getDate() === 1
      ? 'st'
      : date.getDate() === 2
      ? 'nd'
      : date.getDate() === 3
      ? 'rd'
      : 'th'
  }, ${date.getFullYear()}`
}
