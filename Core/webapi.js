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
