import React from "react";

type Props = {
  title: string;
  article: string;
  price: string;
  oldPrice?: string;
  description: string[];
};

export const ProductDescription: React.FC<Props> = ({
  title,
  article,
  price,
  oldPrice,
  description,
}) => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-medium mb-1 w-[300px]">{title}</h3>
      <p className="text-lg font-light text-gray-light italic">{article}</p>
      <div className="flex gap-[5px] font-medium pt-[18px]">
        <p className="text-xl">{price}</p>
        {oldPrice && (
          <p className="text-xl line-through text-gray">{oldPrice}</p>
        )}
      </div>
      <div className="my-[10px]">
        <p className="text-sm font-light mb-[3px]">Подключение</p>
        <select
          name=""
          id=""
          className="rounded bg-select-contain border-2 border-select"
        >
          <option value="Проводное">Проводное</option>
          <option value="Беспроводное + 590 руб ">
            Беспроводное + 590 руб{" "}
          </option>
        </select>
        <div className="mt-[20px] flex flex-col gap-y-2">
          {description.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <button className="rounded-[5px] bg-danger px-[30px] py-4 text-white mt-[20px]">
          В корзину
        </button>
      </div>
    </div>
  );
};
