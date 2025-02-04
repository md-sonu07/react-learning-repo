import UserCard from './Components/UserCards/UserCard.jsx'
import users from './Components/UserCards/UserData.jsx'
function App() {

  return (
    <>
        <div className="bg-gray-600 flex flex-wrap gap-6 justify-center">
          {/* Body Part */}
          {users.map((user, index) => (
          <UserCard key={index} user={user} />
          ))}
        </div>
    </>
  )
}

export default App
