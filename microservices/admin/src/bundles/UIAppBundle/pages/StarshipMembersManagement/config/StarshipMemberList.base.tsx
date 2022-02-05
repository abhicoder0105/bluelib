/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  StarshipMember,
  StarshipMembersCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class StarshipMemberList extends XList<StarshipMember> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "firstName",
        title: t("management.starship_members.fields.firstName"),
        key: "management.starship_members.fields.firstName",
        dataIndex: ["firstName"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "lastName",
        title: t("management.starship_members.fields.lastName"),
        key: "management.starship_members.fields.lastName",
        dataIndex: ["lastName"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
    ]);
  }

  static getSortMap() {
    return {};
  }

  static getRequestBody(): QueryBodyType<StarshipMember> {
    return {
      _id: 1,
      firstName: 1,
      lastName: 1,
    };
  }
}
