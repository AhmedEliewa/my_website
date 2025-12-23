import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder: string;
  className?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  error?: string | null;
};

const Input = <T extends FieldValues>({
  label,
  type = "text",
  name,
  placeholder,
  register,
  className = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent transition-all duration-200",
  error,
}: InputProps<T>) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2 capitalize"
      >
        {label} :
      </label>
      <input
        {...register(name)}
        type={type}
        id={name}
        className={className}
        placeholder={`Enter your ${placeholder}`}
      />
      {error && <p className="text-red-500 text-sm font-medium">*{error}</p>}
    </>
  );
};

export default Input;
