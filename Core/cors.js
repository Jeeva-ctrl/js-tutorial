/*

There are three ways to enable CORS:

In middleware using a named policy or default policy.
Using endpoint routing.
With the [EnableCors] attribute.

Using the [EnableCors] attribute with a named policy provides the finest control in limiting endpoints that support CORS.

CORS Middleware handles cross-origin requests. The following code applies a CORS policy to all the app's endpoints with the specified origins:

  readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

   options.AddPolicy(name: MyAllowSpecificOrigins,
                              builder =>
                              {
                                  builder.WithOrigins("http://example.com",
                                                      "http://www.contoso.com");
                              });
        });

 app.UseCors(MyAllowSpecificOrigins);

=========================================================================================================================
 Endpoint Wise:

  app.UseCors();

  endpoints.MapGet("/echo",
                context => context.Response.WriteAsync("echo"))
                .RequireCors(MyAllowSpecificOrigins);

            endpoints.MapControllers()
                     .RequireCors(MyAllowSpecificOrigins);

 In the preceding code:

app.UseCors enables the CORS middleware. Because a default policy hasn't been configured, app.UseCors() alone doesn't enable CORS.
The /echo and controller endpoints allow cross-origin requests using the specified policy.
The /echo2 and Razor Pages endpoints do not allow cross-origin requests because no default policy was specified.      

=========================================================================================================================

Enable CORS with attributes
[EnableCors("Policy1")]

*/
