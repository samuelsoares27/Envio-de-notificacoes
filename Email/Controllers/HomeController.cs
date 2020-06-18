using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Firebase.Database;
using Firebase.Database.Query;
using System.Threading.Tasks;
using Email.Models;

namespace Email.Controllers
{
    public class HomeController : Controller
    {
        public async Task<ActionResult> Index()
        {
            string texto = "ola";
            return View();
           
        }
    }
}