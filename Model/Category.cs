 using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HomeBudget.Model
{
    public class Category
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public string Name { get; set; }




        public override bool Equals(object obj)
        {
            if (obj == null)
                return false;

            if (obj as Category == null)
                return false;

            return Equals(obj as Category);
        }

        public bool Equals(Category c)
        {
            return Id == c.Id;
        }

        public override int GetHashCode()
        {
            return Name.ToList().Sum(c => Convert.ToInt32(c));
        }
    }
}
