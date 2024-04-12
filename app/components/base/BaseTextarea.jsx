export default function BaseTextarea({
  value, 
  onChange,
  placeholder,
  name,
  ...props
}) {
  return (
    <div className="formelement xs:col-span-2 col-span-1">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg drop-shadow-sm border-[#d0d5dd] h-36"
      ></textarea>
    </div>
  )
}
