import { Pill } from './Pill';
import { CheckIcon } from '../../../icons';

export default {
    component: Pill,
    title: 'Pill'
};

const Template = args => <Pill {...args} />;

export const Default = Template.bind({});
Default.args = {
    stepIndex: 1,
    title: 'Title',
    variant: 'NOT_DONE'
};

export const HasIcon = Template.bind({});
HasIcon.args = {
    stepIndex: 1,
    title: 'Title',
    variant: 'NOT_DONE',
    icon: <CheckIcon />
};