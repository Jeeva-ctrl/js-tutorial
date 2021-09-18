/*


Authentication is the process of determining a user's identity. Authorization is the process of determining whether a user has access to a resource. In ASP.NET Core, authentication is handled by the IAuthenticationService, which is used by authentication middleware. 


Authentication schemes are specified by registering authentication services in Startup.ConfigureServices:

By calling a scheme-specific extension method after a call to services.AddAuthentication (such as AddJwtBearer or AddCookie, for example). These extension methods use AuthenticationBuilder.AddScheme to register schemes with appropriate settings.
Less commonly, by calling AuthenticationBuilder.AddScheme directly.


For example, the following code registers authentication services and handlers for cookie and JWT bearer authentication schemes:


services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options => Configuration.Bind("JwtSettings", options))
    .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, options => Configuration.Bind("CookieSettings", options));


services.AddAuthentication(options =>
{
	options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
	options.Authority = "https://{yourOktaDomain}/oauth2/default";
	options.Audience = "api://default";
	options.RequireHttpsMetadata = false;
});

app.UseAuthentication();

[Authorize]
[Route("api/[controller]")]
public class ValuesController : Controller
{
	...
}


Introduction to cookie authentication
Cookie authentication in ASP.NET Core web application is the popular choice for developers to implement authentication in most customer-facing web applications and is also easy to implement in ASP.NET Core as it is provided out of the box without the need to reference any additional NuGet packages.

ASP.NET Core provides a cookie authentication mechanism which on login serializes the user details in form of claims into an encrypted cookie and then sends this cookie back to the server on subsequent requests which gets validated to recreate the user object from claims and sets this user object in the HttpContext so that it is available & is valid only for that request.


await HttpContext.SignInAsync(
                CookieAuthenticationDefaults.AuthenticationScheme,
                new ClaimsPrincipal(claimsIdentity),
                authProperties);




await context.HttpContext.SignOutAsync(
                CookieAuthenticationDefaults.AuthenticationScheme);

                
*/