import { Textarea } from './Textarea';

export default {
    component: Textarea,
    title: 'Textarea'
};

const Template = args => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: '',
    placeholder: 'Enter description',
    disabled: true,
};
