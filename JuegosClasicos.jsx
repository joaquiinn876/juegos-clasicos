
import { useState } from "react";
import Image from "next/image";

const games = [
  {
    name: "Ahorcado",
    url: "https://www.htmlgames.com/es/Hangman/",
    description: "Adivina la palabra antes de que se complete el dibujo.",
    image: "/images/ahorcado.jpg",
  },
  {
    name: "Tetris",
    url: "https://tetris.com/play-tetris",
    description: "El clásico juego de encajar bloques.",
    image: "/images/tetris.jpg",
  },
  {
    name: "Buscaminas",
    url: "https://minesweeperonline.com/",
    description: "Encuentra las minas sin explotarlas.",
    image: "/images/buscaminas.jpg",
  },
  {
    name: "Sudoku",
    url: "https://www.websudoku.com/",
    description: "Completa la cuadrícula sin repetir números.",
    image: "/images/sudoku.jpg",
  },
];

export default function JuegosClasicos() {
  const [selectedGame, setSelectedGame] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Juegos Clásicos Online</h1>
          <p className="text-lg text-gray-500">Juega directamente desde tu navegador, sin descargar nada</p>
        </header>

        {!selectedGame && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <div
                key={game.name}
                className="cursor-pointer hover:shadow-xl transition bg-gray-50 border rounded-2xl overflow-hidden"
                onClick={() => setSelectedGame(game)}
              >
                <Image
                  src={game.image}
                  alt={game.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-1">{game.name}</h2>
                  <p className="text-sm text-gray-600">{game.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedGame && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">{selectedGame.name}</h2>
            <div className="aspect-video w-full max-w-4xl mx-auto">
              <iframe
                src={selectedGame.url}
                title={selectedGame.name}
                className="w-full h-full border rounded-xl"
                allowFullScreen
              ></iframe>
            </div>
            <button onClick={() => setSelectedGame(null)} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-xl">
              Volver al menú
            </button>
          </div>
        )}

        <div className="mt-12 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Juegos Clásicos. Todos los derechos reservados.
        </div>
      </div>
    </div>
  );
}
