import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Hero Section with Inflatable Cat */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute inset-0 bg-gradient-to-l from-red-600 to-transparent"></div>
          </div>
          
          <div className="relative grid md:grid-cols-2 gap-8 p-12">
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl font-black text-black leading-tight tracking-tight">
                  МАСТЕР КЛАСС
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-800">
                  МЕЙН-КУН
                </h2>
                <p className="text-xl text-neutral-600 font-medium">
                  Профессиональный груминг королевской породы
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <img 
                src="https://cdn.poehali.dev/projects/cc13d582-ec34-4251-bd1c-c628027cfe45/files/02d2eb5c-2be8-4dae-b0f7-6c31631b1563.jpg" 
                alt="Inflatable Cat" 
                className="w-full max-w-sm drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Program Section */}
        <div className="bg-black text-white rounded-3xl p-12 mb-8 shadow-2xl">
          <h3 className="text-3xl font-black mb-8 tracking-tight">ПРОГРАММА</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="BookOpen" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Теоретическая часть</h4>
                <p className="text-neutral-400 text-sm">Основы груминга породы</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Eye" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Показательная модель</h4>
                <p className="text-neutral-400 text-sm">Демонстрация техник</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Wine" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Фуршет</h4>
                <p className="text-neutral-400 text-sm">Легкие закуски и напитки</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Scissors" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Практическая часть</h4>
                <p className="text-neutral-400 text-sm">Работа с моделями</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Award" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Выдача сертификатов</h4>
                <p className="text-neutral-400 text-sm">Официальный документ</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Camera" size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Фото/видео контент</h4>
                <p className="text-neutral-400 text-sm">Профессиональная съемка</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location and Contact Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="MapPin" size={32} className="text-white" />
              <h3 className="text-2xl font-black">МЕСТО</h3>
            </div>
            <p className="text-lg leading-relaxed">
              Груминг салон<br />
              <span className="font-bold text-2xl">GROOM PAWS</span>
            </p>
            <p className="mt-4 text-red-100">
              Народного Ополчения 1<br />
              Железнодорожный
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-2xl border-4 border-black hover:shadow-3xl transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Phone" size={32} className="text-red-600" />
              <h3 className="text-2xl font-black text-black">ЗАПИСЬ</h3>
            </div>
            <a 
              href="tel:+79951159664" 
              className="text-3xl font-bold text-red-600 hover:text-red-700 transition-colors block"
            >
              +7 995 115 96 64
            </a>
            <p className="mt-4 text-neutral-600 text-sm">
              Информация и бронирование мест
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
