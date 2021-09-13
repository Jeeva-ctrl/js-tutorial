/*

Every Angular app consists of a file named angular.json.

This file will contain all the configurations of the app. While building the app, the builder looks at this file to find the entry point of the application

Inside the build section, the main property of the options object defines the entry point of the application which in this case is main.ts.

The main.ts file creates a browser environment for the application to run, and, along with this, it also calls a function called bootstrapModule, which bootstraps the application. 

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule)


==================================================================================================================================================

Each component is declared with three properties:
1. Selector - used for accessing the component
2. Template/TemplateURL - contains HTML of the component
3. StylesURL - contains component-specific stylesheets


==================================================================================================================================================

 What are some of the advantages of Angular over other frameworks?
Features that are provided out of the box - Angular provides a number of built-in features like,routing, state management, rxjs library and http servicesstraight out of the box. This means that one does not need tolook for the above stated features separately. They are allprovided with angular.

Declarative UI - Angular uses HTML to render the UI of an application. HTML isa declarative language and is much easier to use than JavaScript.

Long-term Google support - Google announced Long-term support for Angular. This means that Google plans to stick with Angular and further scale up its ecosystem.


==================================================================================================================================================

 What is AOT compilation? What are the advantages of AOT?
Every Angular application consists of components and templates which the browser cannot understand. Therefore, all the Angular applications need to be compiled first before running inside the browser.

Angular provides two types of compilation:
JIT(Just-in-Time) compilation
AOT(Ahead-of-Time) compilation

In JIT compilation, the application compiles inside the browser during runtime.
Whereas in the AOT compilation, the application compiles during the build time.

The advantages of using AOT compilation are:

Since the application compiles before running inside the browser, the browser loads the executable code and renders the application immediately, which leads to faster rendering.

In AOT compilation, the compiler sends the external HTML and CSS files along with the application, eliminating separate AJAX requests for those source files, which leads to fewer ajax requests.

Developers can detect and handle errors during the building phase, which helps in minimizing errors.

The AOT compiler adds HTML and templates into the JS files before they run inside the browser. Due to this, there are no extra HTML files to be read, which provide better security to the application.

By default, angular builds and serves the application using JIT compiler:

ng build
ng serve

For using AOT compiler following changes should be made:

ng build --aot
ng serve --aot

==================================================================================================================================================
Components

In Angular, components are the basic building blocks, which control a part of the UI for any application.
A component is defined using the @Component decorator. Every component consists of three parts, the template which loads the view for the component, a stylesheet which defines the look and feel for the component, and a class that contains the business logic for the component.
For creating a component, inside the command terminal, navigate to the directory of the application created, and run the following command:

ng generate component test

Or

ng g c test

 import { Component, OnInit } from '@angular/core';

      @Component({
        selector: 'app-test',
        templateUrl: './test.component.html',
        styleUrls: ['./test.component.css']
      })
      export lass TestComponent implements OnInit {

        constructor() {}

        ngOnInit() {
        }
      }

==================================================================================================================================================

Modules

A module is a place where we can group components, directives, services, and pipes. Module decides whether the components, directives, etc can be used by other modules, by exporting or hiding these elements. Every module is defined with a @NgModule decorator.
By default, modules are of two types:

Root Module
Feature Module

Every application can have only one root module whereas, it can have one or more feature modules.

A root module imports BrowserModule, whereas a feature module imports CommonModule.

==================================================================================================================================================
Services 
     Services are objects which get instantiated only once during the lifetime of an application. The main objective of a service is to share data, functions with different components of an Angular application.
A service is defined using a @Injectable decorator. A function defined inside a service can be invoked from any component or directiv

 
      import { Injectable } from '@angular/core';

      @Injectable({
        providedIn: 'root'
      })
      export class TestServiceService {

        constructor() { }

      }

==================================================================================================================================================

What are lifecycle hooks in Angular? Explain a few lifecycle hooks.

Every component in Angular has a lifecycle, different phases it goes through from the time of creation to the time it's destroyed. Angular provides hooks to tap into these phases and trigger changes at specific phases in a lifecycle.

ngOnChanges( ) This hook/method is called before ngOnInit and whenever one or more input properties of the component changes.
This method/hook receives a SimpleChanges object which contains the previous and current values of the property.

ngOnInit( ) This hook gets called once, after the ngOnChanges hook.
It initializes the component and sets the input properties of the component.


ngDoCheck( ) It gets called after ngOnChanges and ngOnInit and is used to detect and act on changes that cannot be detected by Angular.
We can implement our change detection algorithm in this hook. ngAfterContentInit( ) It gets called after the first ngDoCheck hook. This hook responds after the content gets projected inside the component.

ngAfterViewInit( ) It responds after a component's view, or a child component's view is initialized.

ngAfterViewChecked( ) It gets called after ngAfterViewInit, and it responds after the component's view, or the child component's view is checked

gOnDestroy( ) It gets called just before Angular destroys the component. This hook can be used to clean up the code and detach event handlers.

==================================================================================================================================================

8. Explain string interpolation and property binding in Angular.

String interpolation and property binding are parts of data-binding in Angular.

Data-binding is a feature in angular, which provides a way to communicate between the component(Model) and its view(HTML template).
Data-binding can be done in two ways, one-way binding and two-way binding.

In Angular, data from the component can be inserted inside the HTML template. In one-way binding, any changes in the component will directly reflect inside the HTML template but, vice-versa is not possible. Whereas, it is possible in two-way binding.

String interpolation and property binding allow only one-way data binding.

String interpolation uses the double curly braces {{ }} to display data from the component. Angular automatically runs the expression written inside the curly braces, 
for example, {{ 2 + 2 }} will be evaluated by Angular and the output 4, will be displayed inside the HTML template. Using property binding, we can bind the DOM properties of an HTML element to a component's property. Property binding uses the square brackets [ ] syntax.


@Component({
  selector: 'my-app',
  template: `
            <h3>{{ "Using String Interpolation: " + title }}</h3>
            <h3 [textContent]="title"></h3>
            {{title}}
            `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Angular 4';
}



==================================================================================================================================================

10. How are observables different from promises?
The first difference is that an Observable is lazy whereas a Promise is eager.

	Promise- Emits a single value
  Observable 	Emits multiple values over a period of time

Promise -   Not Lazy

Lazy. An observable is not called until we subscribe to the observable


Cannot be cancelled

Can be cancelled by using the unsubscribe() method

 	Observable provides operators like map, forEach, filter, reduce, retry, retryWhen etc.


   Consider the following Observable:
    
      const observable = rxjs.Observable.create(observer => {
        console.log('Text inside an observable');
        observer.next('Hello world!');
        observer.complete();
      });

      console.log('Before subscribing an Observable');

      observable.subscribe((message)=> console.log(message));
    
  
When you run the above Observable, you can see messages being displayed in the following order:

Before subscribing an Observable
Text inside an observable
Hello world!

As you can see, observables are lazy. Observable runs only when someone subscribes to them hence, the message “Before subscribing…” is displayed ahead of the message inside the observable.

The next difference is that Observables can emit multiple values whereas Promises can emit only one value.

The biggest feature of using observables is the use of operators. We can use multiple operators on an observable whereas, there is no such feature in a promise.


==================================================================================================================================================


11. Angular by default, uses client-side rendering for its applications.

Can one make an angular application to render on the server-side?
Yes, angular provides a technology called Angular Universal, which can be used to render applications on the server-side.

The advantages of using Angular Universal are :

First time users can instantly see a view of the application. This benefits in providing better user experience.
Many search engines expect pages in plain HTML, thus, Universal can make sure that your content is available on every search engine, which leads to better SEO.
Any server-side rendered application loads faster since rendered pages are available to the browser sooner.


==================================================================================================================================================

Custom Directive :


ng g directive blueBackground

The following directive will be generated. Manipulate the directive to look like this:

    
      import { Directive, ElementRef } from '@angular/core';

      @Directive({
       selector: '[appBlueBackground]'
      })
      export class BlueBackgroundDirective {
       constructor(el:ElementRef) {
         el.nativeElement.style.backgroundColor = "blue";
       }
      }
    
  
Now we can apply the above directive to any DOM element:

    
      <p appBlueBackground>Hello World!</p>
    

==================================================================================================================================================


==================================================================================================================================================



==================================================================================================================================================



==================================================================================================================================================


==================================================================================================================================================


*/
