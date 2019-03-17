using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAppAssignment.Models;
namespace WebAppAssignment.Controllers
{
    public class GuessingController : Controller
    {
        private Random randNumGenerator;

        public GuessingController ()
        {
            randNumGenerator = new Random();
            
        
        }

        
        public IActionResult Index()
        {
            int answer = randNumGenerator.Next(1, 100);

            HttpContext.Session.SetInt32("answer", answer);
            ViewBag.test = HttpContext.Session.GetInt32("answer");
            return View();
        }

        [HttpPost]
        public IActionResult Index(string guess)
        {
            var answer = (int)HttpContext.Session.GetInt32("answer");

            if (int.Parse(guess) > answer)
            {
                ViewBag.message = "Too high, try with a lower number!";
            }
            else if (int.Parse(guess) < answer)
            {
                ViewBag.message = "Too low, try with a higher number!";
            }
            else
            {
                ViewBag.message = "A winner, well done! ";
                //play again?
                //return RedirectToAction("Index");
            }
            return View();
        }
    }
}