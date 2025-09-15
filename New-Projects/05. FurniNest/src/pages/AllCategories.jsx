import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
function AllCategories() {
  const categories = [
    {
      id: 1,
      name: "Sofas",
      desc: "Luxury sofas for modern living rooms.",
      img: "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Beds",
      desc: "Comfortable beds for a cozy sleep.",
      img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Chairs",
      desc: "Stylish chairs for home & office.",
      img: "https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?q=80&w=1440&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Tables",
      desc: "Dining & coffee tables for all spaces.",
      img: "https://images.unsplash.com/photo-1565791380713-1756b9a05343?q=80&w=1480&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Wardrobes",
      desc: "Spacious wardrobes to fit your lifestyle.",
      img: "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?q=80&w=1374&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Lighting",
      desc: "Modern lamps & ceiling lights.",
      img: "https://images.unsplash.com/photo-1523376460408-aeb5f5d051b8?q=80&w=870&auto=format&fit=crop",
    },
  ];

  return (
    <div>
      <SignedIn>
        <div className="px-6 md:px-12 py-14 bg-gradient-to-b from-secondary/50 to-white min-h-screen">
          <h1 className="text-4xl font-extrabold text-primary text-center mb-12 tracking-wide">
            ✨ All Categories ✨
          </h1>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="group relative bg-white/70 backdrop-blur-md border border-secondary/20 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col items-start">
                  <h2 className="text-2xl font-semibold text-black group-hover:text-secondary transition">
                    {cat.name}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {cat.desc}
                  </p>
                  <button className="mt-5 px-5 py-2 rounded-xl bg-primary text-black font-medium shadow hover:bg-secondary hover:text-primary transition-all duration-300">
                    Explore {cat.name}
                  </button>
                </div>

                <span className="absolute top-0 right-0 m-3 px-3 py-1 text-xs font-semibold bg-secondary text-white rounded-full shadow">
                  {cat.name.length * 3}+
                </span>
              </div>
            ))}
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="flex flex-col items-center justify-center py-30 rounded-b-4xl bg-gray-100 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            You’re not signed in 🚪
          </h1>
          <p className="text-gray-600 mb-6">
            Please sign in to view All Categories Page.
          </p>

          <div className="flex gap-2">
            <button className="bg-secondary text-white px-6 py-3 rounded-lg shadow-md hover:bg-secondary/90 transition">
              <SignInButton mode="modal">Login</SignInButton>
            </button>
            <button className="bg-secondary text-white px-6 py-3 rounded-lg shadow-md hover:bg-secondary/90 transition">
              <SignUpButton mode="modal">Sign Up</SignUpButton>
            </button>
          </div>
        </div>
      </SignedOut>
    </div>
  );
}

export default AllCategories;
