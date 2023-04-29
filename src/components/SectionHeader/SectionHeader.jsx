export default function SectionHeader({ title = "" }) {
  return (
    <span className="uppercase font-bold underline underline-offset-8">
      {title}
    </span>
  )
}
