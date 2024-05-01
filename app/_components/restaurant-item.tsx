import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";
import Link from "next/link";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <Link
      className="min-w-[266px] max-w-[266px]"
      href={`/restaurants/${restaurant.id}`}
    >
      <div className="w-full  space-y-3">
        <div className="w-full h-[136px] relative">
          <Image
            src={restaurant.imageUrl}
            fill
            className="object-cover rounded-lg"
            alt="teste"
          />

          <div className="absolute top-2 left-2 gap-[2px] bg-primary py-[2px] px-2 rounded-full bg-white flex items-center">
            <StarIcon size={12} className="fill-yellow-500 text-yellow-400" />
            <span className="font-semibold text-xs">5</span>
          </div>

          <Button
            size="icon"
            className="absolute right-2 top-2 bg-gray-700 rounded-full h-7 w-7"
          >
            <HeartIcon size={12} className="fill-white" />
          </Button>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{restaurant.name}</h3>
          {/* INFORMAÇÕES DA ENTREGA */}
          <div className="flex gap-3">
            {/* CUSTO DE ENTREGA */}
            <div className="flex gap-1 items-center">
              <BikeIcon size={14} className="text-primary" />
              <span className="text-xs text-muted-foreground">
                {Number(restaurant.deliveryFee) === 0
                  ? "Entrega grátis"
                  : formatCurrency(Number(restaurant.deliveryFee))}
              </span>
            </div>
            {/* TEMPO DE ENTREGA */}
            <div className="flex gap-1 items-center">
              <TimerIcon size={14} className="text-primary" />
              <span className="text-xs text-muted-foreground">
                {restaurant.deliveryTimeMinutes} min
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantItem;
