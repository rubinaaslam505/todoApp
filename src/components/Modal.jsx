import { X } from "lucide-react";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div
      className="fixed incet-0   flex items-center justify-between mx-30 pt-4 px-20 left-28"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white  shadow-lg p-6 w-80 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>

        {children}
      </div>
    </div>
  );
}
