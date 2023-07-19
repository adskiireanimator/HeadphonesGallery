import { Gallery } from "@/modules/Gallery";
import { ProductDescription } from "@/modules/ProductDescription";

export default function Home() {
  return (
    <main className="h-full w-screen">
      <div className="flex pt-20">
        <div className="w-full max-w-[600px] md:max-w-[960px] lg:max-w-[1200px] md:h-[604px] mx-auto flex flex-col md:flex-row gap-6">
          <div className="min-w-full md:min-w-[540px] lg:min-w-[660px] h-[604px]">
            <Gallery />
          </div>
          <ProductDescription
            title="Гарнитура игровая GMNG HS-L770G"
            article="ID 12345678"
            price="2 490 ₽."
            oldPrice="3 590 ₽."
            description={[
              "Тип амбушюр: мониторные;",
              "Тип соединения: проводные, USB;",
              "Мощность: 50 мВт;",
              "Конструктив: микрофон фиксированное, крепление - оголовье;",
              "Управление: регулятор громкости;",
              "Особенности: игровая, с подсветкой;",
            ]}
          />
        </div>
      </div>
    </main>
  );
}
