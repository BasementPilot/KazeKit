import { Meta } from '@storybook/html';
import { Button, ButtonProps } from './button';
import { $ } from '@builder.io/qwik';

export default {
  title: 'Button',
  tags: ['autodocs'],
  argTypes: {
    onClick$: {
      defaultValue: '',
      description: 'The function called on click.'
    },
    text: { 
      defaultValue: '',
      control: "text",
      description: 'The text of the button.'
    },
    variant: { 
      defaultValue: '',
      control: "select",
      options: ["primary", "secondary"],
      description: 'The variation of the button.'
    }
  },
} as Meta<ButtonProps>;

const onClick$ = $(() => console.log('Button clicked!'));

const Template = (args: ButtonProps) => 
  <Button onClick$={ args.onClick$ }
          text={ args.text }
          variant={ args.variant }/>;

export const Primary: any = Template.bind({} as ButtonProps);
Primary.args = {
  onClick$: onClick$,
  text: 'Click me!',
  variant: 'primary'
} as ButtonProps;

export const Secondary: any = Template.bind({} as ButtonProps);
Secondary.args = {
  onClick$: onClick$,
  text: 'Click me!',
  variant: 'secondary'
} as ButtonProps;
