export class DomainBase<T>{
  id: number;
  description: T;

  constructor(options: {
    description?: T,
    id?: number
  } = {}) {
    this.id = options.id;    this.description = options.description;
  }
}