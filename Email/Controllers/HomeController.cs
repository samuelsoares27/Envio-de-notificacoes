﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Firebase.Database;
using Firebase.Database.Query;
using System.Threading.Tasks;

namespace Email.Controllers
{
    public class HomeController : Controller
    {
        public async Task<ActionResult> Index()
        {

            return View();
           
        }
    }
}