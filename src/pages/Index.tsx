const Index = () => {
  const posters = [
    {
      url: "https://cdn.poehali.dev/projects/cc13d582-ec34-4251-bd1c-c628027cfe45/files/d05c8ca7-19fc-46a9-a37c-396805a14451.jpg",
      title: "Вариант 1: Чёрно-красный",
      filename: "афиша-вариант-1.jpg"
    },
    {
      url: "https://cdn.poehali.dev/projects/cc13d582-ec34-4251-bd1c-c628027cfe45/files/21d13ea4-2bef-41c8-b954-fcd03cbbe13e.jpg",
      title: "Вариант 2: Бежево-коричневый",
      filename: "афиша-вариант-2.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Афиши мастер-класса
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {posters.map((poster, index) => (
            <div key={index} className="bg-neutral-800 rounded-xl p-6 shadow-2xl">
              <h2 className="text-xl font-bold text-white mb-4">{poster.title}</h2>
              <img 
                src={poster.url} 
                alt={poster.title} 
                className="w-full h-auto rounded-lg shadow-lg mb-4"
              />
              <a 
                href={poster.url} 
                download={poster.filename}
                className="block w-full text-center px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
              >
                Скачать
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;