import { TestBed, async } from '@angular/core/testing';
import { HomePageComponent } from './home.component';
import { BrowserModule, Title } from "@angular/platform-browser";
import { HttpModule, JsonpModule, Http, ConnectionBackend, RequestOptions } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule, MatRadioModule, MatSelectModule, MatButtonModule } from "@angular/material";
import { HttpService } from "@/services/http.service";

import { ResultsComponent } from "./results/results.component";
import { SearchComponent } from "./search/search.component";

describe('HomePageComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        ResultsComponent,
        SearchComponent
      ],
      imports: [
        BrowserModule,
        HttpModule, JsonpModule,
        FormsModule, ReactiveFormsModule,
        BrowserAnimationsModule,
        MatCardModule, MatRadioModule, MatSelectModule, MatButtonModule
      ],
      providers: [
        HttpService
      ]
    }).compileComponents();
  });
  it('should create HomePageComponent', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have title 'Tour Manager'`, async(() => {
    var userService = TestBed.get(Title);
    expect(userService.getTitle()).toBe("Tour Manager");
  }));
});
