import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useClickOutside, useMediaQuery } from "@mantine/hooks";
import { Box, MantineColor } from "@mantine/core";
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
  Burger,
  useMantineTheme,
  ScrollArea,
} from "@mantine/core";

const Layout: React.FC = () => {
  const theme = useMantineTheme();
  const { rtl } = useRtlContext() as GlobalRtlContextType;

  const xs = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`, undefined, {
    getInitialValueInEffect: false,
  });
  const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`, undefined, {
    getInitialValueInEffect: false,
  });
  const md = useMediaQuery(`(max-width: ${theme.breakpoints.md})`, undefined, {
    getInitialValueInEffect: false,
  });

  const [opened, setOpened] = useState(sm ? false : true);
  const [top, setTop] = useState("0");
  const [navbar, setNavbar] = useState<HTMLElement | null>(null);
  const [header, setHeader] = useState<HTMLElement | null>(null);

  const borderColor: MantineColor =
    theme.colorScheme === "dark" ? theme.colors.gray[6] : theme.colors.dark[9];

  const bgColor: MantineColor =
    theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2];

  const navBgColor: MantineColor =
    theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.cyan[0];
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
        setTop(md ? "-56px" : "-70px");
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
          background: bgColor,
          paddingLeft: opened ? "300px !important" : "0 !important",
          display: xs && opened ? "none" : "initial",
          filter: sm && opened ? "blur(10px)" : "blur(0)",
          transition: "padding-left .3s",
        },
        root: {
          header: {
            transition: "top .3s linear, left .3s ease",
            borderBottomColor: borderColor,
          },
        },
      }}
      header={
        <Header
          ref={setHeader}
          top={top}
          height={{ base: 50, md: 70 }}
          p="md"
          dir={rtl ? "rtl" : "ltr"}
          sx={{
            zIndex: 101,
          }}
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
      navbarOffsetBreakpoint={"xs"}
      navbar={
        <Navbar
          ref={setNavbar}
          width={{ xs: opened ? 300 : 0 }}
          p={opened ? "xs" : 0}
          hiddenBreakpoint="xs"
          hidden={!opened}
          height={`calc({100%} - var(--mantine-header-height, 0rem) - var(--mantine-footer-height, 0rem))`}
          bg={navBgColor}
          sx={{
            overflow: "hidden",
            zIndex: 100,
            transition:
              "width 300ms ease, min-width 300ms ease, padding 500ms ease, border 300ms linear",
            borderRightColor: rtl ? borderColor : "unset",
            borderLeftColor: !rtl ? borderColor : "unset",
            borderWidth: opened ? "1px" : 0,
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
    />
  );
};

export default Layout;
