export default function BaseButton({ children }) {
  return (
    <button className="bg-primary px-4 py-2 rounded-xl hover:bg-[#D0D5DD]">{children}</button>
  );
}
