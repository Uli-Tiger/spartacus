import { InjectionToken } from '@angular/core';
import { PaymentType } from '@spartacus/cart/base/root';
import { Converter } from '@spartacus/core';

export const CHECKOUT_PAYMENT_TYPE_NORMALIZER = new InjectionToken<
  Converter<any, PaymentType>
>('CheckoutPaymentTypeNormalizer');