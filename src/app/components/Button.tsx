function Button({ title, onClick }: { title: string; onClick: () => void }) {
    return (
      <button
        onClick={onClick}
        className="my-2 w-full rounded-2xl bg-[#DADADB] bg-gradient-to-br from-white to-black p-1 drop-shadow-md transition hover:scale-105"
      >
        <h1 className="rounded-xl bg-gray-100 object-fill px-4 py-3 text-sm font-semibold text-black transition-colors active:bg-gray-200"
        >
          {title}
        </h1>
      </button>
    );
  }
  
  export default Button;