/*


Authentication is the process of determining a user's identity. Authorization is the process of determining whether a user has access to a resource. In ASP.NET Core, authentication is handled by the IAuthenticationService, which is used by authentication middleware. 


Authentication schemes are specified by registering authentication services in Startup.ConfigureServices:

By calling a scheme-specific extension method after a call to services.AddAuthentication (such as AddJwtBearer or AddCookie, for example). These extension methods use AuthenticationBuilder.AddScheme to register schemes with appropriate settings.
Less commonly, by calling AuthenticationBuilder.AddScheme directly.


For example, the following code registers authentication services and handlers for cookie and JWT bearer authentication schemes:


services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options => Configuration.Bind("JwtSettings", options))
    .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, options => Configuration.Bind("CookieSettings", options));


public void ConfigureServices(IServiceCollection services)    
{    
    services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)    
    .AddJwtBearer(options =>    
    {    
        options.TokenValidationParameters = new TokenValidationParameters    
        {    
            ValidateIssuer = true,    
            ValidateAudience = true,    
            ValidateLifetime = true,    
            ValidateIssuerSigningKey = true,    
            ValidIssuer = Configuration["Jwt:Issuer"],    
            ValidAudience = Configuration["Jwt:Issuer"],    
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))    
        };    
    });    
    services.AddMvc();    
} 

public void Configure(IApplicationBuilder app, IHostingEnvironment env)    
{    
    app.UseAuthentication();    
    app.UseMvc();    
} 

[Authorize]
[Route("api/[controller]")]
public class ValuesController : Controller
{
	...
}

private string GenerateJSONWebToken(UserModel userInfo)    
        {    
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));    
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);    
    
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],    
              _config["Jwt:Issuer"],    
              null,    
              expires: DateTime.Now.AddMinutes(120),    
              signingCredentials: credentials);    
    
            return new JwtSecurityTokenHandler().WriteToken(token);    
        } 


Introduction to cookie authentication
Cookie authentication in ASP.NET Core web application is the popular choice for developers to implement authentication in most customer-facing web applications and is also easy to implement in ASP.NET Core as it is provided out of the box without the need to reference any additional NuGet packages.

ASP.NET Core provides a cookie authentication mechanism which on login serializes the user details in form of claims into an encrypted cookie and then sends this cookie back to the server on subsequent requests which gets validated to recreate the user object from claims and sets this user object in the HttpContext so that it is available & is valid only for that request.

      [HttpPost]  
    public async Task < IActionResult > Login(LoginModel objLoginModel) {  
        if (ModelState.IsValid) {  
            var user = users.Where(x => x.Username == objLoginModel.UserName && x.Password == objLoginModel.Password).FirstOrDefault();  
            if (user == null) {  
                //Add logic here to display some message to user    
                ViewBag.Message = "Invalid Credential";  
                return View(objLoginModel);  
            } else {  
                //A claim is a statement about a subject by an issuer and    
                //represent attributes of the subject that are useful in the context of authentication and authorization operations.    
                var claims = new List < Claim > () {  
                    new Claim(ClaimTypes.NameIdentifier, Convert.ToString(user.UserId)),  
                        new Claim(ClaimTypes.Name, user.Username),  
                        new Claim(ClaimTypes.Role, user.Role),  
                        new Claim("FavoriteDrink", "Tea")  
                };  
                //Initialize a new instance of the ClaimsIdentity with the claims and authentication scheme    
                var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);  
                //Initialize a new instance of the ClaimsPrincipal with ClaimsIdentity    
                var principal = new ClaimsPrincipal(identity);  
                //SignInAsync is a Extension method for Sign in a principal for the specified scheme.    
                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal, new AuthenticationProperties() {  
                    IsPersistent = objLoginModel.RememberLogin  
                });  
                return LocalRedirect(objLoginModel.ReturnUrl);  
            }  
        }  
        return View(objLoginModel);  
    } 

     public async Task < IActionResult > LogOut() {  
        //SignOutAsync is Extension method for SignOut    
        await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);  
        //Redirect to home page    
        return LocalRedirect("/");  
    }  

                
*/