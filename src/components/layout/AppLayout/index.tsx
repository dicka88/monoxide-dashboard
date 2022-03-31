import { useState } from "react";
import { AppShell, Box, Container, createStyles, Text } from "@mantine/core";
import Sidebar from "./Sidebar";
import { ReactNode } from "react";
import { useMediaQuery } from "@mantine/hooks";
import Header from "./Header";

type AppLayoutProps = {
  children: ReactNode;
  title?: string;
  headingCustom?: ReactNode;
};

const useStyles = createStyles((theme) => ({
  titleText: {
    fontSize: 24,
    fontWeight: 700,
    letterSpacing: theme.other.letterSpacing.trackingTight,
    marginBottom: 24,
  },

  headingWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },

  container: {
    paddingLeft: 0,
    marginTop: 78,

    [theme.fn.largerThan(1000)]: {
      paddingLeft: 324,
    },
  },
}));

export default function AppLayout({
  children,
  title,
  headingCustom,
}: AppLayoutProps) {
  const largeScreen = useMediaQuery("(min-width: 1000px)");
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  const handleOpen = () => setOpened((o) => !o);

  return (
    <AppShell
      navbar={<Sidebar opened={opened} />}
      header={<Header opened={opened} handleOpen={handleOpen} />}
    >
      <Container size="md" className={classes.container}>
        {title && (
          <Box className={classes.headingWrapper}>
            <Text className={classes.titleText}>{title}</Text>
            {headingCustom}
          </Box>
        )}
        {children}
      </Container>
    </AppShell>
  );
}
