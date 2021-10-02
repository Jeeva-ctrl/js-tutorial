/*

There are two types of cache namely, local cache and distributed cache.

Azure provides a local cache mechanism using In-Role Cache, in .NET Core IMemoryCache to implementing local caching.

public void ConfigureServices(IServiceCollection services)
{
    services.AddLogging();
    services.AddMemoryCache();
    services.AddMvc();
}

  private readonly IMemoryCache _cache;

   var value = _cache.Get<string>("TestKey");
=============================================================================================================================================================

IMemoryCache requires NuGet package Microsoft.Extensions.Caching.Memory, which is available in the Microsoft.AspNetCore.App metapackage.

Some problems that will be found with this simple implementation of caching.

Cache can take a lot of memory, that could ruling to out of memory exception and crashes. ໒( •́ ∧ •̀ )७

High memory consumption.
Cache might need to be refreshed.
=============================================================================================================================================================

Distributed Caching

Is a cache shared by multiple app servers, typically maintained as an external service to the app server that access it. Shared cache(also known as distributed cache) is used for data which is dynamic in nature and changes a lot.


=============================================================================================================================================================

ConnectionMultiplexer connection =
ConnectionMultiplexer.Connect(
"myrediscache.redis.cache.windows.net:6380,
password=VOBP7q7Msw8bSy6+u0=,ssl=True,abortConnect=False");


IDatabase cache= connection.GetDatabase();
// Values can be set or retrieved through the Set and Get methods from the cache object created earlier

cache.StringSet("UserName", "John");
cache.StringGet("UserName");

//.NET objects can also be set to the cache

cache.StringSet("PersonObject",
JsonConvert.SerializeObject(personObj);


=============================================================================================================================================================



=============================================================================================================================================================



=============================================================================================================================================================



=============================================================================================================================================================


=============================================================================================================================================================



=============================================================================================================================================================
*/

