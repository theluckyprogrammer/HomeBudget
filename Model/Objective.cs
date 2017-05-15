using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HomeBudget.Model
{
    public class Objective
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public string Name { get; set; }

        public Category Category { get; set; }

        public string Description { get; set; }

        public bool IsHistorical { get; set; } = false;

        public override bool Equals(object obj)
        {
            if (obj == null)
                return false;

            if (obj as Objective == null)
                return false;

            return Equals(obj as Objective);
        }

        public bool Equals(Objective o)
        {
            return Id == o.Id;
        }

        public override int GetHashCode()
        {
            return Name.ToList().Sum(c => Convert.ToInt32(c))  + Category.GetHashCode();
        }

    }
}
