export interface IUser {
  id: number;
  username: string;
  password: string;
}

export class User implements IUser {
  public id: number;
  public username: string;
  public password: string;

  constructor(id: number, username: string, password: string) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}
