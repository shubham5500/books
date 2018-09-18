import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './routing/routing.module';
import { SearchService } from './components/search.service';
import { PublicModule } from './components/public.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoaderComponent } from './shared/loader/loader.component';
import { SharedService } from './shared/shared.service';
import { BookDetailService } from './components/book-detail/book-detail.service';
import { AuthenticationService } from './auth/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmbededViewComponent } from './components/embeded-view/embeded-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    EmbededViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    FormsModule,
    PublicModule,
    NgProgressModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [SearchService,
              SharedService,
              BookDetailService, 
              AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
