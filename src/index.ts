import path from 'path';
import { MainDirectories, SubDirectories } from './utils';

function execute<T extends MainDirectories>(mainDirectory: T, subDirectory: SubDirectories<T>) {
    try {
        console.log('*********************************************************************');
        console.log(`Executing ${mainDirectory} / ${subDirectory}...`);
        const executablePath = path.resolve(path.join(__dirname, mainDirectory, subDirectory));
        require(executablePath.concat('/index.ts'));
        console.log(`${subDirectory} executed successfully`);
    } catch (error) {
        console.log('Error while executing file');
    } finally {
        console.log('*********************************************************************');
    }
}
execute('concepts', 'Loops');
