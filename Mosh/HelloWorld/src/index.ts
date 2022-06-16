let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
}

employee = {
  id: 123,
  name: 'John',
  retire: (date: Date) => {
    console.log(date);
  }
}