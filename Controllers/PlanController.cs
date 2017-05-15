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
    public class PlanController : Controller
    {
        private readonly HomeBudgetContext _context;

        public PlanController(HomeBudgetContext hbContext)
        {
            _context = hbContext;
        }

        [HttpGet(Name = "GetActual")]
        public IEnumerable<Objective> GetActual()
        {
            return _context.Objectives
                .Include(o => o.Category)                                       
                .Where(c => !c.IsHistorical)                     
                .AsNoTracking()
                .ToList();
        }

        [HttpGet("{id}", Name = "GetObjective")]
        public IActionResult GetObjective(long id)
        {
            var item = _context.Objectives.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Objective objective)
        {
            if (objective == null)
            {
                return BadRequest();
            }

            _context.Add(objective);
            _context.SaveChanges();
            return CreatedAtRoute("GetObjective", new { id = objective.Id }, objective);
        }

        [HttpPut]
        public IActionResult Update([FromBody]  Objective objective)
        {
            if (objective == null)
            {
                return BadRequest();
            }

          
            if (!_context.Objectives.Contains(objective))
            {
                return NotFound();
            }

            _context.Entry(objective.Category).State = _context.Categories.Contains(objective.Category) ? EntityState.Modified : EntityState.Added ;
            _context.Update(objective);
        
            _context.SaveChanges();
            return CreatedAtRoute("GetObjective", new { id = objective.Id }, objective);
        }       
      
    }
}