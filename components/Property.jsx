import { FaBed, FaBath } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import Link from "next/link";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import DefaultImage from "../assets/images/house.jpeg";

const Property = ({
	property: {
		coverPhoto,
		price,
		rentFrequency,
		rooms,
		title,
		baths,
		area,
		agency,
		isVerified,
		externalId,
	},
}) => {
	<Link href={`/property/${externalId}`} passHref legacyBehavior>
		<Flex
			flexWrap='wrap'
			w='420'
			p='5'
			paddingTop='0'
			justifyContent='flex-start'
			cursor='pointer'
		>
			<Box>
				<Image
					src={coverPhoto ? coverPhoto.url : DefaultImage}
					alt='house'
					width={400}
					height={260}
				/>
			</Box>
		</Flex>
	</Link>;
};

export default Property;
