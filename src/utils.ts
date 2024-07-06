export type MainDirectories = 'utils' | 'concepts' | 'algorithms';

export type Map = {
    utils: 'BasicCalculator';
    concepts: 'Loops';
    algorithms: '';
};

export type SubDirectories<T extends MainDirectories> = Map[T];
