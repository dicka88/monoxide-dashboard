import AuthLayout from "@/components/layout/AuthLayout";
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Card,
  createStyles,
  Group,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import { Eye, EyeOff, Leaf } from "tabler-icons-react";

type SignInProps = {};

const useStyles = createStyles((theme) => ({
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  root: {
    position: "relative",
  },

  input: {
    height: "auto",
    paddingTop: 18,
  },

  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },

  titleWrapper: {
    display: "flex",
    gap: 8,
  },

  title: {
    fontWeight: "bold",
    letterSpacing: theme.other.letterSpacing.trackingTight,
  },

  card: {
    maxWidth: 400,
    width: "100%",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  link: {
    paddingTop: 2,
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
    fontWeight: 500,
    fontSize: theme.fontSizes.xs,
  },

  buttonWrapper: {
    maxWidth: 400,
    width: "100%",
  },

  fullWidth: {
    width: "100%",
  },
}));

const SignIn = ({}: SignInProps) => {
  const { classes } = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeShowPassword = () => setShowPassword((v: boolean) => !v);

  return (
    <AuthLayout>
      <Box className={classes.contentWrapper} p={24}>
        <Box className={classes.titleWrapper}>
          <Leaf />
          <Text className={classes.title}>Monoxide</Text>
        </Box>
        <Card className={classes.card}>
          <TextInput
            label="Email"
            placeholder="Input email address"
            classNames={classes}
          />
          <Group direction="column" position="right">
            <TextInput
              rightSection={
                <ActionIcon onClick={handleChangeShowPassword}>
                  {showPassword ? <Eye size={12} /> : <EyeOff size={12} />}
                </ActionIcon>
              }
              label="Password"
              placeholder="Input password"
              classNames={classes}
              type={!showPassword ? "password" : "text"}
              className={classes.fullWidth}
            />
            <Anchor<"a">
              href="#"
              onClick={(event) => event.preventDefault()}
              className={classes.link}
            >
              Forgot your password?
            </Anchor>
          </Group>
        </Card>
        <Box className={classes.buttonWrapper}>
          <Button className={classes.fullWidth}>Masuk</Button>
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default SignIn;
