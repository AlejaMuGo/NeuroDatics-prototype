interface SelectOptionProps {
  value: string;
  label: string;
  onClick: (value: string) => void;
}

export const SelectOption = ({ value, label, onClick }: SelectOptionProps) => {
  return (
    <button
      type="button"
      onClick={() => onClick(value)}
      className="w-full px-5 py-3 text-left text-gray-700 hover:bg-gray-100 hover:text-black-700 transition-colors duration-150 font-medium"
    >
      {label}
    </button>
  );
};
