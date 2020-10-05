import { Reservations } from './reservations';
import { Roles } from './roles';
import {Deserializable} from "./deserializable";

export class Users implements Deserializable {
    
   public id: number;
   public username: string;
   public phone: number;
   public password: string;
   public reservations: Reservations[];
   public roles: Roles[];
   

  public deserialize(input: any): this {
    
    Object.assign(this, input);

    this.roles = input.roles.map(role => new Roles().deserialize(role));

    this.reservations = input.reservations.map(reservation => new Reservations().deserialize(reservation));

    return this;
  }

   
}
