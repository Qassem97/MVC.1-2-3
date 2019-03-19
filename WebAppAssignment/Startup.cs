using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace WebAppAssignment
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddDistributedMemoryCache();

            services.AddSession(options =>
            {
                //set a short timeout for easy testing
                options.IdleTimeout = TimeSpan.FromMinutes(10);
                options.Cookie.HttpOnly = true;
                //make the session cookie essential
                options.Cookie.IsEssential = true;
            });



            services.AddMvc().AddSessionStateTempDataProvider();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseSession();
            //app.UseMvcWithDefaultRoute();
            app.UseMvc(routes =>
            {


                routes.MapRoute(
                    name: "FeverRule",
                    template: "FeverCheckTemplate",//url
                    defaults: new { controller = "Home", action = "FeverCheck" });// c
                ///////
                routes.MapRoute(
                 name: "Guessing",
                 template: "GuessingGameTemplate",//url
                 defaults: new { controller = "Index", action = "Index" });
                //////////

                routes.MapRoute("default", "{controller=Home}/{action=Index}/{id?}");

            });
        }
    }
}
