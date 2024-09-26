export default async function getEmployees(setEmployees: Function) {
  await fetch("/api/employees")
    .then((res) => res.json())
    .then((json) => {
      setEmployees(json);
    });
}
