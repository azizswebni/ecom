import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Shop from "./Shop";
import Carousel from "./Carousel";
import Produit from "./Produit";
import Sliders from "./slider";
export default function Smartphones() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "10px",
        }}
      >
        <Shop added="2" />
      </div>

      <div>
        <div className="Produits">
          <Produit
            description="Le Xiaomi Redmi Note 9 Pro est un smartphone de la famille « Redmi Note 9 » annoncé en avril 2020. Représentant le dernier prix de la gamme, il est équipé d'un écran de 6,67 pouces Full HD+, d'un SoC milieu de gamme Qualcomm Snapdragon 720G épaulé par 4 ou 6 Go de RAM. Il est notamment équipé d'un quadruple capteur photo avec un capteur principal de 64 mégapixels."
            titre="Xiomi Redmi Note 9 Pro"
            price="900 Dt"
            disponibility="Available"
            image="https://www.tunisianet.com.tn/166293-large/telephone-portable-xiaomi-redmi-note-9-pro-4g-vert.jpg"
          />
          <Produit
            price="960 Dt"
            description="
            Faites tomber les barrières avec le Nokia 5.3. L'incroyable quadruple appareil photo vous permet de repousser les limites de la photographie. Vous pouvez vous transporter dans un autre monde grâce au méga-écran de 6,55 pouces. Vous pouvez aussi dire adieu au stress de la panne de batterie grâce à son autonomie de 2 jours1. Quant à vos tâches, gérez-les en un instant avec le processeur Qualcomm® Snapdragon™ 665 et le dernier système d'exploitation Android 10, qui s'améliore à chaque mise à jour logicielle pendant 2 ans."
            titre="SNEAKER"
            disponibility="Available"
            image="https://images.ctfassets.net/wcfotm6rrl7u/2Obq6PBk4Itttstt47qoG4/0caca27b1e3ff118f9580420650a57b6/nokia_5_3-front_back-Cyan.png?fm=jpg&fl=progressive&bg=rgb:FFFFFF&q=80"
          />
          <Produit
            description="Huawei nova 7i est sorti en 2020 . Il mesure 159.2 x 76.3 x 8.7 mm et pèse 183 g. Il dispose d'un écran LTPS IPS LCD de 6.4 pouces. La définition décran est de 1080 x 2310 et la résolution est de 398 ppi. Un appareil photo Unique de 16 MP est responsable des selfies et les appels vidéo.. L'appareil principal Quadruple est de 48 MP. L'appareil intègre un processeur Octa-core (2x2.27 GHz Cortex-A76 & 6x1.88 GHz Cortex-A55) et de mémoire 128GB 8GB RAM. La batterie est de 4200 mAh."
            titre="HAT"
            price="1200dt"
            disponibility="Available"
            image="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/me-africa/tn/mkt/v4/home-page/hero-banner/nova-7i/nova-7i-new.png"
          />
          <Produit
            description=" Double SIM - Ecran 6.2 HD+ - Processeur MediaTek Helio A22 Quad-Core 2.0 GHz - RAM 2 Go - Mémoire 32 Go up to 512 Go - Android 9.0 Pie - Appareils Photo: 2x Arrière 13MP + 2MP, 5MP Frontal - Reconnaissance faciale - 4G - Wifi - Bluetooth - GPS - Batterie 4000 mAh - Couleur Gris"
            titre="Nokia 3310"
            price="369 dt"
            disponibility="Available"
            image="https://tunisiatech.tn/902-medium_default/Nokia-en-Tunisie-nokia-3310-tunisie.jpg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
