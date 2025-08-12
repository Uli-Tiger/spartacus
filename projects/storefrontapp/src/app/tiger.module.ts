/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { NgModule } from '@angular/core';
import { provideConfig, provideDefaultConfig } from '@spartacus/core';
import { ConfiguratorCoreConfig } from '@spartacus/product-configurator/rulebased';
@NgModule({
  providers: [
    provideConfig(<ConfiguratorCoreConfig>{
      productConfigurator: {
        enableVariantSearch: true,
      },
    }),
    provideDefaultConfig({ routing: { protected: false } }),
  ],
})
export class TigerModule {}
