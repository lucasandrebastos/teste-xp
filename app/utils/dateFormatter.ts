export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function dateFormatter(date: string): string {
  const year = date.slice(0, 4);
  const month = parseInt(date.slice(5, 7)) - 1;
  const day = date.slice(8, 10);
  return `${months.at(month)} ${day}, ${year}`;
}

dateFormatter("2024-06-22T00:00:00Z");
