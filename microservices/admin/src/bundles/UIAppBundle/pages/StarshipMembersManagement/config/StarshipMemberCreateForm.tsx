import { Service } from "@bluelibs/core";
import { StarshipMemberCreateForm as BaseStarshipMemberCreateForm } from "./StarshipMemberCreateForm.base";

@Service({ transient: true })
export class StarshipMemberCreateForm extends BaseStarshipMemberCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
