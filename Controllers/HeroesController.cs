using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplicationBasic.Model;

namespace HallOfHeroes.Controllers
{
    [Route("api/[controller]")]
    public class HeroesController : Controller
    {
        private readonly HeroesContext _context;

        public HeroesController(HeroesContext todoContext)
        {
            _context = todoContext;
        }

        [HttpGet]
        public IEnumerable<Hero> GetAll()
        {
            return _context.Heroes.ToList();
        }

        [HttpGet("{id}", Name = "GetHero")]
        public IActionResult GetById(long id)
        {
            var item = _context.Heroes.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Hero hero)
        {
            if (hero == null)
            {
                return BadRequest();
            }

            _context.Heroes.Add(hero);
            _context.SaveChanges();
            return CreatedAtRoute("GetHero", new { id = hero.Id }, hero);
        }

        [HttpPut]
        public IActionResult Update([FromBody]  Hero hero)
        {
            if (hero == null)
            {
                return BadRequest();
            }

            var dbHero = _context.Heroes.Find(hero.Id);
            if (dbHero == null)
            {
                return NotFound();
            }


            dbHero.Name = hero.Name;

            _context.Update(dbHero);
            _context.SaveChanges();
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var dbHero = _context.Heroes.Find(id);
            if (dbHero == null)
            {
                return NotFound();
            }

            _context.Heroes.Remove(dbHero);
            _context.SaveChanges();
            return new NoContentResult();
        }
    }
}