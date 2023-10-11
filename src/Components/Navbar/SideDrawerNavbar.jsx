import {
  Box,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  // FiCompass,
  // FiStar,
  // FiSettings,
} from "react-icons/fi";
import { GoProject } from "react-icons/go";
import { MdContacts, MdOutlineContactPage } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";

import { Link } from "react-scroll";
import { HamburgerIcon } from "@chakra-ui/icons";

import Typewriter from "typewriter-effect";

// const Links = ["About", "Skills", "Projects", "Contact", "Resume"];

const Links = [
  { name: "About", icon: FiHome },
  { name: "Skills", icon: FiTrendingUp },
  { name: "Projects", icon: GoProject },
  { name: "Contact", icon: MdContacts },
  { name: "Resume", icon: HiOutlineDownload },
];

function SideDrawerNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Open navigation"
        onClick={onOpen}
        size="md"
        display={{ md: "none" }}
        ml="20px"
      />

      <Drawer placement="left" isOpen={isOpen} onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <Flex justifyContent="space-between">
            <DrawerHeader minW="50%">
              {" "}
              <Typewriter
                options={{
                  strings: ["Hello There"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </DrawerHeader>
            <DrawerHeader>
              <CloseButton
                display={{ base: "flex" }}
                size="lg"
                onClick={onClose}
              />
            </DrawerHeader>
          </Flex>
          <DrawerBody>
            <Box pb={4} id="nav-menu">
              <Stack as={"nav"} spacing={4}>
                {Links.map((link, index) => (
                  <div key={index}>
                    {link.name === "Resume" ? (
                      // <NavItem
                      // key={link.name}
                      // icon={link.icon}
                      // onClose={onClose}


                      <Flex p="4"
                        mx="4" align={'center'}>
                        <Icon
                          mr="4"
                          fontSize="16"
                          _groupHover={{
                            color: "white",
                          }}
                          as={MdOutlineContactPage}
                        />
                        <a
                          className="nav-link resume"
                          onClick={() => {
                            window.open(
                              "https://drive.google.com/file/d/1pkkMgawxtbA3mYI61robfMhEI3gjEkv0/view",
                              "blank"
                            );
                          }}
                          id="resume-button-1"
                          href="./images/Karan-Kotai-Resume.pdf"
                          download="Karan-Kotai-Resume"
                          py={1}
                          rounded={"md"}
                          _hover={{
                            textDecoration: "none",
                          }}>
                          Resume
                        </a>
                      </Flex>
                    ) : (
                      <NavItem
                        key={link.name}
                        icon={link.icon}
                        onClose={onClose}>
                        {link.name}
                      </NavItem>
                    )}
                  </div>
                ))}
              </Stack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const NavItem = ({ icon, children, onClose, ...rest }) => {
  return (
    <Link
      to={children}
      smooth={true}
      duration={1000}
      offset={-80}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      onClick={onClose}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
//export the component

export default SideDrawerNavbar;
