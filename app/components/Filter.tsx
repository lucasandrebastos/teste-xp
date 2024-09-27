export default function Filter() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4  my-3">
        <input
          type="text"
          name="Employee"
          id=""
          placeholder="Employee"
          className="border rounded-md"
        />
        <input type="date" name="Data" id="" className="border rounded-md" />
        <input
          type="text"
          name="Department"
          id=""
          placeholder="Department"
          className="border rounded-md"
        />
        <input
          type="text"
          name="Status"
          id=""
          placeholder="Status"
          className="border rounded-md"
        />
      </div>
    </>
    // Employee (TextField) | Last Login (DateField) | Department (SelectField) | Status (SelectField)
  );
}
