import { Step } from './Step';

export default {
    component: Step,
    title: 'Step'
};

const Template = args => <Step {...args} />;

export const CURRENT = Template.bind({});
CURRENT.args = {
    stepIndex: 1,
    variant: 'CURRENT'
};

export const DONE = Template.bind({});
DONE.args = {
    stepIndex: 1,
    variant: 'DONE'
};

export const NOT_DONE = Template.bind({});
NOT_DONE.args = {
    stepIndex: 1,
    variant: 'NOT_DONE'
};