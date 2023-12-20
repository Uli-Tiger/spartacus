# Creating a new app using Spartacus v2211

## You must run `ng new` with a new flag `--standalone=false`

Since Angular v17, the command for creating a new app (`ng new`) must be run with the flag `--standalone=false`. Otherwise Spartacus installer won't work (`ng add @spartacus/schematics`).

**Why**: Since Angular 17, new applications are created by default using a new so-called "standalone" mode, which has a bit *different structure of files* in the app folder than before. However Spartacus schematics installer still expects the *old files structure* in a created Angular app. That's why the flag  `ng new --standalone=false` is required before running Spartacus installation schematics.

## If you are using SSR, you must remove `provideClientHydration` from `AppModule`.

The `provideClientHydration` feature has to be removed from the freshly created application with SSR enabled. Otherwise, the app might not work properly.

```ts
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule
  ],
  providers: [
    provideClientHydration() // <-------- we have to remove this line
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

**Why**: `provideClientHydration` is the new Angular feature that improves application performance by avoiding extra work to re-create DOM nodes. Since Angular v17 it is enabled by default in fresh applications with SSR. However, Spartacus does not support fully this feature and some unexpected issues might occur.

### Appendix A: How to run SSR dev server

Run in _2 separate windows_ of terminal:
```bash
# Terminal 1:
npm run watch  # builds the app in watch mode. It compiles `server.ts` file as well and produces an output compiled file `dist/my-app-name/server/server.mjs`
```
and
```bash
# Terminal 2:
node --watch dist/my-app-name/server/server.mjs # run the compiled server.mjs in watch mode
```

Note: Please mind to replace `my-app-name` with the real name of your app.

### Appendix B: How to run Prerendering

Run in terminal `ng build` with the explicit flag `--prerender=true` and passing a custom Node Env Variable `SERVER_REQUEST_ORIGIN` which is required by Spartacus Prerendering.

```bash
SERVER_REQUEST_ORIGIN="http://localhost:4200" ng build --prerender=true
```
Note: Please mind to replace `"http://localhost:4200"` with a real target domain where you want to deploy your your Prerendered pages, especially if you deploy for production. Otherwise, some of SEO features of Spartacus might be not work properly, e.g. [Canonical URLs](https://help.sap.com/docs/SAP_COMMERCE_COMPOSABLE_STOREFRONT/eaef8c61b6d9477daf75bff9ac1b7eb4/e712f36722c543359ed699aed9873075.html#loio98befe9ef9ae4957a4ae34669c175fd5) might point to a wrong domain or [Automatic Multi-Site Configuration](https://help.sap.com/docs/SAP_COMMERCE_COMPOSABLE_STOREFRONT/eaef8c61b6d9477daf75bff9ac1b7eb4/9d2e339c2b094e4f99df1c2d7cc999a8.html) might not recognize base-side correctly (e.g. if some regexes configured in CMS for base-site recognition depend on the domain name).