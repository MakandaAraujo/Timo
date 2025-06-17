const { useState, useRef } = React;

function App() {
  const [showModal, setShowModal] = useState(true);
  const audioRef = useRef(null);

  const handleStart = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://media.vocaroo.com/mp3/1aEdIiVBEurr');
      audioRef.current.loop = true;
    }
    audioRef.current.play();
    setShowModal(false);
  };

  if (showModal) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="relative p-6 rounded-lg text-center shadow-2xl text-white overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjMj2nFLK7rrRYd7NPF2LDaoiNoR1CT9xhCQ&s')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.4,
            }}
          ></div>

          <div className="relative text-white">
            <h1 className="text-2xl font-bold mb-4">Olá querido João</h1>
            <p className="mb-4">Clique Aqui...</p>
            <button
              onClick={handleStart}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              aqui rs
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/236x/48/a5/0d/48a50d314c04b11a5b896eb8b664e2fc.jpg')",
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-black bg-opacity-50 text-white rounded px-6 py-4 text-center max-w-xs"
      >
        <p>Espero que tenha gostado, amanhã (17/06) tem o culto ein não pode perder
            foi divertido demais trabalhar pra vcs me diverti mt, acho q vcs gostaram tbm da bagunça 
            e da palavra que foi levada pra vcs e ano que vem venham trabalhar conosco do lanchinho 🍪
            Vai um biscoitinho ai? 😜😝
        </p>
      </div>

      <div className="absolute bottom-0 w-full p-4 bg-yellow-300 text-center">
        <p className="font-semibold">
          Do seu amiguinho do lanchinho e prefeito... Tincas! (faz o L)
        </p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
