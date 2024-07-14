import Image from "next/image";

interface BrickBroLogoProps {
    isCentered: boolean;
}

export default function BrickBroLogo({ isCentered }: BrickBroLogoProps) {
    return (
        <div className={`${isCentered ? 'flex justify-center' : ''} w-full`}>
            <Image
                src="/logo_brickbro.png"
                alt="Logo of the company BrickBro"
                width={200}
                height={100}
            />
        </div>
    );
}