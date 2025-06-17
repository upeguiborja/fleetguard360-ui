import Image from "next/image";

const Logo = () => {
  return (
    <Image
      className="mx-auto"
      src="/logo.svg"
      alt="FleetGuard 360"
      width={200}
      height={56}
    />
  );
};

export default Logo;