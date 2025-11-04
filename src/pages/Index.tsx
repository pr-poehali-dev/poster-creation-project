const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <img 
          src="https://cdn.poehali.dev/projects/cc13d582-ec34-4251-bd1c-c628027cfe45/files/d05c8ca7-19fc-46a9-a37c-396805a14451.jpg" 
          alt="Афиша мастер-класса по грумингу мейн-кунов" 
          className="w-full h-auto rounded-lg shadow-2xl"
        />
        <div className="mt-6 text-center">
          <a 
            href="https://cdn.poehali.dev/projects/cc13d582-ec34-4251-bd1c-c628027cfe45/files/d05c8ca7-19fc-46a9-a37c-396805a14451.jpg" 
            download="афиша-мастер-класс-мейнкун.jpg"
            className="inline-block px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
          >
            Скачать афишу
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;