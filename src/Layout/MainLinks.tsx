import React from "react";
import {
  IconGitPullRequest,
  IconAlertCircle,
} from "@tabler/icons-react";
import {
  ThemeIcon,
  UnstyledButton,
  Group,
  Text,
} from "@mantine/core";
import { Link } from "react-router-dom";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  path: string;
  setClose: any;
  sm: boolean;
}

function MainLink({ icon, color, label, path, setClose, sm }: MainLinkProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
      })}
      component={Link}
      to={path}
      onClick={() => sm && setClose()}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  {
    icon: <IconGitPullRequest size={16} />,
    color: "blue",
    label: "Expenses",
    path: "/expenses",
  },
  {
    icon: <IconAlertCircle size={16} />,
    color: "teal",
    label: "Search Bar",
    path: "/search",
  },
  // {
  //   icon: <IconMessages size={16} />,
  //   color: "violet",
  //   label: "Discussions",
  //   path: "/expenses",
  // },
  // {
  //   icon: <IconDatabase size={16} />,
  //   color: "grape",
  //   label: "Databases",
  //   path: "/expenses",
  // },
];

export function MainLinks({
  setClose,
  sm,
}: {
  setClose: any;
  sm: boolean;
}) {
  const links = data.map((link) => (
    <MainLink sm={sm} setClose={setClose} {...link} key={link.label} />
  ));
  return <div>{links}</div>;
}
