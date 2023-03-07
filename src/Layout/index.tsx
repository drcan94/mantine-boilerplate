import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useClickOutside, useMediaQuery } from "@mantine/hooks";
import { Box } from "@mantine/core";
import { MainLinks } from "./MainLinks";
import { Brand } from "./Brand";
import { User } from "./User";
import {
  useRtlContext,
  GlobalRtlContextType,
} from "../providers/RtlContextProvider";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  // MediaQuery,
  Burger,
  useMantineTheme,
  ScrollArea,
} from "@mantine/core";

const Layout: React.FC = () => {
  const theme = useMantineTheme();
  const { rtl } = useRtlContext() as GlobalRtlContextType;
  
  const xs = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);

  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  
  const md = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  
  const [opened, setOpened] = useState(sm ? false : true);
  const [top, setTop] = useState("0");
  const [navbar, setNavbar] = useState<HTMLElement | null>(null);
  const [header, setHeader] = useState<HTMLElement | null>(null);

  useClickOutside(() => md && opened && setOpened(false), null, [
    navbar,
    header,
  ]);

  useEffect(() => {
    sm ? setOpened(false) : setOpened(true);
  }, [sm]);

  useEffect(() => {
    let prevScrollpos = window.scrollY;
    window.onscroll = function () {
      let currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        setTop("0");
      } else {
        setTop(md ? "-50px" : "-70px");
      }
      prevScrollpos = currentScrollPos;
    };
  }, [top, md]);

  return (
    <AppShell
      children={
        <Box dir={rtl ? "rtl" : "ltr"} style={{ padding: "0 20px" }}>
          <Outlet />
        </Box>
      }
      layout={xs ? "default" : "alt"}
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          paddingLeft: opened ? "300px !important" : "0 !important",
          display: xs && opened ? "none" : "initial",
          filter: sm && opened ? "blur(10px)" : "blur(0)",
          transition: "padding-left .3s",
        },
        root: {
          header: {
            transition: "top .3s linear, left .3s ease",
            borderBottomColor:
              theme.colorScheme === "dark"
                ? theme.colors.gray[6]
                : theme.colors.dark[9],
          },
        },
      }}
      navbarOffsetBreakpoint={"xs"}
      navbar={
        <Navbar
          ref={setNavbar}
          width={{ xs: opened ? 300 : 0 }}
          p={opened ? "xs" : 0}
          hiddenBreakpoint="xs"
          hidden={!opened}
          sx={{
            overflow: "hidden",
            transition:
              "width 300ms ease, min-width 300ms ease, padding 500ms ease",
          }}
        >
          <Navbar.Section mt={0}>
            <Brand sm={sm} setOpened={setOpened} />
          </Navbar.Section>
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
            <Box py="md">
              <MainLinks sm={sm} setOpened={setOpened} />
            </Box>
          </Navbar.Section>
          <Navbar.Section>
            <User />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header
          ref={setHeader}
          top={top}
          height={{ base: 50, md: 70 }}
          p="md"
          dir={rtl ? "rtl" : "ltr"}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              minWidth: "100%",
            }}
          >
            {/* <MediaQuery largerThan="sm" styles={{ display: "none" }}> */}
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="md"
              ml={-5}
            />
            {/* </MediaQuery> */}

            <Text>Application header</Text>
          </div>
        </Header>
      }
    />
  );
};

export default Layout;
