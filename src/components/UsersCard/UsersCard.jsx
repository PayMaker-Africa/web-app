import SectionHeader from "../SectionHeader/SectionHeader"

export default function UsersCard({ user }) {
  return (
    <div className="shadow-black shadow-inner flex items-center p-4 rounded-lg gap-4">
      {/* Profile Image */}
      <div className="w-12 rounded-md shadow-black shadow-lg overflow-hidden">
        <img src="https://picsum.photos/200" className="object-cover" />
      </div>

      {/* User Info */}
      <div className="flex flex-col grow">
        <span className="w-full border-b pb-2">{`${user?.first_name} ${user?.last_name}`}</span>
        <span className="text-xs md:text-sm mt-1">{`${
          user?.username
        } | ${user?.email.toLowerCase()}`}</span>
      </div>
    </div>
  )
}
