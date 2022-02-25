import { Toggle } from './Toggle';

export default {
    component: Toggle,
    title: 'Toggle'
};

const Template = args => <Toggle {...args}>Label</Toggle>;

export const Default = Template.bind({});
Default.args = {
    labelPosition: 'left',
    checked: true,
};
