// import theme from "@/styles/thema";
// import React from "react";
// import "../../styles/globals.css";

// const AboutPage = () => {
//   return (
//     <div className="bg-gray-200 min-h-screen pt-20 px-5 my-auto  ">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {/* Biz Kimiz */}
//         <div className="w-full p-8 rounded-lg bg-gradient-to-t from-[#252545] to-[#4f69bf] animate-fadeIn">
//           <h1 className="text-4xl font-bold text-red-800">BİZ KİMİZ?</h1>
//           <div className="w-40 h-1 bg-red-800 mb-5"></div>
//           <div className="text-lg text-gray-700" style={{ color: theme.Colors.darkblue }}>
//             <p className="text-white">
//               2024 yılında kurulan Şifalar Tarım, Hayvancılık, Akaryakıt ve Nakliyat, bölge halkına
//               güvenilir hizmet sunan bir aile işletmesidir. Ekibimizle faaliyetlerimizi titizlikle
//               sürdürüyoruz. Petrol istasyonumuzla çevre köy ve kasabalara akaryakıt hizmeti
//               sağlarken, tarım ve hayvancılık sektöründe de üreticilere destek oluyoruz. Ayrıca
//               firmamıza ait tırlarımızla iller arası nakliyat yaparak yük taşımacılığı hizmeti
//               veriyoruz. Güvenilir hizmet anlayışımız ve güçlü aile bağlarımızla bölgemizin büyüyen
//               değerlerinden biri olmanın gururunu yaşıyoruz.
//             </p>
//           </div>
//         </div>

//         {/* Vizyonumuz */}
//         <div className="w-full p-8 rounded-lg bg-gradient-to-t from-[#1e1e3e] to-[#4f69bf]">
//           <h1 className="text-4xl font-bold text-red-800">Vizyonumuz</h1>
//           <div className="w-52 h-1 bg-red-800 mb-5"></div>
//           <div className="text-lg text-gray-700" style={{ color: theme.Colors.darkblue }}>
//             <p className="text-white">
//               Şifalar Tarım, Hayvancılık, Akaryakıt ve Nakliyat olarak, sürdürülebilir ve güvenilir
//               hizmet anlayışını benimsiyor, çevremizdeki topluluklara katma değer sağlamak için
//               sürekli gelişim ve inovasyonu hedefliyoruz. Vizyonumuz, tarım, hayvancılık ve nakliyat
//               sektörlerinde lider bir firma olmak ve bölgedeki her müşterimize kaliteli, verimli ve
//               çevre dostu çözümler sunmaktır. Gelecekte, sektördeki yenilikçi çözümlerle büyümeyi
//               sürdürürken, hizmet kalitemizden ödün vermemek ve toplumumuza daha fazla katkı
//               sağlamak için var gücümüzle çalışmaya devam edeceğiz.
//             </p>
//           </div>
//         </div>

//         {/* Misyonumuz */}
//         <div className="w-full p-8 rounded-lg bg-gradient-to-t from-[#1e1e3e] to-[#4f69bf]">
//           <h1 className="text-4xl font-bold text-red-800">Misyonumuz</h1>
//           <div className="w-52 h-1 bg-red-800 mb-5"></div>
//           <div className="text-lg text-gray-700" style={{ color: theme.Colors.darkblue }}>
//             <p className="text-white">
//               Müşteri memnuniyetini ön planda tutarak, her alanda en yüksek hizmet standartlarını
//               hedefliyoruz. Yüksek kaliteli ürün ve hizmetlerle, bölge halkının yaşam kalitesini
//               artırmayı, çevre dostu ve sürdürülebilir çözümlerle sektörümüze değer katmayı
//               amaçlıyoruz.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;
import React from "react";
import "../../styles/globals.css";
import theme from "@/styles/thema";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-20 px-5 my-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Biz Kimiz */}
        <div className="w-full p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-4xl font-bold text-red-800 mb-4">BİZ KİMİZ?</h1>
          <div className="w-40 h-1 bg-[#4f69bf] mb-6"></div>
          <div className="text-lg text-gray-700">
            <p>
              2024 yılında kurulan Şifalar Tarım, Hayvancılık, Akaryakıt ve Nakliyat, bölge halkına
              güvenilir hizmet sunan bir aile işletmesidir. Ekibimizle faaliyetlerimizi titizlikle
              sürdürüyoruz. Petrol istasyonumuzla çevre köy ve kasabalara akaryakıt hizmeti
              sağlarken, tarım ve hayvancılık sektöründe de üreticilere destek oluyoruz. Ayrıca
              firmamıza ait tırlarımızla iller arası nakliyat yaparak yük taşımacılığı hizmeti
              veriyoruz. Güvenilir hizmet anlayışımız ve güçlü aile bağlarımızla bölgemizin büyüyen
              değerlerinden biri olmanın gururunu yaşıyoruz.
            </p>
          </div>
        </div>

        {/* Vizyonumuz */}
        <div className="w-full p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-4xl font-bold  text-red-800  mb-4">Vizyonumuz</h1>
          <div className="w-52 h-1 bg-[#4f69bf] mb-6"></div>
          <div className="text-lg text-gray-700">
            <p>
              Şifalar Tarım, Hayvancılık, Akaryakıt ve Nakliyat olarak, sürdürülebilir ve güvenilir
              hizmet anlayışını benimsiyor, çevremizdeki topluluklara katma değer sağlamak için
              sürekli gelişim ve inovasyonu hedefliyoruz. Vizyonumuz, tarım, hayvancılık ve nakliyat
              sektörlerinde lider bir firma olmak ve bölgedeki her müşterimize kaliteli, verimli ve
              çevre dostu çözümler sunmaktır. Gelecekte, sektördeki yenilikçi çözümlerle büyümeyi
              sürdürürken, hizmet kalitemizden ödün vermemek ve toplumumuza daha fazla katkı
              sağlamak için var gücümüzle çalışmaya devam edeceğiz.
            </p>
          </div>
        </div>

        {/* Misyonumuz */}
        <div className="w-full p-8 rounded-lg bg-white shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-2 border-red-800">
          <h1 className="text-4xl font-bold  text-red-800  mb-4">Misyonumuz</h1>
          <div className="w-52 h-1 bg-[#4f69bf] mb-6"></div>
          <div className="text-lg text-gray-700">
            <p>
              Müşteri memnuniyetini ön planda tutarak, her alanda en yüksek hizmet standartlarını
              hedefliyoruz. Yüksek kaliteli ürün ve hizmetlerle, bölge halkının yaşam kalitesini
              artırmayı, çevre dostu ve sürdürülebilir çözümlerle sektörümüze değer katmayı
              amaçlıyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
