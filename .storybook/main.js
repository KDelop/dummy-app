const glob = require('glob');
const path = require('path');

const appDirectory = path.resolve(__dirname, '../');
const includePattern = `${appDirectory}/**/*.stories.@(js|jsx|ts|tsx)`;
const excludePattern = `${appDirectory}/**/node_modules/**/*.stories.@(js|jsx|ts|tsx)`;

const getStories = () => glob.sync(includePattern, { ignore: excludePattern });

module.exports = {
  stories: async list => [...list, ...getStories()],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
