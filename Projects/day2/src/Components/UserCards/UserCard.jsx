function UserCard({ user }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center w-60">
      <img
        src={user.image}
        alt={user.name}
        className="w-24 h-24 rounded-full border-4 hover:transform cursor-pointer border-gray-200  transform transition-transform duration-300 hover:scale-110"
      />
      <h2 className="text-xl font-semibold mt-4 text-gray-800">{user.name}</h2>
      <p className="text-gray-500 text-sm">{user.email}</p>
      <button className="cursor-pointer mt-4 px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition">
        View Profile
      </button>
    </div>
  );
}

export default UserCard;