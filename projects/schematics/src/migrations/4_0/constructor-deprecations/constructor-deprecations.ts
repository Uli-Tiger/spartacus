import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { ConstructorDeprecation } from '../../../shared/utils/file-utils';
import { migrateConstructorDeprecation } from '../../mechanism/constructor-deprecations/constructor-deprecations';
import {
  ADD_TO_SAVED_CART_COMPONENT_MIGRATION_V1,
  ADD_TO_SAVED_CART_COMPONENT_MIGRATION_V2,
} from './data/add-to-saved-cart.component.migration';
import {
  ANONYMOUS_CONSENT_MANAGEMENT_BANNER_COMPONENT_MIGRATION_V1,
  ANONYMOUS_CONSENT_MANAGEMENT_BANNER_COMPONENT_MIGRATION_V2,
} from './data/anonymous-consent-management-banner.component.migration';
import {
  ANONYMOUS_CONSENT_OPEN_DIALOG_COMPONENT_MIGRATION_V1,
  ANONYMOUS_CONSENT_OPEN_DIALOG_COMPONENT_MIGRATION_V2,
} from './data/anonymous-consent-open-dialog.component.migration';
import { BASE_PAGE_META_RESOLVER_MIGRATION } from './data/base-page-meta.resolver.migration';
import { CART_ITEM_COMPONENT_MIGRATION } from './data/cart-item.component.migration';
import {
  CART_LIST_ITEM_COMPONENT_MIGRATION_V1,
  CART_LIST_ITEM_COMPONENT_MIGRATION_V2,
  CART_LIST_ITEM_COMPONENT_MIGRATION_V3,
} from './data/cart-list-item.component.migration';
import {
  CART_PAGE_EVENT_BUILDER_COMPONENT_MIGRATION_V1,
  CART_PAGE_EVENT_BUILDER_COMPONENT_MIGRATION_V2,
} from './data/cart-page-event.builder.migration';
import { CATEGORY_PAGE_META_RESOLVER_MIGRATION } from './data/category-page-meta.resolver.migration';
import { CHECKOUT_PAGE_META_RESOLVER_MIGRATION } from './data/checkout-page-meta.resolver.migration';
import {
  CMS_COMPONENTS_SERVICE_MIGRATION_1,
  CMS_COMPONENTS_SERVICE_MIGRATION_2,
  CMS_COMPONENTS_SERVICE_MIGRATION_3,
} from './data/cms-components.service.migration';
import { COMPONENT_WRAPPER_CONSTRUCTOR_MIGRATION } from './data/component-wrapper.directive.migration';
import { CONFIGURATOR_ATTRIBUTE_CHECKBOX_LIST_COMPONENT_MIGRATION } from './data/configurator-attribute-checkbox-list.component.migration';
import { CONFIGURATOR_ATTRIBUTE_DROP_DOWN_COMPONENT_MIGRATION } from './data/configurator-attribute-drop-down.component.migration';
import { CONFIGURATOR_ATTRIBUTE_RADIO_BUTTON_COMPONENT_MIGRATION } from './data/configurator-attribute-radio-button.component.migration';
import { CONFIGURATOR_CART_ENTRY_INFO_COMPONENT_MIGRATION } from './data/configurator-cart-entry-info.component.migration';
import { CONFIGURATOR_ISSUES_NOTIFICATION_COMPONENT_MIGRATION } from './data/configurator-issues-notification.component.migration';
import { CONFIGURATOR_STOREFRONT_UTILS_SERVICE_MIGRATION } from './data/configurator-storefront-utils.service.migration';
import {
  CONTENT_PAGE_META_RESOLVER_MIGRATION_V1,
  CONTENT_PAGE_META_RESOLVER_MIGRATION_V2,
} from './data/content-page-meta.resolver.migration';
import { CURRENCY_SERVICE_MIGRATION } from './data/currency.service.migration';
import { DELETE_ITEM_COMPONENT_MIGRATION } from './data/delete-item.component.migration';
import { DYNAMIC_ATTRIBUTE_SERVICE_MIGRATION } from './data/dynamic-attribute.service.migration';
import { EVENT_SERVICE_CONSTRUCTOR_DEPRECATION } from './data/event.service.migration';
import { HOME_PAGE_EVENT_BUILDER_COMPONENT_MIGRATION } from './data/home-page-event.builder.migration';
import { LANGUAGE_SERVICE_MIGRATION } from './data/language.service.migration';
import { LOGOUT_GUARD_CONSTRUCTOR_MIGRATION } from './data/logout.guard.migration';
import { ORGANIZATION_PAGE_META_RESOLVER_MIGRATION } from './data/organization-page-meta.resolver.migration';
import { PAGE_META_SERVICE_MIGRATION } from './data/page-meta.service.migration';
import { PRODUCT_GRID_ITEM_COMPONENT_MIGRATION } from './data/product-grid-item.component.migration';
import { PRODUCT_LIST_ITEM_COMPONENT_MIGRATION } from './data/product-list-item.component.migration';
import { PRODUCT_PAGE_EVENT_BUILDER_COMPONENT_MIGRATION } from './data/product-page-event.builder.migration';
import {
  PRODUCT_PAGE_META_RESOLVER_MIGRATION_V1,
  PRODUCT_PAGE_META_RESOLVER_MIGRATION_V2,
} from './data/product-page-meta.resolver.migration';
import {
  REPLENISHMENT_ORDER_CANCELLATION_COMPONENT_MIGRATION_V1,
  REPLENISHMENT_ORDER_CANCELLATION_COMPONENT_MIGRATION_V2,
} from './data/replenishment-order-cancellation.component.migration';
import {
  REPLENISHMENT_ORDER_HISTORY_COMPONENT_MIGRATION_V1,
  REPLENISHMENT_ORDER_HISTORY_COMPONENT_MIGRATION_V2,
} from './data/replenishment-order-history.component.migration';
import { ROUTING_SERVICE_MIGRATION } from './data/routing.service.migration';
import {
  SAVED_CART_DETAILS_ACTION_COMPONENT_MIGRATION_V1,
  SAVED_CART_DETAILS_ACTION_COMPONENT_MIGRATION_V2,
} from './data/saved-cart-details-action.component.migration';
import {
  SAVED_CART_DETAILS_OVERVIEW_COMPONENT_MIGRATION_V1,
  SAVED_CART_DETAILS_OVERVIEW_COMPONENT_MIGRATION_V2,
} from './data/saved-cart-details-overview.component.migration';
import { SEARCH_BOX_COMPONENT_SERVICE_MIGRATION } from './data/search-box-component.service.migration';
import { SEARCH_BOX_COMPONENT_MIGRATION } from './data/search-box.component.migration';
import { SEARCH_PAGE_META_RESOLVER_MIGRATION } from './data/search-page-meta.resolver.migration';
import {
  TOGGLE_STATUS_COMPONENT_MIGRATION_V1,
  TOGGLE_STATUS_COMPONENT_MIGRATION_V2,
} from './data/toggle-status.component.migration';
import { UNIT_CHILDREN_COMPONENT_MIGRATION } from './data/unit-children.component.migration';
import { UNIT_COST_CENTERS_COMPONENT_MIGRATION } from './data/unit-cost-centers.component.migration';
import { UNIT_USER_LIST_COMPONENT_MIGRATION } from './data/unit-user-list.component.migration';
import { USER_GROUP_USER_LIST_COMPONENT_MIGRATION } from './data/user-group-user-list.component.migration';
import { WINDOW_REF_MIGRATION } from './data/window-ref.migration';

export const CONSTRUCTOR_DEPRECATION_DATA: ConstructorDeprecation[] = [
  UNIT_CHILDREN_COMPONENT_MIGRATION,
  UNIT_COST_CENTERS_COMPONENT_MIGRATION,
  UNIT_USER_LIST_COMPONENT_MIGRATION,
  CART_PAGE_EVENT_BUILDER_COMPONENT_MIGRATION_V1,
  CART_PAGE_EVENT_BUILDER_COMPONENT_MIGRATION_V2,
  HOME_PAGE_EVENT_BUILDER_COMPONENT_MIGRATION,
  EVENT_SERVICE_CONSTRUCTOR_DEPRECATION,
  PRODUCT_PAGE_EVENT_BUILDER_COMPONENT_MIGRATION,
  SEARCH_BOX_COMPONENT_SERVICE_MIGRATION,
  CURRENCY_SERVICE_MIGRATION,
  LANGUAGE_SERVICE_MIGRATION,
  PAGE_META_SERVICE_MIGRATION,
  BASE_PAGE_META_RESOLVER_MIGRATION,
  CONTENT_PAGE_META_RESOLVER_MIGRATION_V1,
  CONTENT_PAGE_META_RESOLVER_MIGRATION_V2,
  PRODUCT_PAGE_META_RESOLVER_MIGRATION_V1,
  PRODUCT_PAGE_META_RESOLVER_MIGRATION_V2,
  SEARCH_PAGE_META_RESOLVER_MIGRATION,
  CHECKOUT_PAGE_META_RESOLVER_MIGRATION,
  CATEGORY_PAGE_META_RESOLVER_MIGRATION,
  ORGANIZATION_PAGE_META_RESOLVER_MIGRATION,
  ROUTING_SERVICE_MIGRATION,
  COMPONENT_WRAPPER_CONSTRUCTOR_MIGRATION,
  ADD_TO_SAVED_CART_COMPONENT_MIGRATION_V1,
  ADD_TO_SAVED_CART_COMPONENT_MIGRATION_V2,
  ANONYMOUS_CONSENT_MANAGEMENT_BANNER_COMPONENT_MIGRATION_V1,
  ANONYMOUS_CONSENT_MANAGEMENT_BANNER_COMPONENT_MIGRATION_V2,
  ANONYMOUS_CONSENT_OPEN_DIALOG_COMPONENT_MIGRATION_V1,
  ANONYMOUS_CONSENT_OPEN_DIALOG_COMPONENT_MIGRATION_V2,
  REPLENISHMENT_ORDER_CANCELLATION_COMPONENT_MIGRATION_V1,
  REPLENISHMENT_ORDER_CANCELLATION_COMPONENT_MIGRATION_V2,
  REPLENISHMENT_ORDER_HISTORY_COMPONENT_MIGRATION_V1,
  REPLENISHMENT_ORDER_HISTORY_COMPONENT_MIGRATION_V2,
  SAVED_CART_DETAILS_ACTION_COMPONENT_MIGRATION_V1,
  SAVED_CART_DETAILS_ACTION_COMPONENT_MIGRATION_V2,
  SAVED_CART_DETAILS_OVERVIEW_COMPONENT_MIGRATION_V1,
  SAVED_CART_DETAILS_OVERVIEW_COMPONENT_MIGRATION_V2,
  DYNAMIC_ATTRIBUTE_SERVICE_MIGRATION,
  WINDOW_REF_MIGRATION,
  CONFIGURATOR_CART_ENTRY_INFO_COMPONENT_MIGRATION,
  CONFIGURATOR_ATTRIBUTE_CHECKBOX_LIST_COMPONENT_MIGRATION,
  CONFIGURATOR_ATTRIBUTE_DROP_DOWN_COMPONENT_MIGRATION,
  CONFIGURATOR_ATTRIBUTE_RADIO_BUTTON_COMPONENT_MIGRATION,
  CONFIGURATOR_STOREFRONT_UTILS_SERVICE_MIGRATION,
  CART_LIST_ITEM_COMPONENT_MIGRATION_V1,
  CART_LIST_ITEM_COMPONENT_MIGRATION_V2,
  CART_LIST_ITEM_COMPONENT_MIGRATION_V3,
  SEARCH_BOX_COMPONENT_MIGRATION,
  USER_GROUP_USER_LIST_COMPONENT_MIGRATION,
  TOGGLE_STATUS_COMPONENT_MIGRATION_V1,
  TOGGLE_STATUS_COMPONENT_MIGRATION_V2,
  DELETE_ITEM_COMPONENT_MIGRATION,
  CMS_COMPONENTS_SERVICE_MIGRATION_1,
  CMS_COMPONENTS_SERVICE_MIGRATION_2,
  CMS_COMPONENTS_SERVICE_MIGRATION_3,
  PRODUCT_LIST_ITEM_COMPONENT_MIGRATION,
  PRODUCT_GRID_ITEM_COMPONENT_MIGRATION,
  CART_ITEM_COMPONENT_MIGRATION,
  CONFIGURATOR_CART_ENTRY_INFO_COMPONENT_MIGRATION,
  CONFIGURATOR_ISSUES_NOTIFICATION_COMPONENT_MIGRATION,
  LOGOUT_GUARD_CONSTRUCTOR_MIGRATION,
];

export function migrate(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    return migrateConstructorDeprecation(
      tree,
      context,
      CONSTRUCTOR_DEPRECATION_DATA
    );
  };
}
