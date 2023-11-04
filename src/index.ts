export function main() {
    console.log('Hello, world!');
    Logger.log('Hello, log world!');
}

declare let global: any;
global.main = main;
