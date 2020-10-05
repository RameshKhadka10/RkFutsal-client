import { Time } from '@angular/common';
import { Deserializable } from './deserializable';

export class Reservations implements Deserializable{
    public id: number;
    public startingTime: Time;
    public endTime: Time;
    public date: Date;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
     }

}
