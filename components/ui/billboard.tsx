import Image from "next/image";
import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div className="relative aspect-square md:aspect-[2.4/1] rounded-xl overflow-hidden">
        <Image
          src={data.imageUrl}
          alt={data.label}
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white drop-shadow-md">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
