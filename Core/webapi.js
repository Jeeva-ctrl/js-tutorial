/*
Why is the Web API important?
Web API is generally considered as a service that basically provides us information or data from the server. It is very important because of the following reasons:

It is used to provide an interface for websites and client applications to have access to data.
It can also be used to access data from the database and save data back to the database.
It supports different text formats such as XML, JSON, etc.
It is suitable or compatible with any type of browser and any type of device like mobile, desktop, web, etc.
It uses low bandwidth such as XML or JSON data, etc., and is therefore considered good for devices that have limited bandwidth such as smartphones, etc.
From a business point of view, web API is more applicable for UI/UX, increases interest in the company’s product and services, increases website traffic.

======================================================================================================================================================================


3. What are the main return types supported in Web API?
It does not have any specific data type. It can return data of any type depending upon the business requirement. There are many HTTP methods like GET, POST, PUT, etc., which can return data in different formats depending upon the use case. 

======================================================================================================================================================================

4. What is the difference between Web API and WCF?
WCF (Windows Communication Foundation): It is a framework used for developing SOAP (Service-oriented applications). This framework is used for developing, configuring, and deploying, or implementing network-distributed services. 

Web API: It is an application programming interface for both web browsers and web servers. Browser API simply extends or increases the functionality of web browsers whereas Server API simply extends or increases the functionality of web server.


======================================================================================================================================================================


. What is different between REST API and RESTful API?
REST (Representation State Transfer) API:  It is basically an architectural style that makes productive use of existing technology and protocols of the web. It is a set of rules that developers need to follow when they develop their API or services that are scalable. It is used with HTTP protocol using its verbs such as GET, DELETE, POST, PUT. 
RESTful API: It is simply referred to as web services executing such as architecture. 

======================================================================================================================================================================

What is REST and SOAP? What is different between them?
REST (Representational State Transfer):  It is a new and improved form of web service. It describes the architectural style of networked systems. It does not require greater bandwidth when requests are sent to the server. It just includes JSON message. For example:

{"city":"Mumbai","state":"Maharashtra"}
SOAP (Simple Object Access Protocol): It is a simple and lightweight protocol that is generally used for exchanging structured and typed information on the Web. It works mostly with HTTP and RPC (Remote Procedure Call). This protocol is mainly used for B2B applications one can define a data contract with it. SOAP messages are heavier in content and therefore use greater bandwidth.


======================================================================================================================================================================


What is Web API 2.0?
It is basically an enhanced and modified feature of Web API. This new version supports various new features as given below:

New Routing Attribute
Secure ASP.NET Web API using OAuth 2.0
Support for Cross-Origin requests using CORS
IHttpActionResult return type
Support for $expand, $select in OData Service
Because of all the new features of Web API 2.0, it is considered an optimal choice and suitable development model that makes it easier to develop RESTful services interfaces to different clients running on various platforms. It also supports configuring routes in the Web API method or controller level


======================================================================================================================================================================

10. Explain media type formatters.
In web API, media type formatters are classes that are responsible for serialization data. Here, serialization generally means a process of translating data into a format that can be transmitted and reconstructed later.  Because of serializing request/response data, Web API can understand request data format in a better way and send data in a format that the client expects. It simply specifies data that is being transferred among client and server in HTTP response or request. 

Media Type Formatter Class	MIME Type	Description
JsonMediaTypeFormatter	application/json, text/json	Handles JSON format
XmlMediaTypeFormatter	application/xml, text/json	Handles XML format
FormUrlEncodedMediaTypeFormatter	application/x-www-form-urlencoded	Handles HTM form URL-encoded data
JQueryMvcFormUrlEncodedFormatter	application/x-www-form-urlencoded	Handles model-bound HTML form URL-encoded data
======================================================================================================================================================================

What are Web API filters?
Filters are basically used to add extra logic at different levels of Web API framework request processing.  Different types of Web API filters are available as given below:

Authentication Filter: It handles authentication and authenticates HTTP requests. It also helps to authenticate user detail. It checks the identity of the user.
Authorization Filter: It handles authorization. It runs before controller action. This filter is used to check whether or not a user is authenticated. If the user is not authenticated, then it returns an HTTP status code 401 without invoking the action.
AuthorizeAttribute is a built-in authorization filter provided by Web API.
Action Filter: It is attributing that one can apply to controller action or entire controller. It is used to add extra logic before or after controller action executes. It is simply a way to add extra functionality to Web API services.
Exception Filter: It is used to handle exceptions that are unhandled in Web API. It is used whenever controller actions throw an unhandled exception that is not HttpResponseException. It will implement an “IExceptionFilter” interface.
Override Filter: It is used to exclude specific action methods or controllers from the global filter or controller level filter. It is simply used to modify the behavior of other filters for individual action methods. 


======================================================================================================================================================================
How to handle errors in Web API?
Web API generally provides greater flexibility in terms of handling errors. Exception handling is a technique that is used to handle run-time errors in application code. One can use HttpResponseException, HttpError, Exception filters, register exception filters, Exception handlers to handle errors. Exception filter can be used to identify unhandled exceptions on actions or controllers, exception handlers can be used to identify any type of unhandled exception application-wide, and HttpResponseException can be used when there is the possibility of an exception.

======================================================================================================================================================================

A message handler is a class that receives an HTTP request and returns an HTTP response. Message handlers derive from the abstract HttpMessageHandler class.

Typically, a series of message handlers are chained together. The first handler receives an HTTP request, does some processing, and gives the request to the next handler. At some point, the response is created and goes back up the chain. This pattern is called a delegating handler.


var config = new HttpSelfHostConfiguration("http://localhost");
config.MessageHandlers.Add(new MessageHandler1());
config.MessageHandlers.Add(new MessageHandler2());

public class MethodOverrideHandler : DelegatingHandler      
{
    readonly string[] _methods = { "DELETE", "HEAD", "PUT" };
    const string _header = "X-HTTP-Method-Override";

    protected override Task<HttpResponseMessage> SendAsync(
        HttpRequestMessage request, CancellationToken cancellationToken)
    {
        // Check for HTTP POST with the X-HTTP-Method-Override header.
        if (request.Method == HttpMethod.Post && request.Headers.Contains(_header))
        {
            // Check if the header value is in our methods list.
            var method = request.Headers.GetValues(_header).FirstOrDefault();
            if (_methods.Contains(method, StringComparer.InvariantCultureIgnoreCase))
            {
                // Change the request method.
                request.Method = new HttpMethod(method);
            }
        }
        return base.SendAsync(request, cancellationToken);
    }
}

public class CustomHeaderHandler : DelegatingHandler
{
    async protected override Task<HttpResponseMessage> SendAsync(
            HttpRequestMessage request, CancellationToken cancellationToken)
    {
        HttpResponseMessage response = await base.SendAsync(request, cancellationToken);
        response.Headers.Add("X-Custom-Header", "This is my custom header.");
        return response;
    }
}



======================================================================================================================================================================

How to register an exception filter globally?

One can register exception filter globally using following code:
GlobalConfiguration.Configuration.Filters.Add (new MyTestCustomerStore.NotImplExceptionFilterAttribute()

======================================================================================================================================================================


22. What is the use of HttpResponseMessage?
It is used to set response values such as header and status control. It simply allows us to work with HTTP protocol. It represents HTTP response messages that encapsulate data and status code. 

// GetEmployee action 
public HttpResponseMessage GetEmployee(int id) 
{     
     Employee emp = EmployeeContext.Employees.Where(e => e.Id == id).FirstOrDefault(); 
     if (emp != null) 
      { 
               return Request.CreateResponse<Employee>(HttpStatusCode.OK, emp);     
      }     else     
      { 
               return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Employee Not Found"); 
      } 
}

======================================================================================================================================================================


24. What do you mean by Caching and What are its types?
Caching is basically a technique or process of storing data somewhere or in the cache for future requests. The cache is a temporary storage area. Caching keeps all frequently or recently accessed files or data in the cache memory and accesses them from the cache itself rather than actual address of data or files. The cache interface simply improves the storage mechanism for request/response object pairs that are being cached.

Advantages of Caching:

It is considered the best solution to ensure that data is served where it is needed to be served that too at a high level of efficiency which is best for both client and server.
It delivers web objects faster to the end-user.
It reduces load time on the website server.
It leads to faster execution of any process.
It decreases network costs.
Types of Caching:
There are basically three types of caching as given below:

Page Caching
Data Caching
Fragment Caching

======================================================================================================================================================================

What are the main return types supported in ASP. Net Web API?
It supports the following return types:

HttpResponseMessage
IHttpActionResult
Void
Other types such as string, int, etc. 


======================================================================================================================================================================

What is ASP.NET Web API routing?
Routing is the most important part of ASP.NET Web API. Routing is a way how Web API matches a URI to an action. It is basically a process that decides which action and controller should be called. The controller is basically a class that handles all HTTP requests. All public methods of controllers are basically known as action methods or just actions. Whenever a Web API framework receives any type of request, it routes that request to action. 

There are basically two ways to implement routing in Web API as given below:
Convention-based routing: Web API supports convention-based routing. In this type of routing, Web API uses route templates to select which controller and action method to execute. 

Attribute-based routing: Web API 2 generally supports a new type of routing known as attribute routing. As the name suggests, it uses attributes to define routes. It is the ability to add routes to the route table via attributes.


======================================================================================================================================================================

What are Exception filters in ASP.NET Web API?
Exception filter is generally used to handle all unhandled exceptions that are generated in web API. It implements IExceptionFilters interface. It is the easiest and most flexible to implement. This filter is executed whenever the controller method throws any unhandled exception at any stage that is not an HttpResponseExecption exception. 


======================================================================================================================================================================
 What is HttpConfiguration in Web API?
It is considered as the main class that includes different properties with help of which one can override the default behavior of Web API. 

Some properties are given below:

DependencyResolver: It sets or gets a dependency resolver for dependency injection.
Services: It gets web API services.
ParameterBindingRules: It gets a collection of rules for how parameters should be bound.
MessageHandlers:  It sets or gets message handlers.
Formatters: It sets or gets media-type formatters
======================================================================================================================================================================

HttpResponseException
What happens if a Web API controller throws an uncaught exception? By default, most exceptions are translated into an HTTP response with status code 500, Internal Server Error.

The HttpResponseException type is a special case. This exception returns any HTTP status code that you specify in the exception constructor. For example, the following method returns 404, Not Found, if the id parameter is not valid.

if (item == null)
    {
        throw new HttpResponseException(HttpStatusCode.NotFound);
    }

======================================================================================================================================================================


Exception Filters
You can customize how Web API handles exceptions by writing an exception filter. An exception filter is executed when a controller method throws any unhandled exception that is not an HttpResponseException exception. The HttpResponseException type is a special case, because it is designed specifically for returning an HTTP response.

Exception filters implement the System.Web.Http.Filters.IExceptionFilter interface. The simplest way to write an exception filter is to derive from the System.Web.Http.Filters.ExceptionFilterAttribute class and override the OnException method.

public class NotImplExceptionFilterAttribute : ExceptionFilterAttribute 
    {
        public override void OnException(HttpActionExecutedContext context)
        {
            if (context.Exception is NotImplementedException)
            {
                context.Response = new HttpResponseMessage(HttpStatusCode.NotImplemented);
            }
        }
    }

  GlobalConfiguration.Configuration.Filters.Add(
    new ProductStore.NotImplExceptionFilterAttribute());
    
    
======================================================================================================================================================================




======================================================================================================================================================================




======================================================================================================================================================================





======================================================================================================================================================================




======================================================================================================================================================================




======================================================================================================================================================================


======================================================================================================================================================================



======================================================================================================================================================================




======================================================================================================================================================================




======================================================================================================================================================================




======================================================================================================================================================================





======================================================================================================================================================================




======================================================================================================================================================================




======================================================================================================================================================================


*/
