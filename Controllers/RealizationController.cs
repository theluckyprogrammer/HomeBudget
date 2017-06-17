using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HomeBudget.Model;
using Microsoft.EntityFrameworkCore;
using HomeBudget.DatabaseContext;

namespace HomeBudget.Controllers
{
    [Route("api/[controller]")]
    public class RealizationController : Controller
    {
        private readonly HomeBudgetContext _context;

        public RealizationController(HomeBudgetContext hbContext)
        {
            _context = hbContext;
        }

        [HttpGet(Name = "GetActualRealizationItem")]
        public IEnumerable<RealizationItem> GetActual()
        {
            return _context.RealizationItems                                  
                .AsNoTracking()
                .ToList();
        }

        [HttpGet("{id}", Name = "GetRealizationItem")]
        public IActionResult GetRealizationItem(long id)
        {
            var item = _context.Objectives.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody]  RealizationItem realizationItem)
        {                         
            _context.Add(realizationItem);                      

            _context.SaveChanges();
            return CreatedAtRoute("GetRealizationItem", new { id = realizationItem.Id }, realizationItem);
        }

        [HttpPut]
        public IActionResult Update([FromBody]  RealizationItem realizationItem)
        {
          if (realizationItem == null)
            {
                return BadRequest();
            }                  
           
            _context.Update(realizationItem);
        
            _context.SaveChanges();
            return CreatedAtRoute("GetRealizationItem", new { id = realizationItem.Id }, realizationItem);
        }       
      
    }
}