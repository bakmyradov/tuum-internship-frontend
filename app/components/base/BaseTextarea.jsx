export default function BaseTextarea() {
  return (
    <div className="formelement xs:col-span-2 col-span-1">
      <textarea
        name="message"
        placeholder="What would you like to talk about?"
        className="w-full px-4 py-2 border rounded-lg drop-shadow-sm border-[#d0d5dd] h-36"
      ></textarea>
    </div>
  )
}
