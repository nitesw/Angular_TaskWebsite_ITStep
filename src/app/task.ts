export enum Priorities {
  Lowest,
  Normal,
  Highest,
}

export interface ITask {
  id: number;
  title: string;
  date: Date;
  items: string[];
  isCompleted: boolean;
  priority: Priorities;
}

export const TODO_TASKS: ITask[] = [
  {
    id: 1,
    title: 'Groceries',
    date: new Date(2024, 8, 25),
    items: ['fruits', 'vegatables', 'bread', 'milk', 'eggs'],
    isCompleted: false,
    priority: Priorities.Normal,
  },
  {
    id: 2,
    title: 'VS 2022',
    date: new Date(2024, 7, 25),
    items: ['Create funct "Hello World!"'],
    isCompleted: false,
    priority: Priorities.Lowest,
  },
  {
    id: 3,
    title: 'Gym',
    date: new Date(2024, 8, 25),
    items: ['Go to the gym'],
    isCompleted: false,
    priority: Priorities.Highest,
  },
  {
    id: 4,
    title: 'PC Build',
    date: new Date(2024, 8, 25),
    items: [
      'Ryzen 5 5500',
      'RX 5700 XT',
      '650w GOLD',
      '1TB m.2 SSD',
      'B450 Auros Pro',
    ],
    isCompleted: true,
    priority: Priorities.Highest,
  },
  {
    id: 5,
    title: 'Homework',
    date: new Date(2024, 8, 25),
    items: ['Write a text', 'Solve equations'],
    isCompleted: true,
    priority: Priorities.Highest,
  },
];
