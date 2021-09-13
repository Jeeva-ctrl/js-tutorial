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


==================================================================================================================================================



==================================================================================================================================================



==================================================================================================================================================


==================================================================================================================================================


==================================================================================================================================================



==================================================================================================================================================



==================================================================================================================================================


==================================================================================================================================================


*/
