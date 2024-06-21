import Image from "next/image";
import logo from "../../../../public/ahmed_logo.png";

type HeroImageProps = {
  classes?: string;
};

const HeroImage: React.FunctionComponent<HeroImageProps> = ({ classes }) => {
  return (
    <div
      className={`bg-white  leading-none inline-block rounded-full    cursor-pointer 
hover:transition hover:duration-300 hover:border-white hover:ease-out hover:-translate-y-4 boxShadow ${classes}`}
    >
      <Image
        className="h-60 w-60 rounded-full  "
        src={logo}
        alt="Ahmed Logo"
        width={300}
        height={300}
      />
    </div>
  );
};

export default HeroImage;
