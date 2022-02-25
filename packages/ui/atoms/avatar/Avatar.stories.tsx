import { Avatar } from './Avatar';

export default {
    component: Avatar,
    title: 'Avatar'
};

const Template = args => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    source: 'https://pickaface.net/gallery/avatar/20151109_144853_2380_sample.png',
    shape: 'SQUARE'
};