import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-8">
      <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden">
        
        {/* Header */}
        <div className="relative p-12 pb-8">
          <div className="absolute top-8 right-8 opacity-20">
            <img 
              src="https://cdn.poehali.dev/projects/cc13d582-ec34-4251-bd1c-c628027cfe45/files/02d2eb5c-2be8-4dae-b0f7-6c31631b1563.jpg" 
              alt="Cat" 
              className="w-64 h-64 object-contain"
            />
          </div>
          
          <div className="relative z-10">
            <h1 className="text-7xl font-black text-stone-900 leading-tight mb-4">
              МАСТЕР-КЛАСС
            </h1>
            <h2 className="text-5xl font-bold text-amber-800 mb-6">
              ПО ГРУМИНГУ МЕЙН-КУН
            </h2>
            <p className="text-xl text-stone-700 font-medium">
              Профессиональный груминг королевской породы
            </p>
          </div>
        </div>

        {/* Program */}
        <div className="bg-stone-900 p-10">
          <h3 className="text-3xl font-black text-amber-100 mb-6">ПРОГРАММА</h3>
          <div className="space-y-3">
            {[
              { icon: "BookOpen", text: "Теоретическая часть" },
              { icon: "Eye", text: "Показательная модель" },
              { icon: "Wine", text: "Фуршет" },
              { icon: "Scissors", text: "Практическая часть" },
              { icon: "Award", text: "Выдача сертификатов" },
              { icon: "Camera", text: "Фото/видео контент участия" }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={20} className="text-white" />
                </div>
                <p className="text-lg text-amber-50 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="bg-amber-700 p-10">
          <div className="flex items-start space-x-4 mb-6">
            <Icon name="MapPin" size={32} className="text-amber-50 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-black text-amber-50 mb-2">МЕСТО ПРОВЕДЕНИЯ</h3>
              <p className="text-lg text-amber-100 leading-relaxed">
                Груминг салон <span className="font-bold">GROOM PAWS</span><br />
                ул. Народного Ополчения 1, Железнодорожный
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-stone-50 p-10">
          <div className="flex items-start space-x-4">
            <Icon name="Phone" size={32} className="text-amber-800 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-black text-stone-900 mb-2">ИНФОРМАЦИЯ И ЗАПИСЬ</h3>
              <a 
                href="tel:+79951159664" 
                className="text-3xl font-bold text-amber-800 hover:text-amber-900 transition-colors"
              >
                +7 995 115 96 64
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
