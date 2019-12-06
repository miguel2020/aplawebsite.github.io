import { NgModule } 																from '@angular/core';
import { BrowserModule, DOCUMENT } 													from '@angular/platform-browser';
import { BrowserAnimationsModule } 													from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } 										from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHeaders } 								from '@angular/common/http';
import { MatMenuModule, MatTabsModule, MatDialogModule, MatIconModule } 			from '@angular/material';

import { TranslateModule, TranslateLoader } 										from '@ngx-translate/core';
import { TranslateHttpLoader } 														from '@ngx-translate/http-loader';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } 						from 'ngx-swiper-wrapper';
import { AgmCoreModule } 															from '@agm/core';

import { AppRoutingModule } 														from './app-routing.module';

import { AppComponent } 															from './app.component';

import { HeaderComponent } 															from './header/header.component';
import { FooterComponent } 															from './footer/footer.component';
import { NewsletterComponent } 														from './newsletter/newsletter.component';

import { HomeComponent } 															from './home/home.component';
import { CasesComponent } 															from './cases/main/cases.component';
import { LandRegistryComponent } 													from './cases/land-registry/land-registry.component';
import { SupplyChainComponent } 													from './cases/supply-chain/supply-chain.component';
import { VehicleRegistryComponent } 												from './cases/vehicle-registry/vehicle-registry.component';
import { AboutComponent } 															from './about/about.component';
import { VacanciesComponent } 														from './vacancies/vacancies.component';
import { GovernmentComponent } 														from './government/government.component';
import { BusinessComponent } 														from './business/business.component';

import { LocalSettingsService } 													from './_services/localsettings.service';
import { WINDOW_PROVIDERS } 														from './_services/window.service';
import { LoadingService } 															from "./_services/loading.service";
import { DOMEvents } 																from "./_services/dom-events.service";

export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
	direction: 'horizontal',
	slidesPerView: 'auto'
};

@NgModule({
	exports: [
		MatMenuModule,
		MatTabsModule,
		MatDialogModule,
		MatIconModule
	]
})
export class MaterialModule {}

@NgModule({
	entryComponents: [
		VacanciesComponent
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		NewsletterComponent,
		HomeComponent,
		CasesComponent,
		LandRegistryComponent,
		SupplyChainComponent,
		VehicleRegistryComponent,
		AboutComponent,
		VacanciesComponent,
		GovernmentComponent,
		BusinessComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [HttpClient]
			}
        }),
		SwiperModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyBSoSxKFr6M-iL3RUm-PtHmA2zZTesjNKo'
		}),
	],
	providers: [
		LocalSettingsService,
		WINDOW_PROVIDERS,
		LoadingService,
		DOMEvents,
		{
			provide: SWIPER_CONFIG,
			useValue: DEFAULT_SWIPER_CONFIG
		}
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }