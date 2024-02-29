export const formatDateDistance = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const differenceInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
  );
  const differenceInMonths =
    now.getMonth() -
    date.getMonth() +
    12 * (now.getFullYear() - date.getFullYear());
  const differenceInYears = now.getFullYear() - date.getFullYear();

  if (differenceInDays === 0) return "Today";

  if (differenceInDays < 30) {
    return `${differenceInDays}d ago`;
  } else if (differenceInMonths < 12) {
    return `${differenceInMonths}mo ago`;
  } else {
    return `${differenceInYears}yr ago`;
  }
};
