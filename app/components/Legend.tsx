export default function Legend() {
  return (
    <div id="legenda" className="grid grid-cols-3 gap-2 ">
      <div className="flex flex-col items-center mb-3">
        <div className="h-4 w-4 rounded-full bg-purple-700" />
        <span className="text-sm text-primary mt-1 ">Finance</span>
      </div>
      <div className="flex flex-col items-center mb-3">
        <div className="h-4 w-4 rounded-full bg-purple-700" />
        <span className="text-sm text-primary mt-1 ">Human Resources</span>
      </div>
      <div className="flex flex-col items-center mb-3">
        <div className="h-4 w-4 rounded-full bg-purple-700" />
        <span className="text-sm text-primary mt-1 xl text-center">
          Research and Development
        </span>
      </div>
      <div className="flex flex-col items-center mb-3">
        <div className="h-4 w-4 rounded-full bg-purple-700" />
        <span className="text-sm text-primary mt-1 ">Marketing</span>
      </div>
      <div className="flex flex-col items-center mb-3">
        <div className="h-4 w-4 rounded-full bg-purple-700" />
        <span className="text-sm text-primary mt-1 ">Operations</span>
      </div>
      <div className="flex flex-col items-center mb-3">
        <div className="h-4 w-4 rounded-full bg-purple-700" />
        <span className="text-sm text-primary mt-1  text-center">IT</span>
      </div>
      <div className="flex flex-col items-center mb-3 ">
        <div className="h-4 w-4 rounded-full bg-purple-700" />
        <span className="text-sm text-primary mt-1  ">Sales</span>
      </div>
    </div>
  );
}
