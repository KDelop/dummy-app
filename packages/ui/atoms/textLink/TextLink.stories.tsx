import { TextLink } from './TextLink';

export default {
    component: TextLink,
    title: 'TextLink'
};

const Template = args => <TextLink {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Link text',
    link: 'https://bing.com'
};