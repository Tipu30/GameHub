import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { IconType } from 'react-icons/lib/esm/iconBase';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        //name:PlayStation
        //slug:playstation
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe

    }
    return (
        <HStack margin={'10px'}>
            {platforms.map((platform) => <Icon as={iconMap[platform.slug]} key={platform.id} color='gray.500'>{platform.name}</Icon>)}
        </HStack>
    )

}

export default PlatformIconList;