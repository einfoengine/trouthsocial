import Image from "next/image";

const Avtr = ({ src }) => {
  return (
    <div className="ntavtr">
      <Image
        src={src}
        alt="User avatar"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Avtr;