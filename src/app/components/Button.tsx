function Button({ title, onClick }: { title: string; onClick: () => void }) {
    return (
      <button
        onClick={onClick}
        className="my-2 w-full rounded-2xl bg-gradient-to-br from-gray-900 to-purple-800 p-1 drop-shadow-md transition hover:scale-105"
      >
        <h1 className="rounded-xl bg-gray-100 object-fill px-4 py-3 text-sm font-semibold text-gray-500 transition-colors active:bg-gray-200 dark:bg-slate-900 dark:text-slate-300 dark:active:bg-slate-950">
          {title}
        </h1>
      </button>
    );
  }
  
  export default Button;