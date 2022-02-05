/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";

import {
  StarshipMember,
  StarshipMembersCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class StarshipMemberCreateForm extends XForm {
  @Inject(() => StarshipMembersCollection)
  collection: StarshipMembersCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "firstName",
        label: t("management.starship_members.fields.firstName"),
        name: ["firstName"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "lastName",
        label: t("management.starship_members.fields.lastName"),
        name: ["lastName"],
        required: true,
        component: Ant.Input,
      },
    ]);
  }

  onSubmit(document: Partial<StarshipMember>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.starship_members.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.STARSHIP_MEMBERS_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.STARSHIP_MEMBERS_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.STARSHIP_MEMBERS_EDIT, {
            params: {
              id: _id,
            },
          });
        }
      })
      .catch((err) => {
        Ant.notification.warn({
          message: t("generics.error"),
          description: t("generics.error_message"),
        });
      });
  }
}
