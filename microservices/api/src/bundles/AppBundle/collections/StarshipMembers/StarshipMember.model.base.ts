/** @overridable */
import { ObjectId } from "@bluelibs/ejson";
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class StarshipMember {
  @Is(an.objectId())
  _id?: ObjectId;

  @Is(a.string().required())
  firstName: string;

  @Is(a.string().required())
  lastName: string;
}
