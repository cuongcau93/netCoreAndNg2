using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularProjectDotnetCore.Models
{
    public class ProductRepository : IProductRepository
    {
        public void Add(Products item)
        {
            throw new NotImplementedException();
        }

        public Products Find(long key)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Products> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Update(Products item)
        {
            throw new NotImplementedException();
        }
    }
}
