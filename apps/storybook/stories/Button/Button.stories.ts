import { Button } from "@onboard/ui";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} as Meta<typeof Button>;

export const ButtonStory = {
  args: {
    buttonColor: "green",
    disabled: false,
  },
};
