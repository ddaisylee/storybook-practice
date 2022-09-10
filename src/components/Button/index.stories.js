import Button from ".";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {
    color: { control: 'color' },
    size: { control: { type: 'radio', options: ['big', 'small'] } },
    text: { control: 'text' }
  }
};

export const StorybookButton = (args) => {
  return <Button {...args}></Button>
}