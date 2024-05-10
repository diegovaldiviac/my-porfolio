export default function TextItem({ title }: { title: string }) {
    return (
      <p className="text-md m-0.5 inline-flex rounded bg-gray-200 px-1 text-gray-900 transition hover:scale-105 hover:bg-gray-300 sm:text-sm dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600">
        {title}
      </p>
    );
  }