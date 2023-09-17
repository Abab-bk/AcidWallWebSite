// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `欢迎！以下是所有可用的命令：
\n${c}\n
[tab]: 补全命令。
[ctrl+l]/clear: 清除屏幕\n
输入 'sumfetch' 来显示我们的信息。
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `你好，我是 ${config.name}。
欢迎来到 AcidWallStudio 官方网站！
更多信息：
'sumfetch' - 简短介绍.`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

// Search
export const baidu = async (args: string[]): Promise<string> => {
  window.open(`https://baidu.com/search?q=${args.join(' ')}`);
  return `在 Baidu 搜索 ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `在 Bing 搜索 ${args.join(' ')}?`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const 炼金术士Clicker = async (args: string[]): Promise<string> => {
  return `你可以在 <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.games.clicker}" target="_blank">这里</a></u> 找到 炼金术士Clicker`;
};

export const 三个王国Brain = async (args: string[]): Promise<string> => {
  return `你可以在 <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.games.brain}" target="_blank">这里</a></u> 找到 三个王国Brain`;
};

export const 如如 = async (args: string[]): Promise<string> => {
  return `你可以在 <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.games.buddha}" target="_blank">这里</a></u> 找到 如如：功德冲榜模拟器`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  █████╗  ██████╗██╗██████╗ ██╗    ██╗ █████╗ ██╗     ██╗     ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗ 
  ██╔══██╗██╔════╝██║██╔══██╗██║    ██║██╔══██╗██║     ██║     ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
  ███████║██║     ██║██║  ██║██║ █╗ ██║███████║██║     ██║     ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
  ██╔══██║██║     ██║██║  ██║██║███╗██║██╔══██║██║     ██║     ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
  ██║  ██║╚██████╗██║██████╔╝╚███╔███╔╝██║  ██║███████╗███████╗███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
  ╚═╝  ╚═╝ ╚═════╝╚═╝╚═════╝  ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝   

这里是 AcidWallStudio 的官方网站！以下是我们制作的游戏：
<u><a class="text-light-blue dark:text-dark-blue underline" href="${config.games.buddha}" target="_blank">如如：功德冲榜模拟器</a></u>
<u><a class="text-light-blue dark:text-dark-blue underline" href="${config.games.clicker}" target="_blank">炼金术士Clicker</a></u>
<u><a class="text-light-blue dark:text-dark-blue underline" href="${config.games.brain}" target="_blank">三个王国Brain</a></u>
友情链接：
<u><a class="text-light-blue dark:text-dark-blue underline" href="${config.games.cricular}" target="_blank">环形防线</a></u>
输入 'help' 查看更多命令。
输入 'sumfetch' 来显示 AcidWallStudio 的信息。
输入 'repo' 或点击 <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">这里</a></u> 来查看Github仓库。
`;
};
