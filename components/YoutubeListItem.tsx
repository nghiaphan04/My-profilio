import Image from "next/image";

export default function YouTubeListItem() {
  return (
    <div className="flex gap-3 my-2 p-2 rounded-lg hover:bg-[#1e1e1e] transition-all cursor-pointer w-full max-w-md">

      <div className="relative w-32 h-20 flex-shrink-0">
        <Image
          src="/avatar.jpg" 
          alt="Thumbnail"
          fill
          className="rounded-md object-cover"
        />
 
        <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-xs px-1 rounded text-white">
          18:31
        </span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div>
          <p className="text-sm font-semibold text-white leading-tight line-clamp-2">
            FULL LIST STYLE HUY PT REMIX - MƯA RƠI VÀO PHÒNG...
          </p>
          <p className="text-xs text-gray-400">WAZA MUSIC ツ</p>
          <p className="text-xs text-gray-500">64 N lượt xem • 7 ngày trước</p>
        </div>
       
      </div>
    </div>
  );
}
