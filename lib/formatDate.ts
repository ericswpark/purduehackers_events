export const formatDateTz = (date: Date) =>
  new Date(date.toLocaleString('en-US', { timeZone: 'America/Indianapolis' }))

export const eventSpansAcrossMultipleDays = (
  start: string,
  end: string
): boolean => {
  const startDate = new Date(start).getDate()
  const endDate = new Date(end).getDate()
  return startDate !== endDate
}

export const startTimeFormatString = (start: string, end: string): string => {
  let baseString = 'h:mm'
  if (end === 'TBD' || eventSpansAcrossMultipleDays(start, end)) {
    baseString += ' a'
  }
  return baseString
}
