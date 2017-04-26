using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplicationBasic.Model;

namespace HallOfHeroes.Controllers
{
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        private readonly HomeBudgetContext _context;

        public CategoryController(HomeBudgetContext hbContext)
        {
            _context = hbContext;
        }

        [HttpGet]
        public IEnumerable<Category> GetAll()
        {
            return _context.Categories.ToList();
        }

        [HttpGet("{id}", Name = "GetCategory")]
        public IActionResult GetById(long id)
        {
            var item = _context.Categories.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Category category)
        {
            if (category == null)
            {
                return BadRequest();
            }

            _context.Categories.Add(category);
            _context.SaveChanges();
            return CreatedAtRoute("GetCategory", new { id = category.Id }, category);
        }

        [HttpPut]
        public IActionResult Update([FromBody]  Category category)
        {
            if (category == null)
            {
                return BadRequest();
            }

            var dbCategory = _context.Categories.Find(category.Id);
            if (dbCategory == null)
            {
                return NotFound();
            }


            dbCategory.Name = category.Name;

            _context.Update(dbCategory);
            _context.SaveChanges();
            return CreatedAtRoute("GetCategory", new { id = category.Id }, category);
        }       
      
    }
}