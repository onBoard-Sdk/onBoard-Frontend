import { Input } from "@onboard/ui";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
} as Meta<typeof Input>;

export const InputStory = {
  args: {
    label: "라벨",
    width: "200px",
    placeholder: "placeholder",
    helpMessage: "도움말",
    isInvalid: false,
    disabled: false,
  },
};
