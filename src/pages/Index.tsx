import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-800 flex items-center justify-center p-4">
      <div 
        className="relative bg-[#D4C4B0] w-[1080px] h-[1080px] overflow-hidden"
        style={{ aspectRatio: '1/1' }}
      >
        
        {/* Decorative paw prints */}
        <div className="absolute top-20 right-20 text-[#8B7355] opacity-40 rotate-12">
          <div className="text-8xl">🐾</div>
        </div>
        <div className="absolute top-40 right-32 text-[#8B7355] opacity-40 -rotate-12">
          <div className="text-6xl">🐾</div>
        </div>
        <div className="absolute top-56 right-16 text-[#8B7355] opacity-40 rotate-45">
          <div className="text-7xl">🐾</div>
        </div>

        {/* Top section - Info and Location */}
        <div className="absolute top-12 left-12 right-12 flex justify-between text-black">
          <div>
            <p className="text-2xl mb-2 font-light">ИНФО/ ЗАПИСЬ:</p>
            <p className="text-3xl font-light">+79951159664</p>
          </div>
          <div className="text-right">
            <p className="text-2xl mb-2 font-light">МЕСТО:</p>
            <p className="text-2xl font-light">г. Железнодорожный</p>
            <p className="text-2xl font-light">Народного Ополчения 1</p>
          </div>
        </div>

        {/* Decorative comb */}
        <div className="absolute top-48 left-12 opacity-50">
          <Icon name="Scissors" size={120} className="text-[#6B5B4A] rotate-45" />
        </div>

        {/* Main title */}
        <div className="absolute top-56 left-0 right-0 text-center px-16">
          <h2 className="text-5xl mb-4 font-light text-black tracking-wide">19 ноября 2025</h2>
          <h1 className="text-7xl font-bold mb-4 text-black tracking-tight leading-tight">
            МАСТЕР КЛАСС
          </h1>
          <h2 className="text-6xl font-light text-black tracking-wide">
            «САЛОННЫЙ ГРУМИНГ
          </h2>
          <h2 className="text-6xl font-light text-black tracking-wide">
            КОШЕК»
          </h2>
        </div>

        {/* Program list */}
        <div className="absolute top-[580px] left-16 text-black space-y-3">
          <p className="text-3xl font-light">·теория</p>
          <p className="text-3xl font-light">·показательная</p>
          <p className="text-3xl font-light pl-2">модель</p>
          <p className="text-3xl font-light">·практическая часть</p>
          <p className="text-3xl font-light pl-2">на моделях</p>
          <p className="text-3xl font-light">·лайфхаки от преподавателя</p>
        </div>

        {/* Cat image */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px]">
          <img 
            src="https://cdn.poehali.dev/projects/cc13d582-ec34-4251-bd1c-c628027cfe45/files/58cd0ac8-4b9e-4cad-9c3d-231485c92bff.jpg" 
            alt="Maine Coon" 
            className="w-full h-full object-cover rounded-tl-full border-8 border-white opacity-90"
          />
        </div>

        {/* Logo */}
        <div className="absolute bottom-16 left-16">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-32 h-32 bg-[#2D2420] rounded-full flex items-center justify-center">
              <Icon name="Scissors" size={60} className="text-[#D4C4B0]" />
            </div>
          </div>
          <div className="text-6xl font-bold text-[#2D2420] tracking-wider" style={{ fontFamily: 'serif' }}>
            GROOM
          </div>
          <div className="text-6xl font-bold text-[#2D2420] tracking-wider" style={{ fontFamily: 'serif' }}>
            PAWS
          </div>
        </div>

        {/* Decorative sparkles */}
        <div className="absolute top-64 right-48 text-white text-4xl opacity-60">✨</div>
        <div className="absolute top-[480px] right-80 text-white text-3xl opacity-60">✨</div>

      </div>

      {/* Download button */}
      <div className="fixed bottom-8 right-8">
        <button 
          onClick={() => {
            alert('Сделайте скриншот афиши:\n\nWindows: Win + Shift + S\nMac: Cmd + Shift + 4\n\nИли нажмите правой кнопкой на афишу → "Сохранить изображение как"');
          }}
          className="px-8 py-4 bg-amber-700 text-white text-xl font-bold rounded-xl hover:bg-amber-800 transition-colors shadow-2xl"
        >
          📸 Сохранить афишу
        </button>
      </div>
    </div>
  );
};

export default Index;