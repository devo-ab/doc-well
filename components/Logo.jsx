import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="lg:flex">
      <Link href="/" className="flex align-items-center">
        <Image className="h-6 w-auto" src="/logo.svg" alt="Logo" width={100} height={24} priority />
        <p className="text-[#059669] font-bold">Doc Well</p>
      </Link>
    </div>
  );
}
