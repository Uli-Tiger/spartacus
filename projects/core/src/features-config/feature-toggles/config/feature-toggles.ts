/*
 * SPDX-FileCopyrightText: 2024 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

// Let's NOT add here any wildcard property like
//  `[key: string]: boolean | undefined;`
// We want this interface to be STRICT and cause a compilation error when a removed property is used.
// Thanks to that, customers using a property that was recently removed, will know they have to adapt their code.
export interface FeatureTogglesInterface {
  /**
   * In `QuoteLinksComponent` it shows the download button.
   * API for this button is available in commerce 2211.16 and above
   */
  showDownloadProposalButton?: boolean;

  /**
   * In `ProductSummaryComponent` it shows the promotions info.
   */
  showPromotionsInPDP?: boolean;

  /**
   * In `SearchBoxComponent` it shows the recent searches.
   */
  recentSearches?: boolean;

  /**
   * In `InvoicesListComponent` it sorts invoices by the date of the invoice itself.
   * Previously the sorting was done by the date of creating an invoice entry.
   */
  pdfInvoicesSortByInvoiceDate?: boolean;

  /**
   * In `CardComponent` it truncates the paragraph text
   * (analogically to the existing truncating of the label).
   */
  storeFrontLibCardParagraphTruncated?: boolean;

  /**
   * In `ConfiguratorAttributeDropDownComponent`, `ConfiguratorAttributeSingleSelectionImageComponent`
   * and in 'ConfiguratorAttributeMultiSelectionImageComponent' some HTML changes were done
   * to render read-only attribute with images and a long description at the value level accordingly.
   *
   * In `cx-configurator-price`, `cx-configurator-show-more`,`cx-configurator-attribute-drop-down`,
   * `cx-configurator-attribute-selection-image`, `cx-configurator-attribute-single-selection-bundle-dropdown`,
   * `cx-configurator-attribute-type` and `cx-configurator-form-group` some styling changes were done
   * to render read-only attribute with images and a long description at the value level accordingly.
   */
  productConfiguratorAttributeTypesV2?: boolean;

  /**
   * Adds asterisks to required form fields in all components existing before v2211.20
   */
  a11yRequiredAsterisks?: boolean;

  /**
   * In `QuantityCounterComponent` the numeric input is no longer made focused
   * after an increment/decrement button is clicked.
   */
  a11yQuantityOrderTabbing?: boolean;

  /**
   * Improves keyboard navigation inside of 'NavigationUIComponent'.
   */
  a11yNavigationUiKeyboardControls?: boolean;

  /**
   * Fixes heading gap present in 'OrderConfirmationItemsComponent' template.
   */
  a11yOrderConfirmationHeadingOrder?: boolean;

  /**
   * Improves accessibility of 'StarRatingComponent' i.e.
   * Provides a clear rating value to screen readers.
   * Includes information on whether it is interactive.
   */
  a11yStarRating?: boolean;

  /**
   * 'ViewComponent' will trigger an assistive message after active view changes.
   */
  a11yViewChangeAssistiveMessage?: boolean;

  /**
   * Refocuses inside of 'ReorderDialogComponent' after its content updates.
   */
  a11yReorderDialog?: boolean;

  /**
   * Element containing the 'PopoverDirective' will be refocused after the popover is closed.
   */
  a11yPopoverFocus?: boolean;

  /**
   * Adds Datepicker label and corrects heading order for 'CheckoutScheduleReplenishmentOrderComponent'.
   */
  a11yScheduleReplenishment?: boolean;

  /**
   * When 'ScrollToTopComponent' is trigged with a keyboard, focus remains on the
   * button and preserves the user's context.
   */
  a11yScrollToTop?: boolean;

  /**
   * Fixes 'cx-saved-cart-list-label' dissapering on 200% zoom in 'SavedCartListComponent'.
   */
  a11ySavedCartsZoom?: boolean;

  /**
   * Stops dropdown options labels from truncating inside 'ProductListComponent'.
   */
  a11ySortingOptionsTruncation?: boolean;

  /**
   * Fixes unnecessarily expanded focus indicator in 'ProductListItemComponent' and 'AddToSavedCartComponent'.
   */
  a11yExpandedFocusIndicator?: boolean;

  /**
   * Fixes 'CheckoutDeliveryModeComponent' losing focus after delivery methods update.
   */
  a11yCheckoutDeliveryFocus?: boolean;

  /**
   * Prevents the focus indicator of 'VisibleFocusDirective' from overflowing on mobile/while zoomed.
   */
  a11yMobileVisibleFocus?: boolean;

  /**
   * Improves screen reader readout of 'BannerComponent' on organization page.
   * The anchor tag will no longer contain unnecessary text that would otherwise be read out.
   */
  a11yOrganizationsBanner?: boolean;

  /**
   * Corrects heading order inside 'ListComponent' template.
   */
  a11yOrganizationListHeadingOrder?: boolean;

  /**
   * Changes 'order days' check list into a fieldset inside of 'CheckoutScheduleReplenishmentOrderComponent'.
   */
  a11yReplenishmentOrderFieldset?: boolean;

  /**
   * Corrects oversized focus indicator from list items inside 'ListComponent'.
   */
  a11yListOversizedFocus?: boolean;

  /**
   * Adjuststs the styles of 'StoreFinderMapComponent' to stop the Google map from overflowing on zoomed/mobile screens.
   */
  a11yStoreFinderOverflow?: boolean;

  /**
   * Corrects heading order inside 'OrderSummaryComponent' template.
   */
  a11yCartSummaryHeadingOrder?: boolean;

  /**
   * Improves focus behaviour of 'SearchBoxComponent'.
   * On mobile, search box will no longer open on focus.
   */
  a11ySearchBoxMobileFocus?: boolean;

  /**
   * Modifies 'FacetComponent' to enable keyboard navigation for facets in the product list page.
   */
  a11yFacetKeyboardNavigation?: boolean;

  /**
   * Allows users to navigate through the list of units using the arrow keys.
   * Enables keyboard controls inside 'ToggleLinkCellComponent' and
   * adjusts 'ListComponent' styles to accomodate.
   */
  a11yUnitsListKeyboardControls?: boolean;

  /**
   * When set to `true`, product titles in `CartItemComponent`, `QuickOrderItemComponent`, `WishListItemComponent`
   * adopt a more link-like style, appearing blue with an underline. This enhances visual cues for clickable elements,
   * providing a more intuitive user experience.
   */
  a11yCartItemsLinksStyles?: boolean;

  /**
   * If enabled, the "Select this address/payment" button
   * will not be displayed in `CheckoutPaymentMethodComponent`
   * and `CheckoutDeliveryAddressComponent` when the address
   * or payment method is already selected.
   */
  a11yHideSelectBtnForSelectedAddrOrPayment?: boolean;

  /**
   * Determines whether the controls in the `CarouselComponent` are focusable and accessible from the keyboard.
   */
  a11yFocusableCarouselControls?: boolean;

  /**
   * In `CmsGuardsService`, it uses the `GuardsComposer` instead of
   * calling its own deprecated method `canActivateGuard()`.
   */
  cmsGuardsServiceUseGuardsComposer?: boolean;

  /**
   * In `CartQuickOrderFormComponent` it stops calling the deprecated method
   * `watchAddEntryFailEvent()`, which listens to the `CartAddEntryFailEvent`.
   *
   * It avoids showing an unnecessary duplicated error message on the failure
   * of adding to the cart.
   */
  cartQuickOrderRemoveListeningToFailEvent?: boolean;

  /**
   * Stops the focus indicator from overflowing and being obstructed by other elements.
   * Modifies the 'visible-focus' mixin. Includes style changes for:
   * 'StarRatingComponent', AddToWishListComponent, StarRatingComponent
   */
  a11yVisibleFocusOverflows?: boolean;

  /**
   * When enabled then on mobile(320px) responsive view:
   * 1. `ProductListComponent` - grid view button is aligned correctly
   * 2. `QuickOrderFormComponent` - search combobox options are not truncated
   * 3. `BreadcrumbComponent` - breadcrumb heading is not truncated
   * 4. `CheckoutProgressMobileTopComponent` - checkout step names do not have huge vertical white space
   */
  a11yTruncatedTextForResponsiveView?: boolean;

  /**
   * In `LoginComponent` the outline of "My Account" link when focused will not cover the user name
   */
  a11yMyAccountLinkOutline?: boolean;

  /**
   * When enabled focus outline on the close button inside `ProductImageZoomDialogComponent`
   * will be fully visible
   */
  a11yCloseProductImageBtnFocus?: boolean;
}

export const defaultFeatureToggles: Required<FeatureTogglesInterface> = {
  showDownloadProposalButton: false,
  showPromotionsInPDP: false,
  recentSearches: false,
  pdfInvoicesSortByInvoiceDate: false,
  storeFrontLibCardParagraphTruncated: false,
  productConfiguratorAttributeTypesV2: false,
  a11yRequiredAsterisks: false,
  a11yQuantityOrderTabbing: false,
  a11yNavigationUiKeyboardControls: false,
  a11yOrderConfirmationHeadingOrder: false,
  a11yStarRating: false,
  a11yViewChangeAssistiveMessage: false,
  a11yReorderDialog: false,
  a11yPopoverFocus: false,
  a11yScheduleReplenishment: false,
  a11yScrollToTop: false,
  a11ySavedCartsZoom: false,
  a11ySortingOptionsTruncation: false,
  a11yExpandedFocusIndicator: false,
  a11yCheckoutDeliveryFocus: false,
  a11yMobileVisibleFocus: false,
  a11yOrganizationsBanner: false,
  a11yOrganizationListHeadingOrder: false,
  a11yReplenishmentOrderFieldset: false,
  a11yListOversizedFocus: false,
  a11yStoreFinderOverflow: false,
  a11yCartSummaryHeadingOrder: false,
  a11ySearchBoxMobileFocus: false,
  a11yFacetKeyboardNavigation: false,
  a11yUnitsListKeyboardControls: false,
  a11yCartItemsLinksStyles: false,
  a11yHideSelectBtnForSelectedAddrOrPayment: false,
  a11yFocusableCarouselControls: false,
  cmsGuardsServiceUseGuardsComposer: false,
  cartQuickOrderRemoveListeningToFailEvent: false,
  a11yVisibleFocusOverflows: false,
  a11yTruncatedTextForResponsiveView: false,
  a11yMyAccountLinkOutline: false,
  a11yCloseProductImageBtnFocus: false,
};
