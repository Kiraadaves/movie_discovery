import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
export default function Footer() {
  return (
    <div className=" mt-20 flex mx-auto w-3/5 flex-col justify-center text-center">
      <div className="my-4 flex justify-center  ">
        <div className="px-4 lg:mx-6">
          <FacebookIcon />
        </div>
        <div className="px-4 lg:mx-6">
          <InstagramIcon className="" />
        </div>
        <div className="px-4 lg:mx-6">
          <TwitterIcon />
        </div>
        <div className="px-4 lg:mx-6">
          <YouTubeIcon className="" />
        </div>
      </div>
      <div className="flex justify-center my-4 text-lg font-bold">
        <div>
          <h2>Conditions of Use</h2>
        </div>
        <div className="mx-14">
          <h2>Privacy & Policy</h2>
        </div>
        <div>
          <h2>Press Room</h2>
        </div>
      </div>
      <div className="my-4">
        <p className="text-slate-50 text-lg">
          &copy; 2023 MovieBox by Chinwe Chukwuogor
        </p>
      </div>
    </div>
  );
}
