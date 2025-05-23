import React from "react";

interface Item {
  type: string;
  name: string;
  image: string;
}

const items: Item[] = [
  {
    type: "CLOTHING",
    name: "FIRE JACKET",
    image: "/img/fire_jacket.png",
  },
  {
    type: "ARMOR",
    name: "BIG GRIN",
    image: "/img/big-grin.png",
  },
  {
    type: "WEAPON",
    name: "TEMPERED MP5",
    image: "/img/tempered-mp5.png",
  },
  {
    type: "WEAPON",
    name: "DESERT HUNTER",
    image: "/img/desert-hunter.png",
  },
  {
    type: "MISC",
    name: "GRANDMOTHER'S GIFT BARRICADE",
    image: "/img/grandmothers-gift-barricade.png",
  },
  {
    type: "ARMOR",
    name: "GLOWING SKULL",
    image: "/img/glowing-skull.png",
  },
  {
    type: "WEAPON",
    name: "BANANA EOKA",
    image: "/img/banana-eoka.png",
  },
  {
    type: "CZ75-AUTO",
    name: "HOT-TEMPERED LONGSWORD",
    image: "/img/hot-tempered-longsword.png",
  },
];

const Card: React.FC<Item> = ({ type, name, image }) => (
  <div className="relative bg-white/5 rounded-lg px-6 py-6 flex flex-col items-start shadow-xl transition-all duration-200 group cursor-pointer border-0 border-b-4 border-b-violet overflow-hidden">
    <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-[rgba(104,48,224,0.25)] to-[rgba(104,48,224,0)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="w-full flex flex-col items-start z-10 relative">
      <h4 className="text-grey text-[9px] font-semibold mb-0.5 uppercase tracking-widest">{type}</h4>
      <h2 className="text-white text-base font-extrabold mb-0.5 leading-tight uppercase tracking-tight">{name}</h2>
    </div>
    <div className="w-full flex justify-center items-center flex-1 z-10 relative">
      <img src={image} alt={name} className="w-22 h-22 object-contain my-0.5 drop-shadow-lg transition-transform duration-500 group-hover:scale-110" style={{ width: '70px', height: '70px' }} />
    </div>
  </div>
);

const LastCard: React.FC<Item> = ({ type, name, image }) => (
  <div className="relative bg-white/5 rounded-lg px-8 py-8 flex flex-row items-end justify-between shadow-xl transition-all duration-200 group cursor-pointer border-0 border-b-4 border-b-violet col-span-2 overflow-hidden">
    <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-[rgba(104,48,224,0.25)] to-[rgba(104,48,224,0)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="flex flex-col items-start justify-end flex-1 h-full z-10 relative">
      <h4 className="text-grey text-[9px] font-semibold mb-0.5 uppercase tracking-widest">{type}</h4>
      <h1 className="text-white text-base font-extrabold mb-0.5 leading-tight uppercase tracking-tight">{name}</h1>
    </div>
    <div className="flex justify-center items-end flex-1 z-10 relative">
      <img src={image} alt={name} className="w-40 h-24 object-contain ml-2 drop-shadow-lg transition-transform duration-500 group-hover:scale-110" />
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full font-sans relative overflow-hidden flex flex-col items-center justify-center">
      <img src="/img/background.png" alt="background" className="fixed inset-0 w-full h-full object-cover grayscale opacity-30 -z-10" />
      <div className="fixed inset-0 w-full h-full bg-black opacity-90 -z-10 pointer-events-none" />
      <div className="w-full border-t border-b flex items-center" style={{ borderColor: 'rgba(255,255,255,0.06)', marginBottom: '40px' }}>
        <div style={{ width: 'calc(4 * 18vw + 3 * 20px)', margin: '0 auto' }} className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rotate-45 border-t-2 border-l-2 border-yellow mt-2 mr-1" />
            <span className="text-yellow font-semibold text-base uppercase tracking-wider flex items-center">Text for heading</span>
          </div>
          <button className="text-yellow text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
            Hide
            <span className="inline-block w-2 h-2 rotate-45 border-t-2 border-l-2 border-yellow mt-1 ml-1" />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[980px]">
          <div className="w-full flex flex-col items-center justify-center">
            <div
              className="grid"
              style={{
                gridTemplateColumns: 'repeat(4, 18vw)',
                gridTemplateRows: 'repeat(3, 24vh)',
                display: 'grid',
                gap: '20px',
              }}
            >
              <div className="row-span-2 col-span-2 bg-white/5 rounded-lg px-10 py-10 flex flex-col items-start relative shadow-xl border-0 border-b-4 border-b-violet overflow-hidden group">
                <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-[rgba(104,48,224,0.25)] to-[rgba(104,48,224,0)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-grey text-xs font-semibold mb-1 uppercase tracking-widest z-10 relative">CLOTHING</h3>
                <h1 className="text-white text-2xl font-extrabold mb-1 leading-tight uppercase tracking-tight z-10 relative">FIRE JACKET</h1>
                <div className="w-full flex justify-center items-center flex-1 z-10 relative">
                  <img src="/img/fire_jacket.png" alt="Fire Jacket" className="w-56 h-56 object-contain my-1 drop-shadow-lg transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
              {items.slice(1, 7).map((item, i) => (
                i === 6 ? null : <Card key={item.name} {...item} />
              ))}
              <LastCard {...items[7]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App; 