import ProfileIntro from "../../components/ProfileIntro";
import AvatarSpin from "../../components/AvatarSpin";
import StatsGrid from "../../components/StatsGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-8 md:px-52 py-28">
      <div className="flex flex-col md:flex-row items-center gap-10 w-full">
        <div className="md:basis-[60%] w-full">
          <ProfileIntro />
        </div>
        <div className="md:basis-[40%] w-full">
          <AvatarSpin />
        </div>
      </div>
      <StatsGrid />
    </div>
  );
}
