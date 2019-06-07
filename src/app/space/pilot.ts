import { PilotAttrs } from './pilot-attrs';

export class Pilot {
  static defaultImageUrl = '/assets/unknown-pilot.gif';

  firstName: string;
  lastName: string;
  imageUrl: string;
  id: number;

  // constructor(fullName: string, imageUrl = Pilot.defaultImageUrl) {
  //   this.fullName = fullName;
  //   this.imageUrl = imageUrl;
  // }

  constructor(attrs: Partial<PilotAttrs> = {}) {
    this.id = attrs.id;
    this.firstName = attrs.firstName;
    this.lastName = attrs.lastName;
    this.imageUrl = attrs.imageUrl || Pilot.defaultImageUrl;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value: string) {
    const values = value.split(' ');
    this.firstName = values[0];
    this.lastName = values[1];
  }
}
