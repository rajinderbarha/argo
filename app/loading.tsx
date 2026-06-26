export default function Loading() {
  return (
    <div className="container-px py-24">
      <div className="animate-pulse space-y-6">
        <div className="h-8 w-48 rounded-full bg-mist" />
        <div className="h-12 w-2/3 rounded-lg bg-mist" />
        <div className="h-4 w-1/2 rounded bg-mist" />
        <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 rounded-xl bg-mist" />
          ))}
        </div>
      </div>
    </div>
  );
}
