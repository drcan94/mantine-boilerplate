import React from "react";
import { Group, ActionIcon, useMantineColorScheme, Box } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export function Brand({sm, setClose} : {sm: boolean, setClose: any}) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.md,
        paddingTop: theme.spacing.xs,
        borderBottom: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      })}
    >
      <Group position="apart">
        <Box onClick={() => sm && setClose()} style={{ height: 26 }} component={Link} to={"/"}>
          <Logo colorScheme={colorScheme} />
        </Box>
        <ActionIcon
          variant="default"
          onClick={() => toggleColorScheme()}
          size={30}
        >
          {colorScheme === "dark" ? (
            <IconSun size={16} />
          ) : (
            <IconMoonStars size={16} />
          )}
        </ActionIcon>
      </Group>
    </Box>
  );
}
