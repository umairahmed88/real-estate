import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import {
	Box,
	Flex,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Spacer,
} from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => (
	<Flex p='2' borderBottom='1px' borderColor='gray.100'>
		<Box fontSize='3xl' color='blue.400' fontWeight='bold'>
			<Link href='/' pl='2'>
				UA-Real Estate
			</Link>
		</Box>
		<Spacer />
		<Box>
			<Menu>
				<MenuButton
					as={IconButton}
					icon={<FcMenu />}
					variant='outlined'
					color='red.400'
				/>
				<MenuList>
					<Link href='/' legacyBehavior>
						<MenuItem icon={<FcHome />}>Home</MenuItem>
					</Link>
					<Link href='/search' legacyBehavior>
						<MenuItem icon={<BsSearch />}>Search</MenuItem>
					</Link>
					<Link href='/search?purpose=for-sale' legacyBehavior>
						<MenuItem icon={<FcAbout />}>Buy Home</MenuItem>
					</Link>
					<Link href='/search?purpose=for-rent' legacyBehavior>
						<MenuItem icon={<FiKey />}>Rent Property</MenuItem>
					</Link>
				</MenuList>
			</Menu>
		</Box>
	</Flex>
);

export default Navbar;
