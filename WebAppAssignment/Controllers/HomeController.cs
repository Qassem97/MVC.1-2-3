using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAppAssignment.Models;

// For more information on enabling MVC for empty projects,
//visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAppAssignment.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult About()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Contact()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Projects()
        {
            return View();
        }

        [HttpGet]
        public IActionResult FeverCheck()
        {
            return View();
        }

        [HttpPost]
        public IActionResult FeverCheck(string temperature)
        {

            double numTemperature = 0;


            temperature = temperature.Replace('.', ',');

            double.TryParse(temperature, out numTemperature);

            ViewBag.Diagnose = TempIs.FeverCheck(numTemperature);
            return View();
        }
    }
}
