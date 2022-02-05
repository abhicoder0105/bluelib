import {
  collection,
  field,
  relation,
  shortcuts,
  sharedModel,
  faker,
} from "../utils";

export const StarshipMembers = collection({
  id: "StarshipMembers",
  fields: [
      field.string("firstName"),
      field.string("lastName"), 
      field.boolean("isRecruit"),
      field.integer("yearOfBirth"),
      field.object("emergencyContact", {
        subfields: [
          field.string("name"),
          field.string("relation"),
          field.string("phoneNumber"),
        ]
      })
  ],
  mock:{
    count: 10,
  },
  relations: [],
});
