import { Meta, Story } from '@storybook/html';
import { Button, ButtonProps } from './button';
import { $ } from '@builder.io/qwik';
import { LuRocket } from '@qwikest/icons/lucide';

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
      options: ['primary', 'secondary', 'success', 'danger', 'warning'],
      description: 'The variation of the button.'
    }
  },
} as Meta<ButtonProps>;

const onClick$ = $(() => console.log('Button clicked!'));

const Template = (args: ButtonProps) => 
  <Button onClick$={ args.onClick$ }
          text={ args.text }
          variant={ args.variant }>
  </Button>;

const TemplateWithIcon = (args: ButtonProps) => 
  <Button onClick$={ args.onClick$ }
          text={ args.text }
          variant={ args.variant }>
          <div q:slot="icon" style={{ color: "white", fontSize: "24px" }}>
            <LuRocket/>
          </div>
  </Button>;

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

export const Success: any = Template.bind({} as ButtonProps);
Success.args = {
  onClick$: onClick$,
  text: 'Click me!',
  variant: 'success'
} as ButtonProps;

export const Danger: any = Template.bind({} as ButtonProps);
Danger.args = {
  onClick$: onClick$,
  text: 'Click me!',
  variant: 'danger'
} as ButtonProps;

export const Warning: any = Template.bind({} as ButtonProps);
Warning.args = {
  onClick$: onClick$,
  text: 'Click me!',
  variant: 'warning'
} as ButtonProps;


export const ButtonWithIcon: any = TemplateWithIcon.bind({} as ButtonProps);
ButtonWithIcon.args = {
  onClick$: onClick$,
  text: 'Click me!',
  variant: 'primary'
} as ButtonProps;