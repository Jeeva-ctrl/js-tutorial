/*
Global Filters are those that are automatically applied to very action method of every controller

Register it Globally using the MvcOptions.Filters.AddService method.


public void ConfigureServices(IServiceCollection services)
{
    services.AddScoped<TimeElapsed>();
    services.AddMvc().AddMvcOptions(options => {
        options.Filters.AddService(typeof(TimeElapsed));
    });
    services.AddControllersWithViews();
}

public void ConfigureServices(IServiceCollection services)
{
    services.AddMvc().AddMvcOptions(options => {
        options.Filters.Add(new ShowMessage("Global"));
    });
}


using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Text;
 
namespace Filters.CustomFilters
{
    public class ShowMessage : Attribute, IResultFilter
    {
        private string message;
 
        public ShowMessage(string msg)
        {
            message = msg;
        }
 
        public void OnResultExecuting(ResultExecutingContext context)
        {
            WriteMessage(context, message);
        }
        public void OnResultExecuted(ResultExecutedContext context)
        {
        }
 
        private void WriteMessage(FilterContext context, string msg)
        {
            byte[] bytes = Encoding.ASCII.GetBytes($"<div>{msg}</div>");
            context.HttpContext.Response.Body.WriteAsync(bytes, 0, bytes.Length);
        }
    }
}


*/