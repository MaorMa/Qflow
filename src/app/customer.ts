export class Customer {
  id: number = 0;
  status: number;
  name: string;
  enterTime: Date;

  constructor() {
  }

  deserialize(input: any) {
    console.log(input);
    this.id = input.id;
    this.name = input.name;
    this.status = input.status;
    this.enterTime = new Date(input.enterTime);
    return this;
  }

}
