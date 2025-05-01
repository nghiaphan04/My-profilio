
import ProfileIntro from "../../components/ProfileIntro";
import AvatarSpin from "../../components/AvatarSpin";
import StatsGrid from "../../components/StatsGrid";

export default function Home() {
  return (
    <div className="mx-42 my-9 min-h-screen text-white flex flex-col justify-center items-center px-6">
      <div className="flex flex-col md:flex-row items-center gap-10">
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
